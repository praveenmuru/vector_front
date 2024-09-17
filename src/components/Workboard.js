// src/components/Workboard.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import './Workboard.css'; // Import the CSS file

const initialTasks = [
  { id: '1', taskName: 'Task 1', description: 'Description 1', assignedTo: 'User 1', status: 'development' },
  { id: '2', taskName: 'Task 2', description: 'Description 2', assignedTo: 'User 2', status: 'QA' },
  { id: '3', taskName: 'Task 3', description: 'Description 3', assignedTo: 'User 3', status: 'completed' },
];

const statuses = ['development', 'QA', 'completed'];

const Workboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate('/create-task')}
          className="create-task-button"
          style={{
            backgroundColor: 'rgb(13, 96, 163)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          Create Task
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="workboard-columns">
          {statuses.map((status) => (
            <Droppable key={status} droppableId={status} direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="workboard-column"
            //       style={{
            //         backgroundColor: '#e9f5ff',
            //   }}
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
                        //   style={{
                        //     backgroundColor: '#0d60a3',
                        // }}
                        >
                          <h3>{task.taskName}</h3>
                          <p>{task.description}</p>
                          <p><strong>Assigned to:</strong> {task.assignedTo}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Workboard;