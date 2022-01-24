/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from "react";
import "./Faq.css";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import placement from "../../Images/placement.png";
import hostel_blue from "../../Images/hostel_blue.png";
import facilities_blue from "../../Images/facilities_blue.png";
import history from "../../history";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hostel from "./hostel";
import General from "./General";
import Placement from "./placement";
import Facilities from "./facilities";

function routeToPlacement() {
    history.push('/faq/placement-faq');
    window.location.reload();
}

function routeToHostel() {
    history.push('hostel-faq');
    window.location.reload();
}

function routeToFacilities() {
    history.push('/faq/facilities-faq');
    window.location.reload();
}

function routeToGeneral() {
    history.push('/faq/general-faq');
    window.location.reload();
}



export default function FAQSection() {

    <Routes>
        <Route exact path='/hostel-faq' element={<Hostel />}></Route>
        <Route exact path='/faq/general-faq' element={<General />}></Route>
        <Route exact path='/faq/placement-faq' element={<Placement />}></Route>
        <Route exact path='/faq/facilities-faq' element={<Facilities />}></Route>
    </Routes>
    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            {/* <div className="rectangle-SQ">
                <h3>Submit a Question</h3>
            </div>
            <div className="rectangle-login">
                <h3>Login</h3>
            </div> */}
            <center className="title">Hi! How can we help you?</center>
            <table>
                <td>
                    <Link to="/faq/general-faq">
                        <div className="rectangle-23">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                fill="none"
                                viewBox="0 0 75 75"
                            >
                                <circle
                                    cx="37.5"
                                    cy="37.5"
                                    r="35.5"
                                    stroke="#0094FF"
                                    stroke-width="4"
                                />
                                <path
                                    fill="#0094FF"
                                    d="M41.112 25.064c0 .482-.095.933-.285 1.352a3.455 3.455 0 01-.743 1.104 3.846 3.846 0 01-1.124.743c-.419.177-.87.266-1.352.266-.482 0-.94-.089-1.37-.266a3.926 3.926 0 01-1.105-.743 3.927 3.927 0 01-.743-1.104 3.426 3.426 0 01-.267-1.352c0-.47.09-.915.267-1.334a3.454 3.454 0 011.847-1.847 3.36 3.36 0 011.371-.285c.483 0 .934.095 1.352.285a3.4 3.4 0 011.124.743c.317.305.565.673.743 1.104.19.42.285.864.285 1.334zM40.217 51h-5.236V30.605h5.236V51z"
                                />
                            </svg>
                        </div>
                        <h1>Info</h1>
                    </Link>
                </td>
                <td>
                    <Link to="/faq/placement-faq">
                        <div className="rectangle-23">
                            <img src={placement} />
                        </div>
                        <h1>Placement</h1>
                    </Link>
                </td>
                <td>
                    <Link to="/hostel-faq">
                        <div className="rectangle-23" >
                            <img src={hostel_blue} />
                        </div>
                        <h1>Hostel</h1>
                    </Link>
                </td>
                <td>
                    <Link to="/faq/facilities-faq">
                        <div className="rectangle-23">
                            <img src={facilities_blue} />
                        </div>
                        <h1>Facilities</h1>
                    </Link>
                </td>
            </table>
        </div >
    );
}
