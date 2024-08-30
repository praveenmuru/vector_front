import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


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

  const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    setUserName(userObject.name);
    console.log(userObject.name);
    navigate('/dashboard');

};

  

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg) no-repeat',
    backgroundSize: 'contain',
    width: '200px',
    height: '40px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Your login form here */}
      <GoogleOAuthProvider
        clientId="459264971772-1e0c1c2j6ldjrp8fe9t0s2neihe4vlpf.apps.googleusercontent.com"
        style={{ textAlign: 'center' }} // Add this style prop
      >
        <GoogleLogin
          onSuccess={handleSuccess}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
          style={buttonStyle}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
