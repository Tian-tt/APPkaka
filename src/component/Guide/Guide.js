import React from 'react'
import './guide.css'
import Img1 from '../images/1.png'
import Img2 from '../images/11.png'
import Img3 from '../images/111.png'
import Hammer from 'react-hammerjs'
import ClickLogin from '../ClickLogin/ClickLogin'
class Guide extends React.Component {
  state={
    num :0
  }
  handleSwipeLeft=()=>{
    if(this.state.num<3){
      this.setState({
        num:this.state.num+1
      })
    }
    console.log(this.state.num*100+'vw')
  }
  render () {
    let ml = `${this.state.num*-100}vw`
    return(
      <div className="show">
        <Hammer onSwipeLeft={this.handleSwipeLeft}>
          <div className='pic' style={{marginLeft:ml}}>
            <img src={Img1} alt=""/>
            <img src={Img2} alt=""/>
            <img src={Img3} alt=""/>
            <ClickLogin />
          </div>
        </Hammer>
      </div>
    )
  }
}

export default Guide
