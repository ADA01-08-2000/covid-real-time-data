import React, { useEffect, useState } from 'react'
import '../statewisedata/statewise.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Statewise = () => {
    const [data,setData]=useState([]);
    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualdata = await res.json();
        console.log(actualdata.statewise);
        setData(actualdata.statewise);
    }


    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div>

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> COVID-19 DASHBOARD <span className="font-weight-bold">-INDIA</span></h1>

                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>Updated</th>
                            </tr>

                        </thead>
                        <tbody>
                        {
                          data.map((cur,ind) =>
                         
                          {
                            
                            return (
                                <tr key={ind}>
                                <td>{cur.state}</td>
                                <td>{cur.confirmed}</td>
                                <td>{cur.recovered}</td>
                                <td>{cur.deaths}</td>
                                <td>{cur.active}</td>
                                <td>{cur.lastupdatedtime}</td>
                              </tr>
                             )
                            })
                       }
                       </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Statewise
