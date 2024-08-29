import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';
import Header from './Header';
import Footer from './Footer';
import GoogleLoginButton from './GoogleLoginButton';

const padding20 = {
  padding: '20px',
};

const App = () => {
  useMsal();

  // State for storing the user name
  const [userName] = useState('');

  return (
    <div className="App">
      {/* Header component */}
      <Header />

      <div style={padding20}>
        {/* Google Login Button component */}
        <GoogleLoginButton />

        {/* Display the user name if available */}
        {userName && <h3>Welcome, {userName}!</h3>}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
