import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
      setLoading(true);
      fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          email
        })
      })
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          if (data.success) {
            console.log('Signup successful');
            navigate("/login");
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
    <div className="sign-up-form">
      <h2>Enter your information to sign up</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>
        <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
        Agreed to the Terms and Conditions
      </label>
      <button onClick={handleSignUp} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default SignUpForm;
