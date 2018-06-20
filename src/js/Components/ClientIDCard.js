/* jshint esversion: 6 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

import BaseComponent from './BaseComponent';

class ClientIDCard extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            appealID: props.appealID,
            name: props.name || '',
            title: props.title || '',
            appealClass: props.appealClass || '',
            appealDesc: props.appealDesc || '',
            follower: props.follower || '',
            onClick: props.onClick || null,

        };
    }

    render() {
        return (

                <Preview>
                    <PreviewHeader>
                        <PreviewItem label="姓名" value={this.state.name}/>
                    </PreviewHeader>
                    <PreviewBody>
                        <PreviewItem label="职务" value={this.state.title} />
                        <PreviewItem label="诉求类别" value={this.state.appealClass} />
                        <PreviewItem label="诉求描述" value={this.state.appealDesc} />
                        <PreviewItem label="跟踪人" value={this.state.follower} />
                        <p style={{display:'flex', color:'#fff'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </PreviewBody>
                    <PreviewFooter>
                        <PreviewButton primary onClick={()=>{
                            this.state.onClick && this.state.onClick();
                        }}>详情</PreviewButton>
                    </PreviewFooter>
                </Preview>
        );
    }
}

ClientIDCard.propTypes = {
    appealID: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    appealClass: PropTypes.string,
    appealDesc: PropTypes.string,
    follower: PropTypes.string,
    onClick: PropTypes.function,

};

export default ClientIDCard;
