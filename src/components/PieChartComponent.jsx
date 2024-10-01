// PieChartComponent.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ labels, dataValues, chartLabel }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: chartLabel,
                data: dataValues,
                backgroundColor: ['#36A2EB', '#4CAF50', '#F44336'],
                hoverBackgroundColor: ['#36A2EB', '#4CAF50', '#F44336'],
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
