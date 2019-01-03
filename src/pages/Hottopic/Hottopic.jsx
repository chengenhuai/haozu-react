import React, { Component } from 'react'
import './hottopic.css'
import Special from '../../components/Service/Service'
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css';
import {getLikeList} from '../../api'

export default class Hottopic extends Component {
  constructor() {
    super()
    this.state = {
      bannerData: [{
        url: 'https://fang-oss.haozu.com/hzfs42/HJ/KN/R6/980c0071a4a1c19f4500ba3333c0f3e3.jpg@750w_500h_90q_1c_2e_0l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        id: 0
      },{
        url: 'https://fang-oss.haozu.com/hzfs62/HK/MV/45/fc5544c8932c6725c3b7da0cd0b18d12.jpg@750w_500h_90q_1c_2e_0l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        id: 1
      },{
        url: 'https://fang-oss.haozu.com/hzfs32/DG/LV/57/027e5ab33f9f5708f0f1897ca9c200a6.jpg@750w_500h_90q_1c_2e_0l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        id: 2
      }],
      titleData: [{
        title: '地铁10分钟',
        detail: '全勤是这样的体验'
      },{
        title: '热门楼盘',
        detail: '明星热盘 万众皆选'
      },{
        title: '带办公家具',
        detail: '拎包入住 即刻开工'
      }],
      bannerIndex: 0,
      articleData: [{
        url:'https://fang-oss.haozu.com/hzfs79/FG/IJ/QX/2eea0aad40fe5137ab11c221648d3b86.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'知名物业',
        title:'您身边的私人管家'
      },{
        url:'https://fang-oss.haozu.com/hzfs22/KY/13/47/6bbde531de26fa8b8d169ca55eb5b953.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'稀缺房源',
        title:'贵乎稀有 得之吾幸'
      },{
        url:'https://fang-oss.haozu.com/hzfs19/DF/VW/57/fcb6a7d3ddde1f823dc06f5a998b4041.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'知名开发商',
        title:'名企巨制 办公尊享'
      },{
        url:'https://fang-oss.haozu.com/hzfs97/AC/G5/68/b0394790796c9c15878132215afcd70f.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'免费车位',
        title:'乐享工作 舒心驾乘'
      },{
        url:'https://fang-oss.haozu.com/hzfs90/MQ/R2/45/3293d9479d6756ddd1dbebeba3984b33.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'南北通透',
        title:'冬有阳光 夏拥清风'
      },{
        url:'https://fang-oss.haozu.com/hzfs96/JR/TV/05/1b6186b559241743d1db30959955eb9d.jpg@375w_200h_90q_1c_1e_1l%7Cwatermark=1&object=aGFvenUucG5n&t=90&p=9&x=10&y=10',
        name:'户型方正',
        title:'布局合理 风水尤佳'
      }],
      listData:[],
      listActiveData: [
        '普通办公',
        '创意园区'
      ],
      activeIndex:0,
      index:1,
      defaultIndex:0
    }
  }
  componentDidMount() {
    new Swiper('.banner',{
      autoplay:true,
      delay:4000,
      loop: true
    })
    let {defaultIndex,index} = this.state
    getLikeList(defaultIndex+1,index).then(res=>{
      this.setState({
        listData:res
      })
    })
    if (this.contentNode) {
      this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
    }
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
    let {index,defaultIndex,listData} = this.state
    index++
    if (isBottom) {
      getLikeList(defaultIndex,index).then(res=>{
        res = listData.concat(res)
        this.setState({
          listData:res,
          index
        })
      })
    }
  }
  goToBack() {
    this.props.history.goBack()
  }
  render() {
    let {titleData,bannerIndex,articleData,listData,activeIndex,listActiveData} = this.state
    return (
      <div className='hottopic' ref={ node => this.contentNode = node }>
          <div className='header'>
            <div className='banner swiper-container'>
              <div className='list swiper-wrapper'>
                {
                  this.state.bannerData.map((item,index) => {
                    return <div className='li swiper-slide' key={index} onTouchEnd={(()=>this.changeSwiperIndex({index}))}>
                            <img src={item.url} alt=""/>
                          </div>
                  })
                }
              </div>
            </div>
            <div className='feature'>
                <div onClick={()=>this.goToBack()}></div>
                <div></div>
                <div></div>
            </div>
            <div className='title'>
                <p>{titleData[bannerIndex].title}</p>
                <p>{titleData[bannerIndex].detail}</p>
            </div>
            <div className='pagition'>
                {bannerIndex+1}/3
            </div>
          </div>
          <div className='article'>
            {
              articleData.map((item,index)=>{
                return <dl key={index}>
                        <dt>
                          <img src={item.url} alt=""/>
                        </dt>
                        <dd>
                          <p>{item.name}</p>
                          <p>{item.title}</p>
                        </dd>
                      </dl>
              })
            }
          </div>
          <div className='block'></div>
          <div className='guess'>
            <div className='text'>
              <span>猜你喜欢</span>
              <div className='hr'></div>
            </div>
            <div className='point'>
              <div className='cut'>
                {
                  listActiveData.map((item,index)=>{
                    return <div key={index}>
                            <span 
                              className={activeIndex == index ? 'active' : null} 
                              onClick={()=>this.changeIndex(index)}
                            >{item}</span>
                          </div>
                  })
                }
              </div>
                {
                  listData.map((item,index)=>{
                    return <div className='content' key={index}>
                              {
                                index == 4 ? 
                                  <div>
                                    <div className='block'></div>
                                    <Special></Special>
                                    <div className='block'></div>
                                  </div> : null
                              }
                              <dl>                              
                                <dt>
                                  <img src={item.thumb_image} alt=""/>
                                </dt>
                                <dd>
                                  <p>{item.name}</p>
                                  <p>{item.area_min}-{item.area_max}㎡</p>
                                  <p>{item.district_name}-{item.street_name}</p>
                                  <p>{item.subway_display}</p>
                                  <p>
                                    {
                                      item.building_tags && item.building_tags.map((value,id)=>{
                                        return <span key={id}>{value}</span>
                                      })
                                    }
                                  </p>
                                  <div>
                                    <span>{item.price}</span>元/m²⋅天
                                  </div>
                                </dd>
                              </dl>
                            </div>
                  })
                }
            </div>
          </div>
          
      </div>
    )
  }
  changeSwiperIndex(e) {
    if(e.index != 2){
      this.setState({
        bannerIndex:e.index+1
      })
    } else {
      this.setState({
        bannerIndex:0
      })
    }
  }
  changeIndex(e) {
    let {activeIndex,defaultIndex,index} = this.state;
    console.log(e)
    if (e == 0) {
      if (activeIndex != e) {
        getLikeList(e+1,1).then(res=>{
          this.setState({
            listData:res,
            defaultIndex:1,
            index:1
          })
        })
      }
    } else {
      if (activeIndex != e) {
        getLikeList(6,1).then(res=>{
          this.setState({
            listData:res,
            defaultIndex:6,
            index:1
          })
        })
      }
    }
    this.setState({
      activeIndex:e
    })
  }
}
