import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { jwtDecode } from 'jwt-decode';
import Header from './Header';
import Footer from './Footer';
import GoogleLoginButton from './GoogleLoginButton';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',
};


const App = () => {
  useMsal();
  const [userName, setUserName] = useState('');

  const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    setUserName(userObject.name);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="App">
      <Header />
      <div style={{ padding: '20px' }}>
     
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
      {/* <button onClick={handleMicrosoftLogin}>Login with Microsoft</button> */}
      {userName && <h3>Welcome, {userName}!</h3>}
    </div>
    <Footer />
    </div>
  );
}

export default App;
