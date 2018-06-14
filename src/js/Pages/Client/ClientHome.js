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
	TabBody,
	NavBar,
	NavBarItem,
	TabBodyItem,

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

	}
    render() {
        return (
			<div>
			</div>
		);
    }



}


export default ClientHome;
