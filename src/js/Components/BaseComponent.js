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

} from 'react-weui'

import axios from 'axios';
import qs from 'qs';

import { Tabs, WhiteSpace, Card } from 'antd-mobile';

class BaseComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
            </div>
        );
    }
}


export default BaseComponent;
