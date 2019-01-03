import React, { Component } from 'react'
import './putin.css'
import Findheader from '../../components/Findheader/index.jsx'

export default class Putin extends Component {
  render() {
    return (
      <div className='putin'>
        <Findheader></Findheader>
        <div className='content'>
            <div>委托好租帮您出租</div>
            <div>海量客源，帮您快速成交</div>
        </div>
         <div className='from'>
            <div className='answer'>
                <input type="text" placeholder='姓名(必填)'/>
            </div>
            <div className='answer'>
                <input type="text" placeholder='手机号码(必填)'/>
            </div>
            <div className='selected'>
                <select>
                    <option value="北京">北京</option>
                </select>
                <select>
                    <option value="选择区域">选择区域</option>
                </select>
                <select>
                    <option value="选择街道">选择街道</option>
                </select>
            </div>
            <div className='answer'>
                <input type="text" placeholder='写字楼名称(必填)'/>
            </div>
            <button className='throwin'>
                立即投放
            </button>
         </div>
      </div>
    )
  }
}
