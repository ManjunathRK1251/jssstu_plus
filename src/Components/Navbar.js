import React from "react";
import "./Navbar.css";
import HomePage from "../Homepage/homepage";
import LoginPage from "../LoginPage/loginpage";
import CarouselSlider from "../Components/Carousel_Slider/Carousel_slider";
// import "./background_img.css";
// import navbar_img from "../Images/navbar_bg.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="flex-row">
                    {/* <a href="#About">About</a> */}
                    <Link to="/">Home</Link>
                    <Link to="/academic">Academic</Link>
                    <Link to="/placement">Placement</Link>
                    <Link to="/life-at-jssstu">Life at JSSSTU</Link>
                    <Link to="/faq">FAQ</Link>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={< HomePage />}></Route>
                <Route exact path='/life-at-jssstu' element={< LoginPage />}></Route>
            </Routes>
        </BrowserRouter>

        // </div>
    );
}
