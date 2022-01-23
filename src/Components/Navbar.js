import React from "react";
import "./Navbar.css";
import HomePage from "../Homepage/homepage";
import LoginPage from "../LoginPage/loginpage";
import FAQSection from "../Components/FAQ/Faq";
// import "./background_img.css";
// import navbar_img from "../Images/navbar_bg.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginSignup from "../LoginPage/login_signup";
import Hostel from "./FAQ/hostel";
import General from "./FAQ/General";
import Placement from "./FAQ/placement";
import Facilities from "./FAQ/facilities";
import history from "../history";
import SignUp1 from "../LoginPage/Signup-1";
import SignUp2 from "../LoginPage/Signup-2";

export default function Navbar() {
    return (
        <BrowserRouter history={history}>
            <div className="navbar">
                <div className="flex-row">
                    <Link to="/">Home</Link>
                    {/* <Link to="/academic">Academic</Link> */}
                    <Link to="/placement">Placement</Link>
                    <Link to="/life-at-jssstu">Life at JSSSTU</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={< HomePage />}></Route>
                <Route exact path='/life-at-jssstu' element={< LoginSignup />}></Route>
                <Route exact path='/faq' element={<FAQSection />}></Route>
                <Route exact path='/hostel-faq' element={<Hostel />}></Route>
                <Route exact path='/faq/general-faq' element={<General />}></Route>
                <Route exact path='/faq/placement-faq' element={<Placement />}></Route>
                <Route exact path='/faq/facilities-faq' element={<Facilities />}></Route>
                <Route exact path='/signup1' element={<SignUp1 />}></Route>
                <Route exact path='/signup2' element={<SignUp2 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
