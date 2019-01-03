import React, { Component } from 'react'

export default class Special extends Component {
    goToHotpage() {
        this.props.goToHotpage()
    }
  render() {
    return (
        <div className='hot'>
            <div className='text'>
                <span>热门专题</span>
                <span onClick={()=>this.goToHotpage()}>更多</span>
            </div>
            <div className='special'>
                <div className='share'>
                    <dl>
                        <dt><img src="https://wap-cdn.haozu.com/static/image/new/shared_office.jpg" alt=""/></dt>
                        <dd>
                            <div><span>共享办公</span></div>
                        </dd>
                    </dl>
                </div>
                <div className='sub'>
                    <dl>
                        <dt><img src="https://fang-oss.haozu.com/hzfs42/HJ/KN/R6/980c0071a4a1c19f4500ba3333c0f3e3.jpg@236w_177h_90q_1c_1e_1l" alt=""/></dt>
                        <dd>
                            <div><span>地铁十分钟</span></div>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="https://fang-oss.haozu.com/hzfs32/DG/LV/57/027e5ab33f9f5708f0f1897ca9c200a6.jpg@236w_177h_90q_1c_1e_1l" alt=""/></dt>
                        <dd>
                            <div><span>带办公家具</span></div>
                        </dd>
                    </dl>
                </div>
                <div className='sub'>
                    <dl>
                        <dt><img src="https://fang-oss.haozu.com/hzfs62/HK/MV/45/fc5544c8932c6725c3b7da0cd0b18d12.jpg@236w_177h_90q_1c_1e_1l" alt=""/></dt>
                        <dd>
                            <div><span>热门楼盘</span></div>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="https://fang-oss.haozu.com/hzfs79/FG/IJ/QX/2eea0aad40fe5137ab11c221648d3b86.jpg@236w_177h_90q_1c_1e_1l" alt=""/></dt>
                        <dd>
                            <div><span>知名物业</span></div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
  }
}
