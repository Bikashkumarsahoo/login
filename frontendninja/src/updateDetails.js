import React, { Component } from 'react';
import './main-right.css';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

class UpdateDetails extends Component{
    state = {
        address: this.props.location.state.address,
        username: this.props.location.state.username,
        points: this.props.location.state.points,
        name: this.props.location.state.name,
    }

    changeHandler=(e)=>
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }

    submitHandler=(e)=>
    {
        e.preventDefault()
        Axios.post("http://localhost:8080/updateNinjalist",this.state)
        .then(response => {
            console.log(response)
            if(response.status === 200 )
            {
                console.log("Successfully Updated.");
            }
            else
            {
                console.log("We could not update you. Update again.");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        const{
            username,
            address,
            points,
            name
        }=this.state;
      return(
          <>
            <div>
                <form onSubmit={this.submitHandler}> 
                    <div class="container">
                         <label for="name"><b>Name</b></label><br/>
                        <input type="text" placeholder="" name="name" value={name} onChange={this.changeHandler}/>
                             <br/>
                        <label for="points"><b>Points</b></label><br/>
                        <input type="text" placeholder="" name="points" value={points} onChange={this.changeHandler}/>
                        <br/>
                        <label for="address"><b>Address</b></label><br/>
                        <input type="text" placeholder="" name="address" value={address} onChange={this.changeHandler}/>
                    </div>
                    <div class="container" >
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
          </>
    );
    }
  }
  
  export default UpdateDetails;