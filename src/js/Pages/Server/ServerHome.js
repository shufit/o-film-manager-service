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

} from 'react-weui';

import { Tabs, WhiteSpace, Card } from 'antd-mobile';
import axios from 'axios';
import BasePage from '../BasePage';
import ClientIDCard from '../../Components/ClientIDCard';


function GetUrlParam(paraName) {
	var url = document.location.toString();
	var arrObj = url.split("?");
	if (arrObj.length > 1) {
		var arrPara = arrObj[1].split("&");
		var arr;

		for (var i = 0; i < arrPara.length; i++) {
			arr = arrPara[i].split("=");

			if (arr != null && arr[0] == paraName) {
				return arr[1];
			}
		}
		return "";
	} else {
		return "";
	}
}

class ServerHome extends BasePage {

    constructor(props) {
        super(props);


        this.state = {
            tab:0,
            tab1Data:undefined,
            tab2Data:undefined,
            tab3Data:undefined,
            tab4Data:undefined,
        };
    }

    componentDidMount() {
        let code = GetUrlParam('code');
        console.log('Wecode:' + code);
        this.hideLoading();
        this._requestTab1();
    }

    _renderLoginContent() {

        const tabs = [
            { title: '待跟踪的' },
            { title: '处理中的' },
            { title: '已完结的' },
            { title: '我跟踪的' },
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onTabClick={(tabData, index) => {
                        switch(index) {
                            case 0:
                                this._render1stTabContent();
                                break;
                            case 1:
                                this._requestTab2();
                                break;
                            case 2:
                                this._requestTab3();
                                break;
                            case 3:
                                this._requestTab4();
                                break;
                            default:
                                break;
                        }
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render1stTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render2ndTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render3rdTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',  backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render4thTabContent()}
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );

    }

    _render1stTabContent() {

        if (this.state.tab1Data && this.state.tab1Data.length > 0) {

            let cards = this.state.tab1Data.map(appealData=>{
                let {appealID, name, title, appealClass, appealDesc, follower} = appealData;
                return (
                    <div>
                        <ClientIDCard
                            appealID={appealID}
                            name={name}
                            title={title}
                            appealClass={appealClass}
                            appealDesc={appealDesc}
                            follower={follower}
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/appealDetail',
                                    state: {
                                        appealId:appealID,
                                    }
                                });
                            }}
                        />
                        <WhiteSpace size={'lg'}/>
                    </div>
                );
            });

