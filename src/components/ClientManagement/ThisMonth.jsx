// // // // // // // src/pages/ThisMonthPage.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // // const sampleMonthlyClients = [
// // // // // //   { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
// // // // // //   { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
// // // // // //   { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
// // // // // //   { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
// // // // // //   { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
// // // // // // ];

// // // // // // const ThisMonth = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [selectedPlan, setSelectedPlan] = useState("All");
// // // // // //   const [sortAsc, setSortAsc] = useState(true);

// // // // // //   const filteredClients = sampleMonthlyClients
// // // // // //     .filter(client => selectedPlan === "All" || client.plan === selectedPlan)
// // // // // //     .sort((a, b) => sortAsc ? a.progress - b.progress : b.progress - a.progress);

// // // // // //   const chartData = sampleMonthlyClients.reduce((acc, client) => {
// // // // // //     const day = new Date(client.dateAdded).getDate();
// // // // // //     const existing = acc.find(entry => entry.day === day);
// // // // // //     if (existing) existing.count++;
// // // // // //     else acc.push({ day, count: 1 });
// // // // // //     return acc;
// // // // // //   }, []).sort((a, b) => a.day - b.day);

// // // // // //   return (
// // // // // //     <div className="max-w-5xl mx-auto p-6">
// // // // // //       <button
// // // // // //         onClick={() => navigate(-1)}
// // // // // //         className="mb-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // //       >
// // // // // //         ← Back
// // // // // //       </button>

// // // // // //       <h1 className="text-3xl font-bold text-blue-700 mb-2">📅 Clients This Month</h1>
// // // // // //       <p className="text-gray-600 mb-6">Filter, sort, and view trends for July 2025 clients.</p>

// // // // // //       {/* Filters */}
// // // // // //       <div className="flex flex-wrap gap-4 mb-6">
// // // // // //         <select
// // // // // //           value={selectedPlan}
// // // // // //           onChange={(e) => setSelectedPlan(e.target.value)}
// // // // // //           className="px-4 py-2 rounded border border-gray-300"
// // // // // //         >
// // // // // //           <option value="All">All Plans</option>
// // // // // //           <option value="Weight Loss">Weight Loss</option>
// // // // // //           <option value="Muscle Gain">Muscle Gain</option>
// // // // // //           <option value="General Wellness">General Wellness</option>
// // // // // //         </select>

// // // // // //         <button
// // // // // //           onClick={() => setSortAsc(!sortAsc)}
// // // // // //           className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// // // // // //         >
// // // // // //           Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Chart */}
// // // // // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // // // //         <h2 className="text-lg font-semibold mb-2 text-blue-800">📈 Weekly Trend</h2>
// // // // // //         <ResponsiveContainer width="100%" height={200}>
// // // // // //           <BarChart data={chartData}>
// // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // //             <XAxis dataKey="day" label={{ value: "Day", position: "insideBottom", offset: -5 }} />
// // // // // //             <YAxis allowDecimals={false} />
// // // // // //             <Tooltip />
// // // // // //             <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
// // // // // //           </BarChart>
// // // // // //         </ResponsiveContainer>
// // // // // //       </div>

// // // // // //       {/* Client Cards */}
// // // // // //       <div className="space-y-4">
// // // // // //         {filteredClients.map((client) => (
// // // // // //           <div key={client.id} className="bg-white shadow rounded-lg p-4 border border-blue-100">
// // // // // //             <div className="flex justify-between items-center">
// // // // // //               <div>
// // // // // //                 <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
// // // // // //                 <p className="text-sm text-gray-500">{client.plan}</p>
// // // // // //               </div>
// // // // // //               <div className="text-right">
// // // // // //                 <p className="text-sm text-blue-600">Progress: {client.progress}%</p>
// // // // // //                 <p className="text-xs text-gray-400">Added: {client.dateAdded}</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ThisMonth;



// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // const sampleMonthlyClients = [
// // // // //   { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
// // // // //   { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
// // // // //   { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
// // // // //   { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
// // // // //   { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
// // // // // ];

