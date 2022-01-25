import React from "react";
import ReactDOM from "react-dom";
import Timeline from "react-image-timeline"; // .scss also available
import days_DSA from "./Images/Timeline/7_days_DSA.jpg";
import Quantum_computing from "./Images/Timeline/Quantum_computers.jpg";
import fosscamp from "./Images/Timeline/fosscamp.jpg";
import Flying_coffins from "./Images/Timeline/Flying_coffins.jpg";
import member_gdsc from "./Images/Timeline/member_gdsc.jpg";
import explore_ML from "./Images/Timeline/explore_ML.jpg";
import "./Timeline.css";

require("react-image-timeline/dist/timeline.css");

const events = [
    {
        date: new Date(2021, 12, 27),
        text: "Photo by LCC-SJCE on December 26, 2021. May be an image of text that says 'JSS TECHNOLOGY LINUX CAMPUS CLUB CONNINECT Quantum Computing By Srivatsa Joshi Quantum computers The future.",
        title: "Quantum Computers - The future",
        buttonText: "Click Me",
        club: "linuxcampusclub",
        imageUrl: Quantum_computing,
        onClick: console.log,
    },
    {
        date: new Date(2021, 12, 24),
        text: "'JSS JSS SCIENCE AND TECHNOLOGY UNIVERSITY DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING LINUX CLUB CAMPUS presents FOSSCAMP 26TH DEC- CODE CON 27TH DEC- TRACKBACK 29TH -31ST DECRYPTO 28TH DEC SPIDER WEB 30TH DEC BERMUDA TRIANGLE 31ST DEC 2ND JAN VIVECHAN PARTICIPATE FOR FREE AND WIN CASH PRIZES UPTO 10K!",
        title: "Foss Camp",
        buttonText: "Click Me",
        club: "linuxcampusclub",
        imageUrl: fosscamp,
        onClick: console.log,
    },
    {
        date: new Date(2021, 12, 23),
        text: "Photo by LCC-SJCE on December 23, 2021. May be an image of aircraft and text",
        title: "Flying Coffins - MIG 29",
        buttonText: "Click Me",
        club: "linuxcampusclub",
        imageUrl: Flying_coffins,
        onClick: console.log,
    },
    {
        date: new Date(2022, 1, 19),
        text: "JSS JSS Science and Technology University Department of Computer Science and Engineering Google Developer Student Clubs 7 Days of DSA An ultimate roadmap to kickstart your Data Structures and Algorithms Journey 20th Jan 26th Jan ",
        title: "7 Days of DSA",
        buttonText: "Click Me",
        club: "gdscjssstu",
        imageUrl: days_DSA,
        onClick: console.log,
    },
    {
        date: new Date(2021, 12, 30),
        text: "JSS SCIENCEND JSS Science and Technology University Department of Computer Science and Engineering Google Gol Developer Student Clubs Greetings from GDSC JSSSTU MKWIGMERY Want to be a member of the most talked-about global community for students? If yes, this is your chance!'",
        title: "Chance to become a member of GDSC JSSSTU",
        buttonText: "Click Me",
        club: "gdscjssstu",
        imageUrl: member_gdsc,
        onClick: console.log,
    },
    {
        date: new Date(2021, 11, 23),
        text: "JSS SCIENCEL JSS Science and Technology University Department of Computer Science and Engineering Google Go Developer XO Explore ML Experience the Machine Experiencing! GDSC brings to you two day event where you get to learn the high on demand and extremely informative skill of today Machine Learning. 27th of November, 2:30 PM to 5:30 PM & 28th November, 11 AM to 5:30 PM Pre-requisites Basics of Python and lot of enthusiasm to learn!'",
        title: "Explore ML",
        buttonText: "Click Me",
        club: "gdscjssstu",
        imageUrl: explore_ML,
        onClick: console.log,
    },
];

export default function EventsTimeline() {
    return <Timeline events={events} className="timeline" />;
}
