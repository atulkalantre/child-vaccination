import logo from './logo.svg';
import './App.css';
import PatientForm from './Project/PatientForm';
import ChildRegisterForm from './Project/ChildRegisterForm';
import HospitalRegisterForm from './Project/HospitalRegisterForm';
import Loginpage from './Project/LoginPage';
import mystore from './Project/store';
import MainMenu from './Project/MainMenu';

function App() {
  //mystore.subscribe(()=>{ this.setState({flag: mystore.getState().loggedin}) })
  return (
    <div className="App">
     {/*<PatientForm/>
     <hr/>
     <ChildRegisterForm/>
     <hr/>
     <HospitalRegisterForm/>
     <hr/>
     <Loginpage/><hr/>
     <PatientForm/>
     <HospitalRegisterForm/>
     <Loginpage/>*/}
     <MainMenu/>
    </div>
  );
}

export default App;