// // // // // // Mask name function: Show first letter of each word + asterisks
// // // // // function maskName(name) {
// // // // //   if (!name) return "";
// // // // //   return name
// // // // //     .split(" ")
// // // // //     .map((part) => part[0] + "*".repeat(part.length - 1))
// // // // //     .join(" ");
// // // // // }

// // // // // const ThisMonth = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [selectedPlan, setSelectedPlan] = useState("All");
// // // // //   const [sortAsc, setSortAsc] = useState(true);

// // // // //   const filteredClients = sampleMonthlyClients
// // // // //     .filter(client => selectedPlan === "All" || client.plan === selectedPlan)
// // // // //     .sort((a, b) => sortAsc ? a.progress - b.progress : b.progress - a.progress);

// // // // //   const chartData = sampleMonthlyClients.reduce((acc, client) => {
// // // // //     const day = new Date(client.dateAdded).getDate();
// // // // //     const existing = acc.find(entry => entry.day === day);
// // // // //     if (existing) existing.count++;
// // // // //     else acc.push({ day, count: 1 });
// // // // //     return acc;
// // // // //   }, []).sort((a, b) => a.day - b.day);

// // // // //   return (
// // // // //     <div className="max-w-5xl mx-auto p-6">
// // // // //       <button
// // // // //         onClick={() => navigate(-1)}
// // // // //         className="mb-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // //       >
// // // // //         ← Back
// // // // //       </button>

// // // // //       <h1 className="text-3xl font-bold text-blue-700 mb-2">📅 Clients This Month</h1>
// // // // //       <p className="text-gray-600 mb-6">Filter, sort, and view trends for July 2025 clients.</p>

// // // // //       {/* Filters */}
// // // // //       <div className="flex flex-wrap gap-4 mb-6">
// // // // //         <select
// // // // //           value={selectedPlan}
// // // // //           onChange={(e) => setSelectedPlan(e.target.value)}
// // // // //           className="px-4 py-2 rounded border border-gray-300"
// // // // //         >
// // // // //           <option value="All">All Plans</option>
// // // // //           <option value="Weight Loss">Weight Loss</option>
// // // // //           <option value="Muscle Gain">Muscle Gain</option>
// // // // //           <option value="General Wellness">General Wellness</option>
// // // // //         </select>

// // // // //         <button
// // // // //           onClick={() => setSortAsc(!sortAsc)}
// // // // //           className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// // // // //         >
// // // // //           Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Chart */}
// // // // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // // //         <h2 className="text-lg font-semibold mb-2 text-blue-800">📈 Weekly Trend</h2>
// // // // //         <ResponsiveContainer width="100%" height={200}>
// // // // //           <BarChart data={chartData}>
// // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // //             <XAxis dataKey="day" label={{ value: "Day", position: "insideBottom", offset: -5 }} />
// // // // //             <YAxis allowDecimals={false} />
// // // // //             <Tooltip />
// // // // //             <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
// // // // //           </BarChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>

// // // // //       {/* Client Cards */}
// // // // //       <div className="space-y-4">
// // // // //         {filteredClients.map((client) => (
// // // // //           <div key={client.id} className="bg-white shadow rounded-lg p-4 border border-blue-100">
// // // // //             <div className="flex justify-between items-center">
// // // // //               <div>
// // // // //                 <h3 className="text-lg font-semibold text-gray-800">{maskName(client.name)}</h3>
// // // // //                 <p className="text-sm text-gray-500">{client.plan}</p>
// // // // //               </div>
// // // // //               <div className="text-right">
// // // // //                 <p className="text-sm text-blue-600">Progress: {client.progress}%</p>
// // // // //                 <p className="text-xs text-gray-400">Added: {client.dateAdded}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ThisMonth;




// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   BarChart,
// // // //   Bar,
// // // //   XAxis,
// // // //   YAxis,
// // // //   CartesianGrid,
// // // //   Tooltip as RechartsTooltip,
// // // //   ResponsiveContainer,
// // // // } from "recharts";

// // // // const sampleMonthlyClients = [
// // // //   { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
// // // //   { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
// // // //   { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
// // // //   { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
// // // //   { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
// // // // ];

