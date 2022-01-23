/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
import React from "react";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import general from "../../SVG/general.svg";
import "./FaqDetails.css";

export default function General() {
    var info = [
        {
            "What are the office timings? ":
                " The Institute runs from 9.30 a.m. to 4.30 p.m. six days a week along with 2nd Saturday off. Any change in the timings is communicated via circular from the office of the DIRECTOR.",
        },
        {
            "Where do we get the ID cards and how much time would it take?":
                "Ans. The administrative department takes the initiative for new joinees in the month of July/August. The photograph is collected from the student/employee. It takes minimum 2 – 3 days for making the card. The application for replacement of ID cards due to various reasons leads to submission of Rs. 250/- in accounts department. Please read the instructions mentioned in the ID card.",
        },
        {
            "Will the Degree be awarded on the basis of only final year performance?":
                "No. The CGPA will reflect the average performance of all the semester taken together.",
        },
        {
            "How fast Syllabi can be and should be changed?":
                "Autonomy allows us the freedom to change the syllabi as often as we need.",
        },
        {
            "Who takes Decisions on Academic matters?":
                "The Governing Body of institute is the top academic body and is responsible for all the academic decisions. Many decisions are also taken at the lower level like Boards of Studies. Decisions taken at the Boared of Studies level are to be ratified at the Academic Council and Governing Body.",
        },
    ];

    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <center>
                <div className="rectangle-faq">
                    <img src={general} />
                </div>
                <div className="rectangle-txt">General</div>
            </center>
            <br />
            <br />
            <br />
            {info.map((category) => {
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
