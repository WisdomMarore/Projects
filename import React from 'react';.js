import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} - {task.status ? 'Completed' : 'Incomplete'}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;