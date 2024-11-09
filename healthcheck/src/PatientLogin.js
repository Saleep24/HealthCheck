import React from 'react';
import logo from './img/logo.png'; // Adjust the path if necessary
import './PatientLogin.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';
const reminders = [
  "You're doing great! Keep it up!",
  "Remember, taking care of your health is a priority!",
  "Every step you take is a step towards better health!",
  "Stay positive and keep moving forward!",
  "Your health journey is important!",
];

function PatientLogin() {
  const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];

  return (
    <div className="patient-login-body">
        <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Welcome to the Patient Login!</h1>
        <form>
          <div className="input-group">
            <label htmlFor="username">Patient ID</label>
            <input type="text" id="username" placeholder="Enter your Patient ID" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <Link to="/patient-dashboard" type="submit" className="login-button">LOGIN</Link>
        </form>
      </div>
      <div className="reminder">{randomReminder}</div>
    </div>

    </div>
    
  );
}

export default PatientLogin;