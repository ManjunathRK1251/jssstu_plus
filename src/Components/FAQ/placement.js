/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import placement from "../../Images/placement.png";
import "./FaqDetails.css";

export default function Placement() {
    var placements = [
        {
            "How many Companies usually visit the campus during Campus Placements?":
                "Number of Companies visiting the campus for final placement each year is around 90. Last year more than 100 companies visited SJCE for final placement.",
        },
        {
            "What is the help extended to the students for placements?":
                "The placement team facilitates the students throughout the year with different activities. The students are exposed to experts from the industry who enlighten them and polish their skills according to the industry. The students are provided with company specific workshops and online aptitude tests to sharpen their logical and analytical skills before the placement processes. Mock GD and PI sessions are also held for the students to facilitate them in the preparation for the final interviews.",
        },
        {
            "Which are the Companies that regularly visit for Campus Recruitment?":
                "See our Valued Recruiters list.",
        },
        {
            "When does the Placement Activity begin?":
                "The final placement season starts from the month of October every year and ends by February. Summer Internship selection process starts in the month of February and ends by mid April.",
        },
        {
            "Who takes Decisions on Academic matters?":
                "Yes, one must have a CGPA of more than 7 on average on a scale of 10 to get into the final placement process. But it usually depends on the companies visiting",
        },
    ];

    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <center>
                <div className="rectangle">
                    <img src={placement} />
                </div>
                <div className="rectangle-txt">Placements</div>
            </center>
            <br />
            <br />
            <br />
            {placements.map((category) => {
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
