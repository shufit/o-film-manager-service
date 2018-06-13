/* jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
import {Timeline, TimelineEvent} from 'react-event-timeline';

import BaseComponent from './BaseComponent';

class TimeLineEvents extends BaseComponent {

    constructor(props) {
        super(props);

    }

    render() {

        let {headerTitle, events} = this.props;
       let eventsElements =  events.map(event => (
           <TimelineEvent
               title={event.title || 'undefined'}
               titleStyle={{fontWeight: "bold", fontSize:20,}}
               createdAt={event.createdAt || 'undefined'}
               icon={<img src={event.avatarUrl || 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'} />}
               iconColor="transparent"
               contentStyle={{backgroundColor: "#00BCD4", color: "#fff", fontSize:15}}
           >
               {event.contentStr}

           </TimelineEvent>
       ));

        return (
            <div>
                <CellsTitle>{headerTitle || '处理结果'}</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <Timeline>
                                {eventsElements}
                            </Timeline>
                        </CellBody>
                    </FormCell>
                </Form>
            </div>
        );
    }

}

TimeLineEvents.propTypes = {
    headerTitle: PropTypes.string,
    events: PropTypes.array,

};
TimeLineEvents.defaultProps = {
    headerTitle:'处理进度',
    events:[{
        title:'Shufit',
        avatarUrl:'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        createdAt:'2018-05-12 10:06 PM',
        contentStr:'处理意见处理意见处理意见处理意见处理意见处理意见处理意见处理意见',
    }],
};


export default TimeLineEvents;
