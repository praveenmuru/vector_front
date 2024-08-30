import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { userName } = location.state || { userName: 'Guest' };

  return (
    <div>
      <h1>Welcome to the Dashboard, {userName}!</h1>
      {/* Your dashboard content */}
    </div>
  );
};

export default Dashboard;