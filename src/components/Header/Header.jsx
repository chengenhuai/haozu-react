import React, { Component } from 'react'
import './style.css'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  constructor() {
    super()
  }
  render() {
    let {city} = this.props;
    return (
        <div id='header'>
            <div>
              <img src="https://wap-cdn.haozu.com/static/image/new/logo.png" alt="" onClick={()=>this.goToHome()}/>
            </div>
            <div>
              <span onClick={()=>this.changeCityName()}>{city}</span>
            </div>
            <div onClick={()=>this.goToSearch()}></div>
            <div onClick={()=>this.goToLogin()}></div>
        </div>
    )
  }
  goToHome() {
    this.props.history.push('/index')
  }
  goToSearch() {
    this.props.history.push('/search')
  }
  goToLogin() {
    this.props.history.push('/login')
  }
  changeCityName() {
    this.props.changeCityName()
  }
}

export default withRouter(Header)
