import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import styles
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import 'antd-mobile/dist/antd-mobile.css';

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
    Tab,
    TabBody,
    NavBar,
    NavBarItem,

} from 'react-weui';

import {
    Switch,
    HashRouter as Router,
    Route,
    Link,
    BrowserRouter,
} from 'react-router-dom';

import ServerHome from './Pages/Server/ServerHome';

import BasicRoute from './Router/Router';

const routes = [
    { path: '/', component: ServerHome, exact: true },
];



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    hideDialog() {
        this.setState({
        });
    }
    render() {
        return (
            <BasicRoute/>
        );
    }
}

// if (module.hot) {
//     module.hot.accept(()=>{
//         ReactDOM.render((
//             <App/>
//         ), document.getElementById('container'));
//     })
// }

ReactDOM.render((
    <App/>
), document.getElementById('container'));