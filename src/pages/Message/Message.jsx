import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import Headers from '../../components/Header/Header'
import Dialog from '../../components/Dialog/Dialog'
import Rent from '../../components/Rent/Rent'
import {getMessageList} from '../../api'

class Message extends Component {
  constructor() {
    super()
    this.state = {
      city: sessionStorage.getItem('city') || '北京',
      isShow: true,
      tabIndex: 0,
      listData: [],
      activeIndex:0,
      index:1,
      DataId: 'zx',
      adsorb:false,
      navData: [{
        item: '全部',
        id: 'zx'
      },{
        item: '楼盘介绍',
        id: 'zx_loupan'
      },{
        item: '行业新闻',
        id: 'zx_hangye'
      },{
        item: '好租新闻',
        id: 'zx_haozu'
      },{
        item: '找房攻略',
        id: 'zx_gonglue'
      },{
        item: '办公绿植',
        id: 'zx_lvzhi'
      },{
        item: '办公用品',
        id: 'zx_yongpin'
      },{
        item: '办公室装修',
        id: 'zx_zhuangxiu'
      },{
        item: '商业地产百科',
        id: 'zx_shangye'
      },{
        item: '媒体报道',
        id: 'zx_meiti'
      },{
        item: '共享办公',
        id: 'zx_shared'
      },{
        item: '租周刊',
        id: 'zx_zhoukan'
      }]
    }
    this.changeCity = this.changeCity.bind(this)
    this.changeIs = this.changeIs.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.changeCityName = this.changeCityName.bind(this)
  }
  changeTab(e) {
    this.setState({
      tabIndex:e
    })
  }
  changeCity(val){
    this.setState({
        city: val,
        isShow: true
    })
    sessionStorage.setItem('city',val)
  }
  changeIs() {
    this.setState({
        isShow: true
    })
  }
  changeCityName() {
    this.setState({
      isShow: false
    })
  }
  componentDidMount() {
    if (this.contentNode) {
      this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
    }
    getMessageList('zx',1).then(res=>{
      this.setState({
        listData:res.data
      })
    })
  }
  componentWillUnmount() {
    if (this.contentNode) {
      this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
    }
  }
  onScrollHandle(event) {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    const isBottom = (clientHeight + scrollTop === scrollHeight)
    let {listData,DataId,index} = this.state;
    if (scrollTop > 40) {
      this.setState({
        adsorb:true
      })
    } else {
      this.setState({
        adsorb:false
      })
    }
    index++;
    if (isBottom) {
      getMessageList(DataId,index).then(res=>{
        if (res.data.length > 1) {
          res.data = listData.concat(res.data)
          this.setState({
            listData:res.data,
            index
          })
        } else {
          let temp = []
          let {listData} = this.state
          for(let i in res.data){
            temp.push(res.data[i])
          }
          listData = listData.concat(temp)
          this.setState({
            listData, 
            index
          })
        }
      })
    }
  }
  changeData(e,id) {
    if (id != this.state.activeIndex) {
      getMessageList(e.id,1).then(res=>{
        this.setState({
          listData:res.data
        })
      })
    }
    this.setState({
      activeIndex:id,
      DataId:e.id,
      index:1
    })
  }
  render() {
    let {listData,navData,activeIndex,adsorb} = this.state;
    if(!this.props.state){
      return null;
    }
    let {cityData,AreaData} = this.props.state;
    return (
      <div className='Message' ref={ node => this.contentNode = node }>
          <Headers 
            city={this.state.city} 
            changeCityName={this.changeCityName}
          ></Headers>
          <div className={`nav ${adsorb === true ? 'adsorb' : ''}`}>
            <div>
              {
                navData.map((item,index)=>{
                  return <span 
                    key={index} 
                    onClick={()=>this.changeData(item,index)} 
                    className={index == activeIndex ? 'active' : ''}
                  >{item.item}</span>
                })
              }
            </div>
          </div>
          <div className='content'>
            {
              listData.map((item,index)=>{
                return  <dl key={index}>
                          <dt>
                            <img src={item.thumb_image} alt=""/>
                            <span>{item.category_name}</span>
                          </dt>
                          <dd>
                            <p>{item.title}</p>
                            <p>
                              {item.abstract}
                            </p>
                            <p>{item.ptime}</p>
                          </dd>
                        </dl>
              })
            }
          </div>
          <Rent
            AreaData={AreaData} 
            changeTab={this.changeTab} 
            tabIndex={this.state.tabIndex} 
            name={this.state.name}
          ></Rent>
          <Dialog 
            cityData={cityData} 
            changeCity={this.changeCity} 
            isShow={this.state.isShow} 
            changeIs={this.changeIs}
          ></Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Message)

