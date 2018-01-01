import React from 'react'
import './my.css'
import chen from '../images/146.png'
import dao from '../images/33.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import account1 from '../images/account1.png'
import account2 from '../images/account2.png'

import task1 from '../images/task1.png'
import task2 from '../images/task2.png'
import task3 from '../images/task3.png'

import opinion1 from '../images/opinion1.png'
import opinion2 from '../images/opinion2.png'
import opinion3 from '../images/opinion3.png'

class My extends React.Component {
  handleClick1=()=>{
    this.props.history.push('/myaccount')
  }
  handleClick2=()=>{
    this.props.history.push('/integral')
  }
  handleClick3=()=>{
    this.props.history.push('/joboff')
  }
  handleClick4=()=>{
    this.props.history.push('/taskpost')
  }
  handleClick5=()=>{
    this.props.history.push('/collect')
  }
  handleClick6=()=>{
    this.props.history.push('/feedback')
  }
  handleClick7=()=>{
    this.props.history.push('/aboutus')
  }
  handleClick8=()=>{
    this.props.history.push('/setting')
  }

  handleClick=()=>{
    this.props.history.push('/mycard')
  }

  render () {
    return(
      <div className="center">
        <Header />
        <div className="card">
          <div className="left">
            <img src={chen} alt=""/>
            <span>18733535695</span>
            <button onClick={this.handleClick}>我的名片</button>
          </div>
          <div className="right">
            <img src={dao} alt=""/>
            <span>签到</span>
          </div>
        </div>
        <div className='account div'>
          <div onClick={this.handleClick1}>
            <div className="left">
              <img src={account1} alt=""/>
            </div>
            <div className="right">
              <span>我的账户</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
          <div onClick={this.handleClick2}>
            <div className="left">
              <img src={account2} alt=""/>
            </div>
            <div className="right">
              <span>积分充值</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
        </div>

        <div className='task div'>
          <div onClick={this.handleClick3}>
            <div className="left">
              <img src={task1} alt=""/>
            </div>
            <div className="right">
              <span>已完成任务</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
          <div onClick={this.handleClick4}>
            <div className="left">
              <img src={task2} alt=""/>
            </div>
            <div className="right">
              <span>已发布任务</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
          <div onClick={this.handleClick5}>
            <div className="left">
              <img src={task3} alt=""/>
            </div>
            <div className="right">
              <span>我的收藏</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
        </div>
        <div className='opinion div'>
          <div onClick={this.handleClick6}>
            <div className="left">
              <img src={opinion1} alt=""/>
            </div>
            <div className="right">
              <span>意见反馈</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
          <div onClick={this.handleClick7}>
            <div className="left">
              <img src={opinion2} alt=""/>
            </div>
            <div className="right">
              <span>关于我们</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
          <div onClick={this.handleClick8}>
            <div className="left">
              <img src={opinion3} alt=""/>
            </div>
            <div className="right">
              <span>设置</span>
              <span className='dropdown'> > </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default My;
