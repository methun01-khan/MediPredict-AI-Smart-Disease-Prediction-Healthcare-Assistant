import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import LoginSignup from './pages/LoginSignup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogin = (authUser) => {
    setUser(authUser);
    setIsLoggedIn(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: darkMode ? '#07111f' : '#f8fafc', color: darkMode ? '#e2e8f0' : '#0f172a' }}>
      <nav className="card" style={{ margin: '1rem auto', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1240px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
        <div style={{ fontWeight: 800, fontSize: '1.15rem', background: 'linear-gradient(90deg, #38bdf8, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Disease Prediction System</div>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : darkMode ? '#cbd5e1' : '#334155', fontWeight: 600 })}>Home</NavLink>
          <NavLink to="/predict" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : darkMode ? '#cbd5e1' : '#334155', fontWeight: 600 })}>Prediction</NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : darkMode ? '#cbd5e1' : '#334155', fontWeight: 600 })}>Dashboard</NavLink>
          <NavLink to="/chat" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : darkMode ? '#cbd5e1' : '#334155', fontWeight: 600 })}>Chatbot</NavLink>
          {isLoggedIn ? (
            <span style={{ color: '#38bdf8', fontWeight: 700 }}>{user?.email}</span>
          ) : (
            <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#38bdf8' : darkMode ? '#cbd5e1' : '#334155', fontWeight: 600 })}>Login</NavLink>
          )}
          <button onClick={() => setDarkMode((v) => !v)} style={{ border: 'none', borderRadius: '999px', padding: '0.45rem 0.8rem', background: darkMode ? 'linear-gradient(90deg, #2563eb, #7c3aed)' : '#e2e8f0', color: '#fff', cursor: 'pointer' }}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={isLoggedIn ? <Prediction /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
        <Route path="/chat" element={isLoggedIn ? <Chatbot /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
