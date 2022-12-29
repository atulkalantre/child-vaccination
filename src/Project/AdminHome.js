import axios from 'axios';
import React from 'react';
import GetParent from './GetParent';
import GetDoctor from './GetDoctor';
import GetVaccine from './GetVaccines';
import { BrowserRouter, Route } from 'react-router-dom';

export default class AdminHome extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           
        }
    }
            
        handleChange=(e)=>{
            const nm = e.target.name;
            const val = e.target.value;
            this.setState({[nm]:val});
        }


    getParents = () =>{ 
    this.props.history.push("/getparents");
      }

    getVaccines = () =>{   
   
        this.props.history.push("/getvaccines");
          }

    getHospitals = () =>{  
         
        this.props.history.push("/getdoctors");
     }

      logout = () =>{
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("loggedinhosp");
        localStorage.removeItem("loggedinchild");
        localStorage.removeItem("loggedinadmin"); 
        this.props.history.push("/login");
      }
    

    render(){
        return(
            <div>

                <h2 style={{color:'greenyellow'}}>Welcome Admin</h2>
                <br/>
                <button type="submit" class="btn btn-primary   col-md-2" onClick={this.getParents}>Get Parent List</button><span></span>
                <button type="submit" class="btn btn-primary   col-md-2" onClick={this.getHospitals}>Get Hospital List</button>
                <button type="submit" class="btn btn-primary   col-md-2" onClick={this.getVaccines}>Get Vaccines List</button>
                <button type="submit" class="btn btn-info   col-md-2" onClick={this.logout}>Sign Out</button><br/> 
            </div>
        )
    }

}