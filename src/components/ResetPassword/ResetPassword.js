import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import logo from '../../assets/logo-color.png';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a password reset action. Replace this with actual Firebase functionality.
    setMessage('If this email is registered, a password reset link will be sent.');
    setIsDialogOpen(true);
    // Optionally, navigate to a confirmation page or another action
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setMessage('');
    navigate('/login'); // Navigate to login after closing the dialog
  };

  return (
    <div className="reset-password-wrapper">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="smart-mavuno-logo" />
      </div>
      <h2 className="reset-password-header">Reset your password</h2>
      <p className="reset-password-instructions">
        An email will be sent to your mail with reset password instructions.
      </p>
      <div className="reset-password-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit" className="reset-button">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p className="back-to-login">
          <span>Return to <Link to="/login" className="login-link">Login</Link></span>
        </p>
      </div>
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

export default ResetPassword;
