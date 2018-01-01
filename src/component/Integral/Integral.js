import React from 'react'
import './integral.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
class Integral extends React.Component {
  state={
    value:''
  }
  handleChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  render () {
    return(
      <div className="integral">
        <div className="integralHeader">
          <Link to='/my'><span>取消</span></Link>
          <h1>积分充值</h1>
        </div>
        <div className="integralContent">
          <h2>10元=100积分</h2>
          <h2>选择充值面额</h2>
          <div className="integralChooce">
            <button>10积分</button>
            <button>30积分</button>
            <button>50积分</button>
            <button>100积分</button>
            <button>200积分</button>
            <button>500积分</button>
            <button>1000积分</button>
          </div>
          <div className="another">
            <span>其他: </span>
            <input type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}}/>
            <span> 积分</span>
          </div>
          <h2>选择支付方式</h2>
          <div className="mode">
            <div className="weixin">
              <img src="" alt=""/>
              <span>微信支付</span>
            </div>
            <div className="zhifubao">
              <img src="" alt=""/>
              <span>支付宝</span>
            </div>
          </div>
          <h2>支付金额: <span>　元</span></h2>
        </div>
        <Link to='/my'>
          <button className='ensure'>确定</button>
        </Link>
        <Footer />
      </div>
    )
  }
}

export default Integral;
