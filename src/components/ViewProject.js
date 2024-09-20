import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewProject = () => {
    const location = useLocation();
    const project = location.state?.project;

    if (!project) {
        return <div>No project data available</div>;
    }

    return (
        <table className="projects-table">
            <tbody>
                <tr>
                    <th>Project Name</th>
                    <td>{project.projectName}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{project.description}</td>
                </tr>
                <tr>
                    <th>Project Manager</th>
                    <td>{project.projectManager}</td>
                </tr>
                <tr>
                    <th>Start Date</th>
                    <td>{project.startDate}</td>
                </tr>
                <tr>
                    <th>End Date</th>
                    <td>{project.endDate}</td>
                </tr>
                <tr>
                    <th>Team Members</th>
                    <td>{project.teamMembers}</td>
                </tr>
                <tr>
                    <th>Roles and Responsibilities</th>
                    <td>{project.rolesAndResponsibilities}</td>
                </tr>
                <tr>
                    <th>Budget</th>
                    <td>{project.budget}</td>
                </tr>
                <tr>
                    <th>Tools/Technologies</th>
                    <td>{project.toolsAndTechnologies}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ViewProject;
