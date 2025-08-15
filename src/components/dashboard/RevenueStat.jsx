import { useNavigate } from "react-router-dom";
import { IndianRupee } from "lucide-react";

export default function RevenueStat({ amount, growth }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/revenue")}
      className="bg-white rounded-xl p-4 shadow-sm border space-y-2 cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-gray-500 font-medium">Revenue</h4>
          <p className="text-xl font-semibold text-gray-900">₹{amount}18452</p>
        </div>
        <div className="bg-yellow-100 p-2 rounded-full">
          <IndianRupee className="text-yellow-600" />
        </div>
      </div>
      <p className="text-green-700 text-sm font-medium">{growth}</p>
    </div>
  );
}
