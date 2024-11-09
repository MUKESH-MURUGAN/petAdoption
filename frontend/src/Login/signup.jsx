import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return;
    }

    // Navigate to the home page or save credentials logic
    navigate('/home');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignUp}>
      <center><h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Pet Adoption &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</h1></center>
        <h2>Sign Up</h2>

        {/* Email Input */}
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* New Password Input */}
        <div className="input-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
        </div>

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Submit Button */}
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
