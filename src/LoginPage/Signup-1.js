import React from "react";
import history from "../history";
import "./Signup-1.css";

function RouteToSignup2() {
    history.push('/signup2')
    window.location.reload()
}

export default function SignUp1() {
    return (
        <div className="body">
            <h1 className="h1">Great!! Can we get your full name?</h1>
            <input
                type="text"
                placeholder="Name"
                className="input"
                name="name"
                id="name"
                required
            />
            <button className="button" onClick={RouteToSignup2}>OK</button>
        </div>
    );
}
