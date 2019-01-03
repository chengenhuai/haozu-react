import React, { Component } from 'react'
import './index.css'

export default class Dialog extends Component {
    constructor() {
        super()
        this.state = {
            activeIndex: sessionStorage.getItem('activeIndex') || 0,
            city: sessionStorage.getItem('city') || '北京'
        }
    }
    render() {
        let {city,cityData,isShow} = this.props;
        const html = <div className='dialog'>
                        <div className='box'>
                            <div className='point'>
                                <div className='choose'>
                                    <div>
                                        选择城市<span>[当前:{city}]</span>
                                    </div>
                                    <div onClick={()=>this.changeIs()}>&times;</div>
                                </div>
                                <div className='citysite'>
                                    {
                                        cityData.map((item,index)=>{
                                            return <div 
                                                key={index} 
                                                className={this.state.activeIndex == index ? 'active' : ''}
                                                onClick={()=>this.changeIndex({item},index)}
                                            >
                                                        <span>{item.name}</span>
                                                    </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
        return isShow == true ? '' :html
        
    }
    changeIndex(e,id) {
        this.setState({
            activeIndex:id
        })
        sessionStorage.setItem('activeIndex',id)
        this.props.changeCity(e.item.name)
    }
    changeIs() {
        this.props.changeIs()
    }
}
