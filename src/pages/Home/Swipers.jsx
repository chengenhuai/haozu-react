import React, { Component } from "react";
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css';
import {Link} from 'react-router-dom'

export default class Swipers extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    new Swiper('.header',{
      autoplay:true,
      delay:4000,
      loop: true,
      pagination: {
        el: '.ol'
      }
    })
  }
  render() {
    let {banner,city,isShow} = this.props;
    return (
      <div className="header swiper-contaniner">
        <div className="banner swiper-wrapper">
          {
              banner.map((item, index) => {
                return (
                        <div className="swiper-slide" key={index}>
                            <img src={item} alt="" />
                        </div>
                );
            })
          }
        </div>
        <div className="ol swiper-pagination" />
        <div className="relation">
          <div>
            <img src="https://wap-cdn.haozu.com/static/image/new/logo.png" />
          </div>
          <div>
            <span onClick={()=>this.changeCityName()}>{city}</span>
          </div>
          <div>400-085-2093</div>
          <div onClick={()=>this.goToLogin()}/>
        </div>
        <div className="search">
          <Link to='/search'>
            <div className="text">输入您想找的区域/商圈或者写字楼名称</div>
            <div className="icon">
              <div />
            </div>
          </Link>
        </div>
      </div>
    );
  }
  changeCityName(){
    this.props.changeShow()
  }
  goToLogin() {
    this.props.goToLogin()
  }
}
