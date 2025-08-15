


import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function AvgProgressClients() {
  const baseData = {
    All: { workout: 84, diet: 78, engagement: 82 },
    Premium: { workout: 92, diet: 88, engagement: 90 },
    Basic: { workout: 72, diet: 66, engagement: 70 },
  };

  const [clientsData, setClientsData] = useState(baseData);
  const [clientType, setClientType] = useState("All");
  const [view, setView] = useState("circle");
  const [isAdmin, setIsAdmin] = useState(false);
  const [editValues, setEditValues] = useState(baseData);
  const [displayData, setDisplayData] = useState(baseData);
  const [showConfetti, setShowConfetti] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientsData((prev) => {
        const newData = {};
        for (let type in prev) {
          newData[type] = {};
          for (let key in prev[type]) {
            let change = (Math.random() - 0.5) * 6;
            let updated = Math.min(100, Math.max(0, prev[type][key] + change));
            newData[type][key] = Math.round(updated);
          }
        }
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const anim = setInterval(() => {
      setDisplayData((prev) => {
        const next = {};
        for (let type in prev) {
          next[type] = {};
          for (let key in prev[type]) {
            const current = prev[type][key];
            const target = clientsData[type][key];
            const diff = target - current;
            next[type][key] =
              Math.abs(diff) < 1
                ? target
                : Math.round(current + diff * 0.2);
          }
        }
        return next;
      });
    }, 50);
    return () => clearInterval(anim);
  }, [clientsData]);

  const requestPassword = () => {
    const entered = prompt("Enter admin password:");
    if (entered === "2821") {
      setIsAdmin(true);
      setEditValues(clientsData);
      toast.success("Admin mode enabled");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleChange = (type, key, value) => {
    const num = Number(value);
    if (num < 0 || num > 100) return;
    setEditValues((prev) => ({
      ...prev,
      [type]: { ...prev[type], [key]: num },
    }));
  };

  const saveChanges = () => {
    setClientsData(editValues);
    setIsAdmin(false);
    toast.success("Progress data updated!");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const currentData = isAdmin
    ? editValues[clientType]
    : displayData[clientType];

  const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

  return (
    <div className="min-h-screen md:mt-0 p-4 md:p-6" style={{
      background: darkMode
        ? "radial-gradient(circle at top, #064e3b, #065f46, #047857)"
        : "radial-gradient(circle at top, #a7f3d0, #d1fae5, #e0f7ea)"
    }}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md shadow focus:outline-none"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
          Average Progress
          {!isAdmin && (
            <motion.button
              onClick={requestPassword}
              className="px-3 py-1 bg-red-600 text-white rounded-md text-sm shadow-lg hover:bg-red-700 transition focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🔒 Unlock
            </motion.button>
          )}
        </h2>

        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={clientType}
            onChange={(e) => setClientType(e.target.value)}
            className={`p-2 border rounded-md text-sm shadow-md hover:shadow-lg transition focus:outline-none ${
              darkMode ? "border-green-500 focus:ring-green-400 bg-gray-800 text-green-300" : "border-green-600 focus:ring-green-600 bg-white text-green-900"
            }`}
          >
            {Object.keys(clientsData).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button
            onClick={() =>
              setView((prev) => (prev === "circle" ? "bar" : "circle"))
            }
            className={`p-2 border rounded-md text-sm shadow transition focus:outline-none ${
              darkMode
                ? "border-green-500 hover:bg-green-700 bg-green-900 text-green-300"
                : "border-green-600 hover:bg-green-200 bg-green-100 text-green-900"
            }`}
          >
            {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
          </button>
          {isAdmin && (
            <motion.button
              onClick={saveChanges}
              className="px-3 py-1 bg-green-700 text-white rounded-md text-sm shadow hover:bg-green-800 transition focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Save
            </motion.button>
          )}
        </div>
      </div>

      {/* Progress Display */}
      <div className={`rounded-xl p-6 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-10`}
           style={{
             background: darkMode ? "#065f46" : "#d1fae5"
           }}
      >
        {[
          { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
          { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
          { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
        ].map((item) => (
          <motion.div
            key={item.key}
            className="flex flex-col items-center group relative p-4 rounded-xl shadow-md hover:shadow-xl transition"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #047857, #065f46)"
                : "linear-gradient(135deg, #a7f3d0, #d1fae5)"
            }}
            title={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            {isAdmin ? (
              <>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={editValues[clientType][item.key]}
                  onChange={(e) =>
                    handleChange(clientType, item.key, e.target.value)
                  }
                  className={`w-36 accent-[${item.color}]`}
                />
                <p className={`mt-3 font-mono text-xl ${darkMode ? "text-green-400" : "text-green-700"}`}>
                  {editValues[clientType][item.key]}%
                </p>
              </>
            ) : view === "circle" ? (
              <CircularProgressbar
                value={currentData[item.key]}
                text={`${currentData[item.key]}%`}
                styles={buildStyles({
                  pathColor: item.color,
                  textColor: darkMode ? "#a7f3d0" : "#14532d",
                  trailColor: darkMode ? "#065f46" : "#d1fae5",
                  textSize: "22px",
                  pathTransitionDuration: 0.7,
                })}
              />
            ) : (
              <div className="w-full">
                <div className={`mb-2 text-sm font-semibold ${darkMode ? "text-green-400" : "text-green-900"}`}>
                  {item.label}
                </div>
                <div className={`w-full rounded-full h-8 overflow-hidden relative shadow-inner ${darkMode ? "bg-green-900" : "bg-green-200"}`}>
                  <motion.div
                    className="h-8 rounded-full shimmer"
                    style={{
                      width: `${currentData[item.key]}%`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 15px ${item.color}`,
                    }}
                    animate={{ width: `${currentData[item.key]}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
                <p className={`mt-1 text-center text-sm font-semibold select-none ${darkMode ? "text-green-400" : "text-green-900"}`}>
                  {currentData[item.key]}%
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Performance Insights */}
      <div className={`mt-4 p-6 rounded-lg shadow-lg max-w-3xl mx-auto ${darkMode ? "bg-gray-800 text-green-400" : "bg-white text-green-900"}`}>
        <h3 className="font-semibold text-2xl mb-5 flex items-center gap-3">📈 Performance Insights</h3>
        <ul className="space-y-4 text-base">
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">💪</span>
            <span><strong>Premium</strong> clients achieve <span className="font-bold">{clientsData.Premium.workout - clientsData.Basic.workout}%</span> higher workout completion than Basic clients.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">🥗</span>
            <span>Diet adherence is <span className="font-bold">{clientsData.Premium.diet - clientsData.Basic.diet}%</span> higher for Premium clients.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">📊</span>
            <span>Engagement score is <span className="font-bold">{clientsData.Premium.engagement - clientsData.Basic.engagement}%</span> higher in Premium compared to Basic.</span>
          </li>
        </ul>
      </div>

      <style>{`
        .shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
