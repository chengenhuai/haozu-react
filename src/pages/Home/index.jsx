import React, { Component } from "react";
import "./style.css"
import Swipers from "./Swipers"
import Navigation from './Navigation'
import Information from './Information'
import Business from './Business'
import Special from './Special'
import Service from '../../components/Service/Service'
import Message from './Message'
import Dialog from '../../components/Dialog/Dialog'
import Rent from '../../components/Rent/Rent'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'
import { connect } from 'react-redux'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialog: true,
      banner: [
        'https://fang-oss.haozu.com/hzfs54/EK/LO/Z8/39138488e7187cf289b513bce72fd695.jpg@750w_500h_90Q_1c_1e_1l',
        'https://fang-oss.haozu.com/hzfs67/FV/13/48/9b8dd74dbc8fb08e925e012568719a38.png@750w_500h_90Q_1c_1e_1l'
      ],
      navData:[{
        name: '写字楼出租',
        id: '1541079297000',
        param: 'house-list'
      },{
        name: '找楼盘',
        id: '1541079319000',
        param: 'zuxiezilou'
      },{
        name: '共享办公',
        id: '1541079363000',
        param: 'zuxiezilou/a5'
      },{
        name: '创意园区',
        id: '1541079373000',
        param: 'zuxiezilou/a6'
      },{
        name: '品牌馆',
        id: ''
      },{
        name: '上铺出租',
        id: '1541079397000',
        param:'zushangpu'
      },{
        name: '帮你找房',
        id: ''
      },{
        name: '投放房源',
        id: ''
      }],
      informationData:[
        '摩根大通增租领展东九龙海滨汇1层楼面至30万呎',
        '开发区人才培养新政重磅发布！',
        '香港证监会因租金过高拟迁出中环 洽租太古坊商厦10层楼面'
      ],
      photographData: [{
        url:'https://fang-oss.haozu.com/hzfs30/CE/IO/49/7177500f9780bd24e900a95be10c281e.jpg@280w_350h_90Q',
        name: 'CBD/国贸'
      },{
        url:'https://fang-oss.haozu.com/hzfs54/BJ/RS/T5/fb00cf9007e4afe6061389771f55ad53.jpg@280w_350h_90Q',
        name: '中关村'
      },{
        url:'https://fang-oss.haozu.com/hzfs69/NP/TW/Y4/b4f504a76a5f2fc1d396e3ab98d8fab6.jpg@280w_350h_90Q',
        name: '丰台科技园区'
      },{
        url: 'https://fang-oss.haozu.com/hzfs27/EU/V0/27/9ac0f3b04a5bb9dc331e406d0914ceb5.jpg@280w_350h_90Q',
        name: '望京'
      }],
      siteData: [
        '全部','海淀','朝阳','东城','西城','丰台','大兴','石景山','昌平','通州','顺义'
      ],  
      city: sessionStorage.getItem('city') || '北京',
      isShow: true,
      tabIndex: 0
    }
    this.changeCity = this.changeCity.bind(this)
    this.changeShow = this.changeShow.bind(this)
    this.changeIs = this.changeIs.bind(this)
    this.changePath = this.changePath.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.goToHotpage = this.goToHotpage.bind(this)
  }
  goToHotpage() {
    this.props.history.push('/tottopic')
  }
  changeCity(val){
      this.setState({
          city: val,
          isShow: true
      })
      sessionStorage.setItem('city',val)
  }
  changeTab(e) {
    this.setState({
      tabIndex:e
    })
  }
  changeShow(val) {
    this.setState({
        isShow: false
    })
  }
  changeIs() {
    this.setState({
        isShow: true
    })
  }
  changePath(e,id) {
    if (e != 5 && e != 7 && e != 8) {
      this.props.history.push('/renting?id='+e+'&index='+id.item.name+'&name='+id.item.param)
    } else if (e == 7) {
      this.props.history.push('/findroom')
    } else if (e == 8) {
      this.props.history.push('/putin')
    } else {

    }
  }
  goToLogin() {
    this.props.history.push('/login')
  }
  render() {
    let {dialog} = this.state
    if(!this.props.state){
      return null;
    }
    let {cityData,AreaData} = this.props.state;
    const html = <div className='wrap'>
    <Swipers 
        banner={this.state.banner} 
        city={this.state.city} 
        isShow={this.state.isShow}
        changeShow={this.changeShow}
        goToLogin={this.goToLogin}
    ></Swipers>
    <Navigation 
      navData={this.state.navData} 
      changePath={this.changePath}
      ></Navigation>
    <Information informationData={this.state.informationData}></Information>
    <Business photographData={this.state.photographData} siteData={this.state.siteData}></Business>
    <div className='login'>
      <img src='https://wap-cdn.haozu.com/static/image/new/register_09.jpg' alt="" onClick={()=>this.goToLogin()}/>
    </div>
    <Special goToHotpage={this.goToHotpage}></Special>
    <Service></Service>
    <Message></Message>
    <Footer></Footer>
    <Rent 
     AreaData={AreaData} 
     changeTab={this.changeTab} 
     tabIndex={this.state.tabIndex}
    ></Rent>
    <Dialog 
        cityData={cityData} 
        city={this.state.city} 
        changeCity={this.changeCity}
        isShow={this.state.isShow}
        changeIs={this.changeIs}
    ></Dialog>
  </div>
    return dialog ? <Loading></Loading> : html
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        dialog:false
      })
    },200)
    
    // var location ="ws://140.143.201.230:7000/"; 
    //  // 创建 WebSockets 并传入 WebSockets server 地址
    // this._ws = new WebSocket(location); 
    // this._ws.onmessage = this._onmessage; 
    // console.log(this._ws)
    // this._ws.addEventListener("message", function( event ) { 
    //   // 把父窗口发送过来的数据显示在子窗口中
    //   // document.getElementById("content").innerHTML+=event.data+"<br/>"; 
    //   console.log(event)
    // }, false );
  }
}

const mapStateToProps = (state,ownProps)=>{
  return {
    state
  }
}

export default connect(mapStateToProps)(IndexPage)