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
	}
	componentDidMount() {
		this.getTimeStamp();
		console.log('loginStatus:' + window.isLogin);
	}

	_renderLoginContent() {
		document.title = '诉求管理';
		return (
			<div>
				<CellsTitle>{'我的诉求'}</CellsTitle>
				<Cells>
					{this._renderCell('差旅费报销单差旅费报销单差旅费报销单差旅费报销单差旅费报销单','2018-06-15','正在处理')}
				</Cells>
				{this._renderAddButton()}
			</div>
		);
	}

	_renderCell(title, date, status) {
		return (
			<Cell access={true} onClick={()=>{
				this.props.history.push({
					pathname:'/AppealDetail',
					state: {
					}
				});
				}}>
				<CellBody>
					<div style={{display:'flex', fontSize:15}}>{title}</div>
					<div style={{display:'flex', fontSize:13}}>{date}</div>
				</CellBody>
				<CellFooter>
					<div style={{display:'flex', color:'red',fontSize: 15}}>{status}</div>
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



}


export default ClientHome;
