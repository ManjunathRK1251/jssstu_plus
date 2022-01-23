import "./Signup-2.css";
import React from "react";
import history from "../history";



export default function SignUp2() {
    return (
        <div className="body">
            <h1 className="h1">And what's your email address :</h1>
            <input
                type="text"
                name="email"
                placeholder="Email"
                className="input"
                id="email"
                required
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="h1">Type your password here ^_^ :</h1>
            <input
                type="text"
                name="password"
                placeholder="Enter your Password"
                className="input"
                id="name"
                required
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="h1">Okay, type your password once again:</h1>
            <p className="p">
                The password here should be same as the above password
            </p>
            <input
                type="text"
                name="password"
                placeholder="Re-Enter your Password"
                className="input"
                id="name"
                required
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="p">
                That’s it!! Are you ready to start your new journey??
            </p>
            <button className="button">Let’s go !!</button>
        </div>
    );
}
