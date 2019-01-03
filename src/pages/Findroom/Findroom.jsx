import React, { Component } from 'react'
import './style.css'
import Findroom from '../../components/Findheader/index.jsx'

export default class componentName extends Component {
    render() {
        return (
            <div className='findroom'>
                <Findroom></Findroom>
                <div className='banner'>
                    <img src="https://m.haozu.com/static/build/image/entrust_bg1.jpg"/>
                    <div className='speediness'>
                        快速找办公室入口
                    </div>
                </div>
                <div className='content'>
                    <div className='submit'>
                        已有 
                        <span>3</span>
                        <span>6</span>
                        <span>9</span>
                        <span>4</span>
                        <span>2</span>
                        <span>5</span>
                         人提交了委托申请
                    </div>
                    <div className='from'>
                        <input type="text" placeholder='请 输 入 您 的 手 机 号'/>
                        <button>立即委托</button>
                    </div>
                    <h5>找办公室流程</h5>
                    <div className='seek'>
                        <ul>
                            <li>
                                <div className='position'>
                                    <img src={require('../../static/img/biji.png')} alt=""/>
                                </div>
                                <div>
                                    <span>1</span>填写手机号码
                                </div>
                            </li>
                            <li>
                                <div className='position'>
                                    <img src={require('../../static/img/kefu.png')} alt=""/>
                                </div>
                                <div>
                                    <span>2</span>10分钟内客服回访
                                </div>
                            </li>
                            <li>
                                <div className='position'>
                                    <img src={require('../../static/img/fangan.png')} alt=""/>
                                </div>
                                <div>
                                    <span>3</span>专业顾问量身制定选址方案
                                </div>
                            </li>
                            <li>
                                <div className='position'>
                                    <img src={require('../../static/img/weizhi.png')} alt=""/>
                                </div>
                                <div>
                                    <span>4</span>实地带看
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='choose'>
                        <div className='whychiise'>
                            为什么选择好租？
                        </div>
                        <div className='text'>
                        好租网-领先的O2O互联网办公服务平台，致力于为中国企业提供从写字楼租赁到覆盖各类强相关服务领域的整体解决方案，
                        打造O2O企业服务平台的生态闭环。
                        </div>
                    </div>
                </div>
                <div className='findfooter'>
                    <div>
                        <button>电话咨询</button>
                    </div>
                    <div>
                        <button>立即委托</button>
                    </div>
                </div>
            </div>
        )
    }
}
