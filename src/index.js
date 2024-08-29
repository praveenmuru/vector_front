import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
// import { dotenv } from 'dotenv';


const msalConfig = {
  auth: {
    clientId: "your-microsoft-client-id",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="459264971772-1e0c1c2j6ldjrp8fe9t0s2neihe4vlpf.apps.googleusercontent.com">
   
        <App />
     
  </GoogleOAuthProvider>
);