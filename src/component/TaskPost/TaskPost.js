import React from 'react'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import {Link} from 'react-router-dom'
import './taskpost.css'
import img from '../images/u640.png'
class TaskPost extends React.Component {
  render () {
    return(
      <div className="taskpost">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>已发布任务</span>
        </div>
        <div className="img">
          <img src={img} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default TaskPost;
