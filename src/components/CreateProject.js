import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import CurrencyInput from 'react-currency-input-field';
import './CreateProject.css';

const CreateProject = ({ addProject, updateProject }) => {
    const location = useLocation();
    const { project, isEdit } = location.state || {};

    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        projectManager: '',
        startDate: '',
        endDate: '',
        teamMembers: '',
        rolesAndResponsibilities: '',
        budget: '',
        toolsAndTechnologies: '',
        documentation: ''
    });

    useEffect(() => {
        if (isEdit && project) {
            setFormData({
                projectName: project.projectName || '',
                description: project.description || '',
                projectManager: project.projectManager || '',
                startDate: formatDate(project.startDate) || '',
                endDate: formatDate(project.endDate) || '',
                teamMembers: (project.teamMembers || []).join(', '),
                rolesAndResponsibilities: project.rolesAndResponsibilities || '',
                budget: parseFloat(project.budget.replace(/[^0-9.-]+/g, "")) || 0,
                toolsAndTechnologies: (project.toolsAndTechnologies || []).join(', ')
            });
        }
    }, [isEdit, project]);


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCurrencyChange = (value, name) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, documentation: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            updateProject(formData);
        } else {
            addProject(formData);
        }
        navigate('/projects'); // Redirect to Projects page after submission
    };

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="form-container">
            <h1>{isEdit ? 'Edit Project' : 'Create New Project'}</h1>
            <form onSubmit={handleSubmit}>
                <h2>Basic Information</h2>
                <div className="form-group">
                    <label htmlFor="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Project Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
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
                        value={formData.projectManager}
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
                        value={formData.startDate}
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
                        value={formData.endDate}
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
                        value={formData.teamMembers}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rolesResponsibilities">Roles and Responsibilities:</label>
                    <textarea
                        id="rolesResponsibilities"
                        name="rolesResponsibilities"
                        value={formData.rolesAndResponsibilities}
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
                        value={formData.budget}
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
                        value={formData.toolsAndTechnologies}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="documentation">Documentation:</label>
                    <input
                        type="file"
                        id="documentation"
                        accept=".pdf,.docx,.jpg,.jpeg,.png"
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
                    {formData.documentation && <p>Selected file: {formData.documentation.name}</p>}
                </div>

                <button type="submit">{project ? 'Update Project' : 'Create Project'}</button>
            </form>
        </div>
    );
};

export default CreateProject;
