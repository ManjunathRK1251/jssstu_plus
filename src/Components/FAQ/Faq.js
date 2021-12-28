/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Faq.css";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";

export default function FAQSection() {
    return (
        <div>
            <img src={JSSSTU_logo} />
            <div className="rectangle-SQ">
                <h2>Submit a Question</h2>
            </div>
            <div className="rectangle-login">
                <h2>Login</h2>
            </div>
            <center className="title">Hi! How can we help you?</center>
            <table>
                <td>
                    <div className="rectangle-23" />
                    <h1>Info</h1>
                </td>
                <td>
                    <div className="rectangle-23" />
                    <h1>Placement</h1>
                </td>
                <td>
                    <div className="rectangle-23" />
                    <h1>Hostel</h1>
                </td>
                <td>
                    <div className="rectangle-23" />
                    <h1>Facilities</h1>
                </td>
            </table>
        </div>
    );
}
