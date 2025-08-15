


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusOptions = ["All", "Active", "Inactive", "Under Review"];

const maskName = (str) => (str ? (str.length <= 2 ? str + "***" : str.slice(0, 2) + "***") : "");
const maskEmailDomain = (email) => {
  if (!email) return "";
  const [user] = email.split("@");
  return user.length <= 3 ? user + "***@gmail.com" : user.slice(0, 3) + "***@gmail.com";
};

export default function PCOSClients() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 9;

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "2821";

  const [newClient, setNewClient] = useState({ name: "", age: "", email: "", status: "Active" });

  useEffect(() => {
    fetchClients();
  }, [searchTerm, statusFilter, currentPage]);

  const fetchClients = async () => {
    try {
      const query = new URLSearchParams({
        search: searchTerm,
        status: statusFilter !== "All" ? statusFilter : "",
        page: currentPage,
        limit: perPage,
      });
      const res = await fetch(`https://bitesized-backend.onrender.com/api/pcos?${query}`);
      if (!res.ok) throw new Error("Failed to fetch clients");
      const data = await res.json();
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      toast.error("Failed to load clients");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      toast.success("🔓 Access Granted");
    } else {
      toast.error("❌ Incorrect Password");
    }
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/pcos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });
      if (!res.ok) throw new Error("Failed to add client");
      toast.success("✅ Client Added Successfully!");
      setNewClient({ name: "", age: "", email: "", status: "Active" });
      setIsAuthenticated(false);
      fetchClients();
    } catch (err) {
      toast.error("❌ " + err.message);
    }
  };

  return (
    <div
      className="min-h-screen mt-7 p-8 "
      style={{
        background: "radial-gradient(circle at top left, #a7f3d0, #6ee7b7, #34d399)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 8s ease infinite",
      }}
    >
      <ToastContainer />
      <motion.div
        className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold mb-6 text-pink-600 flex justify-between items-center">
          PCOS Clients
          <button
            onClick={() => setShowPasswordModal(true)}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:shadow-lg transition px-4 py-2 rounded-md text-white"
          >
            ➕ Add Client
          </button>
        </h1>

        {showPasswordModal && !isAuthenticated && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg w-80"
            >
              <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  className="border w-full px-3 py-2 rounded-md mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full transition"
                >
                  Unlock
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {isAuthenticated && (
          <motion.form
            onSubmit={handleAddClient}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-pink-50 p-4 rounded-md mb-6"
          >
            <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={newClient.age}
                onChange={(e) => setNewClient({ ...newClient, age: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                className="border px-3 py-2 rounded-md"
                required
              />
              <select
                value={newClient.status}
                onChange={(e) => setNewClient({ ...newClient, status: e.target.value })}
                className="border px-3 py-2 rounded-md"
              >
                {statusOptions.slice(1).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition"
            >
              Save Client
            </button>
          </motion.form>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email"
            className="p-2 border rounded-md w-full md:w-64"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            className="p-2 border rounded-md"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
            <thead className="bg-pink-100 text-pink-800">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Age</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>
            <motion.tbody layout>
              {clients.map((client, i) => (
                <motion.tr
                  key={client._id}
                  className="border-t hover:bg-pink-50 transition"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="px-4 py-3 font-medium">{maskName(client.name)}</td>
                  <td className="px-4 py-3">{client.age}</td>
                  <td className="px-4 py-3">{maskEmailDomain(client.email)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-sm rounded-full ${
                        client.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : client.status === "Inactive"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No clients found.
                  </td>
                </tr>
              )}
            </motion.tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md border transition ${
                currentPage === i + 1
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white hover:bg-pink-50"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
