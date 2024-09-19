import React, { useState } from 'react';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import CurrencyInput from 'react-currency-input-field';
import './CreateProject.css';

const CreateProject = ({ addProject }) => {

    // Sample JSON data for the form
    // const dummyData = {
    //     projectName: 'New Website Development',
    //     description: 'Developing a new e-commerce website with the latest web technologies.',
    //     projectManager: 'Jane Doe',
    //     startDate: '2024-01-01',
    //     endDate: '2024-12-31',
    //     teamMembers: 'John, Mary, Bob',
    //     rolesResponsibilities: 'John: Developer, Mary: Designer, Bob: Tester',
    //     budget: '50000',
    //     toolsTechnologies: 'React, Node.js, PostgreSQL',
    //     documentation: 'Initial project requirements, design documents, test plans'
    // };

    const [newProject, setNewProject] = useState({
        projectName: '',
        description: '',
        projectManager: '',
        startDate: '',
        endDate: '',
        teamMembers: '',
        rolesResponsibilities: '',
        budget: '',
        toolsTechnologies: '',
        documentation: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };
    const handleCurrencyChange = (value, name) => {
        setNewProject({ ...newProject, [name]: value });
    };
    const handleFileChange = (e) => {
        setNewProject({ ...newProject, documentation: e.target.files[0] });
    };

    // useEffect(() => {
    //     console.log('Loaded data:', dummyData);
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log('Project Name:', projectName);
        // console.log('Description:', description);
        // console.log('Project Manager:', projectManager);
        // console.log('Start Date:', startDate);
        // console.log('End Date:', endDate);
        // console.log('Team Members:', teamMembers);
        // console.log('Roles and Responsibilities:', rolesResponsibilities);
        // console.log('Budget:', budget);
        // console.log('Tools/Technologies:', toolsTechnologies);
        // console.log('Documentation:', documentation);
        addProject(newProject);
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
                        name="projectName"
                        value={newProject.projectName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="projectManager">Project Manager:</label>
                    <input
                        type="text"
                        id="projectManager"
                        name="projectManager"
                        value={newProject.projectManager}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={newProject.startDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={newProject.endDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <h2>Team and Roles</h2>
                <div className="form-group">
                    <label htmlFor="teamMembers">Team Members:</label>
                    <input
                        type="text"
                        id="teamMembers"
                        name="teamMembers"
                        value={newProject.teamMembers}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rolesResponsibilities">Roles and Responsibilities:</label>
                    <textarea
                        id="rolesResponsibilities"
                        name="rolesResponsibilities"
                        value={newProject.rolesResponsibilities}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <h2>Resources</h2>
                <div className="form-group">
                    <label htmlFor="budget">Budget:</label>
                    <CurrencyInput
                        id="budget"
                        name="budget"
                        value={newProject.budget}
                        decimalsLimit={2}
                        prefix="$"
                        onValueChange={(value, name) => handleCurrencyChange(value, name)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="toolsTechnologies">Tools/Technologies:</label>
                    <input
                        type="text"
                        id="toolsTechnologies"
                        name="toolsTechnologies"
                        value={newProject.toolsTechnologies}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="documentation">Documentation:</label>
                    <input
                        type="file"
                        id="documentation"
                        onChange={handleFileChange}
                        style={{ display: 'none' }} // Hide the default file input
                    />
                    <button
                        type="button"
                        onClick={() => document.getElementById('documentation').click()}
                        className="upload-button"
                    >
                        <FaUpload /> Upload Documentation
                    </button>
                    {newProject.documentation && <p>Selected file: {newProject.documentation.name}</p>}
                </div>

                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;