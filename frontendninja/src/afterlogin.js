import ReactDOM from 'react-dom'
import axios from 'axios';
import React, { Component } from 'react';
import './afterlogin.css';
import { wait } from '@testing-library/react';
import { Redirect } from 'react-router-dom';
class AfterLogin extends Component{
  state = {
    username: this.props.location.state.username,
    name: '',
    address: '',
    points: '',
    weapons: [],
    newweaponname: '',
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

  changeHandler=(e)=>
  {
      console.log(1)
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  updateHandler =()=>
  {
    this.props.history.push({
      pathname:"/updateDetails",
      state:{
          username: this.state.username,
          name: this.state.name,
          address: this.state.address,
          points: this.state.points, 
       }
     });
  }

  addHandler=()=>{
    axios.post(`http://localhost:8080/insertWeaponlist/${this.state.username}`,{
      weaponname: this.state.newweaponname
    })
    .then(response =>{
    }
    )};    
  
  deleteHandler=()=>{
    var result = window.confirm("Do you want to delete your account permanently?");
    if(result)
    {
      axios.delete(`http://localhost:8080/deleteNinjalist/${this.state.username}`)
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

    axios.get(`http://localhost:8080/fetchWeaponlist/${this.state.username}`)
    .then(response => {
        this.setState({ enable: true })
        this.setState({ weaponsFunc: true })
        console.log(response);
       console.log(response.data[0].weaponname);
        this.setState({
          weapons: response.data
        });
        // console.log(this.state.weapons)
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  removeWeapons=(weaponname) =>
  {
    axios.post(`http://localhost:8080/deleteWeaponlist/${this.state.username}`,{
      weaponname: weaponname
    })
    .then(response =>{
    }
    )
  }
  submitHandler=(e) =>
  {
    axios.get(`http://localhost:8080/fetch/${this.state.username}`)
    .then(response => {
        this.setState({ enable: true })
        this.setState({
          name: response.data[0].name,
          address: response.data[0].address,
          points: response.data[0].points
          // weapons: response.data.weapons,
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
    const{
      username,
      name,
      address,
      points,
      weapons,
      newweaponname,
      enable,
      weaponsFunc
    }= this.state
  
  //   const{
  //     newweaponname
  // }=this.state;
    if(this.state.weaponsFunc)
    {
      return(
        <div class="card">
        <div class="container_new">
          <table>
            <tbody>
            {this.state.weapons.map(weapons =>
              <tr>
                  <td>{weapons.weaponname}</td>
                  <td> <input class="btn btn-primary" name="submit" type="submit" onClick={()=>this.removeWeapons(weapons.weaponname)} value="Remove" /></td>
                </tr>
              )}
            </tbody>
          </table>
          <input type="text" placeholder="Add new weapon" name="newweaponname" value={newweaponname} onChange={this.changeHandler}/>{'     '}
          <input class="btn btn-primary" name="submit" type="submit" onClick={this.addHandler} value="Add" /> <br/>
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
            <h2><b>{this.state.name}</b></h2>
            <p>username: {this.state.username}</p>
            <p>address: {this.state.address}</p>
            <p>points: {this.state.points}</p>
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