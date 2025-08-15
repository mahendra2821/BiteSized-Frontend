



import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddClient() {
  return (
    <Link to="/create-meal-plan" className="w-full">
      <div className="w-full rounded-xl border shadow-sm hover:shadow-md transition-all hover:scale-[1.02] p-6 cursor-pointer bg-white flex flex-col items-center justify-center text-center hover:bg-blue-50">
        <UtensilsCrossed className="w-6 h-6 text-blue-600 mb-2" />
        <span className="text-sm font-semibold text-blue-700"> Create Meal Plan </span>
      </div>
    </Link>
  );
}

