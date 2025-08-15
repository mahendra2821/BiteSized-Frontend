


import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ActivePlans() {
  const [plans, setPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ day: "", duration: "", clients: "" });
  const [view, setView] = useState("list");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const API_URL = "https://bitesized-backend.onrender.com/api/plans";

  const fetchPlans = async () => {
    try {
      const res = await axios.get(API_URL);
      setPlans(res.data);
    } catch {
      toast.error("Failed to load plans");
    }
  };

  const handleAdd = async () => {
    if (!newPlan.day || !newPlan.duration || !newPlan.clients) {
      toast.warn("Please fill in all fields");
      return;
    }
    try {
      const res = await axios.post(API_URL, {
        ...newPlan,
        duration: parseInt(newPlan.duration),
        clients: parseInt(newPlan.clients)
      });
      setPlans((prev) => [...prev, res.data]);
      setNewPlan({ day: "", duration: "", clients: "" });
      toast.success("Plan added");
    } catch {
      toast.error("Failed to add plan");
    }
  };

  const handleDelete = async (day) => {
    try {
      await axios.delete(`${API_URL}/${day}`);
      setPlans((prev) => prev.filter((p) => p.day !== day));
      toast.success("Plan deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === "2821") {
      setIsAdmin(true);
      setShowModal(false);
      toast.success("Admin access granted");
    } else {
      toast.error("Wrong password");
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const totalClients = plans.reduce((sum, p) => sum + p.clients, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-bold text-green-700">Active Plans</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setView(view === "list" ? "chart" : "list")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            {view === "list" ? "📊 Chart View" : "📋 List View"}
          </button>
          {!isAdmin && (
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              🔒 Admin
            </button>
          )}
        </div>
      </div>

      {/* Add Plan (Admin Only) */}
      {isAdmin && (
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Day"
            value={newPlan.day}
            onChange={(e) => setNewPlan({ ...newPlan, day: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="number"
            placeholder="Duration (mins)"
            value={newPlan.duration}
            onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="number"
            placeholder="Clients"
            value={newPlan.clients}
            onChange={(e) => setNewPlan({ ...newPlan, clients: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            ➕ Add
          </button>
        </div>
      )}

      {/* Plans Display */}
      {view === "list" ? (
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{plan.day}</h3>
                <span className="text-gray-500">{plan.duration} mins</span>
                <span className="text-green-700 font-semibold">{plan.clients} clients</span>
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(plan.day)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                )}
              </div>
              <div className="w-full bg-gray-200 h-3 rounded mt-2">
                <div
                  className="bg-green-500 h-3 rounded"
                  style={{
                    width: `${(plan.clients / totalClients) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={plans} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clients" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {/* Admin Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Admin Access</h3>
            <input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAdminLogin}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Unlock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