// // // // // Helper to mask names like "Ravi Kumar" => "R*** K****"
// // // // function maskName(name) {
// // // //   if (!name) return "";
// // // //   const parts = name.split(" ");
// // // //   return parts
// // // //     .map((part) => part[0] + "*".repeat(part.length - 1))
// // // //     .join(" ");
// // // // }

// // // // const ThisMonth = () => {
// // // //   const navigate = useNavigate();
// // // //   const [selectedPlan, setSelectedPlan] = useState("All");
// // // //   const [sortAsc, setSortAsc] = useState(true);

// // // //   const filteredClients = sampleMonthlyClients
// // // //     .filter((client) => selectedPlan === "All" || client.plan === selectedPlan)
// // // //     .sort((a, b) => (sortAsc ? a.progress - b.progress : b.progress - a.progress));

// // // //   const chartData = sampleMonthlyClients
// // // //     .reduce((acc, client) => {
// // // //       const day = new Date(client.dateAdded).getDate();
// // // //       const existing = acc.find((entry) => entry.day === day);
// // // //       if (existing) existing.count++;
// // // //       else acc.push({ day, count: 1 });
// // // //       return acc;
// // // //     }, [])
// // // //     .sort((a, b) => a.day - b.day);

// // // //   return (
// // // //     <div className="max-w-5xl mx-auto p-6">
// // // //       <button
// // // //         onClick={() => navigate(-1)}
// // // //         className="mb-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
// // // //       >
// // // //         ← Back
// // // //       </button>

// // // //       <h1 className="text-3xl font-bold text-blue-700 mb-2">📅 Clients This Month</h1>
// // // //       <p className="text-gray-600 mb-6">Filter, sort, and view trends for July 2025 clients.</p>

// // // //       {/* Filters */}
// // // //       <div className="flex flex-wrap gap-4 mb-6">
// // // //         <select
// // // //           value={selectedPlan}
// // // //           onChange={(e) => setSelectedPlan(e.target.value)}
// // // //           className="px-4 py-2 rounded border border-gray-300"
// // // //         >
// // // //           <option value="All">All Plans</option>
// // // //           <option value="Weight Loss">Weight Loss</option>
// // // //           <option value="Muscle Gain">Muscle Gain</option>
// // // //           <option value="General Wellness">General Wellness</option>
// // // //         </select>

// // // //         <button
// // // //           onClick={() => setSortAsc(!sortAsc)}
// // // //           className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
// // // //         >
// // // //           Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
// // // //         </button>
// // // //       </div>

// // // //       {/* Chart */}
// // // //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// // // //         <h2 className="text-lg font-semibold mb-2 text-blue-800">📈 Weekly Trend</h2>
// // // //         <ResponsiveContainer width="100%" height={200}>
// // // //           <BarChart data={chartData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="day" label={{ value: "Day", position: "insideBottom", offset: -5 }} />
// // // //             <YAxis allowDecimals={false} />
// // // //             <RechartsTooltip />
// // // //             <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
// // // //           </BarChart>
// // // //         </ResponsiveContainer>
// // // //       </div>

// // // //       {/* Client Cards */}
// // // //       <div className="space-y-4">
// // // //         {filteredClients.map((client) => (
// // // //           <div
// // // //             key={client.id}
// // // //             className="bg-white shadow rounded-lg p-4 border border-blue-100"
// // // //           >
// // // //             <div className="flex justify-between items-center">
// // // //               <div>
// // // //                 <h3
// // // //                   className="text-lg font-semibold text-gray-800 cursor-help"
// // // //                   title={`Original name: ${client.name}`}
// // // //                 >
// // // //                   {maskName(client.name)}
// // // //                 </h3>
// // // //                 <p className="text-sm text-gray-500">{client.plan}</p>
// // // //               </div>
// // // //               <div className="text-right">
// // // //                 <p className="text-sm text-blue-600">Progress: {client.progress}%</p>
// // // //                 <p className="text-xs text-gray-400">Added: {client.dateAdded}</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ThisMonth;



// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { Tooltip as ReactTooltip } from "react-tooltip";
// // // import {
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   CartesianGrid,
// // //   Tooltip as RechartsTooltip,
// // //   ResponsiveContainer,
// // //   defs,
// // //   linearGradient,
// // //   stop,
// // // } from "recharts";

