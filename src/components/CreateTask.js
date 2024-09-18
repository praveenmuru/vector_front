// src/components/CreateTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css'; // Import the CSS file

const CreateTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState({
        taskName: '',
        description: '',
        assignedTo: '',
        status: 'development',
        parentTicketId: '',
        priority: '',
        dueDate: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        navigate('/workboard');
    };

    return (

        <div className="create-task-container">
            <form onSubmit={handleSubmit} className="create-task-form">
                <h1>Create Task</h1>
                <div className="form-group">
                    <label>Task Name</label>
                    <input name="taskName" value={newTask.taskName} onChange={handleInputChange} placeholder="Task Name" required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={newTask.description} onChange={handleInputChange} placeholder="Description" required />
                </div>
                <div className="form-group">
                    <label>Assigned To</label>
                    <input name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange} placeholder="Assigned To" required />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={newTask.status} onChange={handleInputChange}>
                        <option value="development">Development</option>
                        <option value="QA">QA</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Parent Ticket ID</label>
                    <input name="parentTicketId" value={newTask.parentTicketId} onChange={handleInputChange} placeholder="Parent Ticket ID" />
                </div>
                <div className="form-group">
                    <label>Priority</label>
                    <input name="priority" value={newTask.priority} onChange={handleInputChange} placeholder="Priority" />
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} placeholder="Due Date" />
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default CreateTask;