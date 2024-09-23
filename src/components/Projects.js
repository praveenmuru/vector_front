import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const initialProjects = [
    { id: '1', projectName: 'Apollo', description: 'Space mission management', projectManager: 'Alice Johnson', startDate: '12-09-2024', endDate: '15-09-2024', teamMembers: ['John Doe', 'Jane Smith'], rolesAndResponsibilities: 'Mission planning and execution', budget: '$1,000,000', toolsAndTechnologies: ['Python', 'Django', 'React'] },
    { id: '2', projectName: 'Zephyr', description: 'Wind energy project', projectManager: 'Bob Smith', startDate: '13-09-2024', endDate: '16-09-2024', teamMembers: ['Alice Brown', 'Charlie Davis'], rolesAndResponsibilities: 'Wind turbine design and implementation', budget: '$500,000', toolsAndTechnologies: ['MATLAB', 'Simulink', 'AutoCAD'] },
    { id: '3', projectName: 'Orion', description: 'Astronomy research', projectManager: 'Charlie Brown', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['David Evans', 'Eva Green'], rolesAndResponsibilities: 'Data collection and analysis', budget: '$750,000', toolsAndTechnologies: ['Python', 'TensorFlow', 'Keras'] },
    { id: '4', projectName: 'Helios', description: 'Solar energy initiative', projectManager: 'Diana Prince', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Frank Harris', 'Grace Lee'], rolesAndResponsibilities: 'Solar panel installation and maintenance', budget: '$600,000', toolsAndTechnologies: ['AutoCAD', 'SketchUp', 'PV*SOL'] },
    { id: '5', projectName: 'Poseidon', description: 'Marine conservation', projectManager: 'Ethan Hunt', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Hannah Moore', 'Ian Scott'], rolesAndResponsibilities: 'Marine life monitoring and protection', budget: '$800,000', toolsAndTechnologies: ['R', 'ArcGIS', 'QGIS'] },
    { id: '6', projectName: 'Athena', description: 'AI research and development', projectManager: 'Fiona Gallagher', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Jack White', 'Karen Black'], rolesAndResponsibilities: 'AI model development and testing', budget: '$1,200,000', toolsAndTechnologies: ['Python', 'PyTorch', 'Jupyter'] },
    { id: '7', projectName: 'Hermes', description: 'Logistics optimization', projectManager: 'George Clooney', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Laura Green', 'Michael Brown'], rolesAndResponsibilities: 'Supply chain management and optimization', budget: '$900,000', toolsAndTechnologies: ['Java', 'Spring Boot', 'MySQL'] },
    { id: '8', projectName: 'Artemis', description: 'Lunar exploration', projectManager: 'Hannah Montana', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Nancy Drew', 'Oliver Twist'], rolesAndResponsibilities: 'Lunar rover design and deployment', budget: '$2,000,000', toolsAndTechnologies: ['C++', 'ROS', 'Gazebo'] },
    { id: '9', projectName: 'Hera', description: 'Healthcare innovation', projectManager: 'Ian McKellen', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Paul Walker', 'Quincy Adams'], rolesAndResponsibilities: 'Medical device development', budget: '$1,500,000', toolsAndTechnologies: ['JavaScript', 'Node.js', 'MongoDB'] },
    { id: '10', projectName: 'Demeter', description: 'Agricultural technology', projectManager: 'Jane Austen', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Rachel Green', 'Steve Jobs'], rolesAndResponsibilities: 'Smart farming solutions', budget: '$700,000', toolsAndTechnologies: ['Python', 'Raspberry Pi', 'IoT'] },
    { id: '11', projectName: 'Ares', description: 'Defense technology', projectManager: 'John Wick', startDate: '18-09-2024', endDate: '21-09-2024', teamMembers: ['Bruce Wayne', 'Clark Kent'], rolesAndResponsibilities: 'Weapon system development', budget: '$3,000,000', toolsAndTechnologies: ['C++', 'MATLAB', 'Simulink'] },
    { id: '12', projectName: 'Hestia', description: 'Smart home solutions', projectManager: 'Tony Stark', startDate: '19-09-2024', endDate: '22-09-2024', teamMembers: ['Peter Parker', 'Natasha Romanoff'], rolesAndResponsibilities: 'Home automation system design', budget: '$1,100,000', toolsAndTechnologies: ['JavaScript', 'Node.js', 'IoT'] },
    { id: '13', projectName: 'Dionysus', description: 'Wine production optimization', projectManager: 'Bruce Banner', startDate: '20-09-2024', endDate: '23-09-2024', teamMembers: ['Steve Rogers', 'Thor Odinson'], rolesAndResponsibilities: 'Fermentation process improvement', budget: '$900,000', toolsAndTechnologies: ['Python', 'R', 'MATLAB'] },
    { id: '14', projectName: 'Hephaestus', description: 'Industrial automation', projectManager: 'Reed Richards', startDate: '21-09-2024', endDate: '24-09-2024', teamMembers: ['Susan Storm', 'Johnny Storm'], rolesAndResponsibilities: 'Robotic system design', budget: '$2,500,000', toolsAndTechnologies: ['C++', 'ROS', 'Gazebo'] },
    { id: '15', projectName: 'Persephone', description: 'Environmental monitoring', projectManager: 'Diana Prince', startDate: '22-09-2024', endDate: '25-09-2024', teamMembers: ['Barry Allen', 'Arthur Curry'], rolesAndResponsibilities: 'Air and water quality analysis', budget: '$1,300,000', toolsAndTechnologies: ['Python', 'R', 'ArcGIS'] }
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

  const handleViewProject = (project) => {
    navigate('/projects/view-project', { state: { project } });
  };

  const handleAddProject = () => {
    navigate('/create-project');
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure that you want to delete this project ?')) {
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
    }
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
            <th>Team Members</th>
            <th>Roles and Responsibilities</th>
            <th>Budget</th>
            <th>Tools/Technologies</th>
            <th style={{ width: '15%' }}>Actions</th>
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
                <td>{project.teamMembers.join(', ')}</td>
                <td>{project.rolesAndResponsibilities}</td>
                <td>{project.budget}</td>
                <td>{project.toolsAndTechnologies.join(', ')}</td>
                <td>
                  <button className="view" onClick={() => handleViewProject(project)}>
                    View
                  </button>
                  <button className="edit">Edit</button>
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
  );
};

export default Projects;