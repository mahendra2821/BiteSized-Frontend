



import React, { useState } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CaloriesCard from "../components/DailyPlan/CaloriesCard";
import ProteinCard from "../components/DailyPlan/ProteinCard";
import CarbsCard from "../components/DailyPlan/CarbsCard";
import FatCard from "../components/DailyPlan/FatsCard";
import { motion, AnimatePresence } from "framer-motion";

const initialMeals = [
  {
    id: 1,
    name: "Oatmeal with Berries",
    time: "8:00 AM",
    type: "Breakfast",
    calories: 320,
    protein: 12,
    carbs: 38,
    fat: 6,
    ingredients: ["Oats", "Berries", "Almond Milk"],
  },
  {
    id: 2,
    name: "Greek Yogurt",
    time: "10:30 AM",
    type: "Snack",
    calories: 150,
    protein: 15,
    carbs: 8,
    fat: 5,
    ingredients: ["Greek Yogurt"],
  },
  {
    id: 3,
    name: "Grilled Chicken Salad",
    time: "1:00 PM",
    type: "Lunch",
    calories: 450,
    protein: 35,
    carbs: 25,
    fat: 18,
    ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Olive Oil"],
  },
  {
    id: 4,
    name: "Apple with Almonds",
    time: "4:00 PM",
    type: "Snack",
    calories: 200,
    protein: 6,
    carbs: 22,
    fat: 9,
    ingredients: ["Apple", "Almonds"],
  },
  {
    id: 5,
    name: "Salmon with Quinoa",
    time: "7:30 PM",
    type: "Dinner",
    calories: 520,
    protein: 42,
    carbs: 35,
    fat: 22,
    ingredients: ["Salmon", "Quinoa", "Broccoli"],
  },
];

export default function DailyPlan() {
  const [meals, setMeals] = useState(initialMeals);
  const [adding, setAdding] = useState(false);
  const [newMeal, setNewMeal] = useState({
    name: "",
    time: "",
    type: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    ingredients: "",
  });

  const navigate = useNavigate();

  const summary = meals.reduce(
    (acc, meal) => {
      acc.calories += meal.calories;
      acc.protein += meal.protein;
      acc.carbs += meal.carbs;
      acc.fat += meal.fat;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  const handleAddMeal = (e) => {
    e.preventDefault();
    const meal = {
      id: meals.length + 1,
      ...newMeal,
      calories: Number(newMeal.calories),
      protein: Number(newMeal.protein),
      carbs: Number(newMeal.carbs),
      fat: Number(newMeal.fat),
      ingredients: newMeal.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };
    setMeals([...meals, meal]);
    setAdding(false);
    setNewMeal({
      name: "",
      time: "",
      type: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      ingredients: "",
    });
  };

  return (
    <div
      className="min-h-screen p-4 sm:p-8 relative overflow-hidden md:mt-0"
      style={{
        background: "radial-gradient(circle at top left, #d4fcd4, #a8f5a2, #64d98f, #3fbf73)",
      }}
    >
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-green-300 rounded-full absolute"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.5,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-900 flex items-center gap-2 text-center sm:text-left">
            🥗 Daily Nutrition Goals
          </h1>
          <span className="bg-green-200 text-green-900 px-4 sm:px-5 py-1 rounded-full font-semibold shadow-inner mt-2 sm:mt-0">
            77% Complete
          </span>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <CaloriesCard calories={summary.calories} />
          <ProteinCard protein={summary.protein} />
          <CarbsCard carbs={summary.carbs} />
          <FatCard fat={summary.fat} />
        </div>

        {/* Meals Summary */}
        <motion.div
          className="bg-white/80 rounded-xl p-4 sm:p-6 shadow-md border border-green-200 mb-6 sm:mb-10 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-green-900">
              ✅ Today's Meals Summary
            </h2>
            <button
              onClick={() => navigate("/daily-plan/shopping-list", { state: { meals } })}
              className="flex items-center gap-2 text-green-700 hover:underline mt-2 sm:mt-0"
            >
              <FaShoppingCart /> Shopping List
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-lg font-semibold text-gray-700">
            <span>🔥 {summary.calories} cal</span>
            <span>🥩 {summary.protein}g protein</span>
            <span>🍞 {summary.carbs}g carbs</span>
            <span>🥑 {summary.fat}g fat</span>
          </div>
        </motion.div>

        {/* Add Meal Button */}
        {!adding && (
          <motion.div
            className="text-center mb-6 sm:mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setAdding(true)}
              className="inline-flex items-center gap-2 sm:gap-3 bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-700 transition text-sm sm:text-base"
            >
              <FaPlus /> Add New Meal
            </button>
          </motion.div>
        )}

        {/* Add Meal Form */}
        <AnimatePresence>
          {adding && (
            <motion.form
              onSubmit={handleAddMeal}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="bg-white/90 p-6 sm:p-8 rounded-xl shadow-lg border border-green-200 mb-10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-6">Add New Meal</h2>
              {[
                { name: "name", placeholder: "Meal Name", type: "text" },
                { name: "time", placeholder: "Time (e.g. 12:00 PM)", type: "text" },
                { name: "type", placeholder: "Meal Type", type: "text" },
                { name: "calories", placeholder: "Calories", type: "number" },
                { name: "protein", placeholder: "Protein (g)", type: "number" },
                { name: "carbs", placeholder: "Carbs (g)", type: "number" },
                { name: "fat", placeholder: "Fat (g)", type: "number" },
                { name: "ingredients", placeholder: "Ingredients (comma separated)", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={newMeal[field.name]}
                  onChange={(e) =>
                    setNewMeal((prev) => ({
                      ...prev,
                      [field.name]: e.target.value,
                    }))
                  }
                  required={field.name !== "ingredients"}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              ))}

              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  type="button"
                  onClick={() => setAdding(false)}
                  className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 mb-2 sm:mb-0"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Add Meal
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Meals List */}
        <AnimatePresence>
          {!adding &&
            meals.map((meal) => (
              <motion.div
                key={meal.id}
                className="bg-white/80 rounded-xl shadow-md p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-200 mb-4 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: meal.id * 0.05 }}
              >
                <div className="mb-2 sm:mb-0">
                  <p className="text-green-900 text-lg sm:text-lg font-semibold">{meal.name}</p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {meal.type} • {meal.time}
                  </p>
                  {meal.ingredients.length > 0 && (
                    <p className="text-gray-400 text-xs sm:text-sm mt-1 italic">
                      Ingredients: {meal.ingredients.join(", ")}
                    </p>
                  )}
                </div>
                <div className="text-gray-700 font-semibold text-right text-sm sm:text-base">
                  <p>🔥 {meal.calories} cal</p>
                  <p>🥩 {meal.protein}g / 🍞 {meal.carbs}g / 🥑 {meal.fat}g</p>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {!adding && (
          <div className="text-center text-green-800 font-semibold mt-4 sm:mt-6">
            ⭐ All meals planned! Great job!
          </div>
        )}
      </div>
    </div>
  );
}
