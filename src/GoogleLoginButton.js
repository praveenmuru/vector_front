import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

function GoogleLoginButton() {
const [userName, setUserName] = useState('');
const navigate = useNavigate();
const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    setUserName(userObject.name);
    navigate(`/dashboard?name=${encodeURIComponent(userObject.name)}`);

  };
  const handleError = () => {
    console.log('Login Failed');
  };
  return (
    <GoogleLogin
    onSuccess={handleSuccess}
    onError={handleError}
  />
  );
}

export default GoogleLoginButton;