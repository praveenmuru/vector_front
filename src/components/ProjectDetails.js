import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch project details from backend or state management
        const fetchProject = async () => {
            try {
                const response = await fetch(`/api/projects/${id}`); // Adjust the URL as needed
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{project.projectName}</h1>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Project Manager:</strong> {project.projectManager}</p>
            <p><strong>Start Date:</strong> {project.startDate}</p>
            <p><strong>End Date:</strong> {project.endDate}</p>
            <p><strong>Team Members:</strong> {project.teamMembers}</p>
            <p><strong>Roles and Responsibilities:</strong> {project.rolesResponsibilities}</p>
            <p><strong>Budget:</strong> {project.budget}</p>
            <p><strong>Tools/Technologies:</strong> {project.toolsTechnologies}</p>
            <p><strong>Documentation:</strong> {project.documentation}</p>
        </div>
    );
};

export default ProjectDetails;