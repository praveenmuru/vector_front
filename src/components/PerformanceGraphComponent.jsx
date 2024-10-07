import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const PerformanceGraphComponent = ({ data }) => {
  // Function to determine bar color based on completion rate
  const getBarColor = (completionRate) => {
    if (completionRate <= 40) {
      return '#DC143C'; // Red for <= 40%
    } else if (completionRate > 40 && completionRate < 60) {
      return '#FFA500'; // Orange for > 40% and < 60%
    } else if (completionRate >= 60 && completionRate <= 80) {
      return '#4682B4'; // Blue for >= 60% and <= 80%
    } else {
      return '#32CD32'; // Green for > 80%
    }
  };
  const formattedData = data.map(member => ({
    ...member,
    completionRate: Number(member.completionRate.toFixed(1)) // Limit to 1 decimal place
  }));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '80%' }}>
        <BarChart
          width={1000}
          height={600}
          data={formattedData}
          layout="vertical"  // Horizontal bar chart
          margin={{ top: 30, right: 30, left: 30, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis type="number" domain={[0, 100]} label={{ value: 'Completion Rate (%)', position: 'insideBottom', offset: -10, textAnchor: 'middle' }} />
          <YAxis type="category" dataKey="name" />

          <Bar dataKey="completionRate" label={{ position: 'center', formatter: (value) => value.toFixed(1), fill: '#ffff' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.completionRate)} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PerformanceGraphComponent;
