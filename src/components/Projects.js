import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend or state management
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const navigate = useNavigate();

  const handleViewProject = (project) => {
    navigate('/projects/view-project', { state: { project } });
  };

  const handleAddProject = () => {
    navigate('/create-project');
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure that you want to delete this project?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`);
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
      } catch (error) {
        console.error('There was an error deleting the project!', error);
      }
    }
  };

  const handleEditProject = (project) => {
    navigate('/create-project', { state: { project, isEdit: true } });
  };

  return (
    <div style={{ width: "85%" }}>
      <div className="actions">
        <p className='projects'>Projects</p>
        <button className='add-button' onClick={handleAddProject}>Add Project</button>
      </div>
      <div className="table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Project Name</th>
              <th style={{ width: '15%' }}>Description</th>
              <th>Project Manager</th>
              <th style={{ width: '10%' }}>Start Date</th>
              <th style={{ width: '10%' }}>End Date</th>
              <th>Team Members</th>
              <th>Roles and Responsibilities</th>
              <th>Budget</th>
              <th>Tools/Technologies</th>
              <th style={{ width: '20%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.projectName}</td>
                  <td>{project.description}</td>
                  <td>{project.projectManager}</td>
                  <td>{new Date(project.startDate).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                  <td>{new Date(project.endDate).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                  <td>{project.teamMembers}</td>
                  <td>{project.rolesAndResponsibilities}</td>
                  <td>${project.budget}</td>
                  <td>{project.toolsAndTechnologies}</td>
                  <td>
                    <button className="view" onClick={() => handleViewProject(project)}>
                      View
                    </button>
                    <button className="edit" onClick={() => handleEditProject(project)}>
                      Edit
                    </button>
                    <button className="delete" onClick={() => handleDeleteProject(project.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;