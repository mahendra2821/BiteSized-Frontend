import React from "react";
import { useNavigate } from "react-router-dom";

const sampleClients = [
  { name: "John Doe", progress: 80 },
  { name: "Priya Sharma", progress: 65 },
  { name: "Ali Khan", progress: 90 },
  { name: "Emily Clark", progress: 72 },
  { name: "Sanjay Mehta", progress: 60 },
];

const AvgProgress = () => {
  const navigate = useNavigate();
  const avg =
    Math.round(
      sampleClients.reduce((sum, client) => sum + client.progress, 0) /
        sampleClients.length
    ) || 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">📈 Average Progress
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your clients’ average progress is: <span className="font-bold">{avg}%</span>
      </p>

      <div className="space-y-4">
        {sampleClients.map((client, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between font-medium text-gray-700 mb-1">
              <span>{client.name}</span>
              <span>{client.progress}%</span>
            </div>
            <div className="bg-blue-100 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${client.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvgProgress;
