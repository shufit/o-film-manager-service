/* jshint esversion: 6 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    Icon,
    Label,

} from 'react-weui';
import axios from 'axios';
import qs from 'qs';

window.isLogin = true;


class BasePage extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {
      this._configureWeChat();
      this._requestAccessToken();
    }


    _configureWeChat() {
        // wx.config({
        //     beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
        //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //     appId: '', // 必填，企业微信的corpID
        //     timestamp: '', // 必填，生成签名的时间戳
        //     nonceStr: '', // 必填，生成签名的随机串
        //     signature: '',// 必填，签名，见附录1
        //     jsApiList: [
        //         'onMenuShareAppMessage','onMenuShareWechat','chooseImage','previewImage','uploadImage','downloadImage',
        //         'previewFile','getNetworkType','onHistoryBack','selectEnterpriseContact','openEnterpriseChat'
        //     ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        // });
    }


    _requestAccessToken() {
        const corpid = 'ww7b427830e9a91ac9';
        const AppSecret = '5vxrgmVz0SeP4z891tzlvKJxPyO6UXLPX1aQnK00Fd8';
        axios.post('https://qyapi.weixin.qq.com/cgi-bin/gettoken',
        {
            params:{
                corpid:corpid,
                corpsecret:AppSecret,
            },
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    _renderLoginContent() {
        return(
            <div></div>
        );
    }

    _renderUnloginContent() {
        return (
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingTop: 100, flexDirection:'column'}}>
                <Icon size="large" value="info"/>
                <div style={{display:'flex', fontSize: 20, color:'gray', marginTop: 30}}>请使用(企业)微信客户端先登录</div>
            </div>
        );
    }


    render() {
        return (
            <div>
                {isLogin? this._renderLoginContent() : this._renderUnloginContent()}
            </div>
        );
    }
  }


export default BasePage;
