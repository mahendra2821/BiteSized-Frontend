


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusOptions = ["All", "Active", "Inactive", "Under Review"];

export default function DiabetesClients() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10;

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "2821";

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

      const res = await fetch(`https://bitesized-backend.onrender.com/api/diabetes?${query}`);
      if (!res.ok) throw new Error("Failed to fetch clients");

      const data = await res.json();
      setClients(data.clients || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("❌ Error fetching clients:", err);
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
      const res = await fetch("https://bitesized-backend.onrender.com/api/diabetes", {
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

  const maskName = (name) => (!name ? "" : name[0] + "***");
  const maskEmail = (email) => {
    if (!email) return "";
    const [user, domain] = email.split("@");
    if (!domain) return "***";
    return user.length <= 3
      ? user + "***@" + domain
      : user.slice(0, 3) + "***@" + domain;
  };

  return (
    <div
      className="min-h-screen mt-7 p-8"
      style={{
        background: "linear-gradient(135deg, #d6f5d6, #b9f0b9, #a3e6a3)",
      }}
    >
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6 text-green-700 flex justify-between items-center">
        🩺 Diabetes Clients
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPasswordModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          ➕ Add Client
        </motion.button>
      </h1>

      {showPasswordModal && !isAuthenticated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-lg font-semibold mb-4 text-green-700">
              🔐 Enter Password
            </h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className="border w-full px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full"
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
          className="bg-white p-4 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            ➕ Add New Client
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newClient.name}
              onChange={(e) =>
                setNewClient({ ...newClient, name: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={newClient.age}
              onChange={(e) =>
                setNewClient({ ...newClient, age: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newClient.email}
              onChange={(e) =>
                setNewClient({ ...newClient, email: e.target.value })
              }
              className="border px-3 py-2 rounded-md"
              required
            />
            <select
              value={newClient.status}
              onChange={(e) =>
                setNewClient({ ...newClient, status: e.target.value })
              }
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
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
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
        <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Age</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <motion.tr
                key={client._id}
                className="border-t hover:bg-green-50"
                whileHover={{ scale: 1.01 }}
              >
                <td className="px-4 py-3 font-medium">
                  {maskName(client.name)}
                </td>
                <td className="px-4 py-3">{client.age}</td>
                <td className="px-4 py-3">{maskEmail(client.email)}</td>
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
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-md border ${
              currentPage === i + 1
                ? "bg-green-500 text-white"
                : "bg-white hover:bg-green-100"
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
