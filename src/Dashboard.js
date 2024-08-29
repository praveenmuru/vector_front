import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dashboard() {
  const query = useQuery();
  const name = query.get('name');

  return (
    <div>
      <h1>Welcome to the Dashboard, {name}!</h1>
    </div>
  );
}

export default Dashboard;