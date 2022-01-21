/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import JSSSTU_logo from "../../Images/JSSSTU_logo.jpg";
import facilities_blue from "../../Images/facilities_blue.png";
import "./FaqDetails.css";

export default function Facilities() {
    var facilities = [
        {
            id: 1,
            "Can we use laptop in campus? ":
                " Yes, we can use laptop and Wi-Fi facilities are also there.",
        },
        {
            id: 2,
            "What are the Library Timings?":
                "Library is kept open on all working days except National holidays i.e Republic Day, Independence Day and Gandhi Jayanthi. Monday to Saturday 8:00 AM to 10:00 PM Sunday 9:00 AM to 4:00 PM Holidays 9:00 AM to 3:00 PM",
        },
        {
            id: 3,
            "How do I borrow the Library reading materials?":
                "First enroll as a Library Member by submitting to circulation section at the central library filled LIBRARY MEMBERHIP FORM which is available in the Central Library along with copy of your ID card, copy of fee receipt and two passport size recent photographs. After two days our library staff will confirm your library membership and issue the borrowers card.",
        },
        {
            id: 4,
            "Are Education Loans available?":
                "Educational loans are very easy to get and the facility is available at any nationalized bank. The college will issue a fee structure letter through which you can avail loan easily. For any further help in this regard, you may contact the any of our admission office.",
        },
        {
            id: 5,
            "What are various scholarship schemes available?":
                "The Institutes’ offers scholarship schemes to meritorious students seeking admission in our Institute.",
        },
    ];
    return (
        <div>
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <center>
                <div className="rectangle">
                    <img src={facilities_blue} />
                </div>
                <div className="rectangle-txt">Facilities</div>
            </center>
        </div>
    );
}
