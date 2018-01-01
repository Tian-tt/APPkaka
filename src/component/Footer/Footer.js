import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import skip1 from '../images/u9.png'
import skip11 from '../images/u14.png'
import skip2 from '../images/u21.png'
import skip22 from '../images/u26.png'
import skip3 from '../images/u32.png'
import skip33 from '../images/u38.png'
import skip4 from '../images/u42.png'
import skip44 from '../images/u48.png'
import skip5 from '../images/u52.png'
import skip55 from '../images/u58.png'
import './footer.css'
class Footer extends React.Component {
  state={
    active1:false,
    active2:false,
    active3:false,
    active4:false,
    active5:false,
  }
  handleClick1=()=>{
    this.setState({
      active1:true,
      active2:false,
      active3:false,
      active4:false,
      active5:false
    })
    this.props.history.push('/home')
  }
  handleClick2=()=>{
    this.setState({
      active2:true,
      active1:false,
      active3:false,
      active4:false,
      active5:false
    })
    this.props.history.push('/discover')
  }
  handleClick3=()=>{
    this.setState({
      active3:true,
      active1:false,
      active2:false,
      active4:false,
      active5:false
    })
    this.props.history.push('/home')
  }
  handleClick4=()=>{
    this.setState({
      active4:true,
      active1:false,
      active2:false,
      active3:false,
      active5:false
    })
    this.props.history.push('/message')
  }
  handleClick5=()=>{
    this.setState({
      active5:true,
      active1:false,
      active2:false,
      active3:false,
      active4:false
    })
    this.props.history.push('/my')
  }
  render () {
    return(
      <div className="footer">
        <div className="div1" onClick={this.handleClick1}>
          <img src={this.state.active1?skip1:skip11} alt=""/>
          <span style={{color:this.state.active1?'red':'#4e4d4d'}}>首页</span>
        </div>
        <div className="div2" onClick={this.handleClick2}>
          <img src={this.state.active2?skip22:skip2} alt=""/>
          <span style={{color:this.state.active2?'red':'#4e4d4d'}}>发现</span>
        </div>
        <div className="div3" onClick={this.handleClick3}>
          <img src={this.state.active3?skip33:skip3} alt=""/>
          <span style={{color:this.state.active3?'red':'#4e4d4d'}}>发布</span>
        </div>
        <div className="div4" onClick={this.handleClick4}>
          <img src={this.state.active4?skip44:skip4} alt=""/>
          <span style={{color:this.state.active4?'red':'#4e4d4d'}}>消息</span>
        </div>
        <div className="div５" onClick={this.handleClick5}>
          <img src={this.state.active5?skip55:skip5} alt=""/>
          <span style={{color:this.state.active5?'red':'#4e4d4d'}}>我的</span>
        </div>
      </div>
    )
  }
}
export default withRouter(Footer);
