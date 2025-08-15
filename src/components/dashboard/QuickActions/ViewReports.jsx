// components/dashboard/QuickActions/ViewReports.jsx
import { TrendingUp } from "lucide-react";

import { Link } from "react-router-dom";

export default function AddClient() {
  return (
    <Link to="/view-reports" className="w-full">
      <div className="w-full rounded-xl border shadow-sm hover:shadow-md transition-all hover:scale-[1.02] p-6 cursor-pointer bg-white flex flex-col items-center justify-center text-center hover:bg-blue-50">
        <TrendingUp className="w-6 h-6 text-blue-600 mb-2" />
        <span className="text-sm font-semibold text-blue-700">View Reports</span>
      </div>
    </Link>
  );
}

