import React, { useState } from 'react';
import { loginUser, signupUser } from '../services/api';

export default function LoginSignup({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const request = isSignup ? signupUser({ email, password }) : loginUser({ email, password });
      const response = await request;
      setMessage(response.data.message);
      onLogin({ email, token: response.data.token });
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Authentication failed');
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '420px', padding: '1.5rem' }}>
        <h2 style={{ marginTop: 0 }}>{isSignup ? 'Create account' : 'Login'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.9rem' }}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: '0.8rem', borderRadius: '12px', border: '1px solid #334155', background: '#020617', color: '#fff' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: '0.8rem', borderRadius: '12px', border: '1px solid #334155', background: '#020617', color: '#fff' }} />
          <button type="submit" style={{ padding: '0.8rem', border: 'none', borderRadius: '12px', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>{isSignup ? 'Sign up' : 'Log in'}</button>
        </form>
        <button onClick={() => setIsSignup((prev) => !prev)} style={{ marginTop: '0.8rem', background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>{isSignup ? 'Already have an account?' : 'Need an account?'}</button>
        {message ? <div style={{ marginTop: '0.7rem', color: '#fbbf24' }}>{message}</div> : null}
      </div>
    </div>
  );
}
