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
            appealData:undefined,
            appealKeeper:undefined,
        }



    }

    componentDidMount() {
        this._requestAppealDetail();
    }


    _renderLoginContent() {
        document.title = '诉求详情';
        const tabs = [
            { title: '诉求信息' },
            { title: '进度信息' },
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onTabClick={(tabData, index) => {
                        if (index == 0) {
                            this._requestAppealDetail();
                        } else if (index == 1) {
                            this._requestAppealKeeperData();
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

        if (this.state.appealData === undefined) {
            return (
                <div></div>
            );
        } else {
            return (
                    <Card>
                        <Card.Header
                            title={this.state.appealData.userName}
                            thumb={this.state.appealData.userAvatar}
                            extra={<span>{this.state.appealData.userPos}</span>}
                        />
                        <Card.Body>
                            <div>
                                <PreviewItem label="联系电话" value={this.state.appealData.userPhone} />
                                <PreviewItem label="诉求类别" value={this.state.appealData.appealType} />
                                <PreviewItem label="诉求概述" value={this.state.appealData.appealSummary} />
                                <h2>诉求详情</h2>
                                <p>{this.state.appealData.appealDetail}</p>
                            </div>
                        </Card.Body>
                        <Card.Footer content="" extra={
                            <div>
                            </div>
                        } />
                    </Card>

            );
        }
    }

    _renderGallery(){
        if(!this.state.gallery) return false;

        let srcs = this.state.demoFiles.map(file=>file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={ e=> {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({gallery: false})
                }}
            >

                <GalleryDelete onClick={ (e, id)=> {
                    this.setState({
                        demoFiles: this.state.demoFiles.filter((e,i)=>i != id),
                        gallery: this.state.demoFiles.length <= 1 ? true : false
                    })
                }} />

            </Gallery>
        )
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
        if (this.state.appealKeeper === undefined) {
            return (<div>暂无跟进信息</div>);
        } else {
            return (
                <div>
                    <TimeLineEvents
                        headerTitle={'处理进度'}
                        events={this.state.appealKeeper}
                    />
                </div>


            );
        }
    }

    _requestAppealDetail() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        if(_userId === undefined) {
            this.showFailTost('userId不能为空');
            return;
        }
        console.log('_appealId:' + _appealId);
        let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + _userId +'/fetchDetail';
        axios.post(url,{
            appealId:_appealId,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data) {
                let _appealData = {
                    userName:response.data.data.user.wxcpName || '',
                    userPhone:response.data.data.user.wxcpPhone || '',
                    userAvatar:response.data.data.user.wxcpAvatar || '',
                    userPos:response.data.data.user.wxcpPost || '未知',
                    appealType:response.data.data.type.remark || '',
                    appealSummary:response.data.data.summary || '',
                    appealDetail:response.data.data.detail || '',
                    attachments:response.data.data.attachments || [],
                };
                this.setState({
                    appealData:_appealData,
                });


            }

        })
        .catch((err)=>{
            this.hideLoading();
        });

    }

    _requestAppealKeeperData() {
        this.showLoading();
        let _appealId = this.props.location.state.appealId;
        let _userId = this.props.location.state.userId;
        if(_userId === undefined) {
            this.showFailTost('userId不能为空');
            return;
        }
        console.log('_appealId:' + _appealId);
        let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + _userId +'/listFollowUp';
        axios.post(url,{
            appealId:_appealId,
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealKeeper: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data && response.data.data.length > 0) {
                let _appealKeeper = response.data.data.map(keeper=>{
                    return ({
                        title:keeper.keeper.wxcpName ||'未知',
                        avatarUrl:keeper.keeper.wxcpAvatar || 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                        createdAt:keeper.createTime || '未知',
                        contentStr:keeper.comments || '未知',
                    });
                })
                this.setState({
                    appealKeeper:_appealKeeper,
                });
            } else {
                this.setState({
                    appealKeeper:undefined,
                });
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

}

export default AppealDetail
