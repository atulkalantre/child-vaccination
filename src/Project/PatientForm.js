import axios from 'axios';
import React from 'react';
import "./mainmenu.css"
export default class PatientForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
          fname: "",
          lname: "",
          email: "",
          contactno: "",
          address: "",
          aadharno: "",
          username: "",
          password: "",
          parent:{}
        }
      }

      handleChange = (e) =>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});

      }
      submitData = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
          .post('http://localhost:8080/parentreg', this.state)
          .then(response => {
            alert("Registration Successful...")
            this.props.history.push("/login");
          })
          .catch(error => {
            alert("Duplicate Username")
          })
      }
    
    render(){
        return(
            <div className="container">
            <h1 className="header1">Parent Registration</h1><br/>
            <form className="parentform">
                <div className="form-group" >
                <label  className="lb" for="fname">Enter First Name :</label>
                <input type="text" id="fname" className="form-control" name="fname" onChange={this.handleChange}/>
                </div>
                <div className="form-group" >
                <label className="lb" for="lname">Enter Last Name :</label>
                <input type="text" id="lname" className="form-control" name="lname" onChange={this.handleChange} />
                </div>

                <div className="form-group" >
                    <label  className="lb" for="email">Enter EmailID :</label>
                    <input type="text" id="email" className="form-control" name="email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" >
                    <label  className="lb" for="contactno">Enter Contact No. :</label>
                    <input type="number" id="contactno" className="form-control" name="contactno"onChange={this.handleChange}  />
                    </div>

                    <div className="form-group"  >
                    <label  className="lb" for="aadharno">Enter Aadhar No. :</label>
                    <input type="number" id="aadharno" className="form-control" name="aadharno" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" >
                    <label  className="lb"  for="address">Enter Address :</label>
                    <input type="text"  id="address" className="form-control" name="address" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" >
                    <label  className="lb" for="username">Enter Username :</label>
                    <input type="text" id="username" className="form-control" name="username"onChange={this.handleChange} />
                    </div>

                <div className="form-group">
                <label  className="lb" for="password"> Enter Password :</label>
                <input type="password" id="password" className="form-control" name="password"onChange={this.handleChange} /><br/>
                </div>
                <div className="form-group"class="rows">
                <button type="submit" class="btn btn-primary col-md-5"onClick={this.submitData} style={{marginLeft:"20px"}}>SUBMIT</button>  
                <button type="reset" class="btn btn-primary col-md-5" style={{marginLeft:"30px"}}>RESET</button> 
               
                </div>
            </form>
           
        </div>
            
        )
    }
}