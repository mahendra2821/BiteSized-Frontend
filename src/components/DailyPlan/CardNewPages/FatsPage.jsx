import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const FatsPage = () => {
  const goal = 70;
  const consumed = 62;

  const meals = [
    { name: "Avocado Toast", value: 21 },
    { name: "Mixed Nuts", value: 18 },
    { name: "Peanut Butter", value: 16 },
    { name: "Grilled Salmon", value: 22 },
    { name: "Paneer Tikka", value: 18 },
    { name: "Dark Chocolate", value: 13 },
  ];

  const percentage = Math.min((consumed / goal) * 100, 100);

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🥑 Healthy Fats Overview</h1>

      {/* 🧠 Smart progress bar */}
      <div className="mb-8 bg-white p-5 rounded-xl shadow">
        <p className="text-lg font-medium">
          Goal: <span className="text-red-600">{goal}g</span> &nbsp;|&nbsp;
          Consumed: <span className="text-red-800 font-semibold">{consumed}g</span>
        </p>
        <div className="w-full bg-red-100 rounded-full h-4 mt-3">
          <div
            className="bg-red-500 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm mt-2 text-red-600 font-medium">
          🎯 {percentage.toFixed(1)}% of goal achieved
        </p>
      </div>

      {/* 📊 Chart for fats per meal */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-red-700">
          📊 Fats per Meal (Chart View)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={meals}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 30]} />
            <Tooltip />
            <Bar dataKey="value" fill="#dc2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 💡 Nutrition Tip */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 shadow">
        <h3 className="text-lg font-semibold text-red-700 mb-2">💡 Fat Tip</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Include more unsaturated fats in your meals:
          <br />
          🥑 Avocados &nbsp;|&nbsp; 🥜 Nuts & seeds &nbsp;|&nbsp; 🐟 Fatty fish (salmon, mackerel) &nbsp;|&nbsp; 🫒 Olive oil.
          <br />
          ⚠️ Avoid trans fats and limit saturated fats for better heart health.
        </p>
      </div>
    </div>
  );
};

export default FatsPage;
