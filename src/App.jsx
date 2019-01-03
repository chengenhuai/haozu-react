import React, { Component } from 'react'
import RouterView from "./router/RouterView"
import './static/css/reset.css'
import { connect } from 'react-redux'
import {getCitylist,getAreaList} from './api'
import * as allActions from './redux/actions'

class App extends Component {
    componentDidMount() {
        getCitylist().then(res=>{
            this.props.getCityData(res.data)
          })
          getAreaList().then(res=>{
            this.props.getAreaData(res)
          })
    }
  render() {
    return (
        <div className='app'>
            <RouterView routes={this.props.routes}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityData(payload){
            dispatch(allActions.getCityData(payload))
        },
        getAreaData(payload){
            dispatch(allActions.getAreaData(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
