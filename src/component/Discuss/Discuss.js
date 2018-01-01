import React from 'react'
import './discuss.css'
import Footer from '../Footer/Footer'

import photo1 from '../images/146.png'
import photo2 from '../images/688022129042093518.png'
import back from '../images/detail.png'
import sex from '../images/45.png'
import voice from '../images/voice.png'
import picture from '../images/picture.png'

class Discuss extends React.Component {
  render () {
    return(
      <div className="discuss">
        <div className="taskheader">
          <a href="javascript:history.back()">
            <img src={back} alt=""/>
          </a>
          <span>评论详情</span>
        </div>
        <div className="discussContent">
          <div className="title">评论(261)</div>
          <div className="discussDetail">
            <img src={photo1} alt=""/>
            <span>H.H</span>
            <img src={sex} alt="" className='discussSex'/>
            <p>
              古根海姆博物馆的外部非常朴实无华，只是将博物馆的名字装饰了一下。平滑的白色混凝土覆盖在墙上，使它们仿佛更像一座巨大的雕塑而不是建筑物。
            </p>
            <div className="discussBack">
              <span className='discussname'>BIG.BOSS</span>
              <span>:把你的回复读完之后我想去看一看了</span>
            </div>
          </div>
          <div className="discussDetail">
            <img src={photo2} alt=""/>
            <span>五海</span>
            <img src={sex} alt="" className='discussSex'/>
            <p>
              光是建筑物外观就与众不同啊！
            </p>
          </div>
        </div>
        <div className="write">
          <img src={voice} alt=""/>
          <input type="text"/>
          <img src={picture} alt=""/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Discuss;
