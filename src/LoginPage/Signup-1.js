import React from "react";
import "./Signup-1.css";

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
            <button className="button">OK</button>
        </div>
    );
}
