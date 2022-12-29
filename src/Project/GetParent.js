import axios from 'axios';
import React from 'react';
import AdminHome from './AdminHome';
import { Route, BrowserRouter } from 'react-router-dom';

export default class GetParent extends React.Component{


    constructor(props){
        super(props)
        this.state ={
            parent:[]
            //childid:JSON.parse(localStorage.getItem("loggedinchild"))
        }
    }

    componentDidMount=()=>
    {  

        axios
        .get("http://localhost:8080/getallparent")
        .then(res=>{
      //      alert( res);
            const json=JSON.parse(JSON.stringify(res.data));
        this.setState({parent:json});
     //   alert(this.state.info);
        });        
    }
    goback = () => {
        this.props.history.push("/adminhome");
    }

    render(){
        return(
            <div>

                <h3>Parent List</h3>

                <table className="table table-bordered table-striped table-dark ">
                    <tr>
                        <th>PARENT ID</th>
                        <th>LOGIN ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT NO.</th>
                        <th>ADDRESS</th>
                        <th>AADHAR NO.</th>
                    </tr>             
                    {this.state.parent.map(v =>
                    
                    <tr>
                        <td>{v.parentid}</td>
                        <td>{v.loginid}</td>
                        <td>{v.fname}</td>
                        <td>{v.lname}</td>
                        <td>{v.email}</td>
                        <td>{v.contactno}</td>   
                        <td>{v.address}</td>
                        <td>{v.aadharno}</td>                     
                    </tr>
                )}            
           </table> 
           <button type="submit" class="btn btn-info   col-md-2"onClick={this.goback}>Go Back</button><br/>

           <BrowserRouter>
                    <div>
                        <Route path="/adminhome" component={AdminHome}></Route>
                    </div>
           </BrowserRouter>


            </div>
        )
    }

}
