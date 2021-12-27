import React from "react";
import "./Navbar.css";
// import "./background_img.css";
// import navbar_img from "../Images/navbar_bg.jpg";

export default function Navbar() {
    return (
        <div>
            <div className="Navbar-bg"></div>
            <div className="navbar">
                <div className="flex-row">
                    <a href="#About">About</a>
                    <a href="#Academic">Academic</a>
                    <a href="#Placement">Placement</a>
                    <a href="#Life-at-JSSSTU">Life at JSSSTU</a>
                    <a href="#Others">Others</a>
                </div>
            </div>
        </div>
        // </div>
    );
}
