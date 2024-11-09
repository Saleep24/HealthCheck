// src/components/Navbar.js
import {React, useState} from 'react';
import logo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=" flex flex-row justify-between custom-navbar top-0 sticky w-full z-50 p-6">
        <div className="flex flex-row justify-around items-center">
                <img src={logo} alt="logo" height={10} width={50} />
                <h1 className="text-3xl font-bold text-blue-600">Health Check</h1>
            </div>
      {location.pathname  !== '/dashboard' || '' ? (
        <>
        <div className="flex flex-row justify-around text-md items-center p-3">
            <Link className="link " style={{ padding: '4px' }} to="/">Home</Link>
            <Link className="link" style={{ padding: '4px' }}  to="/about">About Us</Link>
            <Link className="link" style={{ padding: '4px' }}  to="/contact">Contact</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="link">Resources</button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link className=" link" style={{ padding: '4px' }}  to="/contact-professional">Contact Professional</Link>
                  <Link className=" link" style={{ padding: '4px' }} to="/patient-advocacy-1">Patient Rights</Link>
                  <Link className=" link" style={{ padding: '4px' }}  to="/patient-advocacy-2">Mental Health</Link>
                </div>
              )}
            </div>
            <Link to="/admin/login" className="admin-login">Admin Login</Link>
        </div>
        </>
      ) : (
        <>
          <Link className="link" to="/dashboard">Dashboard</Link>
          <Link className="link" to="/">Back to Home</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;