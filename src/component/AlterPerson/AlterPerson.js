import React from 'react'
import './alterperson.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import chen from '../images/146.png'
import drop from '../images/u414.png'
class AlterPerson extends React.Component {
  render () {
    return(
      <div className="alterperson">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>修改个人资料</span>
        </div>
        <div className="bg">
          <img src={chen} alt=""/>
          <button>点击更换头像</button>
        </div>
        <div className="alterpersonContent">
          <div>
            <span>昵称</span>
            <span>xx、超</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>性别</span>
            <span>男</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>年龄</span>
            <span>22岁</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>现居地</span>
            <span>北京市　朝阳区</span>
            <img src={drop} alt=""/>
          </div>
          <div>
            <span>个性签名</span>
            <span>江湖救急，助人为乐！</span>
            <img src={drop} alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AlterPerson;
