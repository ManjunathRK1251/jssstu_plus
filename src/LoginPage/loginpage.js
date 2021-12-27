import "./loginpage.css";

export default function LoginPage() {
    return (
        <div className="login-page-bg">
            <div className="login-container">
                <p className="email-text">EMAIL:</p>
                <div className="email">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <p className="pw-text">PASSWORD:</p>
                <div className="password">
                    <input type="password" placeholder="Enter your password" />
                </div>

                <div className="login-btn">
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
}
