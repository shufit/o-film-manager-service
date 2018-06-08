import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import styles
import 'weui';
import 'react-weui/build/dist/react-weui.css';

import {
    Tab,
    TabBarItem,
    Article,
    Button ,
    Page,
    ButtonArea,
    ActionSheet,
} from 'react-weui';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ios_show:false,
            android_show:false,
            menus:[
                {
                    label:'Option1',
                    onClick:()=>{

                    }
                },
                {
                    label:'Option2',
                    onClick:()=>{

                    }
                }
            ],
            actions:[
                {
                    label:'Cancel',
                    onClick:this.hide.bind(this)
                }
            ]
        };

    }

    hide() {
        this.setState({
            auto_show:false,
            ios_show:false,
            android_show:false,
        });
    }
    render() {
        return (
            <Page className={'actionsheet'} title={'ActionSheet'} subTitle={'弹出式菜单'} spacing>
                <Button type={'default'} onClick={e=>this.setState({ios_show:true})}>
                    IOS ActionSheet
                </Button>
                <ActionSheet
                    menus={this.state.menus}
                    actions={this.state.actions}
                    show={this.state.ios_show}
                    type={'ios'}
                    onRequestClose={e=>this.setState({ios_show:false})}
                />
            </Page>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));