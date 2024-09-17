import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Sidebar.css';
import './Projects.css';
const Projects = () => {
    return (
        <div className="container">
            <Sidebar />
            <h1>Projects</h1>
            <div className="actions">
                <Link to="/create-project">
                    <button>Add</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
