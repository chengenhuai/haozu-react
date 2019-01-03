import React, { Component } from 'react'
import Main from './measurement'
import './style.scss'

export default class Indexpage extends Component {
    state = {
        isShow: true,
        markey: 'center'
    }
    render() {
        let {isShow,markey} = this.state
        return (
            <div className='wrap'>
                <div onClick={()=>this.changeState()} className='btn'>点击出现内容</div>
                <Main isShow={isShow} markey={markey}></Main>
            </div>
        )
    }
    changeState() {
        let {isShow} = this.state
        this.setState({
            isShow:!isShow
        })
    }
}
