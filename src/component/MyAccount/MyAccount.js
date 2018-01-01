import React from 'react'
import './myaccount.css'
import back from '../images/detail.png'
import news from '../images/u582.png'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

import xianjin from '../images/xianjin.png'
import jifen from '../images/jifen.png'
import bigeye from '../images/资源 22.png'
import list from '../images/list.png'
import question from '../images/question.png'

class MyAccount extends React.Component {
  render () {
    return(
      <div className="myaccount">
        <div className="header">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span className='myaccountpan'>我的账户</span>
          <a href="#">
            <img src={news} alt=""/>
          </a>
        </div>
        <div className="reserve">
          <img src={xianjin} alt=""/>
          <div className='myaccountText'>
            <span>现金余额</span>
            <span className='reservemoney'>26.60</span>
          </div>
          <Link to='/deposit'>
            <button>提现</button>
          </Link>
        </div>
        <div className="reserve">
          <img src={jifen} alt=""/>
          <div className='myaccountText'>
            <span>积分余额</span>
            <span className='reservemoney'>180.00</span>
          </div>
          <Link to='/Cash'>
            <button>兑现</button>
          </Link>
        </div>
        <img src={bigeye} alt=""/>
        <div className='floor'>
          <div>
            <img src={list} alt=""/>
            <span>收支明细</span>
          </div>
          <div>
            <img src={question} alt=""/>
            <span>常见问题</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyAccount;
