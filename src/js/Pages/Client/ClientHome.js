/* jshint esversion: 6 */
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

//import styles
import 'weui';
import 'react-weui/build/dist/react-weui.css';

import {
	TabBarItem,
	Article,
	Button,
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
	Form,
	FormCell,
	TabBody,
	NavBar,
	NavBarItem,
	TabBodyItem,
	Panel,
	PanelHeader,
	PanelBody,
	PanelFooter,
	MediaBox,
	MediaBoxHeader,
	MediaBoxBody,
	MediaBoxTitle,
	MediaBoxDescription,

} from 'react-weui';

import {
	Tabs,
	WhiteSpace,
	Card
} from 'antd-mobile';
import axios from 'axios';
import BasePage from '../BasePage';
import ClientIDCard from '../../Components/ClientIDCard';

window.userId = undefined;
window.appealList = [];

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
	}　　　　
	else {　　　　　　
		return "";　　　　
	}　　
}

class ClientHome extends BasePage {

	constructor(props) {
		super(props);
		this.state = {
			appealList:[],
		};

		this.requestUserId = this.requestUserId.bind(this);
		this._requestAppealList = this._requestAppealList.bind(this);
	}
	componentDidMount() {
		this._isMounted = true;
		this.requestUserId();
		//解决异步中无法更新首页组件状态的问题
		setInterval(()=>{
			this.setState({});
			// console.log('重新刷新首页')
		},3000);
		// this._requestAppealList();
	}

	componentWillUnMount() {
		this._isMounted = false;
	}

	_renderLoginContent() {
		document.title = '诉求管理';
		return (
			<div>
				<CellsTitle>{'我的诉求'}</CellsTitle>
				<Cells>
					{this._renderCells()}
				</Cells>
				{this._renderAddButton()}
			</div>
		);
	}

	render() {
		return (
			<div>
				{this._renderLoginRootContent()}
			</div>
		);
	}

	_renderCells() {
		if (window.appealList.length === 0) {
			return (
				<div>
				</div>
			);
		} else {
			let cells = [];
			for (let i = 0; i< window.appealList.length; i ++) {
				let cell = this._renderCell(window.appealList[i]);
				cells.push(cell);
			}
			return cells;
		}
	}

	_renderCell(appealData) {
		let statusColor = '#fff';
		let statusString = '';
		switch(appealData.status) {
			case 'PENDING':
			statusColor = 'red';
			statusString = '待处理';
			break;
			case 'DEALING':
			statusColor = 'blue';
			statusString = '处理中';
			break;
			case 'FINISH':
			statusColor = 'green';
			statusString = '已完结';
		}
		return (
			<Cell access={true} onClick={()=>{
				this.props.history.push({
					pathname:'/AppealDetail',
					state: {
						appealId:appealData.id,
						userId:window.userId,
					}
				});
				}}>
				<CellBody>
					<div style={{display:'flex', fontSize:15}}>{appealData.summary||''}</div>
					<div style={{display:'flex', fontSize:13}}>{appealData.createTime ||''}</div>
				</CellBody>
				<CellFooter>
					<div style={{display:'flex', color:statusColor,fontSize: 15}}>{statusString || ''}</div>
				</CellFooter>
			</Cell>
		);
	}

	_renderAddButton() {
		return (
			<ButtonArea>
				<Button type="primary" plain onClick={()=>{
					this.props.history.push({
						pathname:'/AddAppeal',
						state: {
							userId: window.userId,
						}
					});
				}}>
				新建诉求
				</Button>
			</ButtonArea>
		);
	}

	_requestAppealList() {
		window.userId = 60;
		if(window.userId === undefined) {
			this.showFailTost('userId不能为空');
			return;
		}
		this.showLoading();
		console.log("userID:" + window.userId);
		let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + window.userId +'/listBrief'
		axios.post(url, {
		})
		.then((response) => {
			this.hideLoading();
			if (response.data.errcode == 0) {
				let _appealList = response.data.data;
				window.appealList = _appealList;
				if (this._isMounted) {
					this.setState({
						appealList:_appealList,
					});
				}
				setTimeout(()=>{this.setState({})},10000);
				console.log('appealList 数量'+_appealList.length);
			}
			console.log('诉求列表：'+response.data.data.length);
		})
		.catch(function(err){
			this.hideLoading();
			console.log('错误：'+err);
		})
		;
	}

	requestUserId() {
        let code = GetUrlParam('code');
        console.log('code: ' + code);
        let paramaCode = code.replace('#/','');
        console.log('paramaCode: ' + paramaCode);
        this.showLoading();
        axios.get('https://test.it.o-film.com/ofilm-hk-cli/portal/giveMeUser', {
            params:{
                'code':paramaCode,
            }
        })
        .then((response)=> {
            this.hideLoading();
            if (response.data.errcode == 0 && response.data.data) {
				if (this._isMounted) {
					window.userId = response.data.data.id ;
                    console.log('userId:' + window.userId);
                    console.log('用户名:'+ (response.data.data.wxCpUser ? response.data.data.wxCpUser.name : '未知' ));
					this._requestAppealList();
				}

            }
        })
        .catch((err)=>{
            this.hideLoading();
        });
    }

}


export default ClientHome;
