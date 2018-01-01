import React from 'react'
import './alterpassword.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import chen from '../images/146.png'
import drop from '../images/u414.png'
class AlterPassword extends React.Component {
  state={
    value1:null,
    value2:null,
    value3:null
  }
  handleChange1=(e)=>{
    this.setState({
      value1:e.target.value
    })
  }
  handleChange2=(e)=>{
    this.setState({
      value2:e.target.value
    })
  }
  handleChange3=(e)=>{
    this.setState({
      value3:e.target.value
    })
  }
  handleClick=()=>{
    this.props.history.push('/setting')
  }
  render () {
    return(
      <div className="alterpassword">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>修改密码</span>
        </div>
        <div className="alterpasswordContent">
          <input type="text" value={this.state.value1}
            onChange={(e)=>{this.handleChange1(e)}}
            placeholder='请输入原始密码'/>
          <input type="password" value={this.state.value2}
            onChange={(e)=>{this.handleChange2(e)}}
            placeholder='请输入新密码'/>
          <input type="password" value={this.state.value3}
            onChange={(e)=>{this.handleChange3(e)}}
            placeholder='请再次输入新密码'/>
        </div>
        <button onClick={this.handleClick}>保存</button>
        <Footer />
      </div>
    )
  }
}

export default AlterPassword;
