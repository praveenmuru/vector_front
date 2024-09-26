import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import PieChart from 'react-minimal-pie-chart';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Dashboard() {
  const query = useQuery();
  const name = query.get('name');

  // Debugging: Log the query parameters
  console.log('Query Parameters:', query.toString());
  console.log('Name:', name);

  const activeProjects = 5;
  const completedProjects = 10;
  const overdueProjects = 2;
  const upcomingProjects = 3;
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard, {name}!</h1>
        <div className="metrics-grid">
          <div className="metric">
            <h3>Number of Active Projects</h3>
            <h1>{activeProjects}</h1>
          </div>
          <div className="metric">
            <h3>Number of Completed Projects</h3>
            <h1>{completedProjects}</h1>
          </div>
          <div className="metric">
            <h3>Number of Overdue Projects</h3>
            <h1>{overdueProjects}</h1>
          </div>
          <div className="metric">
            <h3>Number of Upcoming Projects</h3>
            <h1>{upcomingProjects}</h1>
          </div>
        </div>
        <div className="chart-container">
          <h3>Project Status Distribution</h3>
          <PieChart
            data={[
              { title: 'Active', value: activeProjects, color: '#4caf50' },
              { title: 'Completed', value: completedProjects, color: '#2196f3' },
              { title: 'Overdue', value: overdueProjects, color: '#f44336' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;