// // // const sampleMonthlyClients = [
// // //   { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
// // //   { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
// // //   { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
// // //   { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
// // //   { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
// // // ];

// // // // Mask name helper: e.g. "Ravi Kumar" => "R*** K****"
// // // function maskName(name) {
// // //   if (!name) return "";
// // //   const parts = name.split(" ");
// // //   return parts
// // //     .map((part) => part[0] + "*".repeat(part.length - 1))
// // //     .join(" ");
// // // }

// // // const cardVariants = {
// // //   hidden: { opacity: 0, scale: 0.85 },
// // //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// // // };

// // // const ThisMonth = () => {
// // //   const navigate = useNavigate();
// // //   const [selectedPlan, setSelectedPlan] = useState("All");
// // //   const [sortAsc, setSortAsc] = useState(true);

// // //   const filteredClients = sampleMonthlyClients
// // //     .filter((client) => selectedPlan === "All" || client.plan === selectedPlan)
// // //     .sort((a, b) => (sortAsc ? a.progress - b.progress : b.progress - a.progress));

// // //   const chartData = sampleMonthlyClients
// // //     .reduce((acc, client) => {
// // //       const day = new Date(client.dateAdded).getDate();
// // //       const existing = acc.find((entry) => entry.day === day);
// // //       if (existing) existing.count++;
// // //       else acc.push({ day, count: 1 });
// // //       return acc;
// // //     }, [])
// // //     .sort((a, b) => a.day - b.day);

// // //   return (
// // //     <div
// // //       className="min-h-screen p-8"
// // //       style={{
// // //         background: "radial-gradient(circle at top left, #1e3c72, #2a5298, #1e3c72)",
// // //         color: "#e0e7ff",
// // //         fontFamily: "'Poppins', sans-serif",
// // //       }}
// // //     >
// // //       <button
// // //         onClick={() => navigate(-1)}
// // //         className="mb-6 px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 bg-blue-600 hover:bg-blue-700 shadow-lg"
// // //       >
// // //         ← Back
// // //       </button>

// // //       <h1 className="text-4xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
// // //         📅 Clients This Month
// // //       </h1>
// // //       <p className="text-blue-200 mb-8 max-w-xl">
// // //         Filter, sort, and explore client progress trends for July 2025 with smooth animations and interactive charts.
// // //       </p>

// // //       {/* Filters */}
// // //       <div className="flex flex-wrap gap-6 mb-10">
// // //         <select
// // //           value={selectedPlan}
// // //           onChange={(e) => setSelectedPlan(e.target.value)}
// // //           className="px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md border border-blue-500 hover:border-blue-300 transition"
// // //         >
// // //           <option value="All">All Plans</option>
// // //           <option value="Weight Loss">Weight Loss</option>
// // //           <option value="Muscle Gain">Muscle Gain</option>
// // //           <option value="General Wellness">General Wellness</option>
// // //         </select>

// // //         <button
// // //           onClick={() => setSortAsc(!sortAsc)}
// // //           className="px-6 py-3 bg-blue-800 rounded-lg font-semibold shadow-lg hover:bg-blue-900 transition transform hover:-translate-y-1"
// // //         >
// // //           Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
// // //         </button>
// // //       </div>

// // //       {/* Chart */}
// // //       <div className="bg-blue-900 bg-opacity-70 p-6 rounded-2xl shadow-2xl mb-10 max-w-4xl mx-auto">
// // //         <h2 className="text-xl font-bold mb-4 tracking-wide text-blue-300">📈 Weekly Trend</h2>
// // //         <ResponsiveContainer width="100%" height={240}>
// // //           <BarChart data={chartData}>
// // //             <defs>
// // //               <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
// // //                 <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.9} />
// // //                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
// // //               </linearGradient>
// // //             </defs>
// // //             <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
// // //             <XAxis
// // //               dataKey="day"
// // //               label={{ value: "Day", position: "insideBottom", offset: -5, fill: "#93c5fd" }}
// // //               stroke="#93c5fd"
// // //             />
// // //             <YAxis allowDecimals={false} stroke="#93c5fd" />
// // //             <RechartsTooltip
// // //               contentStyle={{ backgroundColor: "#1e40af", borderRadius: "10px", color: "white" }}
// // //               itemStyle={{ color: "#60a5fa" }}
// // //             />
// // //             <Bar dataKey="count" fill="url(#colorProgress)" radius={[10, 10, 0, 0]} />
// // //           </BarChart>
// // //         </ResponsiveContainer>
// // //       </div>

