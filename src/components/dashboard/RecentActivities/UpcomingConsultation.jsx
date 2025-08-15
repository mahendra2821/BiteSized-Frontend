


import { CalendarCheck } from "lucide-react";

const consultations = [
  { name: "Sarah Johnson", plan: "Premium Plan", time: "Today 2:00 PM", status: "confirmed" },
  { name: "Michael Chen", plan: "Elite Plan", time: "Today 4:30 PM", status: "confirmed" },
  { name: "David Kim", plan: "Standard Plan", time: "Tomorrow 11:00 AM", status: "confirmed" },
  { name: "Laura Lin", plan: "Premium Plan", time: "Tomorrow 1:00 PM", status: "confirmed" },
  { name: "Anna Lee", plan: "Basic Plan", time: "Friday 9:00 AM", status: "confirmed" },
];

function maskName(name) {
  return name ? name[0] + "*".repeat(Math.max(name.length - 1, 0)) : "User";
}

export default function UpcomingConsultation() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-3 flex items-center gap-2">
        <CalendarCheck className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Upcoming Consultations</h3>
      </div>

      {/* List */}
      <div className="max-h-[220px] overflow-y-auto scroll-smooth">
        <ul className="divide-y divide-green-100">
          {consultations.map((appt, i) => (
            <li
              key={i}
              className={`flex justify-between items-center p-3 transition-all duration-200 hover:bg-green-50 hover:shadow-sm ${
                i % 2 === 0 ? "bg-white/70" : "bg-green-50/50"
              }`}
            >
              <div>
                <p className="font-semibold text-gray-800">{maskName(appt.name)}</p>
                <p className="text-xs text-gray-500">{appt.plan}</p>
                <p className="text-sm text-gray-600 mt-1">{appt.time}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm animate-pulse">
                {appt.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
