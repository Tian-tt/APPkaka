import React from 'react'
import './clicklogin.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch} from 'react-router-dom'
import Login from '../Login/Login'
import Imglogo from '../images/apple-touch-icon.png'
class ClickLogin extends React.Component {
  render () {
    return(
      <div className='wrap'>
        <img src={Imglogo} alt=""/>
        <span　className='logo'>随享咔咔</span>
        <span className='text'>帮你所看　随享咔咔</span>
        <Link to='/login'>
          <button >点击进入</button>
        </Link>
      </div>
    )
  }
}

export default ClickLogin;
