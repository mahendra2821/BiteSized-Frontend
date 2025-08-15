// src/pages/ClientsPage.jsx
import React from "react";

const ActiveClients = () => {
  const clients = [
    { name: "John Doe", status: "active", progress: 80 },
    { name: "Jane Smith", status: "inactive", progress: 50 },
    { name: "Alice Johnson", status: "active", progress: 70 },
    { name: "Bob Lee", status: "active", progress: 90 }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">👥 Total Clients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg shadow p-4 flex flex-col"
          >
            <span className="font-medium text-lg">{client.name}</span>
            <span className="text-sm text-gray-600 capitalize">
              Status: {client.status}
            </span>
            <span className="text-sm text-gray-600">Progress: {client.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveClients;
