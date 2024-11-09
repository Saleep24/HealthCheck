// src/App.js
import './i18n';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './components/Navbar'; 
import Contact from './Contact';
import ContactProfessional from './ContactProfessional';
import AboutUs from './AboutUs';
import PatientRights from './PatientRights';
import MentalHealth from './MentalHealth';
import AdminLogin from './AdminLogin';
import PatientLogin from './PatientLogin';
import PatientDashboard from './Dashboards/Patient-Dashboard';
import AdminDashboard from './Dashboards/Admin-Dashboard';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div className="bg-white h-screen w-full">
      {/* Conditionally render the Navbar */}
      {location.pathname !== '/login/admin' && location.pathname !== '/login/patient' && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-professional" element={<ContactProfessional />} />
        <Route path="/patient-rights" element={<PatientRights />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/patient" element={<PatientLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

// Wrap the App component with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
