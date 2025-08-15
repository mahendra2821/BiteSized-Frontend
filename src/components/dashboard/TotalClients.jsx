import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TotalClients({ value, change }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/clients")}
      className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border space-y-2 hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-gray-500 font-medium">Total Clients</h4>
          <p className="text-xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="bg-green-100 p-2 rounded-full">
          <Users className="text-green-600" />
        </div>
      </div>
      <p className="text-green-900 text-sm font-medium">{change}</p>
    </div>
  );
}
