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
import PropTypes from 'prop-types'
// var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };
export class LoginForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:'',
            ninjaName:'',
            address: '',
            points :'',
            weapons: [],
            jutsu : [],
            weaponName : '',
            jutsuName : '',
            jutsuType: ''
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
        this.state.weapons.push(this.state.weaponName)
        this.setState({weapons:this.state.weapons});
        // this.state.jutsu.push(this.jutsuName)
        // this.state.jutsu.push(this.jutsuType)
        e.preventDefault()
        axios.post(`http://localhost:8080/createNinja`,this.state)
        .then( response => {
            console.log(response.data);
            if(response.data===1)
            {
                console.log("successs");
                // this.setState({ redirect: true })
            }
            else if(response.data===0)
            {
                alert("We think you are mistaken. Signup to be a ninja");
            }
    })
        .catch( error => {console.log(error)})
    }
    render() {
        const{
            ninjaName,
            userName,
            password,
            address,
            points,
            weaponName,
            jutsuName,
            jutsuType
        }=this.state;

        const { redirect } = this.state;

        if (redirect) {
           return <Redirect to='/afterlogin'/>
            // return 
            // <Redirect to={
            // {pathname: ''}
            // } />
        }
   
        return (
            <>
                 <form onSubmit={this.submitHandler}> 
                     <div class="container">

                         <label for="name"><b>Ninjaname:</b></label><br/>
                         <input type="text" placeholder="Enter ninja name" name="ninjaName" value={ninjaName} onChange={this.changeHandler}></input>

                         <label for="userName"><b>Username:</b></label><br/>
                         <input type="text" placeholder="Enter user name" name="userName" value={userName} onChange={this.changeHandler}></input>

                         <label for="password"><b>Password:</b></label><br/>
                         <input type="password" placeholder="Enter Password" name='password' value={password} onChange={this.changeHandler}></input>
                        
                         <label for="address"><b>Address:</b></label><br/>
                         <input type="text" placeholder="Enter Address" name="address" value={address} onChange={this.changeHandler}></input>

                         <label for="points"><b>Points:</b></label><br/>
                         <input type="text" placeholder="Enter points" name="points" value={points} onChange={this.changeHandler}></input>

                         <label for="weaponName"><b>Weapons name:</b></label><br/>
                         <input type="text" placeholder="Enter weaponname" name="weaponName" value={weaponName} onChange={this.changeHandler}></input>
                        
                         <label for="jutsuName"><b>Jutsu name:</b></label><br/>
                         <input type="text" placeholder="Enter jutsu Name" name="jutsuName" value={jutsuName} onChange={this.changeHandler}></input>

                         <label for="jutsuType"><b>Weapons type:</b></label><br/>
                         <input type="text" placeholder="Enter jutsu Type" name="jutsuType" value={jutsuType} onChange={this.changeHandler}></input>

                      </div> 
                          <button type="submit">Submit</button>  
                                    
                     <div>{this.state.res}</div>
                 </form>
            </>
        )
    }
}



export default (LoginForm)
