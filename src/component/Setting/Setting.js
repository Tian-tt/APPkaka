import React from 'react'
import './setting.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import chen from '../images/146.png'
import drop from '../images/u414.png'
class Setting extends React.Component {
  handleClick=()=>{
    this.props.history.push('/login')
  }
  handlePush1=()=>{
    this.props.history.push('/alterperson')
  }
  handlePush2=()=>{
    this.props.history.push('/alterpassword')
  }
  render () {
    return(
      <div className="setting">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>设置</span>
        </div>
        <div className="bg">
          <img src={chen} alt=""/>
        </div>
        <div className="settingContent">
          <div onClick={this.handlePush1}>
            <span>修改个人资料</span>
            <img src={drop} alt=""/>
          </div>
          <div onClick={this.handlePush2}>
            <span>修改密码</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>清除缓存</span>
            <span>210MB</span>
          </div>
          <div>
            <span>是否公开我的消息</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>接收新消息通知</span>
            <img src={drop} alt=""/>
          </div>
        </div>
        <button onClick={this.handleClick}>退出登录</button>
        <Footer />
      </div>
    )
  }
}

export default Setting;
