import React from "react";
import history from "../history";
import "./Signup-1.css";

function RouteToSignup2() {
    history.push('/signup2')
    window.location.reload()
}

export default function SignUp1() {
    return (
        <div className="body-1">
            <h1 className="h1-1">Great!! Can we get your full name?</h1>
            <input
                type="text"
                placeholder="Name"
                className="input-1"
                name="name"
                id="name"
                required
            />
            <button className="button-1" onClick={RouteToSignup2}>OK</button>
        </div>
    );
}
