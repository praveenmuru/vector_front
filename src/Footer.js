import React from 'react';

const footerStyle = {
  backgroundColor: '#6A0DAD',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 My Application</p>
    </footer>
  );
}

export default Footer;