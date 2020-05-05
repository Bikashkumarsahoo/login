import ReactDOM from 'react-dom'
import axios from 'axios';
import React, { Component } from 'react';
import './afterlogin.css';
import { wait } from '@testing-library/react';
import { Redirect } from 'react-router-dom';
class AfterLogin extends Component{
  state = {
    username: this.props.location.state.username,
    ninjaName: '',
    address: '',
    points: '',
    weapons: [],
    jutsu: [],
    enable: false,
    delete: false,
    weaponsFunc: false
  }

  logout=()=>
  {
    var result = window.confirm("Want to Logout?");
    if(result)
    {
      this.setState({delete : true})
    }
  }

  updateHandler =()=>
  {
    this.props.history.push({
      pathname:"/updateDetails",
      state:{
          username: this.state.username,
          ninjaName: this.state.ninjaName,
          address: this.state.address,
          points: this.state.points,
          weapons: this.state.weapons,  
          jutsu: this.state.jutsu   
       }
     });
  }
  deleteHandler=()=>{
    var result = window.confirm("Do you want to delete your account permanently?");
    if(result)
    {
      axios.delete(`http://localhost:8080/delete/${this.state.username}`)
      .then(response => {
          console.log(response);  
          alert("Account deleted permanently");
          wait(5000);
          this.setState({delete : true})
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  }
  
  weaponsHandler=()=>{
    axios.get(`http://localhost:8080/fetch/${this.state.username}`)
    .then(response => {
        this.setState({ enable: true })
        this.setState({ weaponsFunc: true })
        console.log(response);
        console.log(response.data.ninjaName);
        this.setState({
          ninjaName: response.data.ninjaName,
          address: response.data.address,
          points: response.data.points,
          weapons: response.data.weapons,
          jutsu: response.data.jutsu
        });
        console.log(this.state.weapons.weaponName)
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  submitHandler=(e) =>
  {
    axios.get(`http://localhost:8080/fetch/${this.state.username}`)
    .then(response => {
        this.setState({ enable: true })
        console.log(response);
        console.log(response.data.ninjaName);
        this.setState({
          ninjaName: response.data.ninjaName,
          address: response.data.address,
          points: response.data.points,
          weapons: response.data.weapons,
          jutsu: response.data.jutsu
        });
        console.log(this.state.weapons.weaponName)
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  changeEnable=()=>
  {
    this.setState({ enable: false })
    this.setState({weaponsFunc: false})
  }


  render(){ 
    if(this.state.weaponsFunc)
    {
      return(
        <div class="card">
        <div class="container_new">
          <h2><b>{this.state.ninjaName}</b></h2>
          <p>weapons:
              {this.state.weapons.map(weapons => (
              <li>
                {weapons.weaponName}
              </li>
              ))}
            </p>
            <p>jutsu:
              {this.state.jutsu.map(name => (
              <li>
                {name.jutsuName} {'  '} {name.jutsuType}
              </li>
              ))}
            </p>   
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.updateHandler} value="Edit" /> {'     '}
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.changeEnable} value="Go Back" />
        </div>
      </div> 
      ) 
    }
    if(this.state.delete)
    {
      return(
        <Redirect to='/'/>
      )
    }
    if(this.state.enable) 
    {
      return(

        <div class="card">
          <div class="container_new">
            <h2><b>{this.state.ninjaName}</b></h2>
            <p>username: {this.state.username}</p>
            <p>address: {this.state.address}</p>
            <p>points: {this.state.points}</p>
            {/* <p>weapons:
                {this.state.weapons.map(weapons => (
                <li>
                  {weapons.weaponName}
                </li>
                ))}
              </p>
              <p>jutsu:
                {this.state.jutsu.map(name => (
                <li>
                  {name.jutsuName} {'  '} {name.jutsuType}
                </li>
                ))}
              </p>    */}

            <input class="btn btn-primary" name="submit" type="submit" onClick={this.updateHandler} value="Edit" /> {'     '}
            <input class="btn btn-primary" name="submit" type="submit" onClick={this.changeEnable} value="Go Back" />
          </div>
        </div> 
      )
    }
    if (!this.state.enable)
    {
      return(
        <>
          <div class="logo">
          <h1>Log in Successful...  </h1>
          <h1>{this.state.username}</h1>
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.submitHandler} value="View your details" /> {'     '}
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.deleteHandler} value="Delete your account" /> {'     '}
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.weaponsHandler} value="View Weapons" /> {'     '}
          <br/>
          <br/>
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.logout} value="Logout" />
          </div>
         </>
    );
    }

  }
}

export default AfterLogin;