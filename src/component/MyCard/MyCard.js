import React from 'react'
import './mycard.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import chen from '../images/146.png'
import tree from '../images/tree.jpg'
import sex from '../images/45.png'
import bigeye from '../images/资源 22.png'
import run from '../images/run.png'
class MyCard extends React.Component {
  state={
    visitor:281,
    zan:96
  }
  render () {
    return(
      <div className="mycard">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>我的名片</span>
        </div>
        <div className="tree">
          <img src={tree} alt=""/>
          <span className='visitor'>访客总量 <i>{this.state.visitor}</i></span>
          <span className='zan'>获赞总数 <i>{this.state.zan}</i></span>
          <img src={chen} alt="" className='cardperson'/>
          <span className='phonenum'>18733535695</span>
          <img src={sex} alt="" className='sex'/>
        </div>
        <div className="treeContent">
          <span>山东省　临沂市</span>
          <span>IT互联网</span>
          <span>这家伙很懒哈</span>
          <img src={bigeye} alt=""/>
        </div>
        <img src={run} alt=""/>
        <Footer />
      </div>
    )
  }
}

export default MyCard;
