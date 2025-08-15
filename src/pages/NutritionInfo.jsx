import React, { useState } from "react";
const foodData = [
  {
    name: "Spinach",
    category: "Leafy Greens",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    nutrients: "Fiber 2.2g · Vit C 28mg · Iron 2.7mg",
    benefits: ["Rich in iron", "High vitamin K", "Antioxidants", "Eye health"],
  },
  {
    name: "Broccoli",
    category: "Cruciferous",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    nutrients: "Fiber 2.6g · Vit C 89mg · Iron 0.7mg",
    benefits: ["High vitamin C", "Cancer fighting", "Detoxification", "Immune support"],
  },
  {
    name: "Sweet Potato",
    category: "Root Vegetables",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    nutrients: "Fiber 3g · Vit C 2.4mg · Iron 0.6mg",
    benefits: ["Beta-carotene", "Complex carbs", "Blood sugar regulation", "Vision health"],
  },
  {
    name: "Kale",
    category: "Leafy Greens",
    calories: 35,
    protein: 2.2,
    carbs: 4.4,
    fat: 1.5,
    nutrients: "Fiber 4g · Vit C 93mg · Iron 1.5mg",
    benefits: ["Anti-inflammatory", "Bone health", "Heart health", "Detox support"],
  },
  {
    name: "Bell Peppers",
    category: "Nightshade",
    calories: 26,
    protein: 0.9,
    carbs: 6,
    fat: 0.2,
    nutrients: "Fiber 2.1g · Vit C 127mg · Iron 0.5mg",
    benefits: ["Immune boost", "Eye protection", "Rich in antioxidants", "Low calorie"],
  },
  {
    name: "Carrots",
    category: "Root Vegetables",
    calories: 41,
    protein: 0.9,
    carbs: 10,
    fat: 0.2,
    nutrients: "Fiber 2.8g · Vit A 835µg · Iron 0.3mg",
    benefits: ["Improves vision", "Antioxidants", "Skin health", "Cancer prevention"],
  },
  {
    name: "Tomatoes",
    category: "Nightshade",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    nutrients: "Vit C 13.7mg · Vit K 7.9µg · Potassium 237mg",
    benefits: ["Heart health", "Skin protection", "Cancer prevention", "Hydration"],
  },
  {
    name: "Cucumber",
    category: "Gourd",
    calories: 16,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    nutrients: "Vit K 16.4µg · Potassium 147mg",
    benefits: ["Hydrating", "Weight loss", "Skin health", "Digestive aid"],
  },
  {
    name: "Pumpkin",
    category: "Gourd",
    calories: 26,
    protein: 1,
    carbs: 7,
    fat: 0.1,
    nutrients: "Fiber 0.5g · Vit A 8513 IU · Vit C 9mg",
    benefits: ["Eye health", "Immunity", "Skin glow", "Low calorie"],
  },
  {
    name: "Beetroot",
    category: "Root Vegetables",
    calories: 43,
    protein: 1.6,
    carbs: 10,
    fat: 0.2,
    nutrients: "Fiber 2.8g · Folate 109µg · Manganese 0.3mg",
    benefits: ["Blood flow", "Brain health", "Lower BP", "Detoxification"],
  },
  {
    name: "Cauliflower",
    category: "Cruciferous",
    calories: 25,
    protein: 1.9,
    carbs: 5,
    fat: 0.3,
    nutrients: "Vit C 48mg · Vit B6 0.2mg",
    benefits: ["Weight loss", "Detox", "Anti-inflammatory", "Brain support"],
  },
  {
    name: "Green Peas",
    category: "Legumes",
    calories: 81,
    protein: 5.4,
    carbs: 14,
    fat: 0.4,
    nutrients: "Fiber 5.1g · Vit C 40mg · Iron 1.5mg",
    benefits: ["Protein source", "Digestive health", "Eye health", "Antioxidants"],
  },
  {
    name: "Zucchini",
    category: "Gourd",
    calories: 17,
    protein: 1.2,
    carbs: 3.1,
    fat: 0.3,
    nutrients: "Vit C 17.9mg · Vit A 200 IU",
    benefits: ["Digestive aid", "Heart health", "Low calorie", "Eye health"],
  },
  {
    name: "Onion",
    category: "Bulb",
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    nutrients: "Vit C 7.4mg · Manganese 0.1mg",
    benefits: ["Heart health", "Bone density", "Antioxidant", "Blood sugar control"],
  },
  {
    name: "Garlic",
    category: "Bulb",
    calories: 149,
    protein: 6.4,
    carbs: 33,
    fat: 0.5,
    nutrients: "Manganese 1.7mg · Vit B6 1.2mg",
    benefits: ["Immune boost", "Heart health", "Anti-fungal", "Cholesterol control"],
  },
  {
    name: "Corn",
    category: "Grain",
    calories: 96,
    protein: 3.4,
    carbs: 21,
    fat: 1.5,
    nutrients: "Fiber 2.7g · Vit B5 0.7mg",
    benefits: ["Energy", "Eye health", "Digestion", "Gluten-free"],
  },
  {
    name: "Cabbage",
    category: "Cruciferous",
    calories: 25,
    protein: 1.3,
    carbs: 6,
    fat: 0.1,
    nutrients: "Vit C 36.6mg · Vit K 76µg",
    benefits: ["Cancer prevention", "Weight loss", "Digestive support", "Heart health"],
  },
  {
    name: "Brussels Sprouts",
    category: "Cruciferous",
    calories: 43,
    protein: 3.4,
    carbs: 9,
    fat: 0.3,
    nutrients: "Fiber 3.8g · Vit C 85mg",
    benefits: ["Antioxidants", "Detox", "Digestive support", "Bone health"],
  },
  {
    name: "Mushrooms",
    category: "Fungi",
    calories: 22,
    protein: 3.1,
    carbs: 3.3,
    fat: 0.3,
    nutrients: "Vit D 7 IU · Selenium 9.3µg",
    benefits: ["Immunity", "Antioxidants", "Brain support", "Bone health"],
  },
  {
    name: "Eggplant",
    category: "Nightshade",
    calories: 25,
    protein: 1,
    carbs: 6,
    fat: 0.2,
    nutrients: "Fiber 3g · Manganese 0.2mg",
    benefits: ["Heart health", "Weight loss", "Antioxidants", "Brain health"],
  }
];


