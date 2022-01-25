/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Placement2.css";
import placement_2 from "../Images/placement_2.jpg";
import "scrollable-component";

export default function Placement3() {
    return (
        <div>
            <img src={placement_2} className="background-placement2" />
            <table>
                <tr>
                    <div className="Rectangle-35">
                        <h1 className="placement2-h1">Madhushree Nayak M</h1>
                        <br />
                        <br />
                        <h2 className="placement2-h2">
                            Company placed: VMWare
                        </h2>
                        <p className="placement2-p">
                            Knowing concepts related to ADA, Data structures ,
                            OS, DBMS, Networks and Programming languages is very
                            important, I referred the previous year’s notes at
                            most, if not GeeksforGeeks is bible for technical
                            preparations, practice coding question in
                            GeeksforGeeks and Coding is an important criteria
                            for most of the companies and carries more weightage
                            so practice coding to the most in websites like
                            HackerRank and HackerEarth.
                        </p>
                    </div>
                </tr>
            </table>
        </div>
    );
}
