// src/pages/AddMeal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMealPlan = ({ onAddMeal }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    type: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    ingredients: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {
      id: Date.now(),
      ...formData,
      calories: Number(formData.calories),
      protein: Number(formData.protein),
      carbs: Number(formData.carbs),
      fat: Number(formData.fat),
      ingredients: formData.ingredients.split(",").map((item) => item.trim())
    };
    onAddMeal(newMeal);
    navigate("/daily-plan");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-700">🍽️ Add New Meal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["name", "Meal Name"],
          ["time", "Time"],
          ["type", "Type (Breakfast, Snack, etc)"],
          ["calories", "Calories"],
          ["protein", "Protein (g)"],
          ["carbs", "Carbs (g)"],
          ["fat", "Fat (g)"],
          ["ingredients", "Ingredients (comma separated)"]
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded shadow hover:bg-green-700"
        >
          ➕ Add Meal
        </button>
      </form>
    </div>
  );
};

export default AddMealPlan;
