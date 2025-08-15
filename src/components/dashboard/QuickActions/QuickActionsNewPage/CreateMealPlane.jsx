

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Salad, Clock, FileText } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Mask client name helper
function maskName(name) {
  if (!name) return "User";
  return name[0] + "*".repeat(Math.max(name.length - 1, 0));
}

export default function CreateMealPlanPage() {
  const [formData, setFormData] = useState({
    client: "",
    time: "Morning",
    items: "",
  });
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mealPlans, setMealPlans] = useState([]);
  const correctPassword = "2821";

  const fetchMealPlans = async () => {
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/meal-plans");
      const data = await res.json();
      setMealPlans(data);
    } catch {
      toast.error("❌ Failed to load meal plans");
    }
  };

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      toast.success("🔓 Access Granted");
    } else {
      toast.error("❌ Incorrect Password");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/meal-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Submission failed");
      }

      const data = await res.json();
      toast.success(`✅ Meal Plan Created for ${data.mealPlan.client}`);
      setFormData({ client: "", time: "Morning", items: "" });
      fetchMealPlans();
    } catch (err) {
      toast.error("❌ " + err.message);
    }
  };

  return (
    <div className="mt-7 min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-6">
      <ToastContainer />
      
      <motion.div
        className="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Meal Plan List */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-700">
            📋 Meal Plans
          </h3>
          {mealPlans.length === 0 ? (
            <p className="text-gray-500">No meal plans added yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {mealPlans.map((plan) => (
                <motion.div
                  key={plan._id}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 shadow hover:shadow-lg transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="font-semibold text-green-800">
                    {maskName(plan.client)}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    {plan.time} — {plan.items}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Auth or Form */}
        {!isAuthenticated ? (
          <motion.form
            onSubmit={handlePasswordSubmit}
            className="space-y-4 bg-green-50 p-6 rounded-2xl shadow-inner"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-center mb-2 text-green-800">
              🔐 Enter Password
            </h2>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-green-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              whileTap={{ scale: 0.96 }}
            >
              🔓 Unlock Form
            </motion.button>
          </motion.form>
        ) : (
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center text-green-700 flex items-center justify-center gap-2">
              <Salad className="text-green-600" /> Create Meal Plan
            </h2>

            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">Client Name</label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full border border-green-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">Meal Time</label>
              <div className="relative">
                <Clock className="absolute top-2.5 left-3 text-green-400" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                >
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-green-800 mb-1">Meal Items</label>
              <div className="relative">
                <FileText className="absolute top-3 left-3 text-green-400" />
                <textarea
                  name="items"
                  value={formData.items}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-green-200 rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="e.g. Eggs, Oats, Banana, Milk..."
                  required
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Save Meal Plan 🍱
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}
