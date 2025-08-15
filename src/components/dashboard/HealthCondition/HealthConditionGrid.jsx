


import HealthConditionCard from "./HealthConditionCard";
import { Activity, Heart, Droplet, Stethoscope, Apple, Sparkles } from "lucide-react";

const conditions = [
  { name: "Diabetes", color: "from-red-400 to-red-500", path: "/clients/diabetes", icon: Droplet },
  { name: "Hypertension", color: "from-yellow-300 to-yellow-500", path: "/clients/hypertension", icon: Activity },
  { name: "PCOS", color: "from-blue-400 to-blue-500", path: "/clients/pcos", icon: Sparkles },
  { name: "Heart Disease", color: "from-green-500 to-green-600", path: "/clients/heart", icon: Heart },
  { name: "General Wellness", color: "from-emerald-400 to-emerald-500", path: "/clients/wellness", icon: Apple },
];

export default function HealthConditionGrid() {
  return (
    <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border border-green-100 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 border-b pb-2 border-green-100">
        <span className="w-2 h-6 bg-green-500 rounded-full" />
        <h3 className="text-lg font-semibold text-gray-800">Client Health Conditions</h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {conditions.map(({ name, color, path, icon: Icon }) => (
          <div
            key={name}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-white cursor-pointer 
            bg-gradient-to-br ${color} shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
            onClick={() => (window.location.href = path)}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
