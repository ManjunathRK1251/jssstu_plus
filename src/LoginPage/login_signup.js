
import "./loginsignup.css";
import SignUp1 from "./Signup-1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import history from "../history";

function RouteToSignup1() {
    history.push('/signup1');
    window.location.reload();
}

export default function LoginSignup() {

    return (
        <form method="POST">
            <div className="login-page-bg">
                <div className="container" id="container">
                    <div className="sign-in-container">
                        <p className="email-text">EMAIL:</p>
                        <div className="email">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <p className="pw-text">PASSWORD:</p>
                        <div className="password">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button className="fill">Login</button>
                    </div>
                    <div className="form-container"></div>
                    <div className="overlay-container">
                        <div className="overlay"></div>
                    </div>

                    <div>
                        <div className="heading2">
                            <h2>Hello Student</h2>
                        </div>
                        <p className="desc" align="justify">
                            Create your account and
                            <br />
                            &nbsp;&nbsp;&nbsp;start journey with us
                        </p>
                        <p className="desc-2" >
                            Want to Join?
                        </p>
                        <Link to='/signup1'>
                            <button className="signup-button">Count Me In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
}
