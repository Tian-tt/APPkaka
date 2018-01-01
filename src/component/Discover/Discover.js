import React from 'react'
import './discover.css'
import { Modal } from 'antd';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import paomo from '../images/u278.svg'
import paomo1 from '../images/u286.svg'
import paomo2 from '../images/u288.svg'
import paomo3 from '../images/u290.svg'

import chuxia from '../images/u337.svg'
import chuxia1 from '../images/u339.svg'
import chuxia2 from '../images/u341.svg'
import chuxia3 from '../images/u345.svg'

import chenxx from '../images/u353.svg'
import chenimg from '../images/u363.jpg'
import chensex from '../images/45.png'

import drop from '../images/u304.png'
import paosex from '../images/u271.svg'
import Area from '../images/654.png'
import link1 from '../images/link1.png'
import link2 from '../images/link2.png'
import link3 from '../images/link3.png'

import img1 from '../images/资源 1.png'
import img2 from '../images/资源 2.png'
import img3 from '../images/资源 3.png'
import img4 from '../images/资源 4.png'
import img5 from '../images/资源 5.png'

class Discover extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render () {
    return(
      <div className="discover">
        <Header />
        <div className="item">
          <img src={paomo} alt="" className='via'/>
          <div className="right">
            <span className='name'>泡沫</span>
            <img src={paosex} alt=""/>
            <img src={drop} alt="" className='drop' onClick={this.showModal}/>
            <p>
              安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦...
            </p>
            <div className="imgs">
              <img src={paomo1} alt=""/>
              <img src={paomo2} alt=""/>
              <img src={paomo3} alt=""/>
            </div>
            <div className="det">
              <span>58分钟前</span>
              <img src={Area} alt=""/>
              <span>宏村秀里精品文化酒店</span>
              <img src={link1} alt=""/>
              <span className='number'>326</span>
              <img src={link2} alt=""/>
              <span className='number'>70</span>
              <img src={link3} alt="" className='back'/>
              <span className='number'>26</span>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={chuxia} alt="" className='via'/>
          <div className="right">
            <span className='name'>初夏</span>
            <img src={paosex} alt=""/>
            <img src={drop} alt="" className='drop' onClick={this.showModal}/>
            <p>
              在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白
              酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位
              置，回忆着那是的点点滴滴...
            </p>
            <div className="imgs">
              <img src={chuxia1} alt=""/>
              <img src={chuxia2} alt=""/>
              <img src={chuxia3} alt=""/>
            </div>
            <div className="det">
              <span>1小时前</span>
              <img src={Area} alt=""/>
              <span>浙江省桐乡市乌镇酒吧</span>
              <img src={link1} alt=""/>
              <span className='number'>371</span>
              <img src={link2} alt=""/>
              <span className='number'>128</span>
              <img src={link3} alt="" className='back'/>
              <span className='number'>75</span>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={chenxx} alt="" className='via'/>
          <div className="right">
            <span className='name'>陈 xx</span>
            <img src={chensex} alt="" className='chenxx'/>
            <img src={drop} alt="" className='drop' onClick={this.showModal}/>
            <img src={chenimg} alt="" className='chenxximg'/>
            <div className="det">
              <span>58分钟前</span>
              <img src={Area} alt=""/>
              <span>宏村秀里精品文化酒店</span>
              <img src={link1} alt=""/>
              <span className='number'>326</span>
              <img src={link2} alt=""/>
              <span className='number'>70</span>
              <img src={link3} alt="" className='back'/>
              <span className='number'>26</span>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <img src={img1} alt=""/>
            <div>
              <span>分享到</span>
            </div>
          </div>
          <div>
            <img src={img2} alt=""/>
            <div>
              <span>收藏</span>
            </div>
          </div>
          <div>
            <img src={img3} alt=""/>
            <div>
              <span>隐藏此动态</span>
            </div>
          </div>
          <div>
            <img src={img4} alt=""/>
            <div>
              <span>不看他的动态</span>
            </div>
          </div>
          <div>
            <img src={img5} alt=""/>
            <div>
              <span>举报</span>
            </div>
          </div>
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default Discover;
