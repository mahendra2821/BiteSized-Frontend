


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarClock, User, FileText } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

// Mask helper: first letter + stars
function maskName(name) {
  if (!name) return "U****";
  return name[0] + "*".repeat(Math.max(name.length - 1, 1));
}

export default function ScheduleConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    notes: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "admin123";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      toast.success("✅ Access granted!");
    } else {
      toast.error("❌ Incorrect password!");
    }
  };

  const fetchConsultations = async () => {
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/consultations");
      const data = await res.json();
      setConsultations(data);
    } catch {
      toast.error("❌ Failed to load consultations");
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to schedule consultation.");
      }

      toast.success("✅ Consultation scheduled!");
      setFormData({ name: "", date: "", time: "", notes: "" });
      setSelectedDate(null);
      fetchConsultations();
    } catch (err) {
      toast.error("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-7 bg-gradient-to-br from-green-200 via-green-100 to-green-50 flex items-center justify-center p-6">
      <ToastContainer />

      <motion.div
        className="w-full max-w-2xl bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Consultations List */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center gap-2">
            🧾 Scheduled Consultations
          </h3>
          {consultations.length === 0 ? (
            <p className="text-gray-500 italic">No consultations yet.</p>
          ) : (
            <ul className="space-y-3">
              {consultations.map((c) => (
                <motion.li
                  key={c._id}
                  className="border border-green-200 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-medium text-green-800">{maskName(c.name)}</p>
                  <p className="text-sm text-gray-600">
                    {c.date} at {c.time}
                  </p>
                  {c.notes && (
                    <p className="text-sm text-gray-500 mt-1">{c.notes}</p>
                  )}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Password Form */}
        {!isAuthenticated ? (
          <form
            onSubmit={handlePasswordSubmit}
            className="space-y-4 bg-white/60 backdrop-blur-md p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold text-center text-green-700">
              🔐 Enter Password
            </h2>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-md font-semibold shadow hover:opacity-90 transition"
              whileTap={{ scale: 0.96 }}
            >
              🔓 Unlock Scheduling
            </motion.button>
          </form>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <CalendarClock /> Schedule a Consultation
            </h2>

            <form
              className="space-y-5 bg-white/60 backdrop-blur-md p-4 rounded-lg"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-1 flex items-center gap-2">
                  <User className="w-4 h-4" /> Client Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter client name"
                  required
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-1">
                  📅 Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setFormData({
                      ...formData,
                      date: date.toISOString().split("T")[0],
                    });
                  }}
                  className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholderText="Select a date"
                  required
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-1">
                  ⏰ Time
                </label>
                <input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="3"
                  placeholder="Optional notes..."
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                {loading ? "⏳ Scheduling..." : "✅ Schedule"}
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
