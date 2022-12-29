import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router';

export default class HositalHome extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {
            aadharno : "",
            parent:{}
        }

    }
    handleChange = (e) =>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }

    logout = () =>{
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("loggedinhosp");
        localStorage.removeItem("loggedinchild");
        localStorage.removeItem("loggedinadmin"); 
        this.props.history.push("/login");
      }

    getChild = (e) => {
       
          e.preventDefault();     

          fetch(`http://localhost:8080/getparentbyid/${this.state.aadharno}`)
          .then(resp => resp.text())
          .then(data => {if(data.length!=0)
              {
                  const json = JSON.parse(data);
                      this.setState({parent:json});
                      localStorage.setItem("loggedinuser",JSON.stringify(this.state.parent));
                     // mystore.dispatch({type:'LOGGEDIN'});
                      //this.setState({loginerror:"You Have Successfully Logged In as parent"});                
                     this.props.history.push("/updatechild");

                }
                else
                {
                    alert("Invalid Aadhar No.");
                    this.props.history.push("/hospitalhome");
                }
            })
            
        }    
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <h2 style={{color:'wheat'}}>Welcome { JSON.parse(localStorage.getItem("loggedinhosp")).hospitalname}</h2>
                <form>
                <div className="form-group" class="col-md-4">
                <label  className="lb" for="aadharno">Enter Aadhar No :</label>
                <input type="number" id="aadharno" className="form-control" name="aadharno" onChange={this.handleChange}/><br></br>
                </div>
                <button type="submit" class="btn btn-primary col-md-2"onClick={this.getChild}>SEARCH</button>  
                </form>
                <br></br>
                <button type="submit" class="btn btn-info   col-md-2"onClick={this.logout}>Sign Out</button><br/>
            </div>
        )
    }

}