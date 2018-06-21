/* jshint esversion: 6 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Tabs, WhiteSpace, Card , ImagePicker, Grid} from 'antd-mobile';

import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

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

class ImageViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible:false,
            activeIndex:0,
        };
    }


    render() {
        let {images} = this.props;
        if (images === undefined || images.length === 0) {
            return (
                <div>
                </div>
            );
        } else {
            return (
                <div>
                    <CellsTitle>图片</CellsTitle>
                    <Grid
                        data={images}
                        hasLine={true}
                        columnNum={3}
                        renderItem={(dataItem, index)=>{
                            return (
                                <div style={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                                    <img
                                        src={dataItem.src} style={{ width: '75px', height: '75px' }}
                                         alt=""
                                         onClick={()=>{
                                             this.setState({
                                                 visible: true,
                                                 activeIndex: index,
                                             });
                                         }}
                                          />
                                </div>
                            );
                        }}
                        >
                    </Grid>
                    <Viewer
                        visible={this.state.visible}
                        onClose={() => { this.setState({ visible: false }); } }
                        images={images}
                        activeIndex={this.state.activeIndex}
                        />
                </div>
            );
        }
    }
}


export default ImageViewer;
