// src/pages/ShoppingList.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const meals = state?.meals || [];

  // Extract unique ingredients
  const ingredientsSet = new Set();
  meals.forEach((meal) => {
    meal.ingredients?.forEach((item) => ingredientsSet.add(item));
  });

  const ingredients = Array.from(ingredientsSet);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
      >
        ← Back to Daily Plan
      </button>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">🛒 Shopping List</h1>
      <p className="text-gray-700 mb-4">
        Based on today’s planned meals, here’s your ingredient checklist:
      </p>

      {/* Ingredient List */}
      {ingredients.length > 0 ? (
        <ul className="space-y-3">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="bg-green-100 px-4 py-2 rounded shadow text-gray-800 font-medium"
            >
              ✅ {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No ingredients found.</p>
      )}
    </div>
  );
};

export default ShoppingList;
