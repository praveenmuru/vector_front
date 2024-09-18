import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.js';
import './Sidebar.css';
import './CreateProject.css';

const CreateProject = () => {

    // Sample JSON data for the form
    const dummyData = {
        projectName: 'New Website Development',
        description: 'Developing a new e-commerce website with the latest web technologies.',
        projectManager: 'Jane Doe',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        teamMembers: 'John, Mary, Bob',
        rolesResponsibilities: 'John: Developer, Mary: Designer, Bob: Tester',
        budget: '50000',
        toolsTechnologies: 'React, Node.js, PostgreSQL',
        documentation: 'Initial project requirements, design documents, test plans'
    };

    // State variables for Basic Information
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [projectManager, setProjectManager] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // State variables for Team and Roles
    const [teamMembers, setTeamMembers] = useState('');
    const [rolesResponsibilities, setRolesResponsibilities] = useState('');

    // State variables for Resources
    const [budget, setBudget] = useState('');
    const [toolsTechnologies, setToolsTechnologies] = useState('');
    const [documentation, setDocumentation] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        console.log('Loaded data:', dummyData);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Project Name:', projectName);
        console.log('Description:', description);
        console.log('Project Manager:', projectManager);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Team Members:', teamMembers);
        console.log('Roles and Responsibilities:', rolesResponsibilities);
        console.log('Budget:', budget);
        console.log('Tools/Technologies:', toolsTechnologies);
        console.log('Documentation:', documentation);
        navigate('/projects'); // Redirect to Projects page after submission
    };

    return (
        <div className="form-container">
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <h2>Basic Information</h2>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager:</label>
                    <input
                        type="text"
                        id="projectManager"
                        value={projectManager}
                        onChange={(e) => setProjectManager(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <h2>Team and Roles</h2>
                <div className="form-group">
                    <label htmlFor="teamMembers">Team Members:</label>
                    <input
                        type="text"
                        id="teamMembers"
                        value={teamMembers}
                        onChange={(e) => setTeamMembers(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rolesResponsibilities">Roles and Responsibilities:</label>
                    <textarea
                        id="rolesResponsibilities"
                        value={rolesResponsibilities}
                        onChange={(e) => setRolesResponsibilities(e.target.value)}
                        required
                    ></textarea>
                </div>

                <h2>Resources</h2>
                <div className="form-group">
                    <label htmlFor="budget">Budget:</label>
                    <input
                        type="number"
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="toolsTechnologies">Tools/Technologies:</label>
                    <input
                        type="text"
                        id="toolsTechnologies"
                        value={toolsTechnologies}
                        onChange={(e) => setToolsTechnologies(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="documentation">Documentation:</label>
                    <textarea
                        id="documentation"
                        value={documentation}
                        onChange={(e) => setDocumentation(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;