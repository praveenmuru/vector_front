import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function Login({ setUserName }) {
  const navigate = useNavigate();

  // Simulate successful login (you'll replace this with actual Google OAuth logic)
  const handleError = () => {
    console.log('Login Failed');

  };

  const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    setUserName(userObject.name);
    sessionStorage.setItem('userName', userObject.name);
    navigate('/dashboard', { state: { userName: userObject.name } });

};

const handleLogout = () => {
  sessionStorage.removeItem('userName');
  setUserName(null);
  navigate('/login');
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
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}

        style={{ textAlign: 'center' }} // Add this style prop
      >
        <GoogleLogin
          onSuccess={handleSuccess}
          onFailure={handleError}
          cookiePolicy={'single_host_origin'}
          style={buttonStyle}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