// // //       {/* Client Cards */}
// // //       <div className="max-w-4xl mx-auto space-y-6">
// // //         {filteredClients.map((client) => (
// // //           <motion.div
// // //             key={client.id}
// // //             variants={cardVariants}
// // //             initial="hidden"
// // //             animate="visible"
// // //             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(96, 165, 250, 0.6)" }}
// // //             className="bg-blue-800 bg-opacity-60 border border-blue-600 rounded-xl p-5 cursor-pointer transition-shadow duration-300"
// // //           >
// // //             <div className="flex justify-between items-center">
// // //               <div>
// // //                 <h3
// // //                   className="text-xl font-semibold tracking-wide cursor-help select-none"
// // //                   data-tip={`Original name: ${client.name}`}
// // //                   data-for={`tooltip-${client.id}`}
// // //                 >
// // //                   {maskName(client.name)}
// // //                 </h3>
// // //                 <ReactTooltip
// // //                   id={`tooltip-${client.id}`}
// // //                   place="top"
// // //                   effect="solid"
// // //                   backgroundColor="#2563eb"
// // //                   textColor="#dbeafe"
// // //                   arrowColor="#2563eb"
// // //                   delayShow={200}
// // //                   className="rounded-lg px-3 py-1 text-sm font-semibold"
// // //                 />
// // //                 <p className="text-blue-300 mt-1">{client.plan}</p>
// // //               </div>
// // //               <div className="text-right">
// // //                 <p className="text-lg font-semibold text-blue-400">Progress: {client.progress}%</p>
// // //                 <p className="text-xs text-blue-300">Added: {client.dateAdded}</p>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ThisMonth;




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { Tooltip as ReactTooltip } from "react-tooltip";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip as RechartsTooltip,
// //   ResponsiveContainer,
// // } from "recharts";

// // const sampleMonthlyClients = [
// //   { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
// //   { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
// //   { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
// //   { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
// //   { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
// // ];

// // // Mask name helper: e.g. "Ravi Kumar" => "R*** K****"
// // function maskName(name) {
// //   if (!name) return "";
// //   const parts = name.split(" ");
// //   return parts
// //     .map((part) => part[0] + "*".repeat(part.length - 1))
// //     .join(" ");
// // }

// // const cardVariants = {
// //   hidden: { opacity: 0, scale: 0.85 },
// //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// // };

// // const ThisMonth = () => {
// //   const navigate = useNavigate();
// //   const [selectedPlan, setSelectedPlan] = useState("All");
// //   const [sortAsc, setSortAsc] = useState(true);

// //   const filteredClients = sampleMonthlyClients
// //     .filter((client) => selectedPlan === "All" || client.plan === selectedPlan)
// //     .sort((a, b) => (sortAsc ? a.progress - b.progress : b.progress - a.progress));

// //   const chartData = sampleMonthlyClients
// //     .reduce((acc, client) => {
// //       const day = new Date(client.dateAdded).getDate();
// //       const existing = acc.find((entry) => entry.day === day);
// //       if (existing) existing.count++;
// //       else acc.push({ day, count: 1 });
// //       return acc;
// //     }, [])
// //     .sort((a, b) => a.day - b.day);

// //   return (
// //     <div
// //       className="min-h-screen p-8 mt-5"
// //       style={{
// //         background: "radial-gradient(circle at top left, #1e3c72, #2a5298, #1e3c72)",
// //         color: "#e0e7ff",
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="mb-6 px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 bg-blue-600 hover:bg-blue-700 shadow-lg"
// //       >
// //         ← Back
// //       </button>

