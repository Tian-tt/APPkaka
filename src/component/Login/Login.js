import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import Imglogo from '../images/apple-touch-icon.png'
import Imgwe from '../images/webwxgetmsgimg (2).jpg'
import Imgwq from '../images/webwxgetmsgimg (1).jpg'
import Imgwqe from '../images/webwxgetmsgimg.jpg'
import Phone from '../images/66.png'
import Password from '../images/222.png'
import Footer from '../Footer/Footer'
class Login extends React.Component {
  state={
    phone:'',
    password:''
  }
  handlePhone=(e)=>{
    this.setState({
      phone:e.target.value
    })
  }
  handlePassword=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  render () {
    let path = this.state.phone=='123'&&this.state.password=='123' ? '/home':'/login'
    return(
      <div className='wraplogin'>
        <img src={Imglogo} alt="" className='Imglogo'/>
        <div className='bg'>
          <input type="phone" placeholder='请输入手机号' value={this.state.phone} onChange={(e)=>this.handlePhone(e)}/>
          <input type="password" placeholder='请输入密码' value={this.state.password} onChange={(e)=>this.handlePassword(e)} />
        </div>
        <span className='forget'>忘记密码？<a href="javascript:void(0)">重置</a></span>
        <Link
          to={this.state.phone=='123'&&this.state.password=='123' ? '/home':'/login'}>
          <button className='join'>登录</button>
        </Link>
        <div className='slice'>
          <div className='line'></div>
          <span> or </span>
          <div className='line'></div>
        </div>
        <div className='links'>
          <img src={Imgwe} alt=""/>
          <img src={Imgwq} alt=""/>
          <img src={Imgwqe} alt=""/>
        </div>
        <button className='see'>随便看看</button>
        <Footer />
      </div>
    )
  }
}

export default Login;
