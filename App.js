
import React, {useState} from 'react';
import './App.css';
import MotivationalQuote from './MotivationalQuote';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ConsistencyTracker from './ConsistencyTracker';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      status: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="app-name">To-Do List App with Consistency Tracker</h1>
        <div className="quote-section">
          <MotivationalQuote />
        </div>
        <div className="task-form-section">
          <TaskForm addTask={addTask} />
        </div>
        <div className="task-list-section">
          <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
        </div>
        <div className="consistency-tracker-section">
          <ConsistencyTracker tasks={tasks} />
        </div>
      </div>
      
    </div>
  );
}

export default App;