import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {Component ,useEffect, useState } from "react";
import Services from './components/pages/Services';
//import FlightApp from './components/FlightApp';
//import Products from './components/pages/Products';
import Login from './components/LogIn';
//import gallery from './components/Gallery2'
//import temp from './components/temp'
import Products from './components/pages/Products';
//import Ren from './components/SignUp'
//import Temp from './components/temp'
//import SignUp2 from './components/SignUp2'  
//import NewUser from './components/Final.js'
//import Tr from './components/Newsignup.js'
import {
  toast,
  ToastContainer
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//import DarkMode from "./components/Darkmode.js";
//import testform from './components/testform.js'rt
import Form from './components/ptemp'
import Axios from 'axios'
import Activity_cards from "./components/Activity_Cards"
//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Flight from "./components/Flight"
import Hotels from "./components/Hotels"
import Cards from "./components/Cards"
import Bus from "./components/Bus"
import Train from "./components/Train"
import Hotels1 from "./components/Hotels1"
import NewReg from './components/temp2'
import ErrorPage from '../src/components/pages/Error_404'
import Logout from './components/Logout'
import About_us from './components/AboutUs1'
import ActivityView from './components/display_activities2'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       auth: 0,
       user:"root"
    };
  }
  

  
  loginHandler =() => {
    this.setState({auth: !this.state.auth});
    localStorage.setItem('status',this.state.auth);
  }




  render() {
    
    return (
      
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Router>
    <Navbar  login={this.loginHandler } status={this.state.auth}/>
    <Switch>
      <Route path='/' exact> <Home lg={this.loginHandler } status={this.state.auth}/> </Route>
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/abc' component={NewReg} />
      <Route path='/form' component={Form}/>
      <Route path='/Home' exact> <Home/> </Route>
      <Route path='/activity_view' component={ActivityView} />
    
      <Route path='/sign-up'> <Login lg={this.loginHandler } status={this.state.auth} user={this.state.user}/> </Route>
      <Route path='/Flight' component={Flight}/>
      <Route path='/Hotels' component={Hotels}/>
      <Route path='/Cards' component={Cards}/>
      <Route path='/Train' component={Train}/>
      <Route path='/Bus' component={Bus}/>
      <Route path='/Hotels1' component={Hotels1}/>
      <Route path='/Activity_cards' component={Activity_cards}/>
      <Route path='/Error' component={ErrorPage}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/About-us' component={About_us}/>
    </Switch>
  </Router>  
    </>
  );
}
}

export default App;


 