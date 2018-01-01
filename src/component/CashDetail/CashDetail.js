import React from 'react'
import './cashdetail.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import cashmoney from '../images/未标题-2.png'
class CashDetail extends React.Component {
  render () {
    return(
      <div className="cashdetail">
        <div className="cashdetailHeader">
          <span>兑换详情</span>
        </div>
        <img src={cashmoney} alt=""/>
        <span>提现申请已提交</span>
        <div className="apply">
          <p>
            <span>预计到账时间</span>
            <span>2017-03-05 12:14:44</span>
          </p>
          <p>
            <span>到账号</span>
            <span>chen xx</span>
          </p>
          <p>
            <span>兑换积分</span>
            <span>B 600</span>
          </p>
          <p>
            <span>手续费</span>
            <span>B 10</span>
          </p>
        </div>
        <Link to='/myaccount'>
          <button>完成</button>
        </Link>
        <Footer />
      </div>
    )
  }
}

export default CashDetail;
