import './Signup-2.css';
import React from "react";
export default function SignUp2() {
    return (
        <div className="Main-container">
            <p className="heading1 mail">And what's your email address :</p>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                id="name"
                required
            />
            {/* <p className="heading1 pw">Type your password here ^_^ :</p>
            <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="input"
                id="name"
                required
            />
            <p className="heading1 pw2">Okay, type your password once again:</p>
            <input
                type="password"
                name="password"
                placeholder="Re-Enter your Password"
                className="input"
                id="name"
                required
            /> */}
        </div>
    );
}