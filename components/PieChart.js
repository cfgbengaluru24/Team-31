import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ data }) => {
  const chartData = [
    { name: 'Diagnosed', value: data.diagnosed },
    { name: 'Not Diagnosed', value: data.total - data.diagnosed },
  ];

  const COLORS = ['#FF6384', '#36A2EB'];

  return (
    <div className="chart-container">
      <h2 className="chart-title">Children Diagnosed vs Total Children</h2>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            fill="#8884d8"
            animationDuration={1000}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd' }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <style jsx>{`
        .chart-container {
            width: 90%;
            height: auto;
            margin-left: 30px;
            background: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 0; /* Remove bottom margin */
            padding-bottom: 0; /* Remove bottom padding */
        }
        .chart-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
        }
        `}</style>
    </div>
  );
};

export default PieChartComponent;
