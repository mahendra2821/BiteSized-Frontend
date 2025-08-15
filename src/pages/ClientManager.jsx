



import React, { useState } from "react";
import { motion } from "framer-motion";
import DashboardSummary from "../components/DashboardSummary";
import Tabs from "../components/Tabs";
import ClientList from "../components/ClientList";
import clientsData from "../data/clients.json";

export default function ClientManager() {
  const [filter, setFilter] = useState("All");

  const filteredClients = clientsData.filter((client) => {
    if (filter === "All") return true;
    return client.status === filter.toLowerCase();
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-100 via-green-50 to-green-200">
      {/* Animated Summary */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <DashboardSummary clients={clientsData} />
      </motion.div>

      {/* Tabs & List Card */}
      <motion.div
        className="p-6 mt-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-lg border border-green-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
      >
        <Tabs current={filter} onChange={setFilter} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ClientList clients={filteredClients} />
        </motion.div>
      </motion.div>
    </div>
  );
}
