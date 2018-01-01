import React from 'react'
import './aboutus.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import Imglogo from '../images/apple-touch-icon.png'
class AboutUs extends React.Component {
  render () {
    return(
      <div className="aboutus">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>关于我们</span>
        </div>
        <img src={Imglogo} alt=""/>
        <h3>帮你所看　随享咔咔</h3>
        <div className="aboutContent">
          <div className="weixin">
            <span>官方微信: weijichao1125</span>
          </div>
          <div className="email">
            <span>联系邮箱: 727320883@qq.com</span>
          </div>
          <div className="telphone">
            <span>手机号码: 18733535695</span>
          </div>
        </div>
        <span>关于我们:</span>
        <p>
          一个帮你实现你现在想看所看不到的景象平台帮你了解现在所发生的真实景象
        </p>
        <Footer />
      </div>
    )
  }
}

export default AboutUs;
