import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import HositalHome from './HospitalHome';
import HospitalRegisterForm from './HospitalRegisterForm';
import Loginpage from './LoginPage';
import ParentHome from './ParentHome';
import PatientForm from './PatientForm';
import mystore from './store';
import { Route } from 'react-router';
import ChildRegisterForm from './ChildRegisterForm';
import UpdateChild from './UpdateChild';
import ChildVaccineProg from './ChildVaccineProg';
import InsertProgress from './InsertProgress';
import vaccineProgressForm from './VaccineProgressForm';
import AdminHome from './AdminHome';
import GetParent from './GetParent';
import GetDoctor from './GetDoctor';
import GetVaccine from './GetVaccines';
import ParentVaccineInfo from './ParentVaccineInfo';
import Home from './Home';

export default class MainMenu extends React.Component{

    constructor(props){
        super(props)
        this.state={
            flag: false
        }

    }
    render()
    {
       mystore.subscribe(()=> {this.setState({flag:mystore.getState().loggedin})})
        return(
            <div className="container">
            <BrowserRouter>
                <div className="main"style={{display:this.state.flag?'none':'block'}}>
                    <ul className="nav" style={{marginLeft:"20%"}}>
                       <li className="nav-items"><Link className="nav-link" to="/"><b className="b">Home</b> </Link> </li>
                       <li className="nav-items"><Link  className="nav-link" to="/login"><b className="b">Sign In</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/parentregister"><b className="b">Parent Register</b></Link></li>
                       <li className="nav-items"> <Link  className="nav-link" to="/hospitalregister"><b className="b">Hospital Register</b></Link></li>

                    </ul>
                    <div>
                        <Route path="/" component={Home} exact />   
                        <Route path="/login" component={Loginpage}></Route>
                        <Route path="/parentregister" component={PatientForm}></Route>
                        <Route path="/hospitalregister" component={HospitalRegisterForm}></Route>
                        <Route path="/childregister" component={ChildRegisterForm}></Route>
                        <Route path="/updatechild" component={UpdateChild}></Route>
                        <Route path="/getchildprogress" component={ChildVaccineProg}></Route>
                        <Route path="/insertprogress" component={InsertProgress}></Route>
                        <Route path="/vaccineprogressform" component={vaccineProgressForm}></Route>
                        <Route path="/adminhome" component={AdminHome}></Route>
                        <Route path="/getparents" component={GetParent}></Route>
                        <Route path="/parentvaccineinfo" component={ParentVaccineInfo}></Route>
                        <Route path="/getdoctors" component={GetDoctor}></Route>
                        <Route path="/getvaccines" component={GetVaccine}></Route>
                       
                    </div>

                </div>
                <Route path="/parenthome" component={ParentHome}></Route>
                <Route path="/hospitalhome" component={HositalHome}></Route>

           </BrowserRouter>
           </div>
        )
    }
}