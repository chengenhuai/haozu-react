import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
      let {navData} = this.props;
        return (
            <div className='nav'>
            {
                navData.map((item,index)=>{
                    return <dl key={index} onClick={()=>this.changePath(index+1,{item})}>
                            <dt></dt>
                            <dd>{item.name}</dd>
                        </dl>
                })
            }
            </div>
    )
  }
  changePath(e,id) {
      this.props.changePath(e,id)
  }
}
