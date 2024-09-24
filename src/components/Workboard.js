import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import './Workboard.css'; // Import the CSS file

import OpenAI from "openai";
const openai = new OpenAI(
  { 
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  }
);

const initialTasks = [
  { id: '1', taskName: 'Implement login', description: 'Create login functionality', assignedTo: 'Alice', status: 'QA' },
  { id: '2', taskName: 'Setup database', description: 'Install and configure MongoDB', assignedTo: 'Bob', status: 'QA' },
  { id: '3', taskName: 'Design homepage', description: 'Create homepage layout', assignedTo: 'Charlie', status: 'completed' },
  { id: '4', taskName: 'API integration', description: 'Integrate third-party API', assignedTo: 'David', status: 'development' },
  { id: '5', taskName: 'Write unit tests', description: 'Write tests for user module', assignedTo: 'Eve', status: 'QA' },
  { id: '6', taskName: 'Fix bugs', description: 'Resolve issues in the payment module', assignedTo: 'Frank', status: 'completed' },
  { id: '7', taskName: 'Update documentation', description: 'Update API documentation', assignedTo: 'Grace', status: 'development' },
  { id: '8', taskName: 'Optimize performance', description: 'Improve application performance', assignedTo: 'Heidi', status: 'QA' },
  { id: '9', taskName: 'Implement search', description: 'Add search functionality', assignedTo: 'Ivan', status: 'completed' },
  { id: '10', taskName: 'Setup CI/CD', description: 'Configure continuous integration and deployment', assignedTo: 'Judy', status: 'QA' },
  { id: '11', taskName: 'User authentication', description: 'Implement user authentication', assignedTo: 'Alice', status: 'QA' },
  { id: '12', taskName: 'Create user profile', description: 'Develop user profile page', assignedTo: 'Bob', status: 'completed' },
  { id: '13', taskName: 'Implement notifications', description: 'Add notification system', assignedTo: 'Charlie', status: 'QA' },
];

const statuses = ['development', 'QA', 'completed'];

const getDevelopmentTasks = () => {
  return initialTasks.filter(task => task.status === 'development');
};

const Workboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);
  const [dailyTask, setDailyTask] = useState('');
  const navigate = useNavigate();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  // const generateDescription = async (taskName) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch('http://localhost:8000/api/generate-description', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ taskName }),
  //     });
  //     const data = await response.json();
  //     const description = data.description;
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         task.taskName === taskName ? { ...task, description } : task
  //       )
  //     );
  //   } catch (error) {
  //     console.error('Error generating description:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchDailyTask = async () => {
    setLoading(true);
    try {
      const developmentTasks = getDevelopmentTasks();
      const taskDetails = developmentTasks.map(task => `${task.taskName}: ${task.description}`).join('\n');
      console.log('Development tasks:', taskDetails);
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant with business login." },
          { role: "user", content: `create details steps for the following tasks in json format , output should contain json only in format of inexed tasks -> task with s no -> steps  :\n${taskDetails}\nPlease summarize the tasks.` }
        ],
      });

      const summary = completion.choices[0].message.content;


      const TodoList = ({ summary }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (taskId, stepIndex) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [`${taskId}-${stepIndex}`]: !prevState[`${taskId}-${stepIndex}`]
    }));
  };

  return (
    <div className="todo-list">
      {Object.keys(summary.tasks).map(taskId => {
        const task = summary.tasks[taskId];
        return (
          <div className="task" key={taskId}>
            <h3>{task.task}</h3>
            <ul>
              {task.steps.map((step, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`task-${taskId}-step-${index}`}
                    checked={!!checkedItems[`${taskId}-${index}`]}
                    onChange={() => handleCheckboxChange(taskId, index)}
                  />
                  <label
                    htmlFor={`task-${taskId}-step-${index}`}
                    style={{
                      textDecoration: checkedItems[`${taskId}-${index}`]
                        ? 'line-through'
                        : 'none'
                    }}
                  >
                    {step}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

      // const summary = 'Implement login: Create login functionality\nSetup database: Install and configure MongoDB\nAPI integration: Integrate third-party API\nUpdate documentation: Update API documentation\nSetup CI/CD: Configure continuous integration and deployment';
      setDailyTask(summary);
    } catch (error) {
      console.error('Error fetching daily task:', error);
      setDailyTask('Failed to fetch daily task.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'rgb(13, 96, 163)', // Theme color
        color: 'white', // Text color
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      >
        <h1>Workboard</h1>
        <button
          onClick={() => navigate('/create-task')}
          style={{
            backgroundColor: '#0d60a3',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
        >
          Create Task
        </button>
      </div>
      <button
        onClick={fetchDailyTask}
        style={{
          backgroundColor: '#0d60a3',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'generate Todo list for the day'}
      </button>
      <textarea
        value={dailyTask}
        readOnly
        style={{
          width: '100%',
          height: '100px',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            overflowX: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
          }}
        >
          {statuses.map((status) => (
            <Droppable key={status} droppableId={status} direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    margin: '8px',
                    padding: '8px',
                    border: '1px solid white',
                    borderRadius: '4px',
                    minWidth: '300px',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background for columns
                  }}
                >
                  <h2 style={{ textAlign: 'center', color: 'white' }}>{status}</h2>
                  {tasks.filter(task => task.status === status).map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            padding: '8px',
                            margin: '4px',
                            border: '1px solid gray',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            color: 'rgb(13, 96, 163)', // Task text color
                          }}
                        >
                          <h3 style={{ margin: '0', fontSize: '1.2em' }}>{task.taskName}</h3>
                          <p style={{ margin: '4px 0' }}>{task.description}</p>
                          <p style={{ margin: '4px 0' }}><strong>Assigned to:</strong> {task.assignedTo}</p>
                          {/* <button
                             onClick={() => generateDescription(task.taskName)}
                            style={{
                              backgroundColor: '#0d60a3',
                              color: 'white',
                              border: 'none',
                              padding: '5px 10px',
                              cursor: 'pointer',
                              borderRadius: '4px',
                              fontWeight: 'bold',
                              marginTop: '10px'
                            }}
                            disabled={loading}
                          >
                            {loading ? 'Generating...' : 'Generate Description'}
                          </button> */}
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