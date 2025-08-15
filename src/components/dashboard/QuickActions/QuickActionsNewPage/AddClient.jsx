


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, Phone, BadgePlus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Mask helpers
function maskName(name) {
  return name ? name[0] + "*".repeat(name.length - 1) : "User";
}
function maskEmail(email) {
  if (!email) return "";
  const [user, domain] = email.split("@");
  const maskedUser = user[0] + "*".repeat(user.length - 1);
  const domainParts = domain.split(".");
  return maskedUser + "@" + "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
}
function maskPhone(phone) {
  if (!phone) return "";
  const last3 = phone.slice(-3);
  return "*".repeat(phone.length - 3) + last3;
}


export default function AddClient() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", plan: "" });
  const [clients, setClients] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [filter, setFilter] = useState("all");
  const correctPassword = "2821";

  const fetchClients = async () => {
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/form/clients");
      const data = await res.json();
      setClients(data);
    } catch {
      toast.error("❌ Failed to load clients");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      toast.success("✅ Access granted!");
    } else {
      toast.error("❌ Incorrect password!");
    }
  };

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/form/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();
      toast.success(`🎉 Client ${data.client.name} added!`);
      setFormData({ name: "", email: "", phone: "", plan: "" });
      fetchClients();
    } catch (err) {
      toast.error("❌ " + err.message);
    }
  };

  const filteredClients = clients.filter((c) => filter === "all" || c.plan?.toLowerCase() === filter);

  const planCounts = clients.reduce(
    (acc, c) => {
      const plan = c.plan?.toLowerCase() || "unknown";
      acc[plan] = (acc[plan] || 0) + 1;
      return acc;
    },
    { basic: 0, premium: 0, elite: 0 }
  );

  const chartData = {
    labels: ["Basic", "Premium", "Elite"],
    datasets: [
      {
        label: "Client Count",
        data: [planCounts.basic, planCounts.premium, planCounts.elite],
        backgroundColor: ["#60a5fa", "#34d399", "#facc15"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6 mt-7 relative overflow-hidden"
      style={{ background: "radial-gradient(circle at top left, #d4fcd4, #f3fff3)" }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-green-300 rounded-full absolute"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <ToastContainer />

      <motion.div
        className="max-w-3xl w-full relative z-10 p-6 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-lg mb-6"
        style={{ background: "rgba(255,255,255,0.75)" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Client Management</h2>

        {/* Filter */}
        <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
          <div>
            <label className="text-sm font-medium mr-2">Filter by Plan:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border px-3 py-1 rounded-md"
            >
              <option value="all">All</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="elite">Elite</option>
            </select>
          </div>

          {!isAuthenticated && (
            <form onSubmit={handlePasswordSubmit} className="flex gap-2">
              <input
                type="password"
                placeholder="Password"
                className="border rounded-md px-3 py-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition"
              >
                🔓 Unlock
              </button>
            </form>
          )}
        </div>

        {/* Client List */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">📋 Client List</h3>
          {filteredClients.length === 0 ? (
            <p className="text-gray-500">No clients to display.</p>
          ) : (
            <ul className="space-y-2">
              {filteredClients.map((client) => (
                <motion.li
                  key={client._id}
                  className="border rounded-md p-3 flex flex-col sm:flex-row sm:justify-between bg-white/70 hover:shadow-md transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <p className="font-medium">{maskName(client.name)}</p>
                    <p className="text-sm text-gray-600">
                      {maskEmail(client.email)} | {maskPhone(client.phone)}
                    </p>
                  </div>
                  <p className="text-sm text-blue-600">{client.plan || "No plan"}</p>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Chart */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2 text-green-700">📊 Clients by Plan</h3>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-md">
            <Bar data={chartData} />
          </div>
        </div>

        {/* Add Client Form */}
        {isAuthenticated && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-green-700 mb-4">➕ Add New Client</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "phone", "plan"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-green-500"
                  required={field !== "plan"}
                />
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md font-semibold shadow hover:bg-green-700 transition"
              >
                Add Client
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
