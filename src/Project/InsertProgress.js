import axios from "axios";
import React from "react";
export default class InsertProgress extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            childinfo:[],
            childid:JSON.parse(localStorage.getItem("loggedinchild"))
        }
    }

    componentDidMount=()=>
    {  

        axios
        .get(`http://localhost:8080/getchildinfo/${this.state.childid}`)
        .then(res=>{
           // alert( res);
            const json=JSON.parse(JSON.stringify(res.data));
        this.setState({childinfo:json});
       // alert(this.state.childinfo);

           // this.setState({info :JSON.parse(res.data)});
        });
        
    }
    getInfo = (e) =>{
       
       
        this.props.history.push("/vaccineprogressform");
          }
    handleChange=(e)=>{
        const nm = e.target.name;
        const val = e.target.value;
        this.setState({[nm]:val});
    }

    render(){
        return(
            <div >
                <br></br><br></br>
            
           <table className="table table-bordered table-striped table-dark ">
               <tr>
                   <th>VACCINE ID</th>
                   <th>HOSPITAL ID</th>
                   <th>EXPECTED DATE</th>
                   <th>ACTUAL DATE</th>
                   <th>STATUS</th>
                   <th>PRICE</th>
                   
               </tr>             
               {this.state.childinfo.map(v =>
               
               <tr>
                   <td>{v.vaccineid}</td>
                   <td>{v.hospid}</td>
                   <td>{v.expdate}</td>
                   <td>{v.actualdate}</td>
                   <td>{v.status}</td>
                   <td>{v.price}</td>
                   
               </tr>
               )
               
               }
               
           </table> 
           <form>
           <button type="submit" class="btn btn-primary col-md-2"onClick={this.getInfo}>Insert Vaccine Details</button><br/> 

           </form>
           
            </div>
        )
    }
}