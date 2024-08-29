// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';


function Login({ setUserName }) {
  const navigate = useNavigate();

  // Simulate successful login (you'll replace this with actual Google OAuth logic)
  const handleLogin = () => {
    // Perform login logic (e.g., get access token)
    // ...

    // Set user name (simulate login)
    setUserName('User Name');

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      {/* Your login form here */}
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
}

export default Login;