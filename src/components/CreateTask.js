// src/components/CreateTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input name="taskName" value={newTask.taskName} onChange={handleInputChange} placeholder="Task Name" required />
        <textarea name="description" value={newTask.description} onChange={handleInputChange} placeholder="Description" required />
        <input name="assignedTo" value={newTask.assignedTo} onChange={handleInputChange} placeholder="Assigned To" required />
        <select name="status" value={newTask.status} onChange={handleInputChange}>
          <option value="development">Development</option>
          <option value="QA">QA</option>
          <option value="completed">Completed</option>
        </select>
        <input name="parentTicketId" value={newTask.parentTicketId} onChange={handleInputChange} placeholder="Parent Ticket ID" />
        <input name="priority" value={newTask.priority} onChange={handleInputChange} placeholder="Priority" />
        <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleInputChange} placeholder="Due Date" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;