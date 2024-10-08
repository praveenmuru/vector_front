import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const BarGraphComponent = ({ data, colors, domain }) => (
    <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis dataKey="name" />
        <YAxis domain={domain} />
        <Bar dataKey="value" label={{ position: 'center', fill: '#fff' }}>
            {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index] || '#8884d8'} />
            ))}
        </Bar>
    </BarChart>
);

export default BarGraphComponent;