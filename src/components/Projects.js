import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const initialProjects = [
    { id: '1', projectName: 'Apollo', description: 'Space mission management', projectManager: 'Alice Johnson', startDate: '12-09-2024', endDate: '15-09-2024' },
    { id: '2', projectName: 'Zephyr', description: 'Wind energy project', projectManager: 'Bob Smith', startDate: '13-09-2024', endDate: '16-09-2024' },
    { id: '3', projectName: 'Orion', description: 'Astronomy research', projectManager: 'Charlie Brown', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '4', projectName: 'Helios', description: 'Solar energy initiative', projectManager: 'Diana Prince', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '5', projectName: 'Poseidon', description: 'Marine conservation', projectManager: 'Ethan Hunt', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '6', projectName: 'Athena', description: 'AI research and development', projectManager: 'Fiona Gallagher', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '7', projectName: 'Hermes', description: 'Logistics optimization', projectManager: 'George Clooney', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '8', projectName: 'Artemis', description: 'Lunar exploration', projectManager: 'Hannah Montana', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '9', projectName: 'Hera', description: 'Healthcare innovation', projectManager: 'Ian McKellen', startDate: '14-09-2024', endDate: '17-09-2024' },
    { id: '10', projectName: 'Demeter', description: 'Agricultural technology', projectManager: 'Jane Austen', startDate: '14-09-2024', endDate: '17-09-2024' },
  ];
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    // Fetch projects from backend or state management
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects'); // Adjust the URL as needed
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);
  const navigate = useNavigate();
  const handleAddProject = () => {
    navigate('/create-project');
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className="actions">
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Project Manager</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.id}>
                <td>{project.projectName}</td>
                <td>{project.description}</td>
                <td>{project.projectManager}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>
                  <button className="view">View</button>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No projects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;