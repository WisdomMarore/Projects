import React from 'react';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  const handleCheckboxChange = (taskId) => {
    updateTaskStatus(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.status}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span className={task.status ? 'completed' : ''}>{task.name}</span>
          </label>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;