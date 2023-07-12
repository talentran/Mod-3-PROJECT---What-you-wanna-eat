import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false); 
        if (data.success) {
          console.log('Login successful');
          navigate("/");
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        setLoading(false);
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className="login-form">
      <h2>What you wanna eat?</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <label>
        Auto Login
        <input type="checkbox" checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)} />
      </label>
      <p>Forgot password?</p>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default LoginForm;
