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
    Gallery,
    Form,
    FormCell,
    TextArea,

} from 'react-weui';

import { Tabs, WhiteSpace, Card , ImagePicker} from 'antd-mobile';
import BasePage from '../BasePage';
import TimeLineEvents from '../../Components/TimeLineEvents';

class AppealDetail extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            gallery: false,
            demoFiles: [
                {
                    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
                    id: '2121',
                }, {
                    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                    id: '2122',
                }],
            confirmButtonEnable:false,
        }



    }


    _renderLoginContent() {
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
                            <p>诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情诉求详情</p>
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

    _renderGallery(){
        if(!this.state.gallery) return false;

        let srcs = this.state.demoFiles.map(file=>file.url)

        return (
            <Gallery
                src={srcs}
                show
                defaultIndex={this.state.gallery.id}
                onClick={ e=> {
                    //avoid click background item
                    e.preventDefault()
                    e.stopPropagation();
                    this.setState({gallery: false})
                }}
            >

                <GalleryDelete onClick={ (e, id)=> {
                    this.setState({
                        demoFiles: this.state.demoFiles.filter((e,i)=>i != id),
                        gallery: this.state.demoFiles.length <= 1 ? true : false
                    })
                }} />

            </Gallery>
        )
    }

    _renderGirdCard() {
        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };

        return (
            <Card title="图片">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
        );
    }

    _render2ndTabContent() {

        let events = [
            {
                title:'Shufit',
                avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                createdAt:'2018-05-12 10:06 PM',
                contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
            },
            {
                title:'Shufit',
                avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                createdAt:'2018-05-12 10:06 PM',
                contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
            },
            {
                title:'Shufit',
                avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                createdAt:'2018-05-12 10:06 PM',
                contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
            },
            {
                title:'Shufit',
                avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                createdAt:'2018-05-12 10:06 PM',
                contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
            },
            {
                title:'Shufit',
                avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                createdAt:'2018-05-12 10:06 PM',
                contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
            }
        ];
        return (
            <div>
                <TimeLineEvents
                    headerTitle={'处理进度'}
                    events={events}
                />
                <CellsTitle>处理意见</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <TextArea
                                placeholder="请输入处理意见（100字内）" rows="3" maxlength="200"
                                onChange={e=>{
                                    if(e.target.value.length > 0) {
                                        this.setState({
                                            confirmButtonEnable:true,
                                        });
                                    } else {
                                        this.setState({
                                            confirmButtonEnable:false,
                                        });
                                    }
                                }}
                            />
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea direction="horizontal">
                    <Button type="warn" disabled={!this.state.confirmButtonEnable} onClick={e=>{

                    }}>
                        完结诉求
                    </Button>
                    <Button
                        disabled={!this.state.confirmButtonEnable}
                        onClick={e=>{

                        }}
                    >
                        更新进度
                    </Button>
                </ButtonArea>
            </div>


        );
    }

}

export default AppealDetail