// //       <h1 className="text-4xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
// //         📅 Clients This Month
// //       </h1>
// //       <p className="text-blue-200 mb-8 max-w-xl">
// //         Filter, sort, and explore client progress trends for July 2025 with smooth animations and interactive charts.
// //       </p>

// //       {/* Filters */}
// //       <div className="flex flex-wrap gap-6 mb-10">
// //         <select
// //           value={selectedPlan}
// //           onChange={(e) => setSelectedPlan(e.target.value)}
// //           className="px-5 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md border border-blue-500 hover:border-blue-300 transition"
// //         >
// //           <option value="All">All Plans</option>
// //           <option value="Weight Loss">Weight Loss</option>
// //           <option value="Muscle Gain">Muscle Gain</option>
// //           <option value="General Wellness">General Wellness</option>
// //         </select>

// //         <button
// //           onClick={() => setSortAsc(!sortAsc)}
// //           className="px-6 py-3 bg-blue-800 rounded-lg font-semibold shadow-lg hover:bg-blue-900 transition transform hover:-translate-y-1"
// //         >
// //           Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
// //         </button>
// //       </div>

// //       {/* Chart */}
// //       <div className="bg-blue-900 bg-opacity-70 p-6 rounded-2xl shadow-2xl mb-10 max-w-4xl mx-auto">
// //         <h2 className="text-xl font-bold mb-4 tracking-wide text-blue-300">📈 Weekly Trend</h2>
// //         <ResponsiveContainer width="100%" height={240}>
// //           <BarChart data={chartData}>
// //             <defs>
// //               <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
// //                 <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.9} />
// //                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
// //               </linearGradient>
// //             </defs>
// //             <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
// //             <XAxis
// //               dataKey="day"
// //               label={{ value: "Day", position: "insideBottom", offset: -5, fill: "#93c5fd" }}
// //               stroke="#93c5fd"
// //             />
// //             <YAxis allowDecimals={false} stroke="#93c5fd" />
// //             <RechartsTooltip
// //               contentStyle={{ backgroundColor: "#1e40af", borderRadius: "10px", color: "white" }}
// //               itemStyle={{ color: "#60a5fa" }}
// //             />
// //             <Bar dataKey="count" fill="url(#colorProgress)" radius={[10, 10, 0, 0]} />
// //           </BarChart>
// //         </ResponsiveContainer>
// //       </div>

// //       {/* Client Cards */}
// //       <div className="max-w-4xl mx-auto space-y-6">
// //         {filteredClients.map((client) => (
// //           <motion.div
// //             key={client.id}
// //             variants={cardVariants}
// //             initial="hidden"
// //             animate="visible"
// //             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(96, 165, 250, 0.6)" }}
// //             className="bg-blue-800 bg-opacity-60 border border-blue-600 rounded-xl p-5 cursor-pointer transition-shadow duration-300"
// //           >
// //             <div className="flex justify-between items-center">
// //               <div>
// //                 <h3
// //                   className="text-xl font-semibold tracking-wide cursor-help select-none"
// //                   data-tooltip-id={`tooltip-${client.id}`}
// //                   data-tooltip-content={`Original name: ${client.name}`}
// //                 >
// //                   {maskName(client.name)}
// //                 </h3>
// //                 <ReactTooltip
// //                   id={`tooltip-${client.id}`}
// //                   place="top"
// //                   effect="solid"
// //                   backgroundColor="#2563eb"
// //                   textColor="#dbeafe"
// //                   arrowColor="#2563eb"
// //                   delayShow={200}
// //                   className="rounded-lg px-3 py-1 text-sm font-semibold"
// //                 />
// //                 <p className="text-blue-300 mt-1">{client.plan}</p>
// //               </div>
// //               <div className="text-right">
// //                 <p className="text-lg font-semibold text-blue-400">Progress: {client.progress}%</p>
// //                 <p className="text-xs text-blue-300">Added: {client.dateAdded}</p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ThisMonth;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const sampleMonthlyClients = [
  { id: 1, name: "Ravi Kumar", plan: "Weight Loss", dateAdded: "2025-07-03", progress: 20 },
  { id: 2, name: "Priya Sharma", plan: "Muscle Gain", dateAdded: "2025-07-12", progress: 40 },
  { id: 3, name: "Anita Desai", plan: "General Wellness", dateAdded: "2025-07-20", progress: 70 },
  { id: 4, name: "Karan Mehta", plan: "Weight Loss", dateAdded: "2025-07-10", progress: 60 },
  { id: 5, name: "Ruchi Patel", plan: "Muscle Gain", dateAdded: "2025-07-17", progress: 35 },
];

