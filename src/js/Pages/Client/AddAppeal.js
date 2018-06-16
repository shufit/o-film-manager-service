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
	Card,
	ImagePicker,
} from 'antd-mobile';
import BasePage from '../BasePage';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class AddAppeal extends BasePage {

    constructor(props) {
        super(props);
		this.state = {
			files: data,
		};

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
								<TextArea placeholder="请输入诉求概述（100字内）" rows="2" maxLength={100}></TextArea>
							</CellBody>
						</FormCell>
						<FormCell>
							<CellHeader>
								<Label>诉求详情:</Label>
							</CellHeader>
							<CellBody>
								<TextArea placeholder="请输入诉求详情(200字内)" rows="3" maxLength={200}></TextArea>
							</CellBody>
						</FormCell>
				</Form>
				{this._renderImageUpload()}
				<ButtonArea>
					<Button>
						提交
					</Button>
				</ButtonArea>
			</div>
		);
	}

	_renderImageUpload() {
		return (
			<div>
  				<ImagePicker
					files={this.state.files}
					onChange={this.onChange.bind(this)}
					onImageClick={(index, fs) => console.log(index, fs)}
					selectable={this.state.files.length < 5}
					accept="image/gif,image/jpeg,image/jpg,image/png"
  				/>
			</div>

		);
	}

	onChange(files, type, index) {
		console.log(files, type, index);
		this.setState({
  			files,
		});
	}


}

export default AddAppeal;
