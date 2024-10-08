import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewProject.css';

const ViewProject = () => {
    const location = useLocation();
    const project = location.state?.project;

    if (!project) {
        return <div>No project data available</div>;
    }

    return (
        <div>
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Basic Information</h2>
                <div className="details">
                    <p><strong>Project Name:</strong></p>
                    <p>{project.projectName}</p>
                    <p><strong>Project Manager:</strong></p>
                    <p>{project.projectManager}</p>
                    <p><strong>Description:</strong></p>
                    <p>{project.description}</p>
                    <p><strong>Start Date:</strong></p>
                    <p>{project.startDate}</p>
                    <p><strong>End Date:</strong></p>
                    <p>{project.endDate}</p>
                </div>
            </div>

            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Team and Roles</h2>
                <div className="details">
                    <p><strong>Team Members:</strong></p>
                    <p>{project.teamMembers.join(', ')}</p>
                </div>
                <div className="details">
                    <p><strong>Roles and Responsibilities:</strong></p>
                    <p>{project.rolesAndResponsibilities}</p>
                </div>
            </div>

            <div className="container">
                <h2 style={{ textAlign: 'center' }}>Resources</h2>
                <div className="details">
                    <p><strong>Budget:</strong></p>
                    <p>{project.budget}</p>
                </div>
                <div className="details">
                    <p><strong>Tools/Technologies:</strong></p>
                    <p>{project.toolsAndTechnologies.join(', ')}</p>
                </div>
            </div>
        </div>
    );

};

export default ViewProject;
