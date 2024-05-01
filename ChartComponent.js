import React from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ tasks }) => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const incompleteTasks = tasks.filter((task) => !task.completed).length;

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Incomplete'],
        datasets: [
          {
            data: [completedTasks, incompleteTasks],
            backgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      },
      options: {
        cutoutPercentage: 60,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem, data) {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const total = dataset.data.reduce((accumulator, currentValue) => accumulator + currentValue);
                const currentValue = dataset.data[tooltipItem.index];
                const percentage = Math.round((currentValue / total) * 100);
                return `${percentage}%`;
              },
            },
          },
        },
      },
    });
  }, [tasks]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;