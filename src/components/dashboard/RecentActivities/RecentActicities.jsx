



import { useEffect, useRef } from "react";
import { Activity, Star } from "lucide-react";

const activities = [
  { name: "Sarah Johnson", email: "sarah.johnson@example.com", action: "completed weekly check-in", time: "2 hours ago", icon: "dot" },
  { name: "Michael Chen", email: "michael.chen@example.com", action: "reached weight loss milestone", time: "4 hours ago", icon: "star" },
  { name: "Anna Lee", email: "anna.lee@example.com", action: "paused plan temporarily", time: "2 days ago", icon: "dot-gray" },
  { name: "David Kim", email: "david.kim@example.com", action: "updated dietary preferences", time: "3 days ago", icon: "dot" },
  { name: "Laura Lin", email: "laura.lin@example.com", action: "missed last session", time: "4 days ago", icon: "dot-gray" },
];

function maskName(name) {
  return name ? name[0] + "*".repeat(Math.max(name.length - 1, 0)) : "User";
}

function maskEmail(email) {
  if (!email) return "";
  const [user, domain] = email.split("@");
  const maskedUser = user[0] + "*".repeat(user.length - 1);
  const domainParts = domain.split(".");
  const maskedDomain = "*".repeat(domainParts[0].length) + "." + domainParts.slice(1).join(".");
  return maskedUser + "@" + maskedDomain;
}

const duplicated = [...activities, ...activities];

export default function RecentActivities() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollPos = 0;
    const scrollInterval = setInterval(() => {
      if (scrollElement) {
        scrollPos += 1;
        if (scrollPos >= scrollElement.scrollHeight / 2) scrollPos = 0;
        scrollElement.scrollTop = scrollPos;
      }
    }, 30);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-emerald-400 text-white p-3 flex items-center gap-2">
        <Activity className="w-5 h-5" /> 
        <h3 className="text-lg font-semibold">Recent Activities</h3>
      </div>

      <div
        ref={scrollRef}
        className="max-h-[220px] overflow-y-auto scroll-smooth"
      >
        <ul className="divide-y divide-green-100">
          {duplicated.map((item, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 p-3 transition-all duration-200 hover:bg-green-50 ${
                index % 2 === 0 ? "bg-white/70" : "bg-green-50/50"
              }`}
            >
              {item.icon === "star" ? (
                <Star className="w-5 h-5 text-yellow-500 drop-shadow-glow" />
              ) : (
                <span
                  className={`w-3 h-3 rounded-full mt-1 ${
                    item.icon === "dot"
                      ? "bg-green-500 animate-pulse"
                      : "bg-gray-400"
                  }`}
                />
              )}
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium text-gray-800">
                    {maskName(item.name)}
                  </span>{" "}
                  {item.action}
                </p>
                <p className="text-xs text-gray-500">{item.time}</p>
                {/* Uncomment to show masked email */}
                {/* <p className="text-xs text-gray-400 italic">{maskEmail(item.email)}</p> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
