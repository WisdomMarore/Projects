import React from 'react';

const ConsistencyTracker = ({ tasks }) => {
  const calculateConsistency = (timePeriod) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status).length;

    switch (timePeriod) {
      case 'day':
        return ((completedTasks / totalTasks) * 100).toFixed(2);
      case 'week':
        return (((completedTasks / totalTasks) * 7) / 100).toFixed(2);
      case 'month':
        return (((completedTasks / totalTasks) * 30) / 100).toFixed(2);
      default:
        return 0;
    }
  };

  return (
    <div>
      <h3>Consistency Tracker</h3>
      <p>Consistency for the day: {calculateConsistency('day')}%</p>
      <p>Consistency for the week: {calculateConsistency('week')}%</p>
      <p>Consistency for the month: {calculateConsistency('month')}%</p>
    </div>
  );
};

export default ConsistencyTracker;