import './loginpage.css';

export default function LoginPage() {
    return (
        <div className="login-page-bg">
            <div className="login-container">

                <p className="email-text">email:</p>
                <div className="email"><input type="text" /></div>

                <div className='pw-field'>
                    <p className="pw-text">password:</p>
                    <div className="password"></div>
                </div>

                <div className="login-btn">
                    <p>Login</p>
                </div>
            </div>

        </div>
    );
}