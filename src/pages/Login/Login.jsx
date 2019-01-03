import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <div className='banner'>
            <img src="https://muc-cdn.haozu.com/mucstatic/images/logo_welfare.png" alt="" className='images_01'/>
            <img src="https://muc-cdn.haozu.com/mucstatic/images/banner_03.jpg" alt="" className='images_02'/>
        </div>
        <div className='login'>
            登录 | 注册
        </div>
        <div className='from'>
            <div className='answer'>
                <div></div>
                <input type="text" placeholder='请输入您的手机号'/>
            </div>
            <div className='answer'>
                <div></div>
                <input type="text" placeholder='短信验证码'/>
                <button>发送验证码</button>
            </div>
            <button className='register'>登录</button>
        </div>
      </div>
    )
  }
}
