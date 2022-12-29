import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default class UpdateChild extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            parent : JSON.parse(localStorage.getItem("loggedinuser")),
            hospital:JSON.parse(localStorage.getItem("loggedinhosp")),
            childs:[],
            cid:""
        }
    }
    getInfo = (e) =>{
       
        e.preventDefault(); 
        localStorage.setItem("loggedinchild",JSON.stringify(this.state.cid));
       // alert(this.state.cid);
        this.props.history.push("/insertprogress");
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
        

    componentDidMount=()=>
        {
            axios
            .get(`http://localhost:8080/getchild/${this.state.parent.parentid}`)
            .then(res=>{
               
                this.setState({childs : res.data});
         });
        }


    render(){
        return(
            <div>
                <h3>Child List</h3>

                <table className="table table-bordered table-dark p-2" style={{width:"70%"}}>

                    <tr>
                        <td>CHILD ID</td>
                        <td>FIRST NAME</td>
                        <td>LAST NAME</td>
                        <td>DOB</td>
                        
                    </tr>             
                    {this.state.childs.map(child =>

                    <tr>
                        <td>{child.cid}</td>
                        <td>{child.cfname}</td>
                        <td>{child.clname}</td>
                        <td>{child.dob}</td>
                    </tr>)}
                </table>
                <form>
                <div class="col-md-4">
                <label className="lb"  for="cid">Enter Child Id :</label>
                <input type="number" class="form-control" name="cid" id="cid" onChange={this.handleChange}required/>
            </div>
            <br/>
                
                <button type="submit" class="btn btn-primary col-md-2"onClick={this.getInfo}>Update child </button><br/> 

                </form>
                <br/>
                <button type="submit" class="btn btn-primary col-md-2"onClick={this.logout}>Sign Out</button><br/>
            </div>
        )
    }
}