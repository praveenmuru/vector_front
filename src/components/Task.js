// src/components/Task.js
import React from 'react';

const Task = ({ task }) => {
  return (
    <div style={{ padding: '8px', margin: '4px', border: '1px solid gray', borderRadius: '4px' }}>
      <h3>{task.taskName}</h3>
      <p>{task.description}</p>
      <p><strong>Assigned To:</strong> {task.assignedTo}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Parent Ticket ID:</strong> {task.parentTicketId}</p>
    </div>
  );
};

export default Task;