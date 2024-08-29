import React from 'react';

const headerStyle = {
  backgroundColor: '#6A0DAD',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Vector Projects</h1>
    </header>
  );
}

export default Header;