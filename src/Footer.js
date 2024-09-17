import React from 'react';

// Footer component
const footerStyle = {
  backgroundColor: '#006ed7',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  width: '100%',
  bottom: '0',
};

function Footer() {
  return (
    // Footer element
    <footer style={footerStyle}>
      <p>&copy; 2023 My Application</p>
    </footer>
  );
}

export default Footer;