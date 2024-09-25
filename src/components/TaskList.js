import React, { useState } from 'react';


const TaskList = ({tempTasks}) => {
  const [tasks, setTasks] = useState(tempTasks);

  return (
    <div>
      {Object.keys(tasks.indexed_tasks).map(taskId => (
        <div key={taskId}>
          <h3>{tasks.indexed_tasks[taskId].task}</h3>
          <ul>
            {tasks.indexed_tasks[taskId].steps.map((step, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" />
                  {step}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;