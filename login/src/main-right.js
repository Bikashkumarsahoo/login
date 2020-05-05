import React, { Component } from 'react';
import './main-right.css';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import history from './history';

class Mainright extends Component{
    render(){
      return(
      <div class="card1">
      <Link to="/signup">
      <input class="btn btn-primary" name="submit" type="submit" value="Sign up" />
      </Link>{' '}
      <Link to="/userLogin">
      <input class="btn btn-primary" name="submit" type="submit" value="Login" />
      </Link>
      <Link to="/">
      </Link>
       </div> 
    );
    }
  }
  
  export default Mainright;