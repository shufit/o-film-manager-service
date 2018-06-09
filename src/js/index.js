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

} from 'react-weui';

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
            <Page className={'footer'} title={'Footer'} subTitle={'脚页'} spacing>
                <Footer>
                    <FooterLinks>
                        <FooterLink href="javascript:void(0);">Link</FooterLink>
                    </FooterLinks>
                    <FooterText>Copyright &copy; 2002-2018 o-film.iWork</FooterText>
                </Footer>


            </Page>
        );
    }
}

if (module.hot) {
    module.hot.accept(()=>{
        ReactDOM.render((
            <App/>
        ), document.getElementById('container'));
    })
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));