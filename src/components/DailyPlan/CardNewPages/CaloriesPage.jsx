import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mealData = [
  { name: "Oatmeal with Berries", calories: 320 },
  { name: "Greek Yogurt", calories: 150 },
  { name: "Grilled Chicken Salad", calories: 450 },
  { name: "Apple with Almonds", calories: 200 },
  { name: "Salmon with Quinoa", calories: 520 },
];

const CaloriesPage = () => {
  const totalCalories = mealData.reduce((sum, meal) => sum + meal.calories, 0);
  const goal = 2000;
  const percentage = Math.min((totalCalories / goal) * 100, 100);

  const chartData = {
    labels: mealData.map((meal) => meal.name),
    datasets: [
      {
        label: "Calories",
        data: mealData.map((meal) => meal.calories),
        backgroundColor: "#34d399",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Calories Per Meal",
        color: "#111827",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🥗 Calorie Details with Chart</h1>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">Total Calories</span>
          <span className="text-lg font-semibold text-green-700">
            {totalCalories} / {goal}
          </span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6 bg-white p-4 rounded shadow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="space-y-4">
        {mealData.map((meal, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-green-50 p-3 rounded shadow-sm hover:bg-green-100"
          >
            <h3 className="font-semibold text-green-800">{meal.name}</h3>
            <span className="font-medium text-green-600">{meal.calories} cal</span>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 text-yellow-700 rounded-md shadow-sm">
        <strong>Nutrition Tip:</strong> Spread your calorie intake evenly throughout the day to maintain energy levels and prevent overeating.
      </div>
    </div>
  );
};

export default CaloriesPage;
