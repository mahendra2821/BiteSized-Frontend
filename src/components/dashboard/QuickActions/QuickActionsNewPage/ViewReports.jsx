



// components/dashboard/QuickActions/ViewReportsPage.jsx
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { motion } from 'framer-motion';

const barData = [
  { name: 'Jan', clients: 20 },
  { name: 'Feb', clients: 32 },
  { name: 'Mar', clients: 47 },
  { name: 'Apr', clients: 51 },
];

const lineData = [
  { name: 'Week 1', progress: 60 },
  { name: 'Week 2', progress: 65 },
  { name: 'Week 3', progress: 72 },
  { name: 'Week 4', progress: 78 },
];

const pieData = [
  { name: 'Basic Plan', value: 12 },
  { name: 'Standard Plan', value: 18 },
  { name: 'Premium Plan', value: 17 },
];

const COLORS = ['#10b981', '#34d399', '#6ee7b7'];

export default function ViewReportsPage() {
  return (
    <div className="min-h-screen p-6 mt-7"
      style={{
        background: 'radial-gradient(circle at top left, #a7f3d0, #6ee7b7, #34d399)',
      }}
    >
      <h2 className="text-4xl font-extrabold text-center text-green-900 drop-shadow-lg mb-12">
        📊 Client Reports Dashboard
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Bar Chart */}
        <ChartCard title="📈 Monthly Clients Growth">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff44" />
              <XAxis dataKey="name" stroke="#065f46" />
              <YAxis allowDecimals={false} stroke="#065f46" />
              <Tooltip contentStyle={{ backgroundColor: "#f0fdf4", borderRadius: "8px" }} />
              <Bar dataKey="clients" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Line Chart */}
        <ChartCard title="📅 Weekly Average Progress">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff44" />
              <XAxis dataKey="name" stroke="#065f46" />
              <YAxis domain={[50, 100]} stroke="#065f46" />
              <Tooltip contentStyle={{ backgroundColor: "#f0fdf4", borderRadius: "8px" }} />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#047857"
                strokeWidth={3}
                dot={{ r: 6, strokeWidth: 2, fill: "#10b981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Pie Chart */}
        <ChartCard title="📌 Plan Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#10b981"
                dataKey="value"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend wrapperStyle={{ color: "#065f46" }} />
              <Tooltip contentStyle={{ backgroundColor: "#f0fdf4", borderRadius: "8px" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/30"
    >
      <h3 className="text-xl font-semibold mb-4 text-green-900">{title}</h3>
      {children}
    </motion.div>
  );
}
