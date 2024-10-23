import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the import path as needed
import './Login.css';
import logo from '../../assets/logo-color.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setIsDialogOpen(true);
        }
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setMessage('');
    };

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="smart-mavuno-logo" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-header">Log In</h2>
                <div className="form-group">
                    <div className="label-container">
                        <label htmlFor="email">Email:</label>
                        <span className="signup-link">Need an account? <Link to="/signup" className="signup-link-text">Sign Up</Link></span>
                    </div>
                    <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-button">Login</button>
                <div className="or-section">
                    <div className="or-line"></div>
                    <span>OR</span>
                    <div className="or-line"></div>
                </div>
                <div className="social-buttons-container">
                    <button className="facebook-button"><i className="fab fa-facebook"></i> Log in with Facebook</button>
                    <button className="google-button"><i className="fab fa-google"></i> Log in with Google</button>
                </div>
                <div className="forgot-password">
                    <span>Forgot Password? <Link to="/reset" className="reset-link">Reset</Link></span>
                </div>
            </form>
            {isDialogOpen && (
                <div className="dialog-box">
                    <div className="dialog-content">
                        <p>{message}</p>
                        <button onClick={closeDialog} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
