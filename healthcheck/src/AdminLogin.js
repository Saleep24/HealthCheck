import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

function AdminLogin() {
  return (
    <div className="patient-login-body">
    <div className="login-container">
  <div className="login-box">
    <img src={logo} alt="Logo" className="logo" />
    <h1>Welcome to the Patient Login!</h1>
    <form>
      <div className="input-group">
        <label htmlFor="username">Admin ID</label>
        <input type="text" id="username" placeholder="Enter your Admin ID" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>
      <Link to="/admin-dashboard" type="submit" className="login-button">LOGIN</Link>
    </form>
  </div>
</div>

</div>
  );
}

export default AdminLogin; 