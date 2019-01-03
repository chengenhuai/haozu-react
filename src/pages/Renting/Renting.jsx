import React, { Component } from 'react'
import './renting.css'
import Dialog from '../../components/Dialog/Dialog'
import Rent from '../../components/Rent/Rent'
import Loading from '../../components/Loading/Loading'
import {getCitylist,
  getTenement,
  getHoustlist,
  getlistBid
} from '../../api'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'

class Renting extends Component {
  constructor() {
    super()
    this.state = {
      dialog: true,
      listData: [],
      city: sessionStorage.getItem('city') || '北京',
      isShow: true,
      tabIndex: 0,
      adsorb:false,
      activeIndex:0,
      listCity: [{
        name: '全北京'
      },{
        name: '海淀',
        list: [{
          id: 'house-haidian',
          name: '全海淀'
        },{
          id: 'house-haidian--zhongguancunsq',
          name: '中关村'
        },{
          id: 'house-haidian--dazhongsisq',
          name: '大钟寺'
        },{
          id: 'house-haidian--madiansq',
          name: '马甸'
        },{
          id: 'house-haidian--wudaokousq',
          name: '五道口'
        },{
          id: 'house-haidian--qinghesq',
          name: '清河'
        },{
          id: 'house-haidian--xisanqi',
          name: '西三旗'
        },{
          id: 'house-haidian--zizhuqiao',
          name: '紫竹桥'
        },{
          id: 'house-haidian--gongzhufensq',
          name: '公主坟'
        },{
          id: 'house-haidian--baishiqiaosq',
          name: '白石桥'
        },{
          id: 'house-haidian--haidianqitasq',
          name: '海淀其他'
        },{
          id: 'house-haidian--sijiqingsq',
          name: '四季青'
        },{
          id: 'house-haidian--xueyuanlusq',
          name: '学院路'
        },{
          id: 'house-haidian--mudanyuansq',
          name: '牡丹园'
        },{
          id: 'house-haidian--haidianhuangzhuangsq',
          name: '海淀黄庄'
        },{
          id: 'house-haidian--malianwasq',
          name: '马连洼'
        },{
          id: 'house-haidian--renmindaxuesq',
          name: '人民大学'
        },{
          id: 'house-haidian--suzhoulusq',
          name: '苏州路'
        },{
          id: 'house-haidian--wanshoulusq',
          name: '万寿路'
        },{
          id: 'house-haidian--weigongcunsq',
          name: '魏公村'
        },{
          id: 'house-haidian--yongfengsq',
          name: '永丰'
        },{
          id: 'house-haidian--zhichunlusq',
          name: '知春路'
        },{
          id: 'house-haidian--sdxeqsq',
          name: '上地/西二旗'
        },{
          id: 'house-haidian--xizhimenwaisq',
          name: '西直门外'
        }]
      },{
        name: '朝阳'
      },{
        name: '西城'
      },{
        name: '丰台'
      },{
        name: '大兴'
      },{
        name: '石景山'
      },{
        name: '昌平'
      },{
        name: '通州'
      },{
        name: '顺义'
      }]
    }
    this.changeCity = this.changeCity.bind(this)
    this.changeIs = this.changeIs.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.changeCityName = this.changeCityName.bind(this)
  }
  componentDidMount() {
    getCitylist().then(res=>{
      this.setState({ 
          cityData:res.data
      })
    })
    setTimeout(()=>{
      if (this.contentNode) {
        this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
      }
    },1000)
    let id = this.props.location.search.split('=')[1].split('&')[0]
    let index =  this.props.location.search.split('&')[1].split('=')[1]
    if (this.props.location.search.split('&')[2]) {
      let name =  this.props.location.search.split('&')[2].split('=')[1]
      this.setState({
        name
      })
      console.log(id,index,name)
      if(id == 1) {
        getHoustlist('house-list',1).then(res=>{
          this.setState({
            listData: res.data
          })
        })
      } else if(id == 2) {
        getHoustlist(name,1).then(res=>{
          res.data.map((item,index)=>{
            item.thumb_image = item.building_info.thumb_image
            item.title = item.building_info.name
            item.area = item.building_info.showArea
            item.subway_display = item.building_info.district_name + item.building_info.street_name
            item.price = item.building_info.subway_display
            item.avg_price = item.building_info.price
            item.tags = item.building_info.building_tags
          })
          this.setState({
              listData: res.data
            })
        })
      } else if (id == 3) {
        getHoustlist(name,1).then(res=>{
          this.setState({
            listData: res.data
          })
        })
      } else if (id == 4) {
        getHoustlist(name,1).then(res=>{
          res.data.map((item,index)=>{
            item.thumb_image = item.building_info.thumb_image
            item.title = item.building_info.name
            item.area = item.building_info.showArea
            item.subway_display = item.building_info.district_name + item.building_info.street_name
            item.price = item.building_info.subway_display
            item.avg_price = item.building_info.price
            item.tags = item.building_info.building_tags
          })
          this.setState({
            listData: res.data
          })
        })
      } else if (id == 6) {
        getHoustlist(name,1).then(res=>{
          this.setState({
            listData: res.data
          })
        })
      }
      setTimeout(() => {
        this.setState({
          dialog:false
        })
      }, 200);
    } else {
      getlistBid(index).then(res=>{
        this.setState({
          listData: res.data
        })
      })
      setTimeout(() => {
        this.setState({
          dialog:false
        })
      }, 200);
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
    if (scrollTop > 40) {
      let {adsorb} = this.state;
      this.setState({
        adsorb:true
      })
    } else {
      this.setState({
        adsorb:false
      })
    }
  }
  changeTab(e) {
    this.setState({
      tabIndex:e
    })
  }
  changeCityName() {
    this.setState({
      isShow: false
    })
  }
  render() {
    let {adsorb,listCity,activeIndex} = this.state;
    if(!this.props.state){
      return null;
    }
    let {cityData,AreaData} = this.props.state;
    const html = <div className='renting' ref={ node => this.contentNode = node }>
                  <Header 
                    changeCityName={this.changeCityName} 
                    city={this.state.city}
                  ></Header>
                  <div className={`nav ${adsorb === true ? 'adsorb' : ''}`}>
                    <div>位置</div>
                    <div>面积</div>
                    <div>价格</div>
                    <div>更多</div>
                  </div>
                  {/* <div className='nest'>
                    <div className='section'>
                      <div className='title'>
                        <div>
                          <button className='active'>商圈</button>
                        </div>
                        <div>
                          <button>地铁站</button>
                        </div>
                      </div>
                      <div className='substance'>
                        <ul className='left'>
                          {
                            listCity.map((item,index)=>{
                              return <li key={index} onClick={()=>this.changeIndex(index)}>{item.name}</li>
                            })
                          }
                        </ul>
                        <ul className='right'>
                        {
                            listCity[activeIndex].list && listCity[activeIndex].list.map((item,index)=>{
                              return <li key={index}>{item.name}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  <div className='section'>
                    <div className='list'>
                      {
                        this.state.listData.length && this.state.listData.map((item,index) => {
                          return <dl key={index}>
                                    <dt>
                                      <img src={item.thumb_image} alt=""/>
                                    </dt>
                                    <dd>
                                      <p>{item.title}</p>
                                      <p>{item.area}㎡/{item.district_name}{item.circle_name}/|{item.building_name}</p>
                                      <p>{item.subway_display}</p>
                                      <p>
                                        <span>{item.price}</span>万元/月 ({item.avg_price}元/m²天)
                                      </p>
                                      <p>
                                        {
                                          item.tags && item.tags.map((value,key)=>{
                                            return <span key={key}>{value}</span>
                                          })
                                        }
                                      </p>
                                    </dd>
                                  </dl>
                        })
                      }
                    </div>
                  </div>
                  <Rent
                  AreaData={AreaData} 
                  changeTab={this.changeTab} 
                  tabIndex={this.state.tabIndex} 
                  ></Rent>
                  <Dialog 
                    cityData={cityData} 
                    city={this.state.city} 
                    changeCity={this.changeCity}
                    isShow={this.state.isShow}
                    changeIs={this.changeIs}
                  ></Dialog>
              </div>
    return this.state.dialog == true ? <Loading></Loading> : html
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
  changeIndex(e) {
    this.setState({
      activeIndex:e
    })
  }
}

const mapStateToProps = (state) => {
    return {
      state
    }
}

export default connect(mapStateToProps)(Renting)