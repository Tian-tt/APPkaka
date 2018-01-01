import React from 'react'
import './header.css'
import Imgkaka from '../images/149541444.jpg'
class Header extends React.Component {
  render () {
    return(
      <div className="headers">
        <img src={Imgkaka} alt=""/>
      </div>
    )
  }
}

export default Header;
