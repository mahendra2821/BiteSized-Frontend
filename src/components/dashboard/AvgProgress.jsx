import { useNavigate } from "react-router-dom";
import { BarChart2 } from "lucide-react";

export default function AvgProgress({ percent }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/avg-progress")}
      className="bg-white rounded-xl p-4 shadow-sm border space-y-2 cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-gray-500 font-medium">Avg Progress</h4>
          <p className="text-xl font-semibold text-gray-900">{percent}%</p>
        </div>
        <div className="bg-blue-100 p-2 rounded-full">
          <BarChart2 className="text-blue-600" />
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
