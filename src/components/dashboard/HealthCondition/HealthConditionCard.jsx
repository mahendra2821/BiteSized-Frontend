import { Link } from "react-router-dom";

export default function HealthConditionCard({ name, count, color, path }) {
  return (
    <Link to={path}>
      <div className="p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${color}`}>
          {name[0]}
        </div>
        <h4 className="mt-2 text-md font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{count} Clients</p>
      </div>
    </Link>
  );
}
