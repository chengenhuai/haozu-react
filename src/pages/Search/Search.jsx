import React, { Component } from 'react'
import './search.css'
import {withRouter} from 'react-router-dom'
import {getSearchlist} from '../../api'

class Search extends Component {
    state = {
        listData: [],
        siteData: [
            '望京','来广营','三元桥','酒仙桥','亚运村','望京SOHO','嘉美中心','绿地中心'
        ]
    }
    timer = null;
    render() {
        let {listData,siteData} = this.state;
        return (
            <div className='search'>
                <div className='header'>
                    <div>
                        <input type="text" 
                            placeholder='搜索楼盘/商圈' 
                            onInput={this.changeValue} 
                            onKeyDown={(e)=>this.goTosearch(e)}
                        />
                        <div></div>
                    </div>
                    <div onClick={()=>this.goBack()}>
                        取消
                    </div>
                </div>
                <div className='content'>
                    <div className='seek'>
                        大家都在找
                    </div>
                    <div className='list'>
                        {
                            siteData.map((item,index)=>{
                                return <span key={index} onClick={()=>this.goToList(item)}>{item}</span>
                            })
                        }
                    </div>
                </div>
                <ul className='point'>
                    {
                        listData.map((item,index)=>{
                            return <li 
                                        key={index} 
                                        onClick={()=>this.gotransfer(item)}
                                    >{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    goBack() {
         this.props.history.goBack()
    }
    changeValue=(e)=> {
        if (e.target.value.length != 0) {
            this.setState({
                InputValue:e.target.value
            })
            clearTimeout(this.timer)

            this.timer = setTimeout(()=>{
                getSearchlist(this.state.InputValue).then(res=>{
                    this.setState({
                        listData:res
                    })
                })
            },300)
        } else {
            this.setState({
                listData:[]
            })
        }
    }
    goTosearch(e){
        if (e.keyCode == 13) {
            clearTimeout(this.timer)
            this.props.history.push('/renting?bid=&keyword='+this.state.InputValue)
        }
    }
    gotransfer(e){
        this.props.history.push('/renting?bid='+e.id+'&keyword='+e.name)
    }
    goToList(e){
        this.props.history.push('/renting?bid=&keyword='+e)
    }
}

export default withRouter(Search)
