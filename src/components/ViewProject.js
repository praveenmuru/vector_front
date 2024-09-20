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
        <div className="container">
            <div className="details">
                <p><strong>Project Name: </strong></p>
                <p>{project.projectName}</p>
            </div>
            <div className="details">
                <p><strong>Description: </strong></p>
                <p>{project.description}</p>
            </div>
            <div className="details">
                <p><strong>Project Manager: </strong></p>
                <p>{project.projectManager}</p>
            </div>
            <div className="details">
                <p><strong>Start Date: </strong></p>
                <p>{project.startDate}</p>
            </div>
            <div className="details">
                <p><strong>End Date: </strong></p>
                <p>{project.endDate}</p>
            </div>
            <div className="details">
                <p><strong>Team Members: </strong></p>
                <p>{project.teamMembers.join(', ')}</p>
            </div>
            <div className="details">
                <p><strong>Roles and Responsibilities: </strong></p>
                <p>{project.rolesAndResponsibilities}</p>
            </div>
            <div className="details">
                <p><strong>Budget: </strong></p>
                <p>{project.budget}</p>
            </div>
            <div className="details">
                <p><strong>Tools/Technologies: </strong></p>
                <p>{project.toolsAndTechnologies.join(', ')}</p>
            </div>
        </div>
    );

};

export default ViewProject;
