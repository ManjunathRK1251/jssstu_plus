/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import hostel_blue from "../../Images/hostel_blue.png";
import "./FaqDetails.css";

export default function Hostel() {
    var hostel = [
        {
            id: 1,
            "what is the curfew?": "it's 7:30 :",
        },

        {
            id: 2,
            "how many people in one room?": "4 in off-campus - 3 in on-campus",
        },

        {
            id: 3,
            "what kind of food will we get?": "South Indian and pure veg ",
        },
        {
            id: 4,
            "are we allowed to go home whenever we want?":
                "yeah, you just have to submit home letter",
        },
        { id: 5, "do we get hot water 24x7?": "yes" },
    ];

    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <center>
                <div className="rectangle">
                    <img src={hostel_blue} />
                </div>
                <div className="rectangle-txt">Hostel</div>
            </center>
        </div>
    );
}
