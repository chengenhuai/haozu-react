import React, { Component } from 'react'
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css';

export default class Information extends Component {
    componentDidMount() {
        new Swiper('.information',{
            autoplay:true,
            delay:1000,
            direction: 'vertical',
            loop: true
        })
    }
    render() {
        let {informationData} = this.props;
        return (
            <div className='headlines'>
                <div className='text'>
                    行业头条
                </div>
                <div className='information swiper-container swiper-no-swiping'>
                    <div className='list swiper-wrapper'>
                        {
                            informationData.map((item,index)=>{
                                return <div className='li swiper-slide' key={index}>
                                    <div>{item}</div>
                                        <div></div>
                                </div>
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
