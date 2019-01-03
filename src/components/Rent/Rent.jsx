import React, { Component } from 'react'
import './index.css'
import {withRouter} from 'react-router-dom'

class Rent extends Component {
    render() {
        let {AreaData,tabIndex} = this.props;
        return (
            <div className='rent'>
                <div className='hierarchy'>
                   <b onClick={()=>this.goToHome()}>好租网</b> <span>></span> <b>北京写字楼出租</b>
                </div>
                <div className='valueName'>
                    {
                    AreaData.map((item,index)=>{
                        return <span
                        key={index} 
                        className={tabIndex == index ? 'active' : ''} 
                        onClick={()=>this.changeTab(index)}
                        >{item.name}</span>
                    })
                    }
                </div>
                <div className='cont'>
                    {
                    AreaData[tabIndex] && AreaData[tabIndex].list.map((item,index)=>{
                        return <span key={index} onClick={()=>this.goTolist(item)}>{item}</span>
                    })
                    }
                </div>
            </div>
        )
    }
    changeTab(index) {
        this.props.changeTab(index)
    }
    goToHome() {
        if(this.props.match.path === '/index') {
            
        } else {
            this.props.history.push('/index')
        }
    }
    goTolist(e) {
        console.log(e)
        this.props.history.push(`/renting?bid=&keyword=${e}`)
    }
}

export default withRouter(Rent)

