import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './Projects.css';
const Projects = () => {
    return (
        <div className="container">
            <Sidebar />
            <h1>Projects</h1>
            <div className="actions">
                <button>Add</button>
            </div>
        </div>
    );
};

export default Projects;
