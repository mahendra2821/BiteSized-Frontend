// src/pages/ActivePlansPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const activeClients = [
  { id: 1, name: "Mahendra Babu", goal: "Muscle Gain", progress: 80 },
  { id: 2, name: "Bhargavi Rao", goal: "Fat Loss", progress: 60 },
  { id: 3, name: "Ravi Teja", goal: "General Wellness", progress: 70 },
];

const ActivePlans = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-green-700 mb-6">🏃 Active Plans</h1>

      <div className="grid gap-4">
        {activeClients.map((client) => (
          <div
            key={client.id}
            className="p-4 bg-white rounded-lg shadow flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-green-800">{client.name}</p>
              <p className="text-sm text-gray-600">Goal: {client.goal}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Progress</p>
              <div className="w-32 bg-green-100 h-3 rounded-full mt-1">
                <div
                  className="h-3 bg-green-600 rounded-full"
                  style={{ width: `${client.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-green-700 mt-1">{client.progress}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePlans;
