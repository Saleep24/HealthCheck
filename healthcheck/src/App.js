import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="flex flex-row justify-around">
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/dashboard">Dashboard</Link>
        </header>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<p>Welcome to the Home Page!</p>} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
