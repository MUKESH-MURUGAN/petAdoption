import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password==="9685") {
      navigate('/admin');
      // window.location.href = "http://localhost:5173/"; 
    } else {
      navigate('/home');
    }
  };
  const handleSignUp = () => {
    // Redirect to the login page where the signup button is not available
    navigate('/signup');
  };

  return (
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <center><h1>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Pet Adoption &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</h1></center>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <button type="submit">Login</button>
  <button type="button" onClick={handleSignUp}>Sign up</button>
</div>
    
      </form>
    </div>
  );
}

export default Login;