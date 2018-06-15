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
    TextArea,
	Panel,
	PanelHeader,
	PanelBody,
	PanelFooter,
	MediaBox,
	MediaBoxHeader,
	MediaBoxBody,
	MediaBoxTitle,
	MediaBoxDescription,
    Label,
    Select,

} from 'react-weui';

import {
	Tabs,
	WhiteSpace,
	Card
} from 'antd-mobile';
import BasePage from '../BasePage';

class AddAppeal extends BasePage {

    constructor(props) {
        super(props);
    }

	_renderLoginContent() {
		document.title = '新建诉求';
		return (
			<div>
				<CellsTitle>新建诉求</CellsTitle>
				<Form>
					<FormCell select selectPos="after">
						<CellHeader>
							<Label>诉求类型:</Label>
						</CellHeader>
						<CellBody>
							<Select data={[
									{
										value: 1,
										label: '生活类'
									},
									{
										value: 2,
										label: '工作类'
									},
									{
										value: 3,
										label: '其他'
									}
								]} />
							</CellBody>
						</FormCell>
						<FormCell>
							<CellHeader>
								<Label>诉求概述:</Label>
							</CellHeader>
							<CellBody>
								<TextArea placeholder="请输入诉求概述（100字内）" rows="2" maxlength="100"></TextArea>
							</CellBody>
						</FormCell>
						<FormCell>
							<CellHeader>
								<Label>诉求详情:</Label>
							</CellHeader>
							<CellBody>
								<TextArea placeholder="请输入诉求详情(200字内)" rows="3" maxlength="200"></TextArea>
							</CellBody>
						</FormCell>
				</Form>
				<ButtonArea>
					<Button>
						提交
					</Button>
				</ButtonArea>
			</div>
		);
	}


}

export default AddAppeal;
