import React from 'react';

// Define the style for the header
const headerStyle = {
  backgroundColor: '#006ed7',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

// Define the Header component
function Header() {
  return (
    // Render the header with the defined style
    <header style={headerStyle}>
      <h1>Vector Projects</h1>
    </header>
  );
}

export default Header;