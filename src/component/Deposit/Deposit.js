import React from 'react'
import './deposit.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
class Deposit extends React.Component {
  state={
    moneyValue:null
  }
  handleChange=(e)=>{
    this.setState({
      moneyValue:e.target.value
    })
  }
  handleClick=()=>{
    this.props.history.push('/myaccount')
  }
  render () {
    return(
      <div className="deposit">
        <div className="depositHeader">
          <Link to='myaccount'><span>取消</span></Link>
          <h1>零钱提现</h1>
        </div>
        <div className='depositContent'>
           <div>
             <span>到银行卡</span>
             <div>
               <span className='bank'>工商银行　(9647)</span>
               <span className='bankText'>提现到工商银行，手续费<span>0.2%</span></span>
             </div>
           </div>
           <div>
             <span>到微信账号</span>
             <span>午后的阳光　(5695)</span>
           </div>
           <div className='reservePost'>
             <span>提现余额</span>
             <div className="inputText">
               <span>￥</span>
               <input type="text" value={this.state.moneyValue} onChange={(e)=>{this.handleChange(e)}}/>
             </div>
             <p>
               现金余额86.00,<span>全部提现</span>
             </p>
             <button onClick={this.handleClick}>提现</button>
             <span className='reserveTime'>2小时内到账</span>
           </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Deposit;
