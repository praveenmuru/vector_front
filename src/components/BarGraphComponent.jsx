import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const activeProjects = 5;
const completedProjects = 10;
const overdueProjects = 2;

const data = [
    { name: 'Active', value: activeProjects },
    { name: 'Completed', value: completedProjects },
    { name: 'Overdue', value: overdueProjects },
];

const BarGraphComponent = () => (
    <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 20]} />
        <Bar dataKey="value" fill="#006ED7" label={{ position: 'center', fill: '#fff' }}>
            {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#8884d8' : index === 1 ? '#82ca9d' : '#ffc658'} />
            ))}
        </Bar>
    </BarChart>
);

export default BarGraphComponent;