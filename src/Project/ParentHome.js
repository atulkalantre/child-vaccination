import axios from 'axios';
import React from 'react';
import mystore from './store';
export default class ParentHome extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            parent : JSON.parse(localStorage.getItem("loggedinuser")),
            childs:[],
            vaccineprogress:[],
            cid:""
        }
    }
    componentDidMount=()=>
        {  
            axios
            .get(`http://localhost:8080/getchild/${this.state.parent.parentid}`)
            .then(res=>{
                //alert(res);
                this.setState({childs : res.data});
            });
            
        }
        handleChange=(e)=>{
            const nm = e.target.name;
            const val = e.target.value;
            this.setState({[nm]:val});
        }
    function = () => {
        this.props.history.push("/childregister");
    }


    getInfo = (e) =>{
       
    e.preventDefault(); 
    localStorage.setItem("loggedinchild",JSON.stringify(this.state.cid));
    this.props.history.push("/getchildprogress");
      }

      logout = () =>{
        //mystore.dispatch({type:'LOGGEDOUT'});
        localStorage.removeItem("loggedinuser");
        this.props.history.push("/login");
      }
      getVaccines = () =>{   
   
        this.props.history.push("/parentvaccineinfo");
          }
    

    render(){
        return(
            <div>
                <br/><br/>
                <h2 style={{color:'gold'}}>Welcome { JSON.parse(localStorage.getItem("loggedinuser")).fname} { JSON.parse(localStorage.getItem("loggedinuser")).lname}</h2>


                <div><br/><br/>
                <h3 style={{color:'wheat'}}>Child List</h3>


                <table className="table table-bordered table-striped table-dark"  style={{width:"70%"}}>
                    
                    <thead>
                        <th>Child ID</th>
                        <th>CHILD FIRST NAME</th>
                        <th>CHILD LAST NAME</th>
                        <th>DOB</th>
                        <td>ACTION</td>
                       
                    </thead>             
                    {this.state.childs.map(child =>

                    <tbody>
                        <td>{child.cid}</td>
                        <td>{child.cfname}</td>
                        <td>{child.clname}</td>
                        <td>{child.dob}</td>
                        <td>
                            <button style={{backgroundColor: '#dc3545'}} type="submit" class="btn btn-danger" onClick={() => {}}>Delete </button>
                        </td>
                    </tbody>)
                    }
                </table>
                <button class="btn btn-success col-md-2"onClick={this.function}>Add Child</button><br/><br/><br/>

               <form>
            <div class="col-md-4">
                <label className="lb"  for="cid">Enter Child ID :</label>
                <input type="number" class="form-control" name="cid" id="cid" onChange={this.handleChange}required/>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary col-md-2"onClick={this.getInfo}>Get Info</button><br/> 
              </form>
                    <br/>
              <div>
              <button type="submit" class="btn btn-primary   col-md-2" onClick={this.getVaccines}>Get Vaccines List</button><br/>
            <br/>
              </div>
                    <br/>
                    <button type="submit" class="btn btn-info col-md-2 rounded-pill" onClick={this.logout}>Sign Out</button><br/> 

            </div>
            
                
            </div>
        )
    }

}