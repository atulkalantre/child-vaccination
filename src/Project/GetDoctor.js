import axios from 'axios';
import React from 'react';
import AdminHome from './AdminHome';
import { Route, BrowserRouter } from 'react-router-dom';

export default class GetParent extends React.Component{


    constructor(props){
        super(props)
        this.state ={
            hospital:[]
        }
    }

    componentDidMount=()=>
    {  

        axios
        .get("http://localhost:8080/getallhospital")
        .then(res=>{
           alert( res);
            const json=JSON.parse(JSON.stringify(res.data));
            alert(json);
        this.setState({hospital:json});
     //  alert(this.state.hospital);
        });        
    }
    goback = () => {
        this.props.history.push("/adminhome");
    }

    render(){
        return(
            <div>

                <h3>Hospital List</h3>

                <table className="table table-bordered table-striped table-dark ">
                    <tr>
                        <th>HOSPITAL ID</th>
                        <th>LOGIN ID</th>
                        <th>HOSPITAL NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT NO.</th>
                        <th>REGISTRATION NO.</th>
                        <th>ADDRESS</th>
                        
                    </tr>             
                    {this.state.hospital.map(v =>
                    
                    <tr>
                        <td>{v.hospitalid}</td>
                        <td>{v.loginid}</td>
                        <td>{v.hospitalname}</td>
                        <td>{v.email}</td>
                        <td>{v.contact}</td>
                        <td>{v.regno}</td>   
                        <td>{v.address}</td>
                                             
                    </tr>
                )}            
           </table> 
         {/*  <button type="submit" class="btn btn-info   col-md-2"onClick={this.goback}>Go Back</button><br/>

           <BrowserRouter>
                    <div>
                        <Route path="/adminhome" component={AdminHome}></Route>
                    </div>
          </BrowserRouter>*/}


            </div>
        )
    }

}
