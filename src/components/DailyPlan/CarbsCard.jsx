import React from "react";
import { useNavigate } from "react-router-dom";

const CarbsCard = ({ carbs }) => {
  const goal = 250;
  const percentage = Math.min((carbs / goal) * 100, 100);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate("/daily-plan/carbs")}
    >
      <p className="text-gray-500 text-sm">Carbs</p>
      <p className="text-2xl font-bold text-yellow-600">{carbs}g / {goal}g</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CarbsCard;
