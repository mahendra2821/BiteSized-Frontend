

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const sampleMonthlyClients = [
  { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
  { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
  { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
  { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
  { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
];

function maskName(name) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts
    .map((part) => part[0] + "*".repeat(part.length - 1))
    .join(" ");
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ThisMonth = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredClients = sampleMonthlyClients
    .filter((client) => selectedPlan === "All" || client.plan === selectedPlan)
    .sort((a, b) => (sortAsc ? a.progress - b.progress : b.progress - a.progress));

  const chartData = sampleMonthlyClients
    .reduce((acc, client) => {
      const day = new Date(client.dateAdded).getDate();
      const existing = acc.find((entry) => entry.day === day);
      if (existing) existing.count++;
      else acc.push({ day, count: 1 });
      return acc;
    }, [])
    .sort((a, b) => a.day - b.day);

  return (
    <div
      className="min-h-screen p-8 mt-5"
      style={{
        background: "radial-gradient(circle at top left, #d4f7dc, #a1e9a1, #6bd66b)",
        color: "#155724", // dark green text for contrast
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 bg-green-600 hover:bg-green-700 shadow-lg text-white"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-extrabold mb-4 tracking-wide drop-shadow-md text-green-900">
        📅 Clients This Month
      </h1>
      <p className="text-green-800 mb-8 max-w-xl">
        Filter, sort, and explore client progress trends for July 2025 with smooth animations and interactive charts.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-10">
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="px-5 py-3 rounded-lg bg-green-300 text-green-900 font-semibold shadow-md border border-green-400 hover:border-green-500 transition"
        >
          <option value="All">All Plans</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="General Wellness">General Wellness</option>
        </select>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-6 py-3 bg-green-600 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 text-white"
        >
          Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
        </button>
      </div>

      {/* Chart */}
      <div className="bg-green-900 bg-opacity-10 p-6 rounded-2xl shadow-lg mb-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 tracking-wide text-green-700">📈 Weekly Trend</h2>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chartData}>
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#28a745" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#198754" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#a3d9a5" strokeDasharray="4 4" />
            <XAxis
              dataKey="day"
              label={{ value: "Day", position: "insideBottom", offset: -5, fill: "#2f8132" }}
              stroke="#2f8132"
            />
            <YAxis allowDecimals={false} stroke="#2f8132" />
            <RechartsTooltip
              contentStyle={{ backgroundColor: "#1c4122", borderRadius: "10px", color: "white" }}
              itemStyle={{ color: "#a3d9a5" }}
            />
            <Bar dataKey="count" fill="url(#colorProgress)" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Client Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filteredClients.map((client) => (
          <motion.div
            key={client.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(40, 167, 69, 0.6)" }}
            className="bg-green-200 bg-opacity-70 border border-green-400 rounded-xl p-5 cursor-pointer transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3
                  className="text-xl font-semibold tracking-wide cursor-help select-none text-green-900"
                  data-tooltip-id={`tooltip-${client.id}`}
                  data-tooltip-content={`Original name: ${client.name}`}
                >
                  {maskName(client.name)}
                </h3>
                <ReactTooltip
                  id={`tooltip-${client.id}`}
                  place="top"
                  effect="solid"
                  backgroundColor="#28a745"
                  textColor="#d4f7dc"
                  arrowColor="#28a745"
                  delayShow={200}
                  className="rounded-lg px-3 py-1 text-sm font-semibold"
                />
                <p className="text-green-800 mt-1">{client.plan}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-700">Progress: {client.progress}%</p>
                <p className="text-xs text-green-600">Added: {client.dateAdded}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThisMonth;



