import React from 'react'
import './app.css'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Guide from '../Guide/Guide'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Discover from '../Discover/Discover'
import TaskDetail from '../TaskDetail/TaskDetail'
import My from '../My/My'
import Message from '../Message/Message'
import MyCard from '../MyCard/MyCard'
import BackTask from '../BackTask/BackTask'
import Discuss from '../Discuss/Discuss'
import MyAccount from '../MyAccount/MyAccount'
import Notifications from '../Notifications/Notifications'
import Deposit from '../Deposit/Deposit'
import Cash from '../Cash/Cash'
import CashDetail from '../CashDetail/CashDetail'
import Integral from '../Integral/Integral'
import JobOff from '../JobOff/JobOff'
import TaskPost from '../TaskPost/TaskPost'
import Collect from '../Collect/Collect'
import Feedback from '../Feedback/Feedback'
import AboutUs from '../AboutUs/AboutUs'
import Setting from '../Setting/Setting'
import AlterPerson from '../AlterPerson/AlterPerson'
import AlterPassword from '../AlterPassword/AlterPassword'
class App extends React.Component {
  render () {
    return(
      <Router>
        <Switch>
          <Route path='/' exact component={Guide} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/my' component={My} />
          <Route path='/discover' component={Discover} />
          <Route path='/message' component={Message} />
          <Route path='/mycard' component={MyCard} />
          <Route path='/taskDetail' component={TaskDetail} />
          <Route path='/backtask' component={BackTask} />
          <Route path='/discuss' component={Discuss} />
          <Route path='/notification' component={Notifications} />
          <Route path='/myaccount' component={MyAccount} />
          <Route path='/deposit' component={Deposit} />
          <Route path='/cash' component={Cash} />
          <Route path='/cashdetail' component={CashDetail} />
          <Route path='/integral' component={Integral} />
          <Route path='/joboff' component={JobOff} />
          <Route path='/taskpost' component={TaskPost} />
          <Route path='/collect' component={Collect} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/setting' component={Setting} />
          <Route path='/alterperson' component={AlterPerson} />
          <Route path='/alterpassword' component={AlterPassword} />
        </Switch>
      </Router>
    )
  }
}
export default App
