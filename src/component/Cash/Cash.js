import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import cashmoney from '../images/未标题-2.png'
import './cash.css'
class Cash extends React.Component {
  state={
    value:null
  }
  handleClick=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  render () {
    return(
      <div className="cash">
        <div className="cashHeader">
          <Link to='myaccount'><span>取消</span></Link>
          <h1>积分兑换</h1>
        </div>
        <div className="cashContent">
          <img src={cashmoney} alt=""/>
          <span>积分兑换</span>
          <input type="text" value={this.state.value} onChange={(e)=>{this.handleClick(e)}}/>
          <p>积分余额 860，<span>全部兑现</span></p>
          <Link to='/cashdetail'>
            <button>确定</button>
          </Link>
          <span className='cashtime'>2小时内到账</span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cash;
