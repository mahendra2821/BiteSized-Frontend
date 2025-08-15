import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const CarbsPage = () => {
  const navigate = useNavigate();
  const goal = 250;
  const consumed = 95;
  const percentage = Math.min((consumed / goal) * 100, 100);

  const meals = [
    { name: "Oatmeal with Berries", value: 38 },
    { name: "Apple with Almonds", value: 22 },
    { name: "Salmon with Quinoa", value: 35 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-yellow-600 mb-4">🍞 Carbohydrate Overview</h1>

      {/* 🧠 Smart progress bar */}
      <div className="mb-8 bg-white p-5 rounded-xl shadow">
        <p className="text-lg font-medium">
          Goal: <span className="text-yellow-600">{goal}g</span> &nbsp;|&nbsp;
          Consumed: <span className="text-yellow-800 font-semibold">{consumed}g</span>
        </p>
        <div className="w-full bg-yellow-100 rounded-full h-4 mt-3">
          <div
            className="bg-yellow-500 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm mt-2 text-yellow-600 font-medium">
          🎯 {percentage.toFixed(1)}% of goal achieved
        </p>
      </div>

      {/* 📊 Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4 text-yellow-700">
          📊 Carbs per Meal
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={meals}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#eab308" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 💡 Nutrition Tip */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow">
        <h3 className="text-lg font-semibold text-yellow-700 mb-2">💡 Carbs Tip</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Prioritize complex carbohydrates:
          <br />
          🍚 Brown rice, 🥔 sweet potatoes, 🌾 oats, 🍞 whole-grain breads, 🍎 fruits, 🥦 veggies.
          <br />
          Avoid excessive refined sugar. Balanced carb intake = sustained energy and better digestion!
        </p>
      </div>
    </div>
  );
};

export default CarbsPage;
