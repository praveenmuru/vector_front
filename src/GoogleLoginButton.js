import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

// Styles for the button and container
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust as needed
};

// Component for the Google Login button
function GoogleLoginButton() {
    const [, setUserName] = useState('');

    // Handle successful login
    const handleSuccess = (credentialResponse) => {
        const userObject = jwtDecode(credentialResponse.credential);
        setUserName(userObject.name);
    };

    // Handle login error
    const handleError = () => {
        console.log('Login Failed');
    };

    return (
        <div style={containerStyle}>
            {/* Google Login button */}
            <GoogleLogin
                style={buttonStyle}
                onSuccess={handleSuccess}
                onError={handleError}
            />
        </div>
    );
}

export default GoogleLoginButton;