import React from 'react'
import './message.css'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import message1 from '../images/chuxia.png'
import message2 from '../images/message1.png'
import message3 from '../images/message1.png'
class Message extends React.Component {
  render () {
    return(
      <div className="message">
        <Header />
          <div className='news'>
            <img src={message1} alt=""/>
            <div className="newsRight">
              <span>初夏</span>
              <div className="time">
                <p>
                  在吗？
                </p>
                <span className='date'>昨天17:43</span>
              </div>
            </div>
          </div>
        <Link to='/notification'>
          <div className='news'>
            <img src={message2} alt=""/>
            <div className="newsRight">
              <span>系统通知</span>
              <div className="time">
                <p>
                  30秒带你体验随享咔咔
                </p>
                <span className='date'>下午01:25</span>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/myaccount'>
          <div className='news'>
            <img src={message3} alt=""/>
            <div className="newsRight">
              <span>欢迎加入随享咔咔</span>
              <div className="time">
                <p>
                  主人，小咔已恭候多时了，200积分奉上，可在钱包查收。有任何建议可直接在消息中回复小咔。
                </p>
                <span className='date'>2017-01-15</span>
              </div>
            </div>
          </div>
        </Link>
        <Footer />
      </div>
    )
  }
}

export default Message;
