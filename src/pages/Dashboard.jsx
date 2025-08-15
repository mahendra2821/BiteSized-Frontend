

import { FileHeart } from "lucide-react";
import StatsGrid from "../components/dashboard/StatsGrid";
import QuickActionsGrid from "../components/dashboard/QuickActions/QuickActionsGrid";
import HealthConditionsGrid from "../components/dashboard/HealthCondition/HealthConditionGrid";
import RecentActivities from "../components/dashboard/RecentActivities/RecentActicities";
import UpcomingConsultation from "../components/dashboard/RecentActivities/UpcomingConsultation";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth/AuthContext";
import { motion } from "framer-motion";

// Animated Header Component
const AnimatedHeader = () => {
  const text = "Welcome to NutriTracker Pro";
  const letters = Array.from(text);

  // Container variant for stagger
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // one by one
      },
    },
  };

  // Letter variant
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  return (
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold text-green-800 flex flex-wrap gap-1 select-none"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};
export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8 space-y-6 mt-10 md:mt-0"
      style={{ background: "linear-gradient(100deg, #a9f0a5, #c8f7be, #e0ffeb)" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-green-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
      >
        <div className="mb-4 md:mb-0">
          <AnimatedHeader />
          <p className="text-green-700 mt-2 md:mt-1 text-sm md:text-base">
            Here's an overview of your nutrition practice today
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-green-600 bg-green-100 rounded-full p-4 shadow-inner hover:shadow-md transition-shadow transform hover:scale-110">
            <FileHeart className="w-10 h-10 animate-bounce" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #f87171" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl font-bold hover:bg-red-600 transition-all shadow-md"
          >
            Logout
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <StatsGrid />
      </motion.div>

      {/* Activities + Consultations */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RecentActivities />
        <UpcomingConsultation />
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <QuickActionsGrid />
      </motion.div>

      {/* Health Conditions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <HealthConditionsGrid />
      </motion.div>
    </div>
  );
}

