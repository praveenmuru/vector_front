import React, { useEffect, useState } from 'react';

// Define the style for the header
const headerStyle = {
  backgroundColor: '#006ed7',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

function Header({ handleLogout }) {
  const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   const storedUserName = sessionStorage.getItem('username');
  //   if (storedUserName) {
  //     setUserName(storedUserName);
  //   }
  // }, []);

  const handleLogoutClick = () => {
    sessionStorage.removeItem('username');
    console.log('Logout');
    handleLogout();
  };

  return (
    <header style={headerStyle}>
      <div style={{ marginRight: '10px' }}>
        {userName ? `Welcome, ${userName}` : 'Welcome, Guest'}
      </div>
      {userName && (
        <button onClick={handleLogout} style={{ padding: '5px 10px' }}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;