


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaCheckCircle, FaUtensils } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const initialWeek = [
  { day: "Mon", calories: 1640, meals: 5, goal: 2000 },
  { day: "Tue", calories: 1720, meals: 4, goal: 2000 },
  { day: "Wed", calories: 1580, meals: 5, goal: 2000 },
  { day: "Thu", calories: 1650, meals: 4, goal: 2000 },
  { day: "Fri", calories: 1700, meals: 5, goal: 2000 },
  { day: "Sat", calories: 0, meals: 0, goal: 2000 },
  { day: "Sun", calories: 0, meals: 0, goal: 2000 },
];

const mealSuggestions = [
  "Grilled Chicken Wrap",
  "Quinoa Veg Bowl",
  "Avocado Toast",
  "Greek Yogurt Parfait",
  "Tofu Stir-fry",
  "Salmon with Asparagus",
];

export default function WeeklyOverview() {
  const [weekData, setWeekData] = useState(initialWeek);
  const [modalDay, setModalDay] = useState(null);
  const [form, setForm] = useState({ calories: "", meals: "" });
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date("2024-01-15"));

  const formatWeekRange = (date) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleString("default", { month: "short" })} ${start.getDate()} - ${end.toLocaleString("default", { month: "short" })} ${end.getDate()}, ${end.getFullYear()}`;
  };

  const changeWeek = (days) => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + days);
    setCurrentWeekStart(newStart);
    setWeekData(initialWeek.map((d) => ({ ...d, calories: 0, meals: 0 })));
  };

  const updateDay = (index) => {
    const updated = [...weekData];
    updated[index] = {
      ...updated[index],
      calories: parseInt(form.calories) || 0,
      meals: parseInt(form.meals) || 0,
    };
    setWeekData(updated);
    setModalDay(null);
    setForm({ calories: "", meals: "" });
  };

  const handleGenerate = () => {
    const generated = weekData.map((day) => ({
      ...day,
      calories: 1600 + Math.floor(Math.random() * 400),
      meals: 4 + Math.floor(Math.random() * 2),
    }));
    setWeekData(generated);
  };

  const avgCalories = Math.floor(weekData.reduce((sum, d) => sum + d.calories, 0) / 7);
  const daysCompleted = weekData.filter((d) => d.calories > 0).length;

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-6xl mx-auto font-sans md:mt-0 bg-green-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 bg-green-100 p-4 rounded-xl shadow"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold text-green-800 flex items-center gap-2 sm:gap-3 select-none mb-2 sm:mb-0">
          <FaCalendarAlt className="text-green-600 animate-pulse" /> Weekly Overview
        </h1>
        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 select-none">
          <button onClick={() => changeWeek(-7)} className="p-2 rounded-full hover:bg-green-200 transition">
            <FaChevronLeft />
          </button>
          <span className="font-medium text-sm sm:text-lg text-center">{formatWeekRange(currentWeekStart)}</span>
          <button onClick={() => changeWeek(7)} className="p-2 rounded-full hover:bg-green-200 transition">
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
        {[
          { label: "Average Daily Calories", value: avgCalories, color: "green" },
          { label: "Days Completed", value: `${daysCompleted}/7`, color: "blue", icon: <FaCheckCircle /> },
          { label: "Nutrition Score", value: "85%", color: "yellow" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`bg-${stat.color}-100 p-4 sm:p-5 rounded-lg shadow-lg text-center`}
          >
            <p className={`uppercase tracking-widest text-${stat.color}-600 font-semibold text-xs sm:text-sm mb-1 sm:mb-2`}>
              {stat.label}
            </p>
            <p className={`text-2xl sm:text-4xl font-extrabold text-${stat.color}-800 flex justify-center items-center gap-1 sm:gap-2`}>
              {stat.icon} {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <motion.div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">📊 Weekly Calorie Chart</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weekData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 2500]} />
            <Tooltip />
            <Bar dataKey="calories" fill="#16a34a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Meal Suggestions */}
      <motion.div className="bg-green-100 p-4 sm:p-5 rounded-lg shadow mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
          <FaUtensils className="text-green-600" /> Meal Suggestions
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
          {mealSuggestions.map((item, i) => (
            <motion.li whileHover={{ x: 4, color: "#16a34a" }} key={i} className="cursor-pointer">
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Days */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {weekData.map((day, i) => {
          const progressPercent = Math.min((day.calories / day.goal) * 100, 100);
          let progressColor = "bg-red-500";
          if (progressPercent >= 90) progressColor = "bg-green-600";
          else if (progressPercent >= 70) progressColor = "bg-yellow-400";

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-lg border p-4 sm:p-5 shadow-sm bg-white cursor-pointer"
              onClick={() => day.calories === 0 && setModalDay(i)}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 flex items-center gap-1 sm:gap-2">
                  {day.day}
                  {day.calories > 0 ? <FaCheckCircle className="text-green-500" /> : <span className="text-sm text-gray-400 italic">Plan Day</span>}
                </h3>
              </div>
              <p className="text-gray-700 mb-1 text-sm sm:text-base font-medium">Calories: {day.calories}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.5 }} className={`${progressColor} h-2 sm:h-3 rounded-full`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
        <button onClick={handleGenerate} className="bg-green-600 text-white px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-green-700 transition w-full sm:w-auto">
          Generate Week Plan
        </button>
        <button className="underline text-gray-600 w-full sm:w-auto text-center">Copy Previous Week</button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalDay !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 shadow-2xl w-full max-w-xs sm:max-w-md"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700">Plan {weekData[modalDay].day}</h3>
              <input
                type="number"
                placeholder="Calories"
                value={form.calories}
                onChange={(e) => setForm({ ...form, calories: e.target.value })}
                className="w-full p-3 mb-4 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Meals"
                value={form.meals}
                onChange={(e) => setForm({ ...form, meals: e.target.value })}
                className="w-full p-3 mb-4 border rounded-lg"
              />
              <div className="flex justify-end gap-3 flex-wrap">
                <button onClick={() => setModalDay(null)} className="px-4 py-2 border rounded w-full sm:w-auto">Cancel</button>
                <button onClick={() => updateDay(modalDay)} disabled={!form.calories || !form.meals} className="px-4 py-2 bg-green-600 text-white rounded w-full sm:w-auto">Save</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
