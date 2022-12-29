import axios from "axios";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ParentHome from "./ParentHome";
export default class ChildVaccineProg extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            info:[],
            childid:JSON.parse(localStorage.getItem("loggedinchild"))
        }
    }

    componentDidMount=()=>
    {  

        axios
        .get(`http://localhost:8080/getchildinfo/${this.state.childid}`)
        .then(res=>{
      //      alert( res);
            const json=JSON.parse(JSON.stringify(res.data));
        this.setState({info:json});
     //   alert(this.state.info);
        });        
    }

    goback = () => {
        this.props.history.push("/parenthome");
    }
 
    render(){
        return(
            <div >   
                <br></br><br></br>
                <button type="submit" class="btn btn-info   col-md-2"onClick={this.goback}>Go Back</button><br/>
                <br></br>
                <table className="table table-bordered table-striped table-dark ">
                    <tr>
                        <th>VACCINE ID</th>
                        <th>HOSPITAL ID</th>
                        <th>EXPECTED DATE</th>
                        <th>ACTUAL DATE</th>
                        <th>STATUS</th>
                        <th>PRICE</th>
                        
                    </tr>             
                    {this.state.info.map(v =>
                    
                    <tr>
                        <td>{v.vaccineid}</td>
                        <td>{v.hospid}</td>
                        <td>{v.expdate}</td>
                        <td>{v.actualdate}</td>
                        <td>{v.status}</td>
                        <td>{v.price}</td>                        
                    </tr>
                )}            
           </table> 
           <BrowserRouter>
                    <div>
                        <Route path="/parenthome" component={ParentHome}></Route>
                    </div>
           </BrowserRouter>
           
            </div>
        )
    }
}