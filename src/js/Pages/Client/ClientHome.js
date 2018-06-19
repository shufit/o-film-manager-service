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
	}
	componentDidMount() {
		this.getTimeStamp();
		this._requestAppealList();
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

	_renderCells() {
		if (this.state.appealList.length === 0) {
			return (
				<div>
				</div>
			);
		} else {
			let cells = [];
			for (let i = 0; i< this.state.appealList.length; i ++) {
				let cell = this._renderCell(this.state.appealList[i]);
				cells.push(cell);
			}
			return cells;
		}
	}

	_renderCell(appealData) {
		return (
			<Cell access={true} onClick={()=>{
				this.props.history.push({
					pathname:'/AppealDetail',
					state: {
						appealId:appealData.id,
					}
				});
				}}>
				<CellBody>
					<div style={{display:'flex', fontSize:15}}>{appealData.summary||''}</div>
					<div style={{display:'flex', fontSize:13}}>{appealData.createTime ||''}</div>
				</CellBody>
				<CellFooter>
					<div style={{display:'flex', color:'red',fontSize: 15}}>{appealData.status || ''}</div>
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
						}
					});
				}}>
				新建诉求
				</Button>
			</ButtonArea>
		);
	}

	_requestAppealList() {
		this.showLoading();
		console.log("userID:" + window.userID);
		let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + window.userID +'/listBrief'
		axios.post(url, {
			params:{},
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			// transformResponse:[function(data){
			// 	// console.log('诉求列表：'+data);
			// 	return ({
			// 		status:data.errcode,
			// 		statusText:data.errmsg,
			// 		data:{
			// 			list:data.data,
			// 		},
			//
			// 	});
			// }],
			responseType: 'json',
		})
		.then((response) => {
			this.hideLoading();
			if (response.data.errcode == 0) {
				let _appealList = response.data.data;
				this.setState({
					appealList:_appealList,
				});
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

}


export default ClientHome;
