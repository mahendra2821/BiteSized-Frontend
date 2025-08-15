// FatsCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const FatsCard = ({ fat }) => {
  const goal = 70; // Example fat goal in grams
  const percentage = Math.min((fat / goal) * 100, 100);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate("/daily-plan/fat")}
    >
      <p className="text-gray-500 text-sm">Fats</p>
      <p className="text-2xl font-bold text-red-700">
        {fat}g / {goal}g
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FatsCard;
