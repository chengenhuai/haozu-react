import React from 'react';
import PropTypes from 'prop-types';
  
function Markey(Inner) {
  return class Communal extends React.Component {
    constructor() {
      super()
      this.state = {
        position:{
          center: 'center',
          top: 'top',
          bottom: 'bottom'
        }
      }
    }
    static defaultProps = {
      isShow:true,
      markey:'center'
    }
    static propTypes = {
      isShow:PropTypes.bool
    }
    render() {
      let {position} = this.state;
      let {isShow,markey} = this.props
      return isShow == true ? null :<div id="communal">
                                      <div className={'position ' + 'position-'+position[markey]}>
                                        <Inner></Inner>
                                      </div>
                                    </div>
    }
  }
}

export default Markey