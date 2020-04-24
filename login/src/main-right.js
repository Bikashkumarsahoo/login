import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './main-right.css';


class Mainright extends Component{
    render(){
      return(
     <div class="card">
       
     {/* <Button variant="btn btn-success" onClick={() => history.push('/login')}>Click button to view products</Button> */}
     <Popup modal trigger={<input class="btn btn-primary" name="submit" type="submit" value="Login" />}>
        Modal Content
    </Popup>
            <br/>
            <br/>
    <Popup modal trigger={<input class="btn btn-primary" name="submit" type="submit" value="Signup" />}>
        Modal Content
    </Popup>
      </div>
    );
    }
  }
  
  export default Mainright;