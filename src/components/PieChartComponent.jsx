// PieChartComponent.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
    const data = {
        labels: ['Active', 'Completed', 'Overdue'],
        datasets: [
            {
                label: '# of Projects',
                data: [5, 10, 2], // Example values for Active, Completed, Overdue
                backgroundColor: ['#36A2EB', '#4CAF50', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#4CAF50', '#FF6384'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="chart-container">
            <Pie data={data} />
        </div>
    );
};

export default PieChartComponent;
