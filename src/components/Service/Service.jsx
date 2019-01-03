import React, { Component } from 'react'
import './index.css'

export default class Service extends Component {
  render() {
    return (
        <div className='service'>
            <img src="https://wap-cdn.haozu.com/static/image/new/entrust_09.jpg" alt=""/>
            <div className='takePhoto'>
                <div className='seek'>
                    专业经纪人帮你找办公室
                </div>
                <div className='search'>
                    <input type="text" placeholder='请输入手机号码 顾问一对一服务'/>
                    <button>马上找房</button>
                </div>
            </div>
            <div className='choose'>已有<span>366514</span>人委托好租找到满意办公室</div>
        </div>
    )
  }
}
