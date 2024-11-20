import React from 'react';
import { useLocation } from 'react-router-dom';
import PieChartComponent from './PieChartComponent.jsx';
import BarGraphComponent from './BarGraphComponent.jsx';
import PerformanceGraphComponent from './PerformanceGraphComponent.jsx';
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

  const pendingTasks = 20;
  const inProgressTasks = 30;
  const completedTasks = 25;

  const taskData = [
    { name: 'In Progress', value: inProgressTasks },
    { name: 'Completed', value: completedTasks },
    { name: 'Pending', value: pendingTasks },
  ];

  const teamMembersPerformanceData = [
    { id: '1', name: 'Robb Stark', completedTasks: '4', assignedTasks: '10', completionRate: 0 },
    { id: '2', name: 'Thomas Shelby', completedTasks: '7', assignedTasks: '8', completionRate: 0 },
    { id: '3', name: 'Joffrey Baratheon', completedTasks: '4', assignedTasks: '12', completionRate: 0 },
    { id: '4', name: 'Roronoa Zoro', completedTasks: '8', assignedTasks: '10', completionRate: 0 },
    { id: '5', name: 'Eren Yeager', completedTasks: '4', assignedTasks: '4', completionRate: 0 },
    { id: '7', name: 'Dominic Toretto', completedTasks: '5', assignedTasks: '9', completionRate: 0 },
    { id: '8', name: 'Nico Robin', completedTasks: '6', assignedTasks: '9', completionRate: 0 },
    { id: '9', name: 'Draco Malfoy', completedTasks: '3', assignedTasks: '8', completionRate: 0 },
    { id: '10', name: 'Miles Morales', completedTasks: '6', assignedTasks: '13', completionRate: 0 }
  ];
  teamMembersPerformanceData.forEach(member => {
    member.completionRate = (member.completedTasks / member.assignedTasks) * 100;
  });

  // console.log(teamMembersPerformanceData);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard!, {name}!</h1>

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
        </div><br />

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
        </div><br />

        <div className="task-status-grid">
          <div className="metric">
            <h3>Number of Tasks in Progress</h3>
            <h1>{inProgressTasks}</h1>
          </div>
          <div className="metric">
            <h3>Number of Pending Tasks</h3>
            <h1>{pendingTasks}</h1>
          </div>
          <div className="metric">
            <h3>Number of Completed Tasks</h3>
            <h1>{completedTasks}</h1>
          </div>
        </div><br />

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
        </div><br />

        <div className="table-container">
          <table className="performance-table">
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Team Members</th>
                <th style={{ width: '20%' }}>Assigned Tasks</th>
                <th style={{ width: '20%' }}>Completed Tasks</th>
                <th style={{ width: '20%' }}>Task Completion Rate (%)</th>
              </tr>
            </thead>
            <tbody>
              {teamMembersPerformanceData.map(member => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.assignedTasks}</td>
                  <td>{member.completedTasks}</td>
                  <td>{member.completionRate.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="performance-graph">
          <PerformanceGraphComponent
            data={teamMembersPerformanceData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;