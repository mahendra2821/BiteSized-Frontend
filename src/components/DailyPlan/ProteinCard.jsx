// ProteinCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProteinCard = ({ protein }) => {
  const navigate = useNavigate();
  const goal = 150;
  const percentage = Math.min((protein / goal) * 100, 100);

  return (
    <div
      onClick={() => navigate("/daily-plan/protein")}
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
    >
      <p className="text-gray-500 text-sm">Protein</p>
      <p className="text-2xl font-bold text-purple-700">
        {protein}g / {goal}g
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-purple-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProteinCard;
