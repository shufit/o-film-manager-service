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

import Img from 'react-image';

import { Tabs, WhiteSpace, Card , ImagePicker, Grid} from 'antd-mobile';
import axios from 'axios';
import BasePage from '../BasePage';
import TimeLineEvents from '../../Components/TimeLineEvents';
import ImageViewer from '../../Components/ImageViewer';

const images = [
    {
        src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAIAAADb+IFwAAAB9klEQVR42u3d0YqDMBAFUP//p+17oRCbuRONJ49FanKy7OidQI8jMM4fY+aakXtVze3WAy5cuNvgnhNjZMGJhV2918zGX/0euHDhwh3FrVpYGm5mLVXzhwsXLty74KYf8qsKFFy4cOHugFv1YN9ZGOHChQu3GzcR3CQWPLMZW6VicOHCfRzu3QrIqs8f0/2FCxfu43DP8KgKXNLBUGTtcOHChTt5hqETsfOloCqggQsXLtzRa9KH1DoPc6SbpGWpGFy4cF+LWxV2VBW9dBiffkmBCxcu3O/7pg9GpJt6nRt5eVPhwoULd2HTswo3gbgqbIILF+67cKv+qXcuJt0kjXd/4cKFC7ehSde5kenAvqzywoUL97W4nYVl1RtOVUEe+hwuXLhw/zgrlm5WVhW3zgILFy5cuP+YJOASTcl0IzKxMXDhwoW7sp/WCdcZ2Jf9dcCFC3d73KogOfEwXxVsJ66BCxcu3FRBq3oRSIflq+Z8+W0NLly4r8U9w6MzJFrWZUi87cCFC3dL3LsdvOgMg1Y1TOHChQu3MoReVUyq5lnVSIULFy7cUdzWAxOBoCc9h6muBFy4cOEevT82l3iYj5+amdlIuHDhwn3oc256nlXfDxcuXLjnDX/g8+r1iVA/EUjBhQsX7soGZedGdhZAuHDhwh2czwejiGfFq6ImDwAAAABJRU5ErkJggg==`,
    },
    {
        src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAIAAADb+IFwAAAB9klEQVR42u3d0YqDMBAFUP//p+17oRCbuRONJ49FanKy7OidQI8jMM4fY+aakXtVze3WAy5cuNvgnhNjZMGJhV2918zGX/0euHDhwh3FrVpYGm5mLVXzhwsXLty74KYf8qsKFFy4cOHugFv1YN9ZGOHChQu3GzcR3CQWPLMZW6VicOHCfRzu3QrIqs8f0/2FCxfu43DP8KgKXNLBUGTtcOHChTt5hqETsfOloCqggQsXLtzRa9KH1DoPc6SbpGWpGFy4cF+LWxV2VBW9dBiffkmBCxcu3O/7pg9GpJt6nRt5eVPhwoULd2HTswo3gbgqbIILF+67cKv+qXcuJt0kjXd/4cKFC7ehSde5kenAvqzywoUL97W4nYVl1RtOVUEe+hwuXLhw/zgrlm5WVhW3zgILFy5cuP+YJOASTcl0IzKxMXDhwoW7sp/WCdcZ2Jf9dcCFC3d73KogOfEwXxVsJ66BCxcu3FRBq3oRSIflq+Z8+W0NLly4r8U9w6MzJFrWZUi87cCFC3dL3LsdvOgMg1Y1TOHChQu3MoReVUyq5lnVSIULFy7cUdzWAxOBoCc9h6muBFy4cOEevT82l3iYj5+amdlIuHDhwn3oc256nlXfDxcuXLjnDX/g8+r1iVA/EUjBhQsX7soGZedGdhZAuHDhwh2czwejiGfFq6ImDwAAAABJRU5ErkJggg==`,
    }
];

class AppealDetail extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            gallery: false,
            visible:false,
            activeIndex:0,
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

    render() {
        return (
            <div>
                {this._renderLoginRootContent()}
            </div>
        );
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
                <div>
                    <Card>
                        <Card.Header
                            title={this.state.appealData.userName}
                            thumb={this.state.appealData.userAvatar}
                            extra={<span>{this.state.appealData.userPos}</span>}
                            thumbStyle={{
                                height: 30,
                                width: 30,
                            }}
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
                    {this._renderImageView()}
                </div>

            );
        }
    }

    _renderImageView() {

        let _images;

        if(this.state.appealData && this.state.appealData.attachments &&this.state.appealData.attachments.length > 0) {
            _images = this.state.appealData.attachments.map((item, index) => {
                return {
                    src:item.data,
                };
            });
        } else {
            return null;
        }
        return (
            <ImageViewer images={_images}/>
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