            return cards;
        } else {
            return (
                <div>暂无数据</div>
            );
        }
    }

    _render2ndTabContent() {

        if (this.state.tab2Data && this.state.tab2Data.length > 0) {

            let cards = this.state.tab1Data.map(appealData=>{
                let {appealID, name, title, appealClass, appealDesc, follower} = appealData;
                return (
                    <div>
                        <ClientIDCard
                            appealID={appealID}
                            name={name}
                            title={title}
                            appealClass={appealClass}
                            appealDesc={appealDesc}
                            follower={follower}
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/appealDetail',
                                    state: {
                                        appealId:appealID,
                                    }
                                });
                            }}
                        />
                        <WhiteSpace size={'lg'}/>
                    </div>
                );
            });

            return cards;
        } else {
            return (
                <div>暂无数据</div>
            );
        }
    }

    _render3rdTabContent() {
        if (this.state.tab3Data && this.state.tab3Data.length > 0) {

            let cards = this.state.tab1Data.map(appealData=>{
                let {appealID, name, title, appealClass, appealDesc, follower} = appealData;
                return (
                    <div>
                        <ClientIDCard
                            appealID={appealID}
                            name={name}
                            title={title}
                            appealClass={appealClass}
                            appealDesc={appealDesc}
                            follower={follower}
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/appealDetail',
                                    state: {
                                        appealId:appealID,
                                    }
                                });
                            }}
                        />
                        <WhiteSpace size={'lg'}/>
                    </div>
                );
            });

            return cards;
        } else {
            return (
                <div>暂无数据</div>
            );
        }
    }

    _render4thTabContent() {
        if (this.state.tab4Data && this.state.tab4Data.length > 0) {

            let cards = this.state.tab1Data.map(appealData=>{
                let {appealID, name, title, appealClass, appealDesc, follower} = appealData;
                return (
                    <div>
                        <ClientIDCard
                            appealID={appealID}
                            name={name}
                            title={title}
                            appealClass={appealClass}
                            appealDesc={appealDesc}
                            follower={follower}
                            onClick={()=>{
                                this.props.history.push({
                                    pathname:'/appealDetail',
                                    state: {
                                        appealId:appealID,
                                    }
                                });
                            }}
                        />
                        <WhiteSpace size={'lg'}/>
                    </div>
                );
            });

            return cards;
        } else {
            return (
                <div>暂无数据</div>
            );
        }
    }

    _requestTab1() {
        this.showLoading();
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + window.userID +'/filter';
        axios.post(url,{
            onlyMe:false,
            status:'PENDING',
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data.length > 0) {
                let _tab1Data = response.data.data.map(appealData=>{
                    return (
                        {
                            appealID:appealData.id || 0,
                            name:appealData.user.wxcpName || '未知',
                            title:appealData.user.wxcpPost || '未知',
                            appealClass:appealData.type.remark || '未知',
                            appealDesc:appealData.summary || '无',
                            follower:appealData.keeper.wxcpName || '无',
                        }
                    );
                })
                this.setState({
                    tab1Data:_tab1Data,
                });
            }
            if(response.data.errcode != 0) {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

    _requestTab2() {

        this.showLoading();
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + window.userID +'/filter';
        axios.post(url,{
            onlyMe:false,
            status:'DEALING',
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data.length > 0) {
                let _tab2Data = response.data.data.map(appealData=>{
                    return (
                        {
                            appealID:appealData.id || 0,
                            name:appealData.user.wxcpName || '未知',
                            title:appealData.user.wxcpPost || '未知',
                            appealClass:appealData.type.remark || '未知',
                            appealDesc:appealData.summary || '无',
                            follower:appealData.keeper.wxcpName || '无',
                        }
                    );
                })
                this.setState({
                    tab2Data:_tab2Data,
                });
            }
            if(response.data.errcode != 0) {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });

    }

    _requestTab3() {

        this.showLoading();
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + window.userID +'/filter';
        axios.post(url,{
            onlyMe:false,
            status:'FINISH',
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data.length > 0) {
                let _tab3Data = response.data.data.map(appealData=>{
                    return (
                        {
                            appealID:appealData.id || 0,
                            name:appealData.user.wxcpName || '未知',
                            title:appealData.user.wxcpPost || '未知',
                            appealClass:appealData.type.remark || '未知',
                            appealDesc:appealData.summary || '无',
                            follower:appealData.keeper.wxcpName || '无',
                        }
                    );
                })
                this.setState({
                    tab3Data:_tab3Data,
                });
            }
            if(response.data.errcode != 0) {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });

    }

    _requestTab4() {
        this.showLoading();
        let url = 'https://test.it.o-film.com/ofilm-hk-srv/appeal/' + window.userID +'/filter';
        axios.post(url,{
            onlyMe:true,
            status:'DEALING',
        })
        .then((response)=>{
            this.hideLoading();
            console.log('appealData: ' + response.data.errmsg);
            if(response.data.errcode == 0 && response.data.data.length > 0) {
                let _tab4Data = response.data.data.map(appealData=>{
                    return (
                        {
                            appealID:appealData.id || 0,
                            name:appealData.user.wxcpName || '未知',
                            title:appealData.user.wxcpPost || '未知',
                            appealClass:appealData.type.remark || '未知',
                            appealDesc:appealData.summary || '无',
                            follower:appealData.keeper.wxcpName || '无',
                        }
                    );
                })
                this.setState({
                    tab4Data:_tab4Data,
                });
            }
            if(response.data.errcode != 0) {
                this.showFailTost(response.data.errmsg);
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }
}

export default ServerHome;
