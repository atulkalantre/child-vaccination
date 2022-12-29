import axios from "axios";
import React from "react";
export default class vaccineProgressForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            childid:"",
            vaccineid:"",
            hospid:JSON.parse(localStorage.getItem("loggedinhosp")).hospitalid,
            parentid : JSON.parse(localStorage.getItem("loggedinuser")).parentid,
            expdate:"",
            actualdate:"",
            status:"",
            price:""

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
              .post('http://localhost:8080/saveprogress', this.state)
              .then(response => {
                alert("Updated Successful...")
                this.props.history.push("/hospitalhome");

              })
              .catch(error => {
                alert("Something went wrong")
              })
          }


    render(){
        return(
            <div>
                <form>
                <div className="form-group" class="col-md-4">
                <label  className="lb" for="childid">Enter Child Id :</label>
                <input type="number" id="childid" className="form-control" name="childid" onChange={this.handleChange}/>
                </div>
                <div className="form-group" class="col-md-4">
                <label className="lb" for="vaccineid">Enter Vaccine Id : :</label>
                <input type="number" id="vaccineid" className="form-control" name="vaccineid" onChange={this.handleChange} />
                </div>

                    <div className="form-group" class="col-md-4">
                    <label  className="lb" for="expdate">Enter Expected Date :</label>
                    <input type="date" id="expdate" className="form-control" name="expdate"onChange={this.handleChange}  />
                    </div>

                    <div className="form-group" class="col-md-4" >
                    <label  className="lb" for="actualdate">Enter Actual Date :</label>
                    <input type="date" id="actualdate" className="form-control" name="actualdate" onChange={this.handleChange} />
                    </div>

                    <div className="form-group" class="col-md-4">
                    <label  className="lb"  for="status">Status :</label>
                    <input type="text"  id="status" className="form-control" name="status" onChange={this.handleChange} />
                    </div>
                    <div className="form-group" class="col-md-4">
                    <label  className="lb" for="price">Enter Price :</label>
                    <input type="number" id="price" className="form-control" name="price"onChange={this.handleChange} />
                    </div>
                <br/>
                
                <div className="form-group"class="rows">
                <button type="submit" class="btn btn-primary col-md-2"onClick={this.submitData}>UPDATE</button>  
                <button type="reset" class="btn btn-primary col-md-2">RESET</button> 
               
                </div>
                </form>
            </div>
        )
    }
}