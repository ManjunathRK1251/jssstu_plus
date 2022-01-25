/* eslint-disable jsx-a11y/alt-text */
import vmware from "../Images/vmware_logo.png"
import deloitte from "../Images/Deloitte.png"
import wd from "../Images/Western_Digital_logo.png"
// import "../Components/FAQ/Faq.css";
import bg from "../Images/placement_2.jpg";
import Placement1_bg from "../Images/placement1.jpg";
import "./Placement1.css";
import JSSSTU_logo from "../Images/JSSSTU_logo.jpg";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Placement2 from "./Placement2";

export default function Placement1() {

    <Routes>

    </Routes>

    return (
        <div className="Placement1">
            <img src={JSSSTU_logo} className="JSSSTU-logo" />
            <table>
                <td>
                    <div className="placement-rect">
                        <center>
                            <img className="vmware" src={vmware} />
                        </center>

                    </div>
                </td>
                <td>
                    <div className="placement-rect">
                        <img className="deloitte" src={deloitte} />
                    </div>
                </td>
                <td>
                    <Link to="/placement/western-digital">
                        <div className="placement-rect">
                            <img className="wd" src={wd} />
                        </div>
                    </Link>
                </td>
            </table >
            <img className="placement1-bg" src={Placement1_bg} />
        </div >
    );
}