/* jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import styles
import 'weui';
import 'react-weui/build/dist/react-weui.css';

import {
    TabBarItem,
    Article,
    Button ,
    Page,
    ButtonArea,
    ActionSheet,
    Preview,
    PreviewHeader,
    PreviewFooter,
    PreviewBody,
    PreviewItem,
    PreviewButton,
    Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Dialog,
    Flex,
    FlexItem,
    Footer,
    FooterText,
    FooterLinks,
    FooterLink,
    TabBody,
    NavBar,
    NavBarItem,
    TabBodyItem,
    Gallery,
    Form,
    FormCell,
    TextArea,

} from 'react-weui';

import { Tabs, WhiteSpace, Card , ImagePicker} from 'antd-mobile';
import axios from 'axios';
import BasePage from '../BasePage';
import TimeLineEvents from '../../Components/TimeLineEvents';

class AppealDetail extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            gallery: false,
            demoFiles: [
                {
                    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
                    id: '2121',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                    id: '2122',
                }],
            confirmButtonEnable:false,
            followed:false,
            appealData:undefined,
            canIFollow:false,
            events:undefined,
        }



    }

    componentDidMount() {
        this.hideLoading();
        this._requestDetail();
    }

    render() {
        return this._renderLoginContent();
    }


    _renderLoginContent() {
        const tabs = [
            { title: '诉求信息' },
            { title: '进度信息' },
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onTabClick={(tabData, index) => {
                        if (index == 0) {
                            this._requestDetail();
                        } else if (index == 1) {
                            this._requestFollowerList();
                        }

                }}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render1stTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render2ndTabContent()}
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }

    _render1stTabContent() {

        if (this.state.appealData) {
            let {userName,userPhone,userAvatar,userPos,appealType,appealSummary,appealDetail,attachments} = this.state.appealData;
            return (
                <div>
                    <Card full>
                        <Card.Header
                            title={userName}
                            thumb={userAvatar}
                            extra={<span>{userPos}</span>}
                            thumbStyle={{
                                height: 30,
                                width: 30,
                            }}
                        />
                        <Card.Body>
                            <div>
                                <PreviewItem label="联系电话" value={userPhone} />
                                <PreviewItem label="诉求类别" value={appealType} />
                                <PreviewItem label="诉求概述" value={appealSummary} />
                                <h2>诉求详情</h2>
                                <p>{appealDetail}</p>
                            </div>
                        </Card.Body>
                        <Card.Footer content="" extra={
                            <div>
                            </div>
                        } />
                    </Card>
                    <ButtonArea>
                        <Button disabled={this.state.followed} onClick={()=>{
                                this._requestWant();
                        }}>
                            我来跟踪
                        </Button>
                    </ButtonArea>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    _renderGirdCard() {
        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };

        return (
            <Card title="图片">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }

    _render2ndTabContent() {
        return (
            <div>
                {this.state.events && this.state.events.length > 0 ? <TimeLineEvents
                    headerTitle={'处理进度'}
                    events={this.state.events}
                /> : <div>暂无处理进度</div>}
                {this.state.followed ? (this.state.canIFollow ? this._renderHandleInput() : <div style={{color:'green'}}>诉求已完结</div>) : (<div style={{color:'red'}}>诉求未被跟踪，请先跟踪诉求</div>)}
            </div>


        );
    }

    _renderHandleInput() {
        return (
            <div>
                <CellsTitle>处理意见</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <TextArea
                                placeholder="请输入处理意见（100字内）" rows="3" maxLength={200}
                                onChange={e=>{
                                    this.comments = e.target.value;
                                    if(e.target.value.length > 0) {
                                        this.setState({
                                            confirmButtonEnable:true,
                                        });
                                    } else {
                                        this.setState({
                                            confirmButtonEnable:false,
                                        });
                                    }
                                }}
                            />
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea direction="horizontal">
                    <Button type="warn" disabled={!this.state.confirmButtonEnable} onClick={e=>{
                            this._requestFinishAppeal();
                    }}>
                        完结诉求
                    </Button>
                    <Button
                        disabled={!this.state.confirmButtonEnable}
                        onClick={e=>{
                            this._requestUpdateFollowList();
                        }}
                    >
                        更新进度
                    </Button>
                </ButtonArea>
            </div>
        );
    }



//请求诉求详情
    _requestDetail() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        console.log('_appealId:' + _appealId + ' _userId:' + _userId);
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + _userId +'/fetch';
        axios.post(url,{
            appealId:_appealId,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data) {
                let _appealData = {
                    userName:response.data.data.user.wxcpName || '未知',
                    userPhone:response.data.data.user.wxcpPhone || '未知',
                    userAvatar:response.data.data.user.wxcpAvatar || '',
                    userPos:response.data.data.user.wxcpPost || '未知',
                    appealType:response.data.data.type.remark || '未知',
                    appealSummary:response.data.data.summary || '未知',
                    appealDetail:response.data.data.detail || '未知',
                    attachments:response.data.data.attachments || [],
                };
                let followed = response.data.data.keeper.valid && response.data.data.status !== 'PENDING';
                let canIFollow = (response.data.data.status === 'DEALING') && (response.data.data.keeper.id === _userId)
                this.setState({
                    appealData:_appealData,
                    followed:followed,
                    canIFollow:canIFollow,
                });


            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

//我来跟进请求
    _requestWant() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        console.log('_appealId:' + _appealId + ' _userId:' + _userId);
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + _userId +'/want';
        axios.post(url,{
            appealId:_appealId,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0) {
                this.showSuccessToast('跟踪成功');
                this.setState({
                    followed:true,
                    canIFollow:true,
                });
            } else {
                this.showFailTost(response.data.errms);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

    //请求处理进度列表
    _requestFollowerList() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        console.log('_appealId:' + _appealId + ' _userId:' + _userId);
        let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + _userId +'/listFollowUp';
        axios.post(url,{
            appealId:_appealId,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data) {
                let _events = response.data.data.map(event=>{
                    return (
                        {
                            title:event.keeper.wxcpName,
                            avatarUrl:event.keeper.wxcpAvatar,
                            createdAt:event.createTime,
                            contentStr:event.comments,
                        }
                    );
                });
                this.setState({
                    events:_events,
                });
            } else {
                this.showFailTost(response.data.errms);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

    //更新进度信息
    _requestUpdateFollowList() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        console.log('_appealId:' + _appealId + ' _userId:' + _userId);
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + _userId +'/follow';
        axios.post(url,{
            appealId:_appealId,
            comments:this.comments,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0) {
                this.showSuccessToast('更新成功!');
                this._requestFollowerList();

            } else {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

    //诉求完结请求
    _requestFinishAppeal() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        console.log('_appealId:' + _appealId + ' _userId:' + _userId);
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + _userId +'/finish';
        axios.post(url,{
            appealId:_appealId,
            comments:this.comments,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0) {
                this.showSuccessToast('诉求处理结束!');
                this.setState({
                    canIFollow:false,
                });
                this._requestFollowerList();

            } else {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

}

export default AppealDetail
