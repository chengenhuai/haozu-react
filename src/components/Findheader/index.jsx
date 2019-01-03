import React, { Component } from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'

class Findheader extends Component {
    render() {
        return (
            <div className='findheader'>
                <div onClick={()=>this.goBack()}></div>
                <div>
                    <img src="https://muc-cdn.haozu.com/mucstatic/images/logo_welfare.png" alt=""/>
                </div>
                <div></div>
            </div>
        )
    }
    goBack() {
        this.props.history.goBack()
    }
}

export default withRouter(Findheader)