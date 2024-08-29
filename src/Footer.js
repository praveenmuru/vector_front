import React from 'react';

// Footer component
const footerStyle = {
  backgroundColor: '#6A0DAD',
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