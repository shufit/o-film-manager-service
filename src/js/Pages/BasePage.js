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
import {
    ActivityIndicator,
    Toast,
} from 'antd-mobile';
import axios from 'axios';

var moment = require('moment');


window.isLogin = true;
class BasePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showLoading:false,
            UserId:undefined,
            isLogin:false,
        };
        this.userID = 4;
    }


    componentDidMount() {
      window.userID = 4;
    }

    //获取当前的时间戳
    getTimeStamp() {
        console.log('时间戳：' + moment());
        return moment();
    }

    showLoading() {
        this.setState({
            showLoading:true,
        });
    }

    hideLoading() {
        this.setState({
            showLoading:false,
        });
    }

    showSuccessToast(content) {
        Toast.success(content, 3, null, true);
    };

    showFailTost(content) {
        Toast.fail(content, 3, null, true);
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

    // requestUserId() {
    //     this.showLoading();
    //     axios.get('https://test.it.o-film.com/ofilm-hk-srv/portal/giveMeUser', {
    //         params:{
    //             'code':'658G7t6XQyrryOEDDHpMyW2ykWxlGkYo5ne4viOaBTA',
    //             'state':'state',
    //         }
    //     })
    //     .then(function(response) {
    //         this.hideLoading();
    //         this.setState({
    //             UserId:response.data.data.id || undefined,
    //             isLogin:true,
    //         }, ()=>{
    //             this.afterGettingUserIdRefresh();
    //         })
    //     })
    //     .catch(function(err){
    //         this.hideLoading();
    //     });
    // }

    afterGettingUserIdRefresh() {
        //获得UserId后请求刷新首页页面，在自类中重写实现
    }

    _renderLoginRootContent() {
        return (
            <div>
                {this._renderLoginContent()}
                <div className="toast-example">
                    <ActivityIndicator
                        toast
                        text="加载中..."
                        animating={this.state.showLoading}
                    />
                </div>
            </div>
        );
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
                {this.state.isLogin ? this._renderLoginRootContent() : this._renderUnloginContent()}
            </div>
        );
    }
  }


export default BasePage;
