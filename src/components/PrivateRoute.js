import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ userName, component: Component }) => {
  return userName ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;