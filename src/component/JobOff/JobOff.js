import React from 'react'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import './joboff.css'
import img from '../images/u632.png'
class JobOff extends React.Component {
  render () {
    return(
      <div className="joboff">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>已完成任务</span>
        </div>
        <div className="img">
          <img src={img} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default JobOff;
