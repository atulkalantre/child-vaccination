import axios from 'axios';
import React from 'react';
export default class ChildRegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cfname :"",
            clname :"",
            dob :"",
            parentid:JSON.parse(localStorage.getItem("loggedinuser")),
            child:{}
        }
        
    }

    handleChange = (e) =>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }
    
    
    submitData = (e) =>{
        e.preventDefault()
        
        axios
          .post('http://localhost:8080/savechild', this.state)
          .then(response => {
            alert("Child added successfully...")
            this.props.history.push("/parenthome");
          })
          .catch(error => {
            alert(error)
          })
    }
    render(){
        return(
            <div className="container">
            <h1 className="header">Child Registration</h1><br/>
            <form>
                <div className="form-group" class="col-md-4">
                <label className="lb" for="cfname">Enter First Name :</label>
                <input type="text" id="cfname" className="form-control" name="cfname" onChange={this.handleChange}required />
                </div>
                
                <div className="form-group" class="col-md-4">
                    <label className="lb"  for="clname">Enter Last Name :</label>
                    <input type="text" id="clname" className="form-control" name="clname" onChange={this.handleChange}required />
                    </div>

                     
                <div className="form-group" class="col-md-4">
                    <label className="lb" for="dob">Enter Date of Birth :</label>
                    <input type="date" id="dob" className="form-control" name="dob" onChange={this.handleChange}required /><br/>
                    </div>
                   

                   
                <div className="form-group"class="rows">
                <button  class="btn btn-primary col-md-1" type="submit" onClick={this.submitData}>SUBMIT</button>  
                <button  class="btn btn-primary col-md-1" type="reset">RESET</button> <br/><br/>
             {/* <-- <button  class="btn btn-primary col-md-2">ADD CHILD</button> -->*/}
               
                </div>

            </form>
           
        </div>
        )
    }
}