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

class ServerHome extends BasePage {

    constructor(props) {
        super(props)


        this.state = {
            tab:0
        }
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
                <div>
                    <WhiteSpace size="lg" />
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="姓名" value="张某某" />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="职务" value="总监" />
                            <PreviewItem label="诉求类别" value="xxx类" />
                            <PreviewItem label="诉求描述" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
                            <PreviewItem label="跟踪人" value="某某" />
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>详情</PreviewButton>
                        </PreviewFooter>
                    </Preview>
                </div>
            );
        }
        return cards;
    }

    _render2ndTabContent() {

        let cards = [];

        for (let i = 0; i < 3; i ++) {
            cards.push(
                <div>
                    <WhiteSpace size="lg" />
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="姓名" value="张某某" />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="职务" value="总监" />
                            <PreviewItem label="诉求类别" value="xxx类" />
                            <PreviewItem label="诉求描述" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
                            <PreviewItem label="跟踪人" value="某某" />
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>详情</PreviewButton>
                        </PreviewFooter>
                    </Preview>
                </div>
            );
        }
        return cards;
    }

    _render3rdTabContent() {
        let cards = [];

        for (let i = 0; i < 2; i ++) {
            cards.push(
                <div>
                    <WhiteSpace size="lg" />
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="姓名" value="张某某" />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="职务" value="总监" />
                            <PreviewItem label="诉求类别" value="xxx类" />
                            <PreviewItem label="诉求描述" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
                            <PreviewItem label="跟踪人" value="某某" />
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>详情</PreviewButton>
                        </PreviewFooter>
                    </Preview>
                </div>
            );
        }
        return cards;
    }

    _render4thTabContent() {
        let cards = [];

        for (let i = 0; i < 1; i ++) {
            cards.push(
                <div>
                    <WhiteSpace size="lg" />
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="姓名" value="张某某" />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="职务" value="总监" />
                            <PreviewItem label="诉求类别" value="xxx类" />
                            <PreviewItem label="诉求描述" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
                            <PreviewItem label="跟踪人" value="某某" />
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>详情</PreviewButton>
                        </PreviewFooter>
                    </Preview>
                </div>
            );
        }
        return cards;
    }
}

export default ServerHome;