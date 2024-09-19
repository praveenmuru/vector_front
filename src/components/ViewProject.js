import React, { useEffect, useState } from 'react';

const ViewProject = () => {
    const initialProjects = [
        { id: '1', projectName: 'Apollo', description: 'Space mission management', projectManager: 'Alice Johnson', startDate: '12-09-2024', endDate: '15-09-2024', teamMembers: ['John Doe', 'Jane Smith'], rolesAndResponsibilities: 'Mission planning and execution', budget: '$1,000,000', toolsTechnologies: 'NASA software, SpaceX hardware' },
        { id: '2', projectName: 'Zephyr', description: 'Wind energy project', projectManager: 'Bob Smith', startDate: '13-09-2024', endDate: '16-09-2024', teamMembers: ['Alice Brown', 'Charlie Davis'], rolesAndResponsibilities: 'Wind turbine design and installation', budget: '$500,000', toolsTechnologies: 'WindPro, AutoCAD' },
        { id: '3', projectName: 'Orion', description: 'Astronomy research', projectManager: 'Charlie Brown', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['David Evans', 'Eva Green'], rolesAndResponsibilities: 'Telescope setup and data analysis', budget: '$750,000', toolsTechnologies: 'Hubble Telescope, MATLAB' },
        { id: '4', projectName: 'Helios', description: 'Solar energy initiative', projectManager: 'Diana Prince', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Frank Harris', 'Grace Lee'], rolesAndResponsibilities: 'Solar panel installation and maintenance', budget: '$600,000', toolsTechnologies: 'PV*SOL, SolarEdge' },
        { id: '5', projectName: 'Poseidon', description: 'Marine conservation', projectManager: 'Ethan Hunt', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Hannah Moore', 'Ian Scott'], rolesAndResponsibilities: 'Marine life monitoring and protection', budget: '$800,000', toolsTechnologies: 'Marine GIS, AquaMapper' },
        { id: '6', projectName: 'Athena', description: 'AI research and development', projectManager: 'Fiona Gallagher', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Jack White', 'Karen Black'], rolesAndResponsibilities: 'AI model development and testing', budget: '$1,200,000', toolsTechnologies: 'TensorFlow, PyTorch' },
        { id: '7', projectName: 'Hermes', description: 'Logistics optimization', projectManager: 'George Clooney', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Laura Green', 'Michael Brown'], rolesAndResponsibilities: 'Supply chain analysis and improvement', budget: '$900,000', toolsTechnologies: 'SAP, Oracle SCM' },
        { id: '8', projectName: 'Artemis', description: 'Lunar exploration', projectManager: 'Hannah Montana', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Nancy Drew', 'Oscar Wilde'], rolesAndResponsibilities: 'Lunar rover design and deployment', budget: '$2,000,000', toolsTechnologies: 'Lunar Rover, NASA software' },
        { id: '9', projectName: 'Hera', description: 'Healthcare innovation', projectManager: 'Ian McKellen', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Paul Newman', 'Quincy Adams'], rolesAndResponsibilities: 'Medical device development and testing', budget: '$1,500,000', toolsTechnologies: 'MedTech, BioSim' },
        { id: '10', projectName: 'Demeter', description: 'Agricultural technology', projectManager: 'Jane Austen', startDate: '14-09-2024', endDate: '17-09-2024', teamMembers: ['Rachel Green', 'Steve Jobs'], rolesAndResponsibilities: 'Crop monitoring and yield optimization', budget: '$700,000', toolsTechnologies: 'AgriTech, DroneDeploy' }
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
    return (
        <table className="projects-table">
            <tbody>
                <tr key={initialProjects.id}>
                    <th>Project Name</th>
                    <td>{initialProjects.projectName}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{initialProjects.description}</td>
                </tr>
                <tr>
                    <th>Project Manager</th>
                    <td>{initialProjects.projectManager}</td>
                </tr>
                <tr>
                    <th>Start Date</th>
                    <td>{initialProjects.startDate}</td>
                </tr>
                <tr>
                    <th>End Date</th>
                    <td>{initialProjects.endDate}</td>
                </tr>
                <tr>
                    <th>Team Members</th>
                    <td>{initialProjects.teamMembers.join(', ')}</td>
                </tr>
                <tr>
                    <th>Roles and Responsibilities</th>
                    <td>{initialProjects.rolesAndResponsibilities}</td>
                </tr>
                <tr>
                    <th>Budget</th>
                    <td>{initialProjects.budget}</td>
                </tr>
                <tr>
                    <th>Tool/Technologies</th>
                    <td>{initialProjects.toolsTechnologies}</td>
                </tr>
            </tbody>
            {/* <tbody>
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
                            <td>{project.toolsTechnologies}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td rowSpan="6">No projects found.</td>
                    </tr>
                )}
            </tbody> */}
        </table>
    );
};

export default ViewProject;
