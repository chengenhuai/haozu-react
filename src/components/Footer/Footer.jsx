import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <div className='introduce'>
            <div className='character'>
                <div>
                <span>真</span>
                所有房源实地勘测
                </div>
                <div>
                <span>广</span>
                海量楼盘全面覆盖
                </div>
                <div>
                <span>专</span>
                专业顾问选址分析
                </div>
                <div>
                <span>全</span>
                企业服务一站搞定
                </div>
            </div>
            <div className='logobanner'>
                <div>
                <img src="https://wap-cdn.haozu.com/static/image/new/logo.png" alt=""/>
                </div>
                <div>
                免费咨询 : 400-085-2093
                </div>
                <div>
                关于好租
                </div>
                <p>©2015-2018 北京好租科技发展有限公司 京ICP备16019026号</p>
                <p>京公网安备 11010802025685号</p>
                <p>地址：北京市海淀区上地软件园南路57号八维学院</p>
            </div>
            </div>
        </div>
    )
  }
}
