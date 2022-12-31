import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminHome from './AdminHome';
import { Route, BrowserRouter } from 'react-router-dom';
import ParentHome from './ParentHome';

const ParentVaccineInfo = (props) => {
    const [vaccine, setVaccine] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/getallvaccine")
            .then(res => {
                const json = JSON.parse(JSON.stringify(res.data));
                setVaccine(json);
            });
    }, [])

    const goback = () => {
        props.history.push("/parenthome");
    }

    return (
        <div>

            <h3>Vaccine List</h3>

            <table className="table table-bordered table-striped table-dark ">
                <tr>
                    <th>VACCINE ID</th>
                    <th>VACCINE NAME</th>
                    <th>DESCRIPTION</th>
                    <th>BRAND</th>
                    <th>TYPE</th>
                    <th>PRICE</th>
                    <th>AGE RANGE</th>

                </tr>
                {vaccine.map(v =>

                    <tr>
                        <td>{v.vid}</td>
                        <td>{v.vname}</td>
                        <td>{v.vdesc}</td>
                        <td>{v.brand}</td>
                        <td>{v.type}</td>
                        <td>{v.price}</td>
                        <td>{v.agerange}</td>
                    </tr>
                )}
            </table>
            <button type="submit" class="btn btn-info   col-md-2" onClick={goback}>Go Back</button><br />
            <h4><b>#Note :-</b> <br></br> co = Compulsory.  <br></br> op = optional.  </h4>

            <BrowserRouter>
                <div>
                    <Route path="/parenthome" component={ParentHome}></Route>
                </div>
            </BrowserRouter>


        </div>
    )
}
export default ParentVaccineInfo
