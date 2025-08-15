


import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function RevenueClients() {
  const [revenueData, setRevenueData] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState({ month: "", revenue: "", growth: "" });

  useEffect(() => {
    fetchRevenue();
  }, []);

  const fetchRevenue = async () => {
    try {
      const res = await axios.get("https://bitesized-backend.onrender.com/api/revenue");
      const data = {};
      res.data.forEach((item) => {
        data[item.month] = { revenue: item.revenue, growth: item.growth };
      });
      setRevenueData(data);
      const latestMonth = res.data[res.data.length - 1]?.month;
      setSelectedMonth(latestMonth || "");
      toast.success("Revenue data loaded!");
    } catch (err) {
      toast.error("Error fetching revenue data");
    }
  };

  const handleAddClick = () => {
    const entered = prompt("Enter admin password:");
    if (entered === "2821") setShowForm(true);
    else toast.error("Incorrect password");
  };

  const handleAddRevenue = async (e) => {
    e.preventDefault();
    try {
      const { month, revenue, growth } = newEntry;
      await axios.post("https://bitesized-backend.onrender.com/api/revenue", {
        month,
        revenue: Number(revenue),
        growth: Number(growth),
      });
      toast.success("Revenue added!");
      fetchRevenue();
      setShowForm(false);
      setNewEntry({ month: "", revenue: "", growth: "" });
    } catch (err) {
      toast.error("Failed to add revenue");
    }
  };

  const chartData = Object.entries(revenueData).map(([month, data]) => ({
    month,
    revenue: data.revenue,
  }));

  const current = revenueData[selectedMonth] || { revenue: 0, growth: 0 };

  return (
    <div className="min-h-screen md:mt-0 p-6" style={{ backgroundColor: "#d9f7be" }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-green-900">
        Revenue Overview
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <select
          className="p-2 rounded shadow text-sm border focus:ring-2 focus:ring-green-400"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Object.keys(revenueData).map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <motion.button
          onClick={handleAddClick}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px #34d399" }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded shadow bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold transition"
        >
          + Add Revenue
        </motion.button>
      </div>

      {/* Revenue Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-6 mb-6 transform hover:scale-105 transition-transform"
      >
        <p className="text-xl font-bold text-green-800">
          This Month: ₹{" "}
          <CountUp end={current.revenue} duration={1.2} separator="," />
        </p>
        <p className="text-sm mt-1 mb-3 text-green-700">+{current.growth}% from last month</p>

        <div className="w-full bg-green-100 rounded-full h-4 overflow-hidden shadow-inner">
          <motion.div
            className="h-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-md"
            style={{ width: `${current.growth}%` }}
            animate={{ width: `${current.growth}%` }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-md p-6 mb-6"
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" stroke="#166534" />
            <YAxis stroke="#166534" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f0fdf4",
                borderRadius: "8px",
                border: "none",
                color: "#065f46",
              }}
            />
            <Bar
              dataKey="revenue"
              fill="url(#colorRevenue)"
              radius={[6, 6, 0, 0]}
            />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Modal Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          >
            <motion.form
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onSubmit={handleAddRevenue}
              className="bg-white p-6 rounded-xl shadow-xl w-96 flex flex-col gap-4 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-green-900 text-center mb-2">
                Add New Revenue
              </h3>
              <input
                type="text"
                placeholder="Month (e.g., Aug)"
                value={newEntry.month}
                onChange={(e) => setNewEntry({ ...newEntry, month: e.target.value })}
                required
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="number"
                placeholder="Revenue"
                value={newEntry.revenue}
                onChange={(e) => setNewEntry({ ...newEntry, revenue: e.target.value })}
                required
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="number"
                placeholder="Growth %"
                value={newEntry.growth}
                onChange={(e) => setNewEntry({ ...newEntry, growth: e.target.value })}
                required
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded shadow bg-gray-300 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded shadow bg-green-500 hover:bg-green-600 text-white transition"
                >
                  Submit
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
