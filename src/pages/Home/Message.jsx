import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Message extends Component {
  render() {
    return (
        <div className='message'>
            <div className='text'>
                <span>资讯中心</span>
                <span onClick={()=>this.goToMessage()}>更多></span>
            </div>
            <dl>
                <dt><img src="https://fang-oss.haozu.com//hzfs65/FG/JY/03/1168eee91edc159f8e20a18291c92504.jpg@230w_180h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10" alt=""/></dt>
                <dd>
                    <div>投资写字楼和投资其他区别在哪里？</div>
                    <div>近年来，写字楼正逐渐成为房地产市场的热点，投资写字楼已成为个人投资的新“金矿”。未来的十年，不一定是住宅地产的黄金十年，但一定会是写字楼的黄金十年.</div>
                </dd>
            </dl>
            <div className='news'>
                <span>粤港澳大湾区规划将出台 四大产业链受益</span>
                <span>05-28</span>
            </div>
            <div className='news'>
                <span>聚焦博鳌·房地产论坛 好租首发2018年2季度商办报告</span>
                <span>07-25</span>
            </div>
            <div className='news'>
                <span>开发区人才培养新政重磅发布！</span>
                <span>10-31</span>
            </div>
            <div className='news'>
                <span>老板室装修需要注意的事项</span>
                <span>10-31</span>
            </div>
            <div className='advertising'>
                <img src="https://wap-cdn.haozu.com/static/build/image/through_beijng.jpg" alt=""/>
            </div>
        </div>
    )
  }
  goToMessage() {
      this.props.history.push('/message')
  }
}

export default withRouter(Message)