const NutritionCard = ({ item }) => (
  <div
    className="mt-7 bg-white rounded-3xl shadow-xl p-6 border border-gray-200
               transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
               cursor-pointer group"
    title={`${item.name} — ${item.category}`}
  >
    <div className="flex justify-between items-start">
      <h2 className="text-xl font-extrabold text-green-900 group-hover:text-green-700 transition-colors">
        {item.name}
      </h2>
      <span
        className="bg-gradient-to-tr from-green-200 to-green-400 text-green-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none"
      >
        {item.category}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-5 mt-6">
      {[
        { label: "Calories", value: item.calories, color: "text-red-500", bg: "bg-red-50" },
        { label: "Protein", value: `${item.protein}g`, color: "text-green-600", bg: "bg-green-50" },
        { label: "Carbs", value: `${item.carbs}g`, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Fat", value: `${item.fat}g`, color: "text-yellow-600", bg: "bg-yellow-50" },
      ].map(({ label, value, color, bg }, i) => (
        <div
          key={i}
          className={`${bg} rounded-xl p-5 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-shadow`}
        >
          <p className={`text-3xl font-bold ${color} select-none`}>{value}</p>
          <p className="text-sm font-semibold text-gray-600 mt-1">{label}</p>
        </div>
      ))}
    </div>

    <div className="mt-6">
      <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2 text-sm">
        ⚡ Key Nutrients
        <span className="inline-block w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse" />
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed">{item.nutrients}</p>
    </div>

    <div className="mt-6">
      <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-sm">
        ❤️ Health Benefits
        <span className="inline-block w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse" />
      </h3>
      <div className="flex flex-wrap gap-3 text-xs font-semibold text-green-900">
        {item.benefits.map((b, i) => (
          <span
            key={i}
            className="bg-green-100 hover:bg-green-200 cursor-default px-4 py-1 rounded-2xl shadow-sm transition-colors select-none"
            title={b}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortKey, setSortKey] = useState("calories");

  const categories = ["All", ...new Set(foodData.map((f) => f.category))];

  const filtered = foodData
    .filter(
      (item) =>
        (category === "All" || item.category === category) &&
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.benefits.some((b) => b.toLowerCase().includes(search.toLowerCase())) ||
          item.category.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => a[sortKey] - b[sortKey]);

  return (
    <div className="md:mt-0 bg-gradient-to-br from-green-50 via-green-100 to-green-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header
          className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row md:items-center md:gap-6
                     sticky top-5 z-20"
        >
          <h1 className="text-4xl font-extrabold text-green-900 flex items-center gap-4 mb-6 md:mb-0 select-none">
            <svg
              className="w-10 h-10 text-green-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            Nutrition Database
          </h1>

          <input
            type="search"
            placeholder="Search vegetables, categories, or benefits..."
            className="flex-grow px-6 py-4 border border-green-300 rounded-2xl
                       focus:ring-4 focus:ring-green-400 focus:outline-none shadow-md
                       transition duration-300 hover:ring-2 hover:ring-green-300 text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="mt-4 md:mt-0 px-5 py-4 rounded-2xl border border-green-300 shadow-md
                       transition hover:shadow-lg focus:ring-4 focus:ring-green-400 text-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className="mt-4 md:mt-0 px-5 py-4 rounded-2xl border border-green-300 shadow-md
                       transition hover:shadow-lg focus:ring-4 focus:ring-green-400 text-lg"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="calories">Sort by Calories</option>
            <option value="protein">Sort by Protein</option>
            <option value="carbs">Sort by Carbs</option>
            <option value="fat">Sort by Fat</option>
          </select>
        </header>

        <main
          className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                     animate-fadeInUp"
        >
          {filtered.length ? (
            filtered.map((item, idx) => <NutritionCard key={idx} item={item} />)
          ) : (
            <p className="text-center col-span-full text-green-800 text-xl font-semibold mt-16">
              No results found for "{search}"
            </p>
          )}
        </main>
      </div>
    </div>
  );
}
