import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useMsal } from '@azure/msal-react';
import { jwtDecode } from 'jwt-decode';


const App = () => {
  const { instance } = useMsal();
  const [userName, setUserName] = useState('');



  const handleSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential);
    setUserName(userObject.name);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  const handleMicrosoftLogin = () => {
    instance.loginPopup({
      scopes: ["user.read"],
      prompt: "select_account"
    }).then(response => {
      console.log('Microsoft login success:', response);
      // Handle Microsoft login success
    }).catch(error => {
      console.error('Microsoft login error:', error);
      // Handle Microsoft login error
    });
  };

  return (
    <div className="App">
      <h2>React Google Sign-In</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
            <button onClick={handleMicrosoftLogin}>Login with Microsoft</button>

      {userName && <h3>Welcome, {userName}!</h3>}
    </div>
  );
}

export default App;
