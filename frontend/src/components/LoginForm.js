import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);

  const handleLogin = () => {
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
        if (data.success) {
          console.log('Login successful');
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
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
      <button onClick={handleLogin}>Login</button>
      <button>Sign Up</button>
    </div>
  );
};

export default LoginForm;
