import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
  const chartData = [
    {
      name: 'Anemia',
      Before: data.anemia.before,
      After: data.anemia.after,
    },
    {
      name: 'Tooth Plaque',
      Before: data.toothPlaque.before,
      After: data.toothPlaque.after,
    },
  ];

  return (
    <div className="chart-container">
      <h2 className="chart-title">Before vs After Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd' }}
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              padding: '20px',
              fontSize: '14px',
              color: '#000',  // Set legend text color to black
            }}
          />
          <Bar dataKey="Before" fill="url(#beforeGradient)" />
          <Bar dataKey="After" fill="url(#afterGradient)" />
          <defs>
            <linearGradient id="beforeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6384" />
              <stop offset="100%" stopColor="#FF6F61" />
            </linearGradient>
            <linearGradient id="afterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#36A2EB" />
              <stop offset="100%" stopColor="#5B9BD5" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
      <style jsx>{`
      .chart-container {
        width: 70%;
        height: auto; /* Adjust height if needed */
        padding: 0;
        background: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        margin-left: auto; /* Center horizontally */
        margin-right: auto; /* Center horizontally */
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

export default BarChartComponent;
