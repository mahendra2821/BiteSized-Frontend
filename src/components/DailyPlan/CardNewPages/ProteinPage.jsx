import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ProteinPage = () => {
  const goal = 150;
  const consumed = 110;

  const meals = [
    { name: "Greek Yogurt", value: 15 },
    { name: "Grilled Chicken Salad", value: 35 },
    { name: "Salmon with Quinoa", value: 42 },
    { name: "Apple with Almonds", value: 6 },
    { name: "Oatmeal with Berries", value: 12 },
  ];

  const percentage = Math.min((consumed / goal) * 100, 100);

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">🥩 Protein Overview</h1>

      {/* Smart progress bar */}
      <div className="mb-8 bg-white p-5 rounded-xl shadow">
        <p className="text-lg font-medium">
          Goal: <span className="text-purple-600">{goal}g</span> &nbsp;|&nbsp;
          Consumed: <span className="text-purple-800 font-semibold">{consumed}g</span>
        </p>
        <div className="w-full bg-purple-100 rounded-full h-4 mt-3">
          <div
            className="bg-purple-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm mt-2 text-purple-600 font-medium">
          🎯 {percentage.toFixed(1)}% of goal achieved
        </p>
      </div>

      {/* Chart for protein per meal */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">
          📊 Protein per Meal (Chart View)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={meals}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 50]} />
            <Tooltip />
            <Bar dataKey="value" fill="#9333ea" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 💡 Nutrition Tip */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 shadow">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">💡 Protein Tip</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          To hit your daily protein target, include a variety of sources:
          <br />
          🐓 Lean meats (chicken, turkey) &nbsp;|&nbsp; 🥚 Eggs &nbsp;|&nbsp; 🧀 Dairy (Greek yogurt, cottage cheese) &nbsp;|&nbsp; 🌱 Plant-based (lentils, tofu, beans).
          <br />
          🔁 Distribute protein across your meals to improve absorption and muscle recovery.
        </p>
      </div>
    </div>
  );
};

export default ProteinPage;
