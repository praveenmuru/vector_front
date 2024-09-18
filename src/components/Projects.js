import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const handleAddProject = () => {
    navigate('/create-project');
  };

  return (
    <div>
      <h1>Projects</h1>
      <p>This is the Projects page.</p>
      <div className="actions">
        <button onClick={handleAddProject}>Add</button>
      </div>
    </div>
  );
};

export default Projects;
