

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusOptions = ["All", "Active", "Inactive", "Under Review"];

// Mask name
const maskName = (str) => (str?.length <= 2 ? str + "***" : str?.slice(0, 2) + "***");

// Mask email
const maskEmailDomain = (email) => {
  const [user] = email?.split("@") || [];
  return user?.length <= 3 ? user + "***@gmail.com" : user?.slice(0, 3) + "***@gmail.com";
};

export default function HeartDiseaseClients() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 9;

  // Auth states
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "2821";

  // New client form
  const [newClient, setNewClient] = useState({
    name: "",
    age: "",
    email: "",
    status: "Active",
  });

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

      const res = await fetch(`https://bitesized-backend.onrender.com/api/heartdisease?${query}`);
      if (!res.ok) throw new Error("Failed to fetch clients");

      const data = await res.json();
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("❌ Error fetching clients:", err);
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
      const res = await fetch("https://bitesized-backend.onrender.com/api/heartdisease", {
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
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 relative overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(144,238,144,0.4),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(50,205,50,0.4),transparent_40%)] animate-pulse-slow"></div>

      <ToastContainer />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h1 className="text-3xl font-extrabold text-emerald-700 drop-shadow-lg">
          ❤️ Heart Disease Clients
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPasswordModal(true)}
          className="bg-emerald-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-emerald-600 transition"
        >
          ➕ Add Client
        </motion.button>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && !isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl w-80 border border-white/40"
            >
              <h2 className="text-lg font-semibold mb-4">🔐 Enter Password</h2>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  className="border w-full px-3 py-2 rounded-md mb-4 focus:ring-2 focus:ring-emerald-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-4 py-2 rounded-md w-full hover:bg-emerald-600 transition"
                >
                  Unlock
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Client Form */}
      {isAuthenticated && (
        <motion.form
          onSubmit={handleAddClient}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-7 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-md border border-white/50 mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">➕ Add New Client</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["name", "age", "email"].map((field, idx) => (
              <input
                key={idx}
                type={field === "age" ? "number" : field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newClient[field]}
                onChange={(e) => setNewClient({ ...newClient, [field]: e.target.value })}
                className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-emerald-400"
                required
              />
            ))}
            <select
              value={newClient.status}
              onChange={(e) => setNewClient({ ...newClient, status: e.target.value })}
              className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-emerald-400"
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
            className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition"
          >
            Save Client
          </button>
        </motion.form>
      )}

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
        <input
          type="text"
          placeholder="Search by name or email"
          className="p-2 border rounded-md w-full md:w-64 focus:ring-2 focus:ring-emerald-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="p-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
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

      {/* Table */}
      <div className="overflow-x-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/40">
        <table className="min-w-full">
          <thead className="bg-emerald-100 text-emerald-800">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Age</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {clients.map((client) => (
                <motion.tr
                  key={client._id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.01, backgroundColor: "rgba(240,255,240,0.6)" }}
                  className="border-t transition"
                >
                  <td className="px-4 py-3 font-medium">{maskName(client.name)}</td>
                  <td className="px-4 py-3">{client.age}</td>
                  <td className="px-4 py-3">{maskEmailDomain(client.email)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-sm rounded-full shadow-sm ${
                        client.status === "Active"
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : client.status === "Inactive"
                          ? "bg-gray-100 text-gray-700 border border-gray-300"
                          : "bg-yellow-100 text-yellow-800 border border-yellow-300"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
            {clients.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-3 py-1 rounded-md border ${
              currentPage === i + 1 ? "bg-emerald-500 text-white" : "bg-white"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
