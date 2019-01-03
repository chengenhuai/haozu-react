import React, { Component } from 'react'

export default class Business extends Component {
  render() {
    let {photographData,siteData} = this.props;
    return (
        <div className='content'>
            <div className='core'>
            核心商圈
            </div>
            <div className='photograph'>
                {
                    photographData.map((item,index)=>{
                        return <dl key={index}>
                                    <dt><img src={item.url}/></dt>
                                    <dd>
                                        <div><span>{item.name}</span></div>
                                    </dd>
                                </dl>
                    })
                }
            </div>
            <div className='site'>
            <span>区域</span>
            <span>附近写字楼</span>
            </div>
            <div className='place'>
                {
                    siteData.map((item,index)=>{
                        return <span key={index}>{item}</span>
                    })
                }
            </div>
        </div>
    )
  }
}
