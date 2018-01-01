import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './home.css'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'

import Imgkaka from '../images/149541444.jpg'
import Area from '../images/u477.png'
import Search from '../images/u476.png'
import area from '../images/654.png'

import Banner1 from '../images/banner1.png'
import Banner2 from '../images/banner2.jpg'
import Banner3 from '../images/banner3.jpg'
import Banner1_up from '../images/u485.png'

import chen from '../images/146.png'
import chensex from '../images/45.png'
import ansex from '../images/76.png'
import an from '../images/688022129042093518.png'
import animg from '../images/7777.jpg'

import suoluomen1 from '../images/suoluomen1.jpg'
import suoluomen2 from '../images/suoluomen2.jpg'
import suoluomen3 from '../images/suoluomen3.jpg'
import price from '../images/未标题-2.png'
import link1 from '../images/link1.png'
import link2 from '../images/link2.png'
import link3 from '../images/link3.png'
class Home extends React.Component {
  state={
    data:[
      {
        id:1,
        name:'chen xx',
        photo:chen,
        sex:chensex,
        money:50,
        text:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况......',
        area:'上海市浦东新区　988km 2017-03-09'
      },
      {
        id:2,
        name:'an 然',
        photo:an,
        sex:ansex,
        money:100,
        text:'我想知道这个星巴克现在的客......',
        area:'合肥市包河区　917km 2017-03-09',
        animg:animg
      },
    ]
  }
  render () {
    const data=this.state.data
    console.log(data);
    return(
      <div className='home'>

        <div className='header'>
          <span>武汉</span>
          <img src={Area} alt="" className='area' />
          <img src={Imgkaka} alt="" className='kaka' />
          <img src={Search} alt="" className='search' />
        </div>

        <div className='banner'>
          <Carousel autoplay>
            <img src={Banner1} alt=""/>
            <img src={Banner2} alt=""/>
            <img src={Banner3} alt=""/>
          </Carousel>
        </div>

        <div className="new">
          <div className="title">
            －　最新任务　－
          </div>
          <div className='content' >
            {data.map((item ,index)=>(
            <Link to={{pathname:'/taskDetail',state:item}} key={item.id}>
              <div>
                <p>
                 {item.text}
                </p>
                <img src={item.animg} alt="" className='animg'/>
                <div className='intro'>
                  <img src={item.photo} alt="" className='photo'/>
                  <div className='right'>
                    <div>
                      <div className='name'>
                        <span className='name'>{item.name}</span>
                        <img src={item.sex} alt="" />
                      </div>
                      <div  className='price'>
                        <img src={price} alt=""/>
                        <span className='money'>{item.money}</span>
                      </div>
                    </div>
                    <div>
                      <img src={area} alt="" className='area'/>
                      <span className='chenarea'>{item.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            ))
          }
          </div>
        </div>

        <div className="recommend">
          <div className="title">
            －　今日推荐 －
          </div>
          <div className="contents">
            <img src={suoluomen1} alt=""/>
            <img src={suoluomen2} alt=""/>
            <img src={suoluomen3} alt=""/>
          </div>
          <div className="suoluomentext">
            <span className='span1'>
              所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)
            </span>
            <span className='span2'>
              古根海娒美术馆
            </span>
          </div>
          <div className='recommendLink'>
            <div className="div1">
              <img src={link1} alt=""/>
              <span>6326</span>
            </div>
            <div className="div2">
              <img src={link2} alt=""/>
              <span>70</span>
            </div>
            <div className="div3">
              <Link to='/discuss'>
                <img src={link3} alt=""/>
              </Link>
              <span>261</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
