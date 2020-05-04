import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './App.css';
import Mainright from "./main-right.js";
import Login from "./login.js";
import FetchUserDetails from "./FetchUserDetails";
import  Loginform  from './loginform.js';
import {Router,Switch,Route} from 'react-router-dom';
import history from './history';
import UserLogin from './userlogin';
import Landing from './Landing';
import AfterLogin from './afterlogin'
import UpdateDetails from './updateDetails';
class App extends Component{

  render(){
    return(
      <>
        <Router history={history}>
        <Mainright/>
          <Switch>
            <Route path="/signup" component={Loginform}/>
            <Route path="/userLogin" component={UserLogin}/>
            <Route path="/afterlogin" component={AfterLogin}/>
            <Route path="/updateDetails" component={UpdateDetails}/>
            <Route path="/" component={Landing}/>
          </Switch>
        </Router>
      </>
  );
  }
}

export default App;