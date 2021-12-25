/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
// import "./background_img.css";

export default function Navbar() {
    return (
        // <div className="background-image">
        <div className="navbar">
            <div className="flex-row">
                <a href="#About">About</a>
                <a href="#Academic">Academic</a>
                <a href="#Placement">Placement</a>
                <a href="#Life-at-JSSSTU">Life at JSSSTU</a>
                <a href="#Others">Others</a>
            </div>
        </div>
        // </div>
    );
}
