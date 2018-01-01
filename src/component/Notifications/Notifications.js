import React from 'react'
import './notification.css'
import Footer from '../Footer/Footer'
import detail from '../images/detail.png'
class Notifications extends React.Component {
  render () {
    return(
      <div className="notification">
        <div className="header">
          <a href="javascript:history.back()">
            <img src={detail} alt=""/>
          </a>
          <span>系统通知</span>
        </div>
        <div className="notificationTime">
          2017-01-21
        </div>
        <div className="notificationContent">
          <soan className='spantitle'>30秒带你体验随享咔咔</soan>
          <span>随享咔咔是一款可以随时随刻帮助你所想看到的任何一处场景，只要那个地方有网络，有接单人，便能看见虽身不能处的场景。</span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Notifications;
