import React from 'react';
import { useLocation } from 'react-router-dom';
import PieChartComponent from './PieChartComponent.jsx';
import BarGraphComponent from './BarGraphComponent.jsx';
import './Dashboard.css';


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

  const projectData = [
    { name: 'Active', value: activeProjects },
    { name: 'Completed', value: completedProjects },
    { name: 'Overdue', value: overdueProjects },
  ];

  const pendingTasks = 7;
  const inProgressTasks = 8;
  const completedTasks = 5;

  const taskData = [
    { name: 'In Progress', value: inProgressTasks },
    { name: 'Completed', value: completedTasks },
    { name: 'Pending', value: pendingTasks },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard, {name}!</h1>

        <div className="project-status-grid">
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
        <br />
        <div className="project-status-charts">
          <PieChartComponent
            labels={['Active', 'Completed', 'Overdue']}
            dataValues={[activeProjects, completedProjects, overdueProjects]}
            chartLabel="Projects"
          />
          <BarGraphComponent
            data={projectData}
            colors={['#6A5ACD', '#228B22', '#DC143C']}
            domain={[0, 20]}
          />
        </div>
        <br />
        <div className="task-status-grid">
          <div className="metric">
            <h3>Number of Pending Tasks</h3>
            <h1>{pendingTasks}</h1>
          </div>
          <div className="metric">
            <h3>Number of Tasks in Progress</h3>
            <h1>{inProgressTasks}</h1>
          </div>
          <div className="metric">
            <h3>Number of Completed Tasks</h3>
            <h1>{completedTasks}</h1>
          </div>
        </div>
        <br />
        <div className="task-status-charts">
          <PieChartComponent
            labels={['Completed', 'In Progress', 'Pending']}
            dataValues={[completedTasks, inProgressTasks, pendingTasks]}
            chartLabel="Tasks"
          />
          <BarGraphComponent
            data={taskData}
            colors={['#6A5ACD', '#228B22', '#DC143C']}
            domain={[0, 20]}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;