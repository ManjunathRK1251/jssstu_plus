/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import hostel_blue from "../../Images/hostel_blue.png";
import "./FaqDetails.css";

export default function Hostel() {
    var hostel = [
        {
            "What is the curfew?": "It's 7:30 :",
        },

        {
            "How many people in one room?": "4 in off-campus - 3 in on-campus",
        },

        {
            "What kind of food will we get?": "South Indian and pure veg XD",
        },
        {
            "Are we allowed to go home whenever we want?":
                "Yeah, you just have to submit home letter",
        },
        { "Do we get hot water 24x7?": "Yes" },
    ];

    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <center>
                <div className="rectangle-faq">
                    <img src={hostel_blue} />
                </div>
                <div className="rectangle-txt">Hostel</div>
            </center>
            <br />
            <br />
            <br />
            {hostel.map((category) => {
                return (
                    <>
                        <section className="menu-txt">
                            <details>
                                <summary>{Object.keys(category)}</summary>
                                <p>{Object.values(category)}</p>
                            </details>
                        </section>
                        <br />
                    </>
                );
            })}
            <br />
        </div>
    );
}
