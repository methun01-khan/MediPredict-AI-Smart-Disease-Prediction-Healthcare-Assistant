import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { getHistory } from '../services/api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Dashboard() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory('demo').then((res) => setHistory(res.data.history)).catch(() => setHistory([]));
  }, []);

  const chartData = {
    labels: history.slice(-5).map((item) => item.prediction),
    datasets: [{ label: 'Confidence (%)', data: history.slice(-5).map((item) => item.confidence), backgroundColor: ['#38bdf8', '#34d399', '#f59e0b', '#f43f5e', '#8b5cf6'] }],
  };

  return (
    <div className="container" style={{ display: 'grid', gap: '1rem' }}>
      <section className="card" style={{ padding: '1rem' }}>
        <h2 style={{ marginTop: 0 }}>Analytics Overview</h2>
        <Bar data={chartData} />
      </section>
      <section className="card" style={{ padding: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>Prediction History</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', color: '#94a3b8' }}>
                <th>Prediction</th>
                <th>Confidence</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item) => (
                <tr key={`${item.prediction}-${item.confidence}`}>
                  <td>{item.prediction}</td>
                  <td>{item.confidence}%</td>
                  <td>{item.severity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
