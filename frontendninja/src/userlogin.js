import React, { Component } from 'react';
import axios from 'axios';
import './userLogin.css'
export class UserLogin extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    state = {
        redirect: false
      }
  
    changeHandler=(e)=>
    {
        console.log(1)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e) =>
    {
        e.preventDefault()
        axios.get(`http://localhost:8080/login/${this.state.username}/${this.state.password}`)
        .then( response => {
            console.log(response.data);
            if(response.status===200)
            {
                console.log("successs");
                this.setState({ redirect: true })
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
            username,
            password
        }=this.state;

        const { redirect } = this.state;

        if (redirect) {
        this.props.history.push({
            pathname:"/afterlogin",
            state:{
                username: this.state.username
             }
           });
        }
   
        return (
            <div>
                <form onSubmit={this.submitHandler}> 
                    <div class="container">
                         <label for="username"><b>Username</b></label><br/>
                        <input type="text" placeholder="e.g. naruto" name="username" value={username} onChange={this.changeHandler}/>
                             <br/>
                          <label for="password"><b>Password</b></label><br/>
                             <input type="password" placeholder="e.g. Jma@123" name='password' value={password} onChange={this.changeHandler}/>
                    </div>
                    <div class="container" >
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default (UserLogin)
