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

class AppealDetail extends BasePage {

    constructor(props) {
        super(props);
    }

    render() {
        const tabs = [
            { title: '诉求信息' },
            { title: '进度信息' },
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
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }

    _render1stTabContent() {

        return (
            <div>
                <Card>
                    <Card.Header
                        title="某某"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>经理</span>}
                    />
                    <Card.Body>
                        <div>
                            <PreviewItem label="联系电话" value={'1808088888'} />
                            <PreviewItem label="诉求类别" value={'生活类'} />
                            <PreviewItem label="诉求概述" value={'XXXXXXXXXX'} />
                            <h2>诉求详情</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute</p>
                        </div>
                    </Card.Body>
                    <Card.Footer content="" extra={
                        <div>
                        </div>
                    } />
                </Card>

                <Button disabled={true} onClick={()=>{
                    
                }}>
                    我来跟踪
                </Button>
            </div>

        );
    }

    _render2ndTabContent() {
        return (
            <div>
                进度信息
            </div>
        );
    }

}

export default AppealDetail