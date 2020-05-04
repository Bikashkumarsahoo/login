import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './userLogin.css'
import {BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
import afterlogin from './afterlogin'
export class LoginForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:'',
            name:'',
            address: '',
            points :'',
            weapons: ''
        }
    }
    state = {
        redirect: false
      }
  
    changeHandler=(e)=>
    {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    submitHandler=(e) =>
    {
        e.preventDefault()
        axios.post(`http://localhost:8080/insertNinjalist`,this.state)
        .then( response => {
            console.log(response.data);
            if(response.status===200)
            {
                console.log("successs");
                this.setState({ redirect: true })
            }
            else 
            {
                 alert("We think you are mistaken. Signup to be a ninja");
            }
    })
        .catch( error => {console.log(error)})
    }
    render() {
        const{
            name,
            username,
            password,
            address,
            points,
            weapons
        }=this.state;

        const { redirect } = this.state;

        if (redirect) {
           return <Redirect to='/'/>
        }
   
        return (
            <>
                 <form onSubmit={this.submitHandler}> 
                     <div class="container">

                         <label for="name"><b>Name:</b></label><br/>
                         <input type="text" placeholder="Enter ninja name" name="name" value={name} onChange={this.changeHandler}></input>

                         <label for="username"><b>Username:</b></label><br/>
                         <input type="text" placeholder="Should be unique" name="username" value={username} onChange={this.changeHandler}></input>

                         <label for="password"><b>Password:</b></label><br/>
                         <input type="password" placeholder="Enter Password" name='password' value={password} onChange={this.changeHandler}></input>
                        
                         <label for="address"><b>Address:</b></label><br/>
                         <input type="text" placeholder="Enter Address" name="address" value={address} onChange={this.changeHandler}></input>

                         <label for="points"><b>Points:</b></label><br/>
                         <input type="text" placeholder="Enter points" name="points" value={points} onChange={this.changeHandler}></input>

                         <label for="weapons"><b>Weapons name:</b></label><br/>
                         <input type="text" placeholder="Enter weaponname" name="weapons" value={weapons} onChange={this.changeHandler}></input>
                        

                      </div> 
                          <button type="submit">Submit</button>  
                                    
                     <div>{this.state.res}</div>
                 </form>
            </>
        )
    }
}



export default (LoginForm)
