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
import axios from 'axios';
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
			files: [],
			hasSummary:false,
		};
		this.uploadImageFiles = [];
		this.appealType = 0;

    }

	componentDidMount() {
		this.hideLoading();
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
										value: 0,
										label: '生活类'
									},
									{
										value: 1,
										label: '工作类'
									},
									{
										value: 2,
										label: '其他'
									}
								]}
								onChange={e=>{
									console.log('select value:' + e.target.value);
									this.appealType = e.target.value;
								}}
								/>
							</CellBody>
						</FormCell>
						<FormCell>
							<CellHeader>
								<Label>诉求概述:</Label>
							</CellHeader>
							<CellBody>
								<TextArea
									placeholder="请输入诉求概述（50字内）"
									rows="2"
									maxLength={50}
									onChange={e=>{
										this.summary = e.target.value;
	                                    if(e.target.value.length > 0) {
	                                        this.setState({
	                                            hasSummary:true,
	                                        });
	                                    } else {
	                                        this.setState({
	                                            hasSummary:false,
	                                        });
	                                    }
	                                }}
									>
								</TextArea>
							</CellBody>
						</FormCell>
						<FormCell>
							<CellHeader>
								<Label>诉求详情:</Label>
							</CellHeader>
							<CellBody>
								<TextArea
									placeholder="请输入诉求详情(200字内)"
									rows="3"
									maxLength={200}
									onChange={e=>{
										this.detail = e.target.value;
	                                    if(e.target.value.length > 0) {
	                                        this.setState({
	                                            hasDetail:true,
	                                        });
	                                    } else {
	                                        this.setState({
	                                            hasDetail:false,
	                                        });
	                                    }
	                                }}
									>
								</TextArea>
							</CellBody>
						</FormCell>
				</Form>
				<CellsTitle>添加图片(jpg jpeg gif png 限制5张)</CellsTitle>
				{this._renderImageUpload()}
				<ButtonArea>
					<Button
						onClick={()=>{
							this._submitAppealRequest();
						}}
						disabled={!this.state.hasSummary || !this.state.hasDetail}
						>
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
					selectable={this.state.files.length < 6}
					accept="image/gif,image/jpeg,image/jpg,image/png"
  				/>
			</div>

		);
	}

	onChange(files, type, index) {
		console.log(files, type, index);
		this.uploadImageFiles = files.map(file=>{
			return (
				{
					name:'appeal'+this.getTimeStamp() + '.png',
					data:file.url,
				}
			);
		});
		this.setState({
  			files,
		});
	}

	_submitAppealRequest() {
		this.showLoading();
        let url = 'https://test.it.o-film.com/ofilm-hk-cli/appeal/' + window.userID +'/newAppeal';
        axios.post(url,{
			type:this.appealType,
            userId:4,
			summary:this.summary || '',
			detail:this.detail || '',
			attachments:this.uploadImageFiles,

        })
        .then((response)=>{
            this.hideLoading();
            console.log('new appeal: ' + response.data.errmsg);
            if(response.data.errcode == 0) {
				this.showSuccessToast('添加成功');
            } else {
				this.showFailTost('errmsg' + response.data.errmsg );
            }

        })
        .catch((err)=>{
            this.hideLoading();
        });
    }


}

export default AddAppeal;
