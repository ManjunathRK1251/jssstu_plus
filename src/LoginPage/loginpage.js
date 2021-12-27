/* eslint-disable jsx-a11y/anchor-is-valid */
import "./loginpage.css";

export default function LoginPage() {
    return (
        <form method="POST">
            <div className="login-page-bg">
                <div className="login-container">
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

                    <button className="fill">
                        Login
                    </button>
                </div>
            </div>
        </form>
    );
}