function maskName(name) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts
    .map((part) => part[0] + "*".repeat(part.length - 1))
    .join(" ");
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ThisMonth = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredClients = sampleMonthlyClients
    .filter((client) => selectedPlan === "All" || client.plan === selectedPlan)
    .sort((a, b) => (sortAsc ? a.progress - b.progress : b.progress - a.progress));

  const chartData = sampleMonthlyClients
    .reduce((acc, client) => {
      const day = new Date(client.dateAdded).getDate();
      const existing = acc.find((entry) => entry.day === day);
      if (existing) existing.count++;
      else acc.push({ day, count: 1 });
      return acc;
    }, [])
    .sort((a, b) => a.day - b.day);

  return (
    <div
      className="min-h-screen p-8 mt-5"
      style={{
        background: "radial-gradient(circle at top left, #d4f7dc, #a1e9a1, #6bd66b)",
        color: "#155724", // dark green text for contrast
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 bg-green-600 hover:bg-green-700 shadow-lg text-white"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-extrabold mb-4 tracking-wide drop-shadow-md text-green-900">
        📅 Clients This Month
      </h1>
      <p className="text-green-800 mb-8 max-w-xl">
        Filter, sort, and explore client progress trends for July 2025 with smooth animations and interactive charts.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-10">
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="px-5 py-3 rounded-lg bg-green-300 text-green-900 font-semibold shadow-md border border-green-400 hover:border-green-500 transition"
        >
          <option value="All">All Plans</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="General Wellness">General Wellness</option>
        </select>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-6 py-3 bg-green-600 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 text-white"
        >
          Sort by Progress {sortAsc ? "⬆️" : "⬇️"}
        </button>
      </div>

      {/* Chart */}
      <div className="bg-green-900 bg-opacity-10 p-6 rounded-2xl shadow-lg mb-10 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 tracking-wide text-green-700">📈 Weekly Trend</h2>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chartData}>
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#28a745" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#198754" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#a3d9a5" strokeDasharray="4 4" />
            <XAxis
              dataKey="day"
              label={{ value: "Day", position: "insideBottom", offset: -5, fill: "#2f8132" }}
              stroke="#2f8132"
            />
            <YAxis allowDecimals={false} stroke="#2f8132" />
            <RechartsTooltip
              contentStyle={{ backgroundColor: "#1c4122", borderRadius: "10px", color: "white" }}
              itemStyle={{ color: "#a3d9a5" }}
            />
            <Bar dataKey="count" fill="url(#colorProgress)" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Client Cards */}
      <div className="max-w-4xl mx-auto space-y-6">
        {filteredClients.map((client) => (
          <motion.div
            key={client.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(40, 167, 69, 0.6)" }}
            className="bg-green-200 bg-opacity-70 border border-green-400 rounded-xl p-5 cursor-pointer transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3
                  className="text-xl font-semibold tracking-wide cursor-help select-none text-green-900"
                  data-tooltip-id={`tooltip-${client.id}`}
                  data-tooltip-content={`Original name: ${client.name}`}
                >
                  {maskName(client.name)}
                </h3>
                <ReactTooltip
                  id={`tooltip-${client.id}`}
                  place="top"
                  effect="solid"
                  backgroundColor="#28a745"
                  textColor="#d4f7dc"
                  arrowColor="#28a745"
                  delayShow={200}
                  className="rounded-lg px-3 py-1 text-sm font-semibold"
                />
                <p className="text-green-800 mt-1">{client.plan}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-700">Progress: {client.progress}%</p>
                <p className="text-xs text-green-600">Added: {client.dateAdded}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThisMonth;



