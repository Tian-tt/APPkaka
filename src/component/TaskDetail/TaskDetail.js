import React from 'react'
import './taskdetail.css'
import Footer from '../Footer/Footer'
import back from '../images/detail.png'
import price from '../images/未标题-2.png'
import area from '../images/654.png'
import {Link} from 'react-router-dom'

import chen from '../images/146.png'
import chensex from '../images/45.png'

import anran from '../images/688022129042093518.png'
import ansex from '../images/76.png'
import animg from '../images/7777.jpg'

import attention from '../images/u165.png'
import radio from '../images/u183.png'
import radioed from '../images/u173.png'
import bg from '../images/u175.png'

class TaskDetil extends React.Component {
  state={
    show:false,
    imgshow:false
  }

  handleImgClick=()=>{
    this.setState({
      imgshow:!this.state.imgshow
    })
    sessionStorage.img=this.state.imgshow
  }
  handleClick=()=>{
    if(sessionStorage.img==='true'){
      this.setState({
        show:false
      })
      this.props.history.push('/backtask')
    }else{
      this.setState({
        show:true
      })
    }
  }
  componentDidMount() {
    if(sessionStorage.img==='true'){
      this.setState({
        show:false
      })
    }
  }
  handleButton=()=>{
    this.setState({
      show:true
    })
  }
  render () {
    const data=this.props.location.state
    console.log(data);
    return(
      <div className='taskdetail'>
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>任务详情</span>
        </div>
        <div className="person">
          <img src={data.photo} alt="" className='detailphoto'/>
          <div className="namesex">
            <span>{data.name}</span>
            <img src={data.sex} alt=""/>
          </div>
        </div>
        <div className="detail">
          <p>
            {data.text}
          </p>
          <img src={data.animg} alt=""/>
          <div className="taskdet">
            <span className='time'>3分钟前</span>
            <img src={area} alt=""/>
            <span>{data.area}</span>
            <img src={price} alt="" className='money'/>
            <span className='price'>{data.money}</span>
          </div>
        </div>
        <button onClick={this.handleClick}>接受任务</button>
        <div id="attention"
          style={{display:this.state.show ?'block':'none'}}>
          <img src={attention} alt=""/>
          <span className='title'>注意事项</span>
          <p>
            1、请尽量发布真实、有价值的问题答案<br/>
            2、发送内容支持最多5张照片、视频时间不可超过10秒
          </p>
          <p className='sur'>
            1、所有发送内容都会被审查<br/>
            2、禁止发送色情、血腥暴力等不当内容<br/>
            3、如有违反《 随享咔咔内容条约 》将会受到相应的惩<br/>
            罚，严重者追究法律责任
          </p>
          <Link to='/backtask'>
            <button onClick={this.handleButton}>我知道了</button>
          </Link>
          <div className="radioed">
            <div className='radiobox' onClick={this.handleImgClick}>
              <img src={radio} alt="" style={{display:this.state.imgshow ?'block':'none'}}/>
            </div>
            <span className='no'>不再提示</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default TaskDetil;
