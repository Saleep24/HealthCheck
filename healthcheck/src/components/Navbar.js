// src/components/Navbar.js
import {React, useState} from 'react';
import logo from '../img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className=" flex flex-row justify-between custom-navbar top-0 sticky w-full z-50 p-6">
        <div className="flex flex-row justify-around items-center bg-white rounded-lg">
                <div className="navbar-logo-container">
                    <img src={logo} alt="logo" height={10} width={50} />
                    <h1 className="text-3xl font-bold text-blue-600">{t('Health Check')}</h1>
                </div>
            </div>
      {location.pathname  !== '/patient-dashboard' && location.pathname !== '/admin-dashboard' ? (
        <>
        <div className="flex flex-row justify-around text-xl items-center p-3">
            <Link className="link " style={{ padding: '4px' }} to="/">{t('Home')}</Link>
            <Link className="link" style={{ padding: '4px' }}  to="/aboutus">{t('About Us')}</Link>
            <Link className="link" style={{ padding: '4px' }}  to="/contact">{t('Contact')}</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="link">{t('Resources')}</button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link className=" link" style={{ padding: '4px' }}  to="/contact-professional">{t('Contact Professional')}</Link>
                  <Link className=" link" style={{ padding: '4px' }} to="/patient-rights">{t('Patient Rights')}</Link>
                  <Link className=" link" style={{ padding: '4px' }}  to="/mental-health">{t('Mental Health')}</Link>
                </div>
              )}
            </div>
            <Link to="/login/admin" className="admin-login">{t('Admin Login')}</Link>
        </div>
        </>
      ) : (
        <div className="flex flex-row justify-around text-xl items-center p-3">
          <Link className="link" to="/patient-dashboard">{t('Dashboard')}</Link>
          <Link className="link" to="/">{t('Back to Home')}</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;