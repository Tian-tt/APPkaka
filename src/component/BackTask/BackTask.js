import React from 'react'
import './backtask.css'
import Footer from '../Footer/Footer'
import area from '../images/654.png'
import {Link} from 'react-router-dom'
class BackTask extends React.Component {
  state={
    exitshow:false
  }
  handleClick=()=>{
    this.setState({
      exitshow:true
    })
  }
  handleCancel=()=>{
    this.setState({
      exitshow:false
    })
  }
  render () {
    return(
      <div className="backtask">
        <div className="backheader">
          <a href="javascript:void(0)" onClick={this.handleClick}>取消</a>
          <span>回复任务</span>
        </div>
        <textarea  cols="15" rows="15"
          placeholder="　请详细描述发布者的问题，以便更圆满的完成此次任务。。。">
        </textarea>
        <div className="site">
          <span className='sitearea'>当前位置</span>
          <img src={area} alt=""/>
          <span>北京市　古北口镇司令台村１层</span>
        </div>
        <Link to='/taskDetail'>
          <button>发送</button>
        </Link>
        <Footer />
        <div className="exit" style={{display:this.state.exitshow?'block':'none'}}>
          <div className="redact">退出此次编辑</div>
          <div className="choose">
            <div className="cancel" onClick={this.handleCancel}>取消</div>
            <Link to='/taskDetail'>
              <div className="logoff">退出</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BackTask;
