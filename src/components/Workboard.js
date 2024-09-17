// src/components/Workboard.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import Task from './Task';
import './Workboard.css'; // Import the CSS file

const initialTasks = [
  // Example initial tasks
  { id: '1', taskName: 'Task 1', description: 'Description 1', assignedTo: 'User 1', status: 'development', parentTicketId: '' },
  { id: '2', taskName: 'Task 2', description: 'Description 2', assignedTo: 'User 2', status: 'QA', parentTicketId: '1' },
];

const statuses = ['development', 'QA', 'completed'];

const Workboard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: (tasks.length + 1).toString() }]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="workboard-container">
      <div className="workboard-header">
        <h1>Workboard</h1>
        <Link to="/create-task">Create Task</Link>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        {statuses.map((status) => (
          <Droppable key={status} droppableId={status}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="workboard-column"
              >
                <h2>{status}</h2>
                {tasks.filter(task => task.status === status).map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="workboard-task"
                      >
                        <Task task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Workboard;