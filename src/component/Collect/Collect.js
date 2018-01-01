import React from 'react'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import './collect.css'
import img from '../images/u918.png'
class Collect extends React.Component {
  render () {
    return(
      <div className="collect">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>我的收藏</span>
        </div>
        <div className="img">
          <img src={img} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Collect;
