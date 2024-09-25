import React from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem('userName');

    React.useEffect(() => {
      if (!userName) {
        navigate('/login');
      }
    }, [userName, navigate]);

    return userName ? <Component {...props} /> : null;
  };
};

export default withAuth;