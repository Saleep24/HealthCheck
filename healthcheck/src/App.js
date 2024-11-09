// src/App.js
import './i18n';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import MainPage from './MainPage';
import Navbar from './components/Navbar'; 
import About from './About';
import Contact from './Contact';
import ContactProfessional from './ContactProfessional';

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-professional" element={<ContactProfessional />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;