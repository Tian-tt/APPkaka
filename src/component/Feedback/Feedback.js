import React from 'react'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import './feedback.css'
class Feedback extends React.Component {
  render () {
    return(
      <div className="feedback">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>意见反馈</span>
        </div>
        <div className="feedbackContent">
          <div className="type">
            <span>请选择反馈类型</span>
          </div>
          <div className='numquestion'>
            <span>账号问题</span>
            <div className="redbox"></div>
          </div>
          <div className="describe">
            <textarea cols="50" rows="3" placeholder='最多输入30字...'></textarea>
          </div>
        </div>
        <div className="foot">
          <div className='questions'>
            <span>功能反馈及其他</span>
          </div>
          <div className='questions'>
            <span>积分兑换问题</span>
          </div>
          <div className='questions'>
            <span>充值问题</span>
          </div>
          <Link to='/my'><button>提交</button></Link>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Feedback;
