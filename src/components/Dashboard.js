import React from 'react';
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dashboard() {
  const query = useQuery();
  const name = query.get('name');

  // Debugging: Log the query parameters
  console.log('Query Parameters:', query.toString());
  console.log('Name:', name);

  return (
    <div className="dashboard-container">
      {/* {<Sidebar />} */}
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard, {name}!</h1>
      </div>
    </div>
  );
}

export default Dashboard;