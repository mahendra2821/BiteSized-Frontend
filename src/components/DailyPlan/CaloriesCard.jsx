import React from "react";
import { useNavigate } from "react-router-dom";

const CaloriesCard = ({ calories }) => {
  const navigate = useNavigate();
  const goal = 2000;
  const percentage = Math.min((calories / goal) * 100, 100);

  return (
    <div
      onClick={() => navigate("/daily-plan/calories")}
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
    >
      <p className="text-gray-500 text-sm">Calories</p>
      <p className="text-2xl font-bold text-green-700">{calories} / {goal}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CaloriesCard;
