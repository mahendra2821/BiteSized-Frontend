import { useNavigate } from "react-router-dom";

export default function DashboardSummary({ clients }) {
  const navigate = useNavigate();
  const total = clients.length;
  const active = clients.filter(c => c.status === 'active').length;
  const avgProgress = Math.round(
    clients.reduce((sum, c) => sum + c.progress, 0) / total
  );
  const monthly = 12; // static for demo

  const stats = [
    // { title: 'Total Clients', value: total, path: '/active-clients' },
    // { title: 'Active Plans', value: active, path: '/plans/active' },
    // { title: 'Avg Progress', value: `${avgProgress}%`, path: '/progress' },
    { title: 'This Month', value: monthly, path: '/reports/monthly' }
  ];

  return (
    <div className="grid grid-cols-2 mt-7 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          onClick={() => navigate(stat.path)}
          className="bg-white p-4 rounded-lg shadow text-center cursor-pointer hover:bg-gray-100 transition"
        >
          <div className="text-xl font-semibold">{stat.value}</div>
          <div className="text-gray-500">{stat.title}</div>
        </div>
      ))}
    </div>
  );
}
