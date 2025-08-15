// src/pages/ThisMonthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sampleMonthlyClients = [
  { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
  { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
  { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
  { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
  { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
];

const ActivePlans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredClients = sampleMonthlyClients
    .filter(client => selectedPlan === "All" || client.plan === selectedPlan)
    .sort((a, b) => sortAsc ? a.progress - b.progress : b.progress - a.progress);

  const chartData = sampleMonthlyClients.reduce((acc, client) => {
    const day = new Date(client.dateAdded).getDate();
    const existing = acc.find(entry => entry.day === day);
    if (existing) existing.count++;
    else acc.push({ day, count: 1 });
    return acc;
  }, []).sort((a, b) => a.day - b.day);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-blue-700 mb-2">📅 Clients This Month</h1>
      <p className="text-gray-600 mb-6">Filter, sort, and view trends for July 2025 clients.</p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300"
        >
          <option value="All">All Plans</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="General Wellness">General Wellness</option>
        </select>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
        </button>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2 text-blue-800">📈 Weekly Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: "Day", position: "insideBottom", offset: -5 }} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Client Cards */}
      <div className="space-y-4">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white shadow rounded-lg p-4 border border-blue-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.plan}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">Progress: {client.progress}%</p>
                <p className="text-xs text-gray-400">Added: {client.dateAdded}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcitvePlans;
