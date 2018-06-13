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

} from 'react-weui';

import { Tabs, WhiteSpace, Card } from 'antd-mobile';
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

class ServerHome extends BasePage {

    constructor(props) {
        super(props);


        this.state = {
            tab:0
        };
    }

    componentDidMount() {
      let code = GetUrlParam('code');
      console.log('code:' + code);
    }

    render() {

        const tabs = [
            { title: '未完结的' },
            { title: '待跟踪的' },
            { title: '已完结的' },
            { title: '我跟踪的' },
        ];

        return (
            <div>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onTabClick={(tabData, index) => {

                }}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render1stTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render2ndTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render3rdTabContent()}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',  backgroundColor: '#F5F5F5', flexDirection:'column' }}>
                        {this._render4thTabContent()}
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }

    _render1stTabContent() {

        let cards = [];

        for (let i = 0; i < 4; i ++) {
            cards.push(
                <ClientIDCard
                    appealID={'2324'}
                    name={'张某某'}
                    title={'总监'}
                    appealClass={'xxx类'}
                    appealDesc={'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}
                    follower={'某某'}
                    onClick={()=>{
                        this.props.history.push({
                            pathname:'/appealDetail',
                            state: {
                                id:3,
                            }
                        });
                    }}

                />
            );
            cards.push(<WhiteSpace size={'lg'}/>);
        }
        return cards;
    }

    _render2ndTabContent() {

        let cards = [];

        for (let i = 0; i < 3; i ++) {
            cards.push(
                <ClientIDCard
                    appealID={'2324'}
                    name={'张某某'}
                    title={'总监'}
                    appealClass={'xxx类'}
                    appealDesc={'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}
                    follower={'某某'}
                    onClick={()=>{

                    }}

                />
            );
            cards.push(<WhiteSpace size={'lg'}/>);
        }
        return cards;
    }

    _render3rdTabContent() {
        let cards = [];

        for (let i = 0; i < 2; i ++) {
            cards.push(
                <ClientIDCard
                    appealID={'2324'}
                    name={'张某某'}
                    title={'总监'}
                    appealClass={'xxx类'}
                    appealDesc={'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}
                    follower={'某某'}
                    onClick={()=>{

                    }}

                />
            );
            cards.push(<WhiteSpace size={'lg'}/>);
        }
        return cards;
    }

    _render4thTabContent() {
        let cards = [];

        for (let i = 0; i < 1; i ++) {
            cards.push(
                <ClientIDCard
                    appealID={'2324'}
                    name={'张某某'}
                    title={'总监'}
                    appealClass={'xxx类'}
                    appealDesc={'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'}
                    follower={'某某'}
                    onClick={()=>{

                    }}

                />
            );
            cards.push(<WhiteSpace size={'lg'}/>);
        }
        return cards;
    }
}

export default ServerHome;
