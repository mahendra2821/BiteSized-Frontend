// // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // import { toast } from "react-toastify";
// // // // // // // // // // import {
// // // // // // // // // //   CircularProgressbar,
// // // // // // // // // //   buildStyles,
// // // // // // // // // // } from "react-circular-progressbar";
// // // // // // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // // // // // export default function AvgProgressClients() {
// // // // // // // // // //   const clientsData = {
// // // // // // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // // // // // //   };

// // // // // // // // // //   const [clientType, setClientType] = useState("All");
// // // // // // // // // //   const [view, setView] = useState("circle");

// // // // // // // // // //   const currentData = clientsData[clientType];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     toast.success(`${clientType} client data loaded!`, {
// // // // // // // // // //       position: "top-right",
// // // // // // // // // //       autoClose: 1500,
// // // // // // // // // //     });
// // // // // // // // // //   }, [clientType]);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-6">
// // // // // // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // // // // // //         <h2 className="text-2xl font-bold">Average Progress</h2>
// // // // // // // // // //         <div className="space-x-2">
// // // // // // // // // //           <select
// // // // // // // // // //             value={clientType}
// // // // // // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // // // // // //             className="p-2 border rounded text-sm"
// // // // // // // // // //           >
// // // // // // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // // // // // //               <option key={type} value={type}>
// // // // // // // // // //                 {type}
// // // // // // // // // //               </option>
// // // // // // // // // //             ))}
// // // // // // // // // //           </select>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() =>
// // // // // // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // // // // // //             }
// // // // // // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // // // // // //           >
// // // // // // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <p className="text-gray-600 mb-4">
// // // // // // // // // //         Client Type: <span className="font-medium">{clientType}</span>
// // // // // // // // // //       </p>

// // // // // // // // // //       <div className="bg-white rounded-xl p-6 shadow grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // //         {[
// // // // // // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // // // // // //         ].map((item) => (
// // // // // // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // // // // // //             {view === "circle" ? (
// // // // // // // // // //               <div className="w-24 h-24 mb-2">
// // // // // // // // // //                 <CircularProgressbar
// // // // // // // // // //                   value={currentData[item.key]}
// // // // // // // // // //                   text={`${currentData[item.key]}%`}
// // // // // // // // // //                   styles={buildStyles({
// // // // // // // // // //                     pathColor: item.color,
// // // // // // // // // //                     textColor: "#111827",
// // // // // // // // // //                     trailColor: "#e5e7eb",
// // // // // // // // // //                   })}
// // // // // // // // // //                 />
// // // // // // // // // //               </div>
// // // // // // // // // //             ) : (
// // // // // // // // // //               <div className="w-full">
// // // // // // // // // //                 <div className="mb-1 text-sm font-medium">{item.label}</div>
// // // // // // // // // //                 <div className="w-full bg-gray-200 rounded-full h-4">
// // // // // // // // // //                   <div
// // // // // // // // // //                     className="h-4 rounded-full transition-all duration-500"
// // // // // // // // // //                     style={{
// // // // // // // // // //                       width: `${currentData[item.key]}%`,
// // // // // // // // // //                       backgroundColor: item.color,
// // // // // // // // // //                     }}
// // // // // // // // // //                   />
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <p className="mt-1 text-sm text-gray-700 text-center">
// // // // // // // // // //                   {currentData[item.key]}%
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //             {view === "circle" && (
// // // // // // // // // //               <p className="text-sm font-medium mt-2">{item.label}</p>
// // // // // // // // // //             )}
// // // // // // // // // //           </div>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { toast } from "react-toastify";
// // // // // // // // // import {
// // // // // // // // //   CircularProgressbar,
// // // // // // // // //   buildStyles,
// // // // // // // // // } from "react-circular-progressbar";
// // // // // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // // // // export default function AvgProgressClients() {
// // // // // // // // //   const initialData = {
// // // // // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // // // // //   };

// // // // // // // // //   const [clientsData, setClientsData] = useState(initialData);
// // // // // // // // //   const [clientType, setClientType] = useState("All");
// // // // // // // // //   const [view, setView] = useState("circle");
// // // // // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // // // // //   const [editValues, setEditValues] = useState(initialData);

// // // // // // // // //   const currentData = isAdmin
// // // // // // // // //     ? editValues[clientType]
// // // // // // // // //     : clientsData[clientType];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     toast.info(`${clientType} client data loaded!`, {
// // // // // // // // //       position: "top-right",
// // // // // // // // //       autoClose: 1500,
// // // // // // // // //     });
// // // // // // // // //   }, [clientType]);

// // // // // // // // //   const requestPassword = () => {
// // // // // // // // //     const entered = prompt("Enter admin password:");
// // // // // // // // //     if (entered === "2821") {
// // // // // // // // //       setIsAdmin(true);
// // // // // // // // //       setEditValues(clientsData); // Sync current data to edit mode
// // // // // // // // //       toast.success("Admin mode enabled");
// // // // // // // // //     } else {
// // // // // // // // //       toast.error("Incorrect password");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleChange = (type, key, value) => {
// // // // // // // // //     setEditValues((prev) => ({
// // // // // // // // //       ...prev,
// // // // // // // // //       [type]: {
// // // // // // // // //         ...prev[type],
// // // // // // // // //         [key]: Number(value),
// // // // // // // // //       },
// // // // // // // // //     }));
// // // // // // // // //   };

// // // // // // // // //   const saveChanges = () => {
// // // // // // // // //     setClientsData(editValues); // Save edits
// // // // // // // // //     setIsAdmin(false); // Exit admin mode
// // // // // // // // //     toast.success("Progress data updated!");
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="p-6 bg-gray-50 rounded-xl shadow">
// // // // // // // // //       {/* Header */}
// // // // // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // // // // //         <h2 className="text-2xl font-bold flex items-center gap-3">
// // // // // // // // //           Average Progress
// // // // // // // // //           {!isAdmin && (
// // // // // // // // //             <button
// // // // // // // // //               onClick={requestPassword}
// // // // // // // // //               className="px-3 py-1 bg-red-500 text-white rounded text-sm"
// // // // // // // // //             >
// // // // // // // // //               🔒 Unlock
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </h2>
// // // // // // // // //         <div className="space-x-2 flex items-center">
// // // // // // // // //           <select
// // // // // // // // //             value={clientType}
// // // // // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // // // // //             className="p-2 border rounded text-sm"
// // // // // // // // //           >
// // // // // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // // // // //               <option key={type} value={type}>
// // // // // // // // //                 {type}
// // // // // // // // //               </option>
// // // // // // // // //             ))}
// // // // // // // // //           </select>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() =>
// // // // // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // // // // //             }
// // // // // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // // // // //           >
// // // // // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // // // // //           </button>
// // // // // // // // //           {isAdmin && (
// // // // // // // // //             <button
// // // // // // // // //               onClick={saveChanges}
// // // // // // // // //               className="px-3 py-1 bg-green-600 text-white rounded text-sm"
// // // // // // // // //             >
// // // // // // // // //               💾 Save
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <p className="text-gray-600 mb-4">
// // // // // // // // //         Client Type: <span className="font-medium">{clientType}</span>
// // // // // // // // //       </p>

// // // // // // // // //       {/* Data Display */}
// // // // // // // // //       <div className="bg-white rounded-xl p-6 shadow grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // //         {[
// // // // // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // // // // //         ].map((item) => (
// // // // // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // // // // //             {isAdmin ? (
// // // // // // // // //               <input
// // // // // // // // //                 type="number"
// // // // // // // // //                 value={editValues[clientType][item.key]}
// // // // // // // // //                 onChange={(e) =>
// // // // // // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // // // // // //                 }
// // // // // // // // //                 className="mb-2 p-2 border rounded w-20 text-center"
// // // // // // // // //                 min={0}
// // // // // // // // //                 max={100}
// // // // // // // // //               />
// // // // // // // // //             ) : view === "circle" ? (
// // // // // // // // //               <div className="w-24 h-24 mb-2">
// // // // // // // // //                 <CircularProgressbar
// // // // // // // // //                   value={currentData[item.key]}
// // // // // // // // //                   text={`${currentData[item.key]}%`}
// // // // // // // // //                   styles={buildStyles({
// // // // // // // // //                     pathColor: item.color,
// // // // // // // // //                     textColor: "#111827",
// // // // // // // // //                     trailColor: "#e5e7eb",
// // // // // // // // //                   })}
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             ) : (
// // // // // // // // //               <div className="w-full">
// // // // // // // // //                 <div className="mb-1 text-sm font-medium">{item.label}</div>
// // // // // // // // //                 <div className="w-full bg-gray-200 rounded-full h-4">
// // // // // // // // //                   <div
// // // // // // // // //                     className="h-4 rounded-full transition-all duration-500"
// // // // // // // // //                     style={{
// // // // // // // // //                       width: `${currentData[item.key]}%`,
// // // // // // // // //                       backgroundColor: item.color,
// // // // // // // // //                     }}
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //                 <p className="mt-1 text-sm text-gray-700 text-center">
// // // // // // // // //                   {currentData[item.key]}%
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //             {view === "circle" && !isAdmin && (
// // // // // // // // //               <p className="text-sm font-medium mt-2">{item.label}</p>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { toast } from "react-toastify";
// // // // // // // // import {
// // // // // // // //   CircularProgressbar,
// // // // // // // //   buildStyles,
// // // // // // // // } from "react-circular-progressbar";
// // // // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // // // export default function AvgProgressClients() {
// // // // // // // //   const initialData = {
// // // // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // // // //   };

// // // // // // // //   const [clientsData, setClientsData] = useState(initialData);
// // // // // // // //   const [clientType, setClientType] = useState("All");
// // // // // // // //   const [view, setView] = useState("circle");
// // // // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // // // //   const [editValues, setEditValues] = useState(initialData);

// // // // // // // //   const currentData = isAdmin
// // // // // // // //     ? editValues[clientType]
// // // // // // // //     : clientsData[clientType];

// // // // // // // //   useEffect(() => {
// // // // // // // //     toast.info(`${clientType} client data loaded!`, {
// // // // // // // //       position: "top-right",
// // // // // // // //       autoClose: 1500,
// // // // // // // //     });
// // // // // // // //   }, [clientType]);

// // // // // // // //   const requestPassword = () => {
// // // // // // // //     const entered = prompt("Enter admin password:");
// // // // // // // //     if (entered === "2821") {
// // // // // // // //       setIsAdmin(true);
// // // // // // // //       setEditValues(clientsData);
// // // // // // // //       toast.success("Admin mode enabled");
// // // // // // // //     } else {
// // // // // // // //       toast.error("Incorrect password");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleChange = (type, key, value) => {
// // // // // // // //     setEditValues((prev) => ({
// // // // // // // //       ...prev,
// // // // // // // //       [type]: {
// // // // // // // //         ...prev[type],
// // // // // // // //         [key]: Number(value),
// // // // // // // //       },
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const saveChanges = () => {
// // // // // // // //     setClientsData(editValues);
// // // // // // // //     setIsAdmin(false);
// // // // // // // //     toast.success("Progress data updated!");
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
// // // // // // // //       {/* Header */}
// // // // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // // // //         <h2 className="text-3xl font-bold flex items-center gap-3">
// // // // // // // //           Average Progress
// // // // // // // //           {!isAdmin && (
// // // // // // // //             <button
// // // // // // // //               onClick={requestPassword}
// // // // // // // //               className="px-4 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
// // // // // // // //             >
// // // // // // // //               🔒 Unlock
// // // // // // // //             </button>
// // // // // // // //           )}
// // // // // // // //         </h2>
// // // // // // // //         <div className="space-x-2 flex items-center">
// // // // // // // //           <select
// // // // // // // //             value={clientType}
// // // // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // // // //             className="p-2 border rounded text-sm"
// // // // // // // //           >
// // // // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // // // //               <option key={type} value={type}>
// // // // // // // //                 {type}
// // // // // // // //               </option>
// // // // // // // //             ))}
// // // // // // // //           </select>
// // // // // // // //           <button
// // // // // // // //             onClick={() =>
// // // // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // // // //             }
// // // // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // // // //           >
// // // // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // // // //           </button>
// // // // // // // //           {isAdmin && (
// // // // // // // //             <button
// // // // // // // //               onClick={saveChanges}
// // // // // // // //               className="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition"
// // // // // // // //             >
// // // // // // // //               💾 Save
// // // // // // // //             </button>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <p className="text-gray-600 mb-4 text-lg">
// // // // // // // //         Client Type: <span className="font-semibold">{clientType}</span>
// // // // // // // //       </p>

// // // // // // // //       {/* Data Display */}
// // // // // // // //       <div className="bg-white rounded-xl p-8 shadow grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // // //         {[
// // // // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // // // //         ].map((item) => (
// // // // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // // // //             {isAdmin ? (
// // // // // // // //               <input
// // // // // // // //                 type="number"
// // // // // // // //                 value={editValues[clientType][item.key]}
// // // // // // // //                 onChange={(e) =>
// // // // // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // // // // //                 }
// // // // // // // //                 className="mb-2 p-3 border rounded w-24 text-center text-lg"
// // // // // // // //                 min={0}
// // // // // // // //                 max={100}
// // // // // // // //               />
// // // // // // // //             ) : view === "circle" ? (
// // // // // // // //               <div className="w-40 h-40 mb-4">
// // // // // // // //                 <CircularProgressbar
// // // // // // // //                   value={currentData[item.key]}
// // // // // // // //                   text={`${currentData[item.key]}%`}
// // // // // // // //                   styles={buildStyles({
// // // // // // // //                     pathColor: item.color,
// // // // // // // //                     textColor: "#111827",
// // // // // // // //                     trailColor: "#e5e7eb",
// // // // // // // //                     textSize: "16px",
// // // // // // // //                   })}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             ) : (
// // // // // // // //               <div className="w-full">
// // // // // // // //                 <div className="mb-2 text-base font-medium">{item.label}</div>
// // // // // // // //                 <div className="w-full bg-gray-200 rounded-full h-8">
// // // // // // // //                   <div
// // // // // // // //                     className="h-8 rounded-full transition-all duration-700 ease-out"
// // // // // // // //                     style={{
// // // // // // // //                       width: `${currentData[item.key]}%`,
// // // // // // // //                       backgroundColor: item.color,
// // // // // // // //                     }}
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //                 <p className="mt-2 text-base font-semibold text-gray-800 text-center">
// // // // // // // //                   {currentData[item.key]}%
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //             {view === "circle" && !isAdmin && (
// // // // // // // //               <p className="text-base font-medium mt-3">{item.label}</p>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { toast } from "react-toastify";
// // // // // // // import {
// // // // // // //   CircularProgressbar,
// // // // // // //   buildStyles,
// // // // // // // } from "react-circular-progressbar";
// // // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // // export default function AvgProgressClients() {
// // // // // // //   const initialData = {
// // // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // // //   };

// // // // // // //   const [clientsData, setClientsData] = useState(initialData);
// // // // // // //   const [clientType, setClientType] = useState("All");
// // // // // // //   const [view, setView] = useState("circle");
// // // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // // //   const [editValues, setEditValues] = useState(initialData);
// // // // // // //   const [animatedValues, setAnimatedValues] = useState(initialData);

// // // // // // //   const currentData = isAdmin
// // // // // // //     ? editValues[clientType]
// // // // // // //     : clientsData[clientType];

// // // // // // //   useEffect(() => {
// // // // // // //     toast.info(`${clientType} client data loaded!`, {
// // // // // // //       position: "top-right",
// // // // // // //       autoClose: 1500,
// // // // // // //     });

// // // // // // //     // Animate values from 0 to current values
// // // // // // //     const duration = 800; // ms
// // // // // // //     const steps = 30;
// // // // // // //     let step = 0;
// // // // // // //     const startValues = { ...animatedValues[clientType] };
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       step++;
// // // // // // //       setAnimatedValues((prev) => ({
// // // // // // //         ...prev,
// // // // // // //         [clientType]: {
// // // // // // //           workout: Math.round(
// // // // // // //             startValues.workout +
// // // // // // //               (currentData.workout - startValues.workout) * (step / steps)
// // // // // // //           ),
// // // // // // //           diet: Math.round(
// // // // // // //             startValues.diet +
// // // // // // //               (currentData.diet - startValues.diet) * (step / steps)
// // // // // // //           ),
// // // // // // //           engagement: Math.round(
// // // // // // //             startValues.engagement +
// // // // // // //               (currentData.engagement - startValues.engagement) * (step / steps)
// // // // // // //           ),
// // // // // // //         },
// // // // // // //       }));
// // // // // // //       if (step >= steps) clearInterval(interval);
// // // // // // //     }, duration / steps);

// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, [clientType, clientsData]); // animate on type change or data update

// // // // // // //   const requestPassword = () => {
// // // // // // //     const entered = prompt("Enter admin password:");
// // // // // // //     if (entered === "2821") {
// // // // // // //       setIsAdmin(true);
// // // // // // //       setEditValues(clientsData);
// // // // // // //       toast.success("Admin mode enabled");
// // // // // // //     } else {
// // // // // // //       toast.error("Incorrect password");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleChange = (type, key, value) => {
// // // // // // //     setEditValues((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [type]: {
// // // // // // //         ...prev[type],
// // // // // // //         [key]: Number(value),
// // // // // // //       },
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const saveChanges = () => {
// // // // // // //     setClientsData(editValues);
// // // // // // //     setIsAdmin(false);
// // // // // // //     toast.success("Progress data updated!");
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="p-8 bg-gray-50 rounded-xl shadow-lg">
// // // // // // //       {/* Header */}
// // // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // // //         <h2 className="text-3xl font-bold flex items-center gap-3">
// // // // // // //           Average Progress
// // // // // // //           {!isAdmin && (
// // // // // // //             <button
// // // // // // //               onClick={requestPassword}
// // // // // // //               className="px-4 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
// // // // // // //             >
// // // // // // //               🔒 Unlock
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </h2>
// // // // // // //         <div className="space-x-2 flex items-center">
// // // // // // //           <select
// // // // // // //             value={clientType}
// // // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // // //             className="p-2 border rounded text-sm"
// // // // // // //           >
// // // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // // //               <option key={type} value={type}>
// // // // // // //                 {type}
// // // // // // //               </option>
// // // // // // //             ))}
// // // // // // //           </select>
// // // // // // //           <button
// // // // // // //             onClick={() =>
// // // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // // //             }
// // // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // // //           >
// // // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // // //           </button>
// // // // // // //           {isAdmin && (
// // // // // // //             <button
// // // // // // //               onClick={saveChanges}
// // // // // // //               className="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition"
// // // // // // //             >
// // // // // // //               💾 Save
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <p className="text-gray-600 mb-4 text-lg">
// // // // // // //         Client Type: <span className="font-semibold">{clientType}</span>
// // // // // // //       </p>

// // // // // // //       {/* Data Display */}
// // // // // // //       <div className="bg-white rounded-xl p-8 shadow grid grid-cols-1 md:grid-cols-3 gap-10">
// // // // // // //         {[
// // // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // // //         ].map((item) => (
// // // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // // //             {isAdmin ? (
// // // // // // //               <input
// // // // // // //                 type="number"
// // // // // // //                 value={editValues[clientType][item.key]}
// // // // // // //                 onChange={(e) =>
// // // // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // // // //                 }
// // // // // // //                 className="mb-2 p-3 border rounded w-24 text-center text-lg"
// // // // // // //                 min={0}
// // // // // // //                 max={100}
// // // // // // //               />
// // // // // // //             ) : view === "circle" ? (
// // // // // // //               <div className="w-40 h-40 mb-4">
// // // // // // //                 <CircularProgressbar
// // // // // // //                   value={animatedValues[clientType][item.key]}
// // // // // // //                   text={`${animatedValues[clientType][item.key]}%`}
// // // // // // //                   styles={buildStyles({
// // // // // // //                     pathColor: item.color,
// // // // // // //                     textColor: "#111827",
// // // // // // //                     trailColor: "#e5e7eb",
// // // // // // //                     textSize: "16px",
// // // // // // //                     pathTransition: "stroke-dashoffset 0.5s ease-out",
// // // // // // //                   })}
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //             ) : (
// // // // // // //               <div className="w-full">
// // // // // // //                 <div className="mb-2 text-base font-medium">{item.label}</div>
// // // // // // //                 <div className="w-full bg-gray-200 rounded-full h-8">
// // // // // // //                   <div
// // // // // // //                     className="h-8 rounded-full transition-all duration-700 ease-out"
// // // // // // //                     style={{
// // // // // // //                       width: `${currentData[item.key]}%`,
// // // // // // //                       backgroundColor: item.color,
// // // // // // //                     }}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //                 <p className="mt-2 text-base font-semibold text-gray-800 text-center">
// // // // // // //                   {currentData[item.key]}%
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //             {view === "circle" && !isAdmin && (
// // // // // // //               <p className="text-base font-medium mt-3">{item.label}</p>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // import { useState, useEffect } from "react";
// // // // // // import { toast } from "react-toastify";
// // // // // // import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // export default function AvgProgressClients() {
// // // // // //   const initialData = {
// // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // //   };

// // // // // //   const [clientsData, setClientsData] = useState(initialData);
// // // // // //   const [clientType, setClientType] = useState("All");
// // // // // //   const [view, setView] = useState("circle");
// // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // //   const [editValues, setEditValues] = useState(initialData);

// // // // // //   const currentData = isAdmin ? editValues[clientType] : clientsData[clientType];

// // // // // //   useEffect(() => {
// // // // // //     toast.info(`${clientType} client data loaded!`, {
// // // // // //       position: "top-right",
// // // // // //       autoClose: 1500,
// // // // // //     });
// // // // // //   }, [clientType]);

// // // // // //   const requestPassword = () => {
// // // // // //     const entered = prompt("Enter admin password:");
// // // // // //     if (entered === "2821") {
// // // // // //       setIsAdmin(true);
// // // // // //       setEditValues(clientsData);
// // // // // //       toast.success("Admin mode enabled");
// // // // // //     } else {
// // // // // //       toast.error("Incorrect password");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleChange = (type, key, value) => {
// // // // // //     setEditValues((prev) => ({
// // // // // //       ...prev,
// // // // // //       [type]: {
// // // // // //         ...prev[type],
// // // // // //         [key]: Number(value),
// // // // // //       },
// // // // // //     }));
// // // // // //   };

// // // // // //   const saveChanges = () => {
// // // // // //     setClientsData(editValues);
// // // // // //     setIsAdmin(false);
// // // // // //     toast.success("Progress data updated!");
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 rounded-xl shadow">
// // // // // //       {/* Header */}
// // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // //         <h2 className="text-3xl font-bold flex items-center gap-3">
// // // // // //           Average Progress
// // // // // //           {!isAdmin && (
// // // // // //             <button
// // // // // //               onClick={requestPassword}
// // // // // //               className="px-3 py-1 bg-red-500 text-white rounded text-sm"
// // // // // //             >
// // // // // //               🔒 Unlock
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </h2>
// // // // // //         <div className="space-x-2 flex items-center">
// // // // // //           <select
// // // // // //             value={clientType}
// // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // //             className="p-2 border rounded text-sm"
// // // // // //           >
// // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // //               <option key={type} value={type}>
// // // // // //                 {type}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //           <button
// // // // // //             onClick={() => setView((prev) => (prev === "circle" ? "bar" : "circle"))}
// // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // //           >
// // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // //           </button>
// // // // // //           {isAdmin && (
// // // // // //             <button
// // // // // //               onClick={saveChanges}
// // // // // //               className="px-3 py-1 bg-green-600 text-white rounded text-sm"
// // // // // //             >
// // // // // //               💾 Save
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <p className="text-gray-600 mb-4">
// // // // // //         Client Type: <span className="font-medium">{clientType}</span>
// // // // // //       </p>

// // // // // //       {/* Data Display */}
// // // // // //       <div className="bg-white rounded-xl p-8 shadow grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // //         {[
// // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // //         ].map((item) => (
// // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // //             {isAdmin ? (
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={editValues[clientType][item.key]}
// // // // // //                 onChange={(e) => handleChange(clientType, item.key, e.target.value)}
// // // // // //                 className="mb-4 p-2 border rounded w-24 text-center text-lg"
// // // // // //                 min={0}
// // // // // //                 max={100}
// // // // // //               />
// // // // // //             ) : view === "circle" ? (
// // // // // //               <div className="w-40 h-40 mb-4"> {/* Bigger circle */}
// // // // // //                 <CircularProgressbar
// // // // // //                   value={currentData[item.key]}
// // // // // //                   text={`${currentData[item.key]}%`}
// // // // // //                   styles={buildStyles({
// // // // // //                     pathColor: item.color,
// // // // // //                     textColor: "#111827",
// // // // // //                     trailColor: "#e5e7eb",
// // // // // //                     textSize: "16px",
// // // // // //                     strokeLinecap: "round",
// // // // // //                   })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="w-full">
// // // // // //                 <div className="mb-2 text-lg font-medium">{item.label}</div>
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-8"> {/* Thicker bar */}
// // // // // //                   <div
// // // // // //                     className="h-8 rounded-full transition-all duration-500"
// // // // // //                     style={{
// // // // // //                       width: `${currentData[item.key]}%`,
// // // // // //                       backgroundColor: item.color,
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <p className="mt-2 text-lg text-gray-700 text-center">
// // // // // //                   {currentData[item.key]}%
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {view === "circle" && !isAdmin && (
// // // // // //               <p className="text-lg font-medium mt-2">{item.label}</p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }





// // // // // // import { useState, useEffect } from "react";
// // // // // // import { toast } from "react-toastify";
// // // // // // import {
// // // // // //   CircularProgressbar,
// // // // // //   buildStyles,
// // // // // // } from "react-circular-progressbar";
// // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // export default function AvgProgressClients() {
// // // // // //   const baseData = {
// // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // //   };

// // // // // //   const [clientsData, setClientsData] = useState(baseData);
// // // // // //   const [clientType, setClientType] = useState("All");
// // // // // //   const [view, setView] = useState("circle");
// // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // //   const [editValues, setEditValues] = useState(baseData);
// // // // // //   const [displayData, setDisplayData] = useState(baseData);

// // // // // //   // Animate count up/down when values change
// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setClientsData((prev) => {
// // // // // //         const newData = {};
// // // // // //         for (let type in prev) {
// // // // // //           newData[type] = {};
// // // // // //           for (let key in prev[type]) {
// // // // // //             let change = (Math.random() - 0.5) * 6; // random -3 to +3
// // // // // //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// // // // // //             newData[type][key] = Math.round(updated);
// // // // // //           }
// // // // // //         }
// // // // // //         return newData;
// // // // // //       });
// // // // // //     }, 3000);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   // Smooth number interpolation
// // // // // //   useEffect(() => {
// // // // // //     const anim = setInterval(() => {
// // // // // //       setDisplayData((prev) => {
// // // // // //         const next = {};
// // // // // //         for (let type in prev) {
// // // // // //           next[type] = {};
// // // // // //           for (let key in prev[type]) {
// // // // // //             const current = prev[type][key];
// // // // // //             const target = clientsData[type][key];
// // // // // //             const diff = target - current;
// // // // // //             next[type][key] =
// // // // // //               Math.abs(diff) < 1
// // // // // //                 ? target
// // // // // //                 : Math.round(current + diff * 0.2);
// // // // // //           }
// // // // // //         }
// // // // // //         return next;
// // // // // //       });
// // // // // //     }, 50);
// // // // // //     return () => clearInterval(anim);
// // // // // //   }, [clientsData]);

// // // // // //   const requestPassword = () => {
// // // // // //     const entered = prompt("Enter admin password:");
// // // // // //     if (entered === "2821") {
// // // // // //       setIsAdmin(true);
// // // // // //       setEditValues(clientsData);
// // // // // //       toast.success("Admin mode enabled");
// // // // // //     } else {
// // // // // //       toast.error("Incorrect password");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleChange = (type, key, value) => {
// // // // // //     setEditValues((prev) => ({
// // // // // //       ...prev,
// // // // // //       [type]: { ...prev[type], [key]: Number(value) },
// // // // // //     }));
// // // // // //   };

// // // // // //   const saveChanges = () => {
// // // // // //     setClientsData(editValues);
// // // // // //     setIsAdmin(false);
// // // // // //     toast.success("Progress data updated!");
// // // // // //   };

// // // // // //   const currentData = isAdmin
// // // // // //     ? editValues[clientType]
// // // // // //     : displayData[clientType];

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 rounded-xl shadow">
// // // // // //       {/* Header */}
// // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // //         <h2 className="text-2xl font-bold flex items-center gap-3">
// // // // // //           Average Progress
// // // // // //           {!isAdmin && (
// // // // // //             <button
// // // // // //               onClick={requestPassword}
// // // // // //               className="px-3 py-1 bg-red-500 text-white rounded text-sm"
// // // // // //             >
// // // // // //               🔒 Unlock
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </h2>
// // // // // //         <div className="space-x-2 flex items-center">
// // // // // //           <select
// // // // // //             value={clientType}
// // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // //             className="p-2 border rounded text-sm"
// // // // // //           >
// // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // //               <option key={type} value={type}>
// // // // // //                 {type}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //           <button
// // // // // //             onClick={() =>
// // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // //             }
// // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // //           >
// // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // //           </button>
// // // // // //           {isAdmin && (
// // // // // //             <button
// // // // // //               onClick={saveChanges}
// // // // // //               className="px-3 py-1 bg-green-600 text-white rounded text-sm"
// // // // // //             >
// // // // // //               💾 Save
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Progress Display */}
// // // // // //       <div className="bg-white rounded-xl p-6 shadow grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //         {[
// // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // //         ].map((item) => (
// // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // //             {isAdmin ? (
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={editValues[clientType][item.key]}
// // // // // //                 onChange={(e) =>
// // // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // // //                 }
// // // // // //                 className="mb-2 p-2 border rounded w-20 text-center"
// // // // // //                 min={0}
// // // // // //                 max={100}
// // // // // //               />
// // // // // //             ) : view === "circle" ? (
// // // // // //               <div className="w-32 h-32 mb-2 animate-pulse">
// // // // // //                 <CircularProgressbar
// // // // // //                   value={currentData[item.key]}
// // // // // //                   text={`${currentData[item.key]}%`}
// // // // // //                   styles={buildStyles({
// // // // // //                     pathColor: item.color,
// // // // // //                     textColor: "#111827",
// // // // // //                     trailColor: "#e5e7eb",
// // // // // //                   })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="w-full">
// // // // // //                 <div className="mb-1 text-sm font-medium">{item.label}</div>
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden relative">
// // // // // //                   <div
// // // // // //                     className="h-6 rounded-full transition-all duration-700 ease-in-out shimmer"
// // // // // //                     style={{
// // // // // //                       width: `${currentData[item.key]}%`,
// // // // // //                       backgroundColor: item.color,
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <p className="mt-1 text-sm text-gray-700 text-center">
// // // // // //                   {currentData[item.key]}%
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {view === "circle" && !isAdmin && (
// // // // // //               <p className="text-sm font-medium mt-2">{item.label}</p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <style>{`
// // // // // //         .shimmer {
// // // // // //           background-image: linear-gradient(
// // // // // //             90deg,
// // // // // //             rgba(255, 255, 255, 0) 0%,
// // // // // //             rgba(255, 255, 255, 0.4) 50%,
// // // // // //             rgba(255, 255, 255, 0) 100%
// // // // // //           );
// // // // // //           background-size: 200% 100%;
// // // // // //           animation: shimmer 2s infinite;
// // // // // //         }
// // // // // //         @keyframes shimmer {
// // // // // //           0% { background-position: -200% 0; }
// // // // // //           100% { background-position: 200% 0; }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // import { useState, useEffect } from "react";
// // // // // // import { toast } from "react-toastify";
// // // // // // import {
// // // // // //   CircularProgressbar,
// // // // // //   buildStyles,
// // // // // // } from "react-circular-progressbar";
// // // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // // export default function AvgProgressClients() {
// // // // // //   const baseData = {
// // // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // // //   };

// // // // // //   const [clientsData, setClientsData] = useState(baseData);
// // // // // //   const [clientType, setClientType] = useState("All");
// // // // // //   const [view, setView] = useState("circle");
// // // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // // //   const [editValues, setEditValues] = useState(baseData);
// // // // // //   const [displayData, setDisplayData] = useState(baseData);

// // // // // //   // Random fluctuations
// // // // // //   useEffect(() => {
// // // // // //     const interval = setInterval(() => {
// // // // // //       setClientsData((prev) => {
// // // // // //         const newData = {};
// // // // // //         for (let type in prev) {
// // // // // //           newData[type] = {};
// // // // // //           for (let key in prev[type]) {
// // // // // //             let change = (Math.random() - 0.5) * 6;
// // // // // //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// // // // // //             newData[type][key] = Math.round(updated);
// // // // // //           }
// // // // // //         }
// // // // // //         return newData;
// // // // // //       });
// // // // // //     }, 3000);
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, []);

// // // // // //   // Smooth interpolation
// // // // // //   useEffect(() => {
// // // // // //     const anim = setInterval(() => {
// // // // // //       setDisplayData((prev) => {
// // // // // //         const next = {};
// // // // // //         for (let type in prev) {
// // // // // //           next[type] = {};
// // // // // //           for (let key in prev[type]) {
// // // // // //             const current = prev[type][key];
// // // // // //             const target = clientsData[type][key];
// // // // // //             const diff = target - current;
// // // // // //             next[type][key] =
// // // // // //               Math.abs(diff) < 1
// // // // // //                 ? target
// // // // // //                 : Math.round(current + diff * 0.2);
// // // // // //           }
// // // // // //         }
// // // // // //         return next;
// // // // // //       });
// // // // // //     }, 50);
// // // // // //     return () => clearInterval(anim);
// // // // // //   }, [clientsData]);

// // // // // //   const requestPassword = () => {
// // // // // //     const entered = prompt("Enter admin password:");
// // // // // //     if (entered === "2821") {
// // // // // //       setIsAdmin(true);
// // // // // //       setEditValues(clientsData);
// // // // // //       toast.success("Admin mode enabled");
// // // // // //     } else {
// // // // // //       toast.error("Incorrect password");
// // // // // //     }
// // // // // //   };

// // // // // //   const handleChange = (type, key, value) => {
// // // // // //     setEditValues((prev) => ({
// // // // // //       ...prev,
// // // // // //       [type]: { ...prev[type], [key]: Number(value) },
// // // // // //     }));
// // // // // //   };

// // // // // //   const saveChanges = () => {
// // // // // //     setClientsData(editValues);
// // // // // //     setIsAdmin(false);
// // // // // //     toast.success("Progress data updated!");
// // // // // //   };

// // // // // //   const currentData = isAdmin
// // // // // //     ? editValues[clientType]
// // // // // //     : displayData[clientType];

// // // // // //   // Get pulse speed from percentage
// // // // // //   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-50 rounded-xl shadow">
// // // // // //       {/* Header */}
// // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // //         <h2 className="text-2xl font-bold flex items-center gap-3">
// // // // // //           Average Progress
// // // // // //           {!isAdmin && (
// // // // // //             <button
// // // // // //               onClick={requestPassword}
// // // // // //               className="px-3 py-1 bg-red-500 text-white rounded text-sm"
// // // // // //             >
// // // // // //               🔒 Unlock
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </h2>
// // // // // //         <div className="space-x-2 flex items-center">
// // // // // //           <select
// // // // // //             value={clientType}
// // // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // // //             className="p-2 border rounded text-sm"
// // // // // //           >
// // // // // //             {Object.keys(clientsData).map((type) => (
// // // // // //               <option key={type} value={type}>
// // // // // //                 {type}
// // // // // //               </option>
// // // // // //             ))}
// // // // // //           </select>
// // // // // //           <button
// // // // // //             onClick={() =>
// // // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // // //             }
// // // // // //             className="p-2 bg-gray-100 border rounded text-sm"
// // // // // //           >
// // // // // //             Toggle to {view === "circle" ? "Bar" : "Circle"}
// // // // // //           </button>
// // // // // //           {isAdmin && (
// // // // // //             <button
// // // // // //               onClick={saveChanges}
// // // // // //               className="px-3 py-1 bg-green-600 text-white rounded text-sm"
// // // // // //             >
// // // // // //               💾 Save
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Progress Display */}
// // // // // //       <div className="bg-white rounded-xl p-6 shadow grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //         {[
// // // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // // //           { label: "🍎 Diet Adherence", key: "diet", color: "#f97316" },
// // // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // // //         ].map((item) => (
// // // // // //           <div key={item.key} className="flex flex-col items-center">
// // // // // //             {isAdmin ? (
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={editValues[clientType][item.key]}
// // // // // //                 onChange={(e) =>
// // // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // // //                 }
// // // // // //                 className="mb-2 p-2 border rounded w-20 text-center"
// // // // // //                 min={0}
// // // // // //                 max={100}
// // // // // //               />
// // // // // //             ) : view === "circle" ? (
// // // // // //               <div
// // // // // //                 className="w-32 h-32 mb-2"
// // // // // //                 style={{
// // // // // //                   animation: `pulse ${getPulseSpeed(
// // // // // //                     currentData[item.key]
// // // // // //                   )} ease-in-out infinite`,
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <CircularProgressbar
// // // // // //                   value={currentData[item.key]}
// // // // // //                   text={`${currentData[item.key]}%`}
// // // // // //                   styles={buildStyles({
// // // // // //                     pathColor: item.color,
// // // // // //                     textColor: "#111827",
// // // // // //                     trailColor: "#e5e7eb",
// // // // // //                   })}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="w-full">
// // // // // //                 <div className="mb-1 text-sm font-medium">{item.label}</div>
// // // // // //                 <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden relative">
// // // // // //                   <div
// // // // // //                     className="h-6 rounded-full transition-all duration-700 ease-in-out shimmer"
// // // // // //                     style={{
// // // // // //                       width: `${currentData[item.key]}%`,
// // // // // //                       backgroundColor: item.color,
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <p className="mt-1 text-sm text-gray-700 text-center">
// // // // // //                   {currentData[item.key]}%
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {view === "circle" && !isAdmin && (
// // // // // //               <p className="text-sm font-medium mt-2">{item.label}</p>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Comparison Notes */}
// // // // // //       <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
// // // // // //         <h3 className="font-semibold text-lg mb-3">Performance Insights</h3>
// // // // // //         <ul className="space-y-1 text-sm text-gray-700">
// // // // // //           <li>
// // // // // //             💪 <strong>Premium</strong> clients achieve{" "}
// // // // // //             <span className="text-green-600">
// // // // // //               {clientsData.Premium.workout - clientsData.Basic.workout}%
// // // // // //             </span>{" "}
// // // // // //             higher workout completion than Basic clients.
// // // // // //           </li>
// // // // // //           <li>
// // // // // //             🥗 Diet adherence is{" "}
// // // // // //             <span className="text-green-600">
// // // // // //               {clientsData.Premium.diet - clientsData.Basic.diet}%
// // // // // //             </span>{" "}
// // // // // //             higher for Premium clients.
// // // // // //           </li>
// // // // // //           <li>
// // // // // //             📈 Engagement score is{" "}
// // // // // //             <span className="text-green-600">
// // // // // //               {clientsData.Premium.engagement -
// // // // // //                 clientsData.Basic.engagement}%
// // // // // //             </span>{" "}
// // // // // //             higher in Premium compared to Basic.
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </div>

// // // // // //       <style>{`
// // // // // //         .shimmer {
// // // // // //           background-image: linear-gradient(
// // // // // //             90deg,
// // // // // //             rgba(255, 255, 255, 0) 0%,
// // // // // //             rgba(255, 255, 255, 0.4) 50%,
// // // // // //             rgba(255, 255, 255, 0) 100%
// // // // // //           );
// // // // // //           background-size: 200% 100%;
// // // // // //           animation: shimmer 2s infinite;
// // // // // //         }
// // // // // //         @keyframes shimmer {
// // // // // //           0% { background-position: -200% 0; }
// // // // // //           100% { background-position: 200% 0; }
// // // // // //         }
// // // // // //         @keyframes pulse {
// // // // // //           0%, 100% { transform: scale(1); }
// // // // // //           50% { transform: scale(1.05); }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import { useState, useEffect } from "react";
// // // // // import { toast } from "react-toastify";
// // // // // import {
// // // // //   CircularProgressbar,
// // // // //   buildStyles,
// // // // // } from "react-circular-progressbar";
// // // // // import "react-circular-progressbar/dist/styles.css";

// // // // // export default function AvgProgressClients() {
// // // // //   const baseData = {
// // // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // // //   };

// // // // //   const [clientsData, setClientsData] = useState(baseData);
// // // // //   const [clientType, setClientType] = useState("All");
// // // // //   const [view, setView] = useState("circle");
// // // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // // //   const [editValues, setEditValues] = useState(baseData);
// // // // //   const [displayData, setDisplayData] = useState(baseData);

// // // // //   useEffect(() => {
// // // // //     const interval = setInterval(() => {
// // // // //       setClientsData((prev) => {
// // // // //         const newData = {};
// // // // //         for (let type in prev) {
// // // // //           newData[type] = {};
// // // // //           for (let key in prev[type]) {
// // // // //             let change = (Math.random() - 0.5) * 6;
// // // // //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// // // // //             newData[type][key] = Math.round(updated);
// // // // //           }
// // // // //         }
// // // // //         return newData;
// // // // //       });
// // // // //     }, 3000);
// // // // //     return () => clearInterval(interval);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     const anim = setInterval(() => {
// // // // //       setDisplayData((prev) => {
// // // // //         const next = {};
// // // // //         for (let type in prev) {
// // // // //           next[type] = {};
// // // // //           for (let key in prev[type]) {
// // // // //             const current = prev[type][key];
// // // // //             const target = clientsData[type][key];
// // // // //             const diff = target - current;
// // // // //             next[type][key] =
// // // // //               Math.abs(diff) < 1
// // // // //                 ? target
// // // // //                 : Math.round(current + diff * 0.2);
// // // // //           }
// // // // //         }
// // // // //         return next;
// // // // //       });
// // // // //     }, 50);
// // // // //     return () => clearInterval(anim);
// // // // //   }, [clientsData]);

// // // // //   const requestPassword = () => {
// // // // //     const entered = prompt("Enter admin password:");
// // // // //     if (entered === "2821") {
// // // // //       setIsAdmin(true);
// // // // //       setEditValues(clientsData);
// // // // //       toast.success("Admin mode enabled");
// // // // //     } else {
// // // // //       toast.error("Incorrect password");
// // // // //     }
// // // // //   };

// // // // //   const handleChange = (type, key, value) => {
// // // // //     setEditValues((prev) => ({
// // // // //       ...prev,
// // // // //       [type]: { ...prev[type], [key]: Number(value) },
// // // // //     }));
// // // // //   };

// // // // //   const saveChanges = () => {
// // // // //     setClientsData(editValues);
// // // // //     setIsAdmin(false);
// // // // //     toast.success("Progress data updated!");
// // // // //   };

// // // // //   const currentData = isAdmin
// // // // //     ? editValues[clientType]
// // // // //     : displayData[clientType];

// // // // //   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-50 rounded-xl shadow-md max-w-4xl mx-auto">
// // // // //       {/* Header */}
// // // // //       <div className="flex justify-between items-center mb-5">
// // // // //         <h2 className="text-2xl font-bold flex items-center gap-3">
// // // // //           Average Progress
// // // // //           {!isAdmin && (
// // // // //             <button
// // // // //               onClick={requestPassword}
// // // // //               className="px-3 py-1 bg-red-500 text-white rounded text-sm shadow hover:bg-red-600 transition"
// // // // //               title="Unlock admin mode"
// // // // //             >
// // // // //               🔒 Unlock
// // // // //             </button>
// // // // //           )}
// // // // //         </h2>
// // // // //         <div className="flex items-center gap-3">
// // // // //           <select
// // // // //             value={clientType}
// // // // //             onChange={(e) => setClientType(e.target.value)}
// // // // //             className="p-2 border rounded text-sm shadow-sm hover:shadow-md transition"
// // // // //           >
// // // // //             {Object.keys(clientsData).map((type) => (
// // // // //               <option key={type} value={type}>
// // // // //                 {type}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>
// // // // //           <button
// // // // //             onClick={() =>
// // // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // // //             }
// // // // //             className="p-2 bg-gray-100 border rounded text-sm shadow hover:bg-gray-200 transition"
// // // // //             title="Toggle view"
// // // // //           >
// // // // //             {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
// // // // //           </button>
// // // // //           {isAdmin && (
// // // // //             <button
// // // // //               onClick={saveChanges}
// // // // //               className="px-3 py-1 bg-green-600 text-white rounded text-sm shadow hover:bg-green-700 transition"
// // // // //               title="Save changes"
// // // // //             >
// // // // //               💾 Save
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Progress Display */}
// // // // //       <div className="bg-white rounded-xl p-6 shadow grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //         {[
// // // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#10b981" },
// // // // //           { label: "🥗 Diet Adherence", key: "diet", color: "#f97316" },
// // // // //           { label: "📊 Engagement Score", key: "engagement", color: "#3b82f6" },
// // // // //         ].map((item) => (
// // // // //           <div
// // // // //             key={item.key}
// // // // //             className="flex flex-col items-center group"
// // // // //             title={item.label}
// // // // //           >
// // // // //             {isAdmin ? (
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={editValues[clientType][item.key]}
// // // // //                 onChange={(e) =>
// // // // //                   handleChange(clientType, item.key, e.target.value)
// // // // //                 }
// // // // //                 className="mb-2 p-2 border rounded w-24 text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
// // // // //                 min={0}
// // // // //                 max={100}
// // // // //               />
// // // // //             ) : view === "circle" ? (
// // // // //               <div
// // // // //                 className="w-32 h-32 mb-3 cursor-pointer transform transition-transform duration-300 group-hover:scale-110"
// // // // //                 style={{
// // // // //                   animation: `pulse ${getPulseSpeed(
// // // // //                     currentData[item.key]
// // // // //                   )} ease-in-out infinite`,
// // // // //                 }}
// // // // //               >
// // // // //                 <CircularProgressbar
// // // // //                   value={currentData[item.key]}
// // // // //                   text={`${currentData[item.key]}%`}
// // // // //                   styles={buildStyles({
// // // // //                     pathColor: item.color,
// // // // //                     textColor: "#111827",
// // // // //                     trailColor: "#e5e7eb",
// // // // //                     textSize: "20px",
// // // // //                     pathTransitionDuration: 0.7,
// // // // //                   })}
// // // // //                 />
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="w-full">
// // // // //                 <div className="mb-2 text-sm font-semibold text-gray-700">
// // // // //                   {item.label}
// // // // //                 </div>
// // // // //                 <div className="w-full bg-gray-200 rounded-full h-7 overflow-hidden relative shadow-inner">
// // // // //                   <div
// // // // //                     className="h-7 rounded-full shimmer transition-all duration-1000 ease-in-out transform origin-left"
// // // // //                     style={{
// // // // //                       width: `${currentData[item.key]}%`,
// // // // //                       backgroundColor: item.color,
// // // // //                       boxShadow: `0 0 12px ${item.color}`,
// // // // //                       animation: `bounce 2s ease-in-out infinite`,
// // // // //                     }}
// // // // //                   />
// // // // //                 </div>
// // // // //                 <p className="mt-1 text-center text-sm font-semibold text-gray-800 select-none">
// // // // //                   {currentData[item.key]}%
// // // // //                 </p>
// // // // //               </div>
// // // // //             )}
// // // // //             {view === "circle" && !isAdmin && (
// // // // //               <p className="text-sm font-semibold mt-1 text-gray-700 select-none">
// // // // //                 {item.label}
// // // // //               </p>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Comparison Notes */}
// // // // //       <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
// // // // //         <h3 className="font-semibold text-xl mb-4 text-gray-900 flex items-center gap-2">
// // // // //           📈 Performance Insights
// // // // //         </h3>
// // // // //         <ul className="space-y-3 text-gray-700 text-base">
// // // // //           <li className="flex items-center gap-3">
// // // // //             <span className="text-green-600 text-2xl">💪</span>
// // // // //             <span>
// // // // //               <strong>Premium</strong> clients achieve{" "}
// // // // //               <span className="text-green-600 font-semibold">
// // // // //                 {clientsData.Premium.workout - clientsData.Basic.workout}%
// // // // //               </span>{" "}
// // // // //               higher workout completion than Basic clients.
// // // // //             </span>
// // // // //           </li>
// // // // //           <li className="flex items-center gap-3">
// // // // //             <span className="text-green-600 text-2xl">🥗</span>
// // // // //             <span>
// // // // //               Diet adherence is{" "}
// // // // //               <span className="text-green-600 font-semibold">
// // // // //                 {clientsData.Premium.diet - clientsData.Basic.diet}%
// // // // //               </span>{" "}
// // // // //               higher for Premium clients.
// // // // //             </span>
// // // // //           </li>
// // // // //           <li className="flex items-center gap-3">
// // // // //             <span className="text-green-600 text-2xl">📊</span>
// // // // //             <span>
// // // // //               Engagement score is{" "}
// // // // //               <span className="text-green-600 font-semibold">
// // // // //                 {clientsData.Premium.engagement - clientsData.Basic.engagement}%
// // // // //               </span>{" "}
// // // // //               higher in Premium compared to Basic.
// // // // //             </span>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </div>

// // // // //       <style>{`
// // // // //         .shimmer {
// // // // //           background-image: linear-gradient(
// // // // //             90deg,
// // // // //             rgba(255, 255, 255, 0) 0%,
// // // // //             rgba(255, 255, 255, 0.4) 50%,
// // // // //             rgba(255, 255, 255, 0) 100%
// // // // //           );
// // // // //           background-size: 200% 100%;
// // // // //           animation: shimmer 2s infinite;
// // // // //         }
// // // // //         @keyframes shimmer {
// // // // //           0% { background-position: -200% 0; }
// // // // //           100% { background-position: 200% 0; }
// // // // //         }
// // // // //         @keyframes pulse {
// // // // //           0%, 100% { transform: scale(1); }
// // // // //           50% { transform: scale(1.05); }
// // // // //         }
// // // // //         @keyframes bounce {
// // // // //           0%, 100% { transform: translateX(0); }
// // // // //           50% { transform: translateX(5px); }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import { useState, useEffect } from "react";
// // // // import { toast } from "react-toastify";
// // // // import {
// // // //   CircularProgressbar,
// // // //   buildStyles,
// // // // } from "react-circular-progressbar";
// // // // import "react-circular-progressbar/dist/styles.css";

// // // // export default function AvgProgressClients() {
// // // //   const baseData = {
// // // //     All: { workout: 84, diet: 78, engagement: 82 },
// // // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // // //   };

// // // //   const [clientsData, setClientsData] = useState(baseData);
// // // //   const [clientType, setClientType] = useState("All");
// // // //   const [view, setView] = useState("circle");
// // // //   const [isAdmin, setIsAdmin] = useState(false);
// // // //   const [editValues, setEditValues] = useState(baseData);
// // // //   const [displayData, setDisplayData] = useState(baseData);

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setClientsData((prev) => {
// // // //         const newData = {};
// // // //         for (let type in prev) {
// // // //           newData[type] = {};
// // // //           for (let key in prev[type]) {
// // // //             let change = (Math.random() - 0.5) * 6;
// // // //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// // // //             newData[type][key] = Math.round(updated);
// // // //           }
// // // //         }
// // // //         return newData;
// // // //       });
// // // //     }, 3000);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const anim = setInterval(() => {
// // // //       setDisplayData((prev) => {
// // // //         const next = {};
// // // //         for (let type in prev) {
// // // //           next[type] = {};
// // // //           for (let key in prev[type]) {
// // // //             const current = prev[type][key];
// // // //             const target = clientsData[type][key];
// // // //             const diff = target - current;
// // // //             next[type][key] =
// // // //               Math.abs(diff) < 1
// // // //                 ? target
// // // //                 : Math.round(current + diff * 0.2);
// // // //           }
// // // //         }
// // // //         return next;
// // // //       });
// // // //     }, 50);
// // // //     return () => clearInterval(anim);
// // // //   }, [clientsData]);

// // // //   const requestPassword = () => {
// // // //     const entered = prompt("Enter admin password:");
// // // //     if (entered === "2821") {
// // // //       setIsAdmin(true);
// // // //       setEditValues(clientsData);
// // // //       toast.success("Admin mode enabled");
// // // //     } else {
// // // //       toast.error("Incorrect password");
// // // //     }
// // // //   };

// // // //   const handleChange = (type, key, value) => {
// // // //     setEditValues((prev) => ({
// // // //       ...prev,
// // // //       [type]: { ...prev[type], [key]: Number(value) },
// // // //     }));
// // // //   };

// // // //   const saveChanges = () => {
// // // //     setClientsData(editValues);
// // // //     setIsAdmin(false);
// // // //     toast.success("Progress data updated!");
// // // //   };

// // // //   const currentData = isAdmin
// // // //     ? editValues[clientType]
// // // //     : displayData[clientType];

// // // //   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

// // // //   return (
// // // //     <div
// // // //       className="p-6 rounded-xl shadow-md max-w-4xl mx-auto"
// // // //       style={{
// // // //         background:
// // // //           "radial-gradient(circle at top left, #d9f0db, #a8d5a3, #70b86b)",
// // // //         color: "#1e3a1e",
// // // //         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // // //       }}
// // // //     >
// // // //       {/* Header */}
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
// // // //           Average Progress
// // // //           {!isAdmin && (
// // // //             <button
// // // //               onClick={requestPassword}
// // // //               className="px-3 py-1 bg-red-600 text-white rounded-md text-sm shadow-lg hover:bg-red-700 transition"
// // // //               title="Unlock admin mode"
// // // //             >
// // // //               🔒 Unlock
// // // //             </button>
// // // //           )}
// // // //         </h2>

// // // //         <div className="flex items-center gap-4">
// // // //           <select
// // // //             value={clientType}
// // // //             onChange={(e) => setClientType(e.target.value)}
// // // //             className="p-2 border border-green-600 rounded-md text-sm shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-600"
// // // //           >
// // // //             {Object.keys(clientsData).map((type) => (
// // // //               <option key={type} value={type}>
// // // //                 {type}
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //           <button
// // // //             onClick={() =>
// // // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // // //             }
// // // //             className="p-2 bg-green-100 border border-green-600 rounded-md text-sm shadow hover:bg-green-200 transition"
// // // //             title="Toggle view"
// // // //           >
// // // //             {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
// // // //           </button>
// // // //           {isAdmin && (
// // // //             <button
// // // //               onClick={saveChanges}
// // // //               className="px-3 py-1 bg-green-700 text-white rounded-md text-sm shadow hover:bg-green-800 transition"
// // // //               title="Save changes"
// // // //             >
// // // //               💾 Save
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Progress Display */}
// // // //       <div className="bg-white rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-10">
// // // //         {[
// // // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
// // // //           { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
// // // //           { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
// // // //         ].map((item) => (
// // // //           <div
// // // //             key={item.key}
// // // //             className="flex flex-col items-center group"
// // // //             title={item.label}
// // // //           >
// // // //             {isAdmin ? (
// // // //               <input
// // // //                 type="number"
// // // //                 value={editValues[clientType][item.key]}
// // // //                 onChange={(e) =>
// // // //                   handleChange(clientType, item.key, e.target.value)
// // // //                 }
// // // //                 className="mb-3 p-2 border border-green-600 rounded-md w-28 text-center text-lg font-mono focus:outline-none focus:ring-2 focus:ring-green-600 transition"
// // // //                 min={0}
// // // //                 max={100}
// // // //               />
// // // //             ) : view === "circle" ? (
// // // //               <div
// // // //                 className="w-36 h-36 mb-4 cursor-pointer transform transition-transform duration-300 group-hover:scale-110"
// // // //                 style={{
// // // //                   animation: `pulse ${getPulseSpeed(
// // // //                     currentData[item.key]
// // // //                   )} ease-in-out infinite`,
// // // //                 }}
// // // //               >
// // // //                 <CircularProgressbar
// // // //                   value={currentData[item.key]}
// // // //                   text={`${currentData[item.key]}%`}
// // // //                   styles={buildStyles({
// // // //                     pathColor: item.color,
// // // //                     textColor: "#14532d",
// // // //                     trailColor: "#d1fae5",
// // // //                     textSize: "22px",
// // // //                     pathTransitionDuration: 0.7,
// // // //                   })}
// // // //                 />
// // // //               </div>
// // // //             ) : (
// // // //               <div className="w-full">
// // // //                 <div className="mb-2 text-sm font-semibold text-green-900">
// // // //                   {item.label}
// // // //                 </div>
// // // //                 <div className="w-full bg-green-200 rounded-full h-8 overflow-hidden relative shadow-inner">
// // // //                   <div
// // // //                     className="h-8 rounded-full shimmer transition-all duration-1000 ease-in-out transform origin-left"
// // // //                     style={{
// // // //                       width: `${currentData[item.key]}%`,
// // // //                       backgroundColor: item.color,
// // // //                       boxShadow: `0 0 15px ${item.color}`,
// // // //                       animation: `bounce 2s ease-in-out infinite`,
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //                 <p className="mt-1 text-center text-sm font-semibold text-green-900 select-none">
// // // //                   {currentData[item.key]}%
// // // //                 </p>
// // // //               </div>
// // // //             )}
// // // //             {view === "circle" && !isAdmin && (
// // // //               <p className="text-sm font-semibold mt-2 text-green-800 select-none">
// // // //                 {item.label}
// // // //               </p>
// // // //             )}
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Comparison Notes */}
// // // //       <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
// // // //         <h3 className="font-semibold text-2xl mb-5 text-green-900 flex items-center gap-3">
// // // //           📈 Performance Insights
// // // //         </h3>
// // // //         <ul className="space-y-4 text-green-900 text-base">
// // // //           <li className="flex items-center gap-4">
// // // //             <span className="text-green-700 text-3xl">💪</span>
// // // //             <span>
// // // //               <strong>Premium</strong> clients achieve{" "}
// // // //               <span className="text-green-700 font-bold">
// // // //                 {clientsData.Premium.workout - clientsData.Basic.workout}%
// // // //               </span>{" "}
// // // //               higher workout completion than Basic clients.
// // // //             </span>
// // // //           </li>
// // // //           <li className="flex items-center gap-4">
// // // //             <span className="text-green-700 text-3xl">🥗</span>
// // // //             <span>
// // // //               Diet adherence is{" "}
// // // //               <span className="text-green-700 font-bold">
// // // //                 {clientsData.Premium.diet - clientsData.Basic.diet}%
// // // //               </span>{" "}
// // // //               higher for Premium clients.
// // // //             </span>
// // // //           </li>
// // // //           <li className="flex items-center gap-4">
// // // //             <span className="text-green-700 text-3xl">📊</span>
// // // //             <span>
// // // //               Engagement score is{" "}
// // // //               <span className="text-green-700 font-bold">
// // // //                 {clientsData.Premium.engagement - clientsData.Basic.engagement}%
// // // //               </span>{" "}
// // // //               higher in Premium compared to Basic.
// // // //             </span>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       <style>{`
// // // //         .shimmer {
// // // //           background-image: linear-gradient(
// // // //             90deg,
// // // //             rgba(255, 255, 255, 0) 0%,
// // // //             rgba(255, 255, 255, 0.5) 50%,
// // // //             rgba(255, 255, 255, 0) 100%
// // // //           );
// // // //           background-size: 200% 100%;
// // // //           animation: shimmer 2s infinite;
// // // //         }
// // // //         @keyframes shimmer {
// // // //           0% { background-position: -200% 0; }
// // // //           100% { background-position: 200% 0; }
// // // //         }
// // // //         @keyframes pulse {
// // // //           0%, 100% { transform: scale(1); }
// // // //           50% { transform: scale(1.06); }
// // // //         }
// // // //         @keyframes bounce {
// // // //           0%, 100% { transform: translateX(0); }
// // // //           50% { transform: translateX(6px); }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }



// // // import { useState, useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import Confetti from "react-confetti";
// // // import {
// // //   CircularProgressbar,
// // //   buildStyles,
// // // } from "react-circular-progressbar";
// // // import "react-circular-progressbar/dist/styles.css";

// // // export default function AvgProgressClients() {
// // //   const baseData = {
// // //     All: { workout: 84, diet: 78, engagement: 82 },
// // //     Premium: { workout: 92, diet: 88, engagement: 90 },
// // //     Basic: { workout: 72, diet: 66, engagement: 70 },
// // //   };

// // //   const [clientsData, setClientsData] = useState(baseData);
// // //   const [clientType, setClientType] = useState("All");
// // //   const [view, setView] = useState("circle");
// // //   const [isAdmin, setIsAdmin] = useState(false);
// // //   const [editValues, setEditValues] = useState(baseData);
// // //   const [displayData, setDisplayData] = useState(baseData);
// // //   const [showConfetti, setShowConfetti] = useState(false);
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setClientsData((prev) => {
// // //         const newData = {};
// // //         for (let type in prev) {
// // //           newData[type] = {};
// // //           for (let key in prev[type]) {
// // //             let change = (Math.random() - 0.5) * 6;
// // //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// // //             newData[type][key] = Math.round(updated);
// // //           }
// // //         }
// // //         return newData;
// // //       });
// // //     }, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   useEffect(() => {
// // //     const anim = setInterval(() => {
// // //       setDisplayData((prev) => {
// // //         const next = {};
// // //         for (let type in prev) {
// // //           next[type] = {};
// // //           for (let key in prev[type]) {
// // //             const current = prev[type][key];
// // //             const target = clientsData[type][key];
// // //             const diff = target - current;
// // //             next[type][key] =
// // //               Math.abs(diff) < 1
// // //                 ? target
// // //                 : Math.round(current + diff * 0.2);
// // //           }
// // //         }
// // //         return next;
// // //       });
// // //     }, 50);
// // //     return () => clearInterval(anim);
// // //   }, [clientsData]);

// // //   const requestPassword = () => {
// // //     const entered = prompt("Enter admin password:");
// // //     if (entered === "2821") {
// // //       setIsAdmin(true);
// // //       setEditValues(clientsData);
// // //       toast.success("Admin mode enabled");
// // //     } else {
// // //       toast.error("Incorrect password");
// // //     }
// // //   };

// // //   const handleChange = (type, key, value) => {
// // //     const num = Number(value);
// // //     if (num < 0 || num > 100) return; // validation
// // //     setEditValues((prev) => ({
// // //       ...prev,
// // //       [type]: { ...prev[type], [key]: num },
// // //     }));
// // //   };

// // //   const saveChanges = () => {
// // //     setClientsData(editValues);
// // //     setIsAdmin(false);
// // //     toast.success("Progress data updated!");
// // //     setShowConfetti(true);
// // //     setTimeout(() => setShowConfetti(false), 4000);
// // //   };

// // //   const currentData = isAdmin
// // //     ? editValues[clientType]
// // //     : displayData[clientType];

// // //   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

// // //   return (
// // //     <div
// // //       className={`p-6 rounded-xl shadow-md max-w-4xl mx-auto transition-colors duration-700 ${
// // //         darkMode ? "bg-gray-900 text-green-400" : "bg-gradient-to-tr from-green-100 via-green-200 to-green-300 text-green-900"
// // //       }`}
// // //       style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
// // //     >
// // //       {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

// // //       {/* Dark Mode Toggle */}
// // //       <div className="flex justify-end mb-4">
// // //         <button
// // //           onClick={() => setDarkMode((d) => !d)}
// // //           className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md shadow focus:outline-none"
// // //           title="Toggle dark mode"
// // //         >
// // //           {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
// // //         </button>
// // //       </div>

// // //       {/* Header */}
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
// // //           Average Progress
// // //           {!isAdmin && (
// // //             <motion.button
// // //               onClick={requestPassword}
// // //               className="px-3 py-1 bg-red-600 text-white rounded-md text-sm shadow-lg hover:bg-red-700 transition focus:outline-none"
// // //               title="Unlock admin mode"
// // //               whileHover={{ scale: 1.1 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               animate={{ opacity: [0.8, 1, 0.8] }}
// // //               transition={{ repeat: Infinity, duration: 2 }}
// // //             >
// // //               🔒 Unlock
// // //             </motion.button>
// // //           )}
// // //         </h2>

// // //         <div className="flex items-center gap-4">
// // //           <select
// // //             value={clientType}
// // //             onChange={(e) => setClientType(e.target.value)}
// // //             className={`p-2 border rounded-md text-sm shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 ${
// // //               darkMode ? "border-green-500 focus:ring-green-400 bg-gray-800 text-green-300" : "border-green-600 focus:ring-green-600 bg-white text-green-900"
// // //             }`}
// // //           >
// // //             {Object.keys(clientsData).map((type) => (
// // //               <option key={type} value={type}>
// // //                 {type}
// // //               </option>
// // //             ))}
// // //           </select>
// // //           <button
// // //             onClick={() =>
// // //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// // //             }
// // //             className={`p-2 border rounded-md text-sm shadow transition focus:outline-none ${
// // //               darkMode
// // //                 ? "border-green-500 hover:bg-green-700 bg-green-900 text-green-300"
// // //                 : "border-green-600 hover:bg-green-200 bg-green-100 text-green-900"
// // //             }`}
// // //             title="Toggle view"
// // //           >
// // //             {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
// // //           </button>
// // //           {isAdmin && (
// // //             <motion.button
// // //               onClick={saveChanges}
// // //               className="px-3 py-1 bg-green-700 text-white rounded-md text-sm shadow hover:bg-green-800 transition focus:outline-none"
// // //               title="Save changes"
// // //               whileHover={{ scale: 1.1 }}
// // //               whileTap={{ scale: 0.95 }}
// // //             >
// // //               💾 Save
// // //             </motion.button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Progress Display */}
// // //       <div
// // //         className={`rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-10 ${
// // //           darkMode ? "bg-gray-800" : "bg-white"
// // //         }`}
// // //       >
// // //         {[
// // //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
// // //           { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
// // //           { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
// // //         ].map((item) => (
// // //           <motion.div
// // //             key={item.key}
// // //             className="flex flex-col items-center group relative"
// // //             title={item.label}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5, delay: 0.15 }}
// // //             whileHover={{ scale: 1.07 }}
// // //           >
// // //             {isAdmin ? (
// // //               <>
// // //                 <input
// // //                   type="range"
// // //                   min={0}
// // //                   max={100}
// // //                   value={editValues[clientType][item.key]}
// // //                   onChange={(e) =>
// // //                     handleChange(clientType, item.key, e.target.value)
// // //                   }
// // //                   className={`w-36 accent-[${item.color}]`}
// // //                   title={`Adjust ${item.label}`}
// // //                 />
// // //                 <p
// // //                   className={`mt-3 font-mono text-xl ${
// // //                     darkMode ? "text-green-400" : "text-green-700"
// // //                   }`}
// // //                 >
// // //                   {editValues[clientType][item.key]}%
// // //                 </p>
// // //               </>
// // //             ) : view === "circle" ? (
// // //               <motion.div
// // //                 className="w-36 h-36 mb-4 cursor-pointer"
// // //                 style={{
// // //                   animation: `pulse ${getPulseSpeed(
// // //                     currentData[item.key]
// // //                   )} ease-in-out infinite`,
// // //                 }}
// // //                 whileHover={{ scale: 1.1 }}
// // //                 title={`${item.label}: ${currentData[item.key]}%`}
// // //               >
// // //                 <CircularProgressbar
// // //                   value={currentData[item.key]}
// // //                   text={`${currentData[item.key]}%`}
// // //                   styles={buildStyles({
// // //                     pathColor: item.color,
// // //                     textColor: darkMode ? "#a7f3d0" : "#14532d",
// // //                     trailColor: darkMode ? "#065f46" : "#d1fae5",
// // //                     textSize: "22px",
// // //                     pathTransitionDuration: 0.7,
// // //                   })}
// // //                 />
// // //               </motion.div>
// // //             ) : (
// // //               <div className="w-full">
// // //                 <div
// // //                   className={`mb-2 text-sm font-semibold ${
// // //                     darkMode ? "text-green-400" : "text-green-900"
// // //                   }`}
// // //                 >
// // //                   {item.label}
// // //                 </div>
// // //                 <div
// // //                   className={`w-full rounded-full h-8 overflow-hidden relative shadow-inner ${
// // //                     darkMode ? "bg-green-900" : "bg-green-200"
// // //                   }`}
// // //                 >
// // //                   <motion.div
// // //                     className="h-8 rounded-full shimmer"
// // //                     style={{
// // //                       width: `${currentData[item.key]}%`,
// // //                       backgroundColor: item.color,
// // //                       boxShadow: `0 0 15px ${item.color}`,
// // //                     }}
// // //                     animate={{ width: `${currentData[item.key]}%` }}
// // //                     transition={{ duration: 0.8, ease: "easeInOut" }}
// // //                     title={`${item.label}: ${currentData[item.key]}%`}
// // //                   />
// // //                 </div>
// // //                 <p
// // //                   className={`mt-1 text-center text-sm font-semibold select-none ${
// // //                     darkMode ? "text-green-400" : "text-green-900"
// // //                   }`}
// // //                 >
// // //                   {currentData[item.key]}%
// // //                 </p>
// // //               </div>
// // //             )}
// // //             {view === "circle" && !isAdmin && (
// // //               <p
// // //                 className={`text-sm font-semibold mt-2 select-none ${
// // //                   darkMode ? "text-green-400" : "text-green-800"
// // //                 }`}
// // //               >
// // //                 {item.label}
// // //               </p>
// // //             )}
// // //           </motion.div>
// // //         ))}
// // //       </div>

// // //       {/* Comparison Notes */}
// // //       <div
// // //         className={`mt-10 p-6 rounded-lg shadow-lg max-w-3xl mx-auto ${
// // //           darkMode ? "bg-gray-800 text-green-400" : "bg-white text-green-900"
// // //         }`}
// // //       >
// // //         <h3 className="font-semibold text-2xl mb-5 flex items-center gap-3">
// // //           📈 Performance Insights
// // //         </h3>
// // //         <ul className="space-y-4 text-base">
// // //           <li className="flex items-center gap-4">
// // //             <span className="text-green-700 text-3xl">💪</span>
// // //             <span>
// // //               <strong>Premium</strong> clients achieve{" "}
// // //               <span className="font-bold">
// // //                 {clientsData.Premium.workout - clientsData.Basic.workout}%
// // //               </span>{" "}
// // //               higher workout completion than Basic clients.
// // //             </span>
// // //           </li>
// // //           <li className="flex items-center gap-4">
// // //             <span className="text-green-700 text-3xl">🥗</span>
// // //             <span>
// // //               Diet adherence is{" "}
// // //               <span className="font-bold">
// // //                 {clientsData.Premium.diet - clientsData.Basic.diet}%
// // //               </span>{" "}
// // //               higher for Premium clients.
// // //             </span>
// // //           </li>
// // //           <li className="flex items-center gap-4">
// // //             <span className="text-green-700 text-3xl">📊</span>
// // //             <span>
// // //               Engagement score is{" "}
// // //               <span className="font-bold">
// // //                 {clientsData.Premium.engagement - clientsData.Basic.engagement}%
// // //               </span>{" "}
// // //               higher in Premium compared to Basic.
// // //             </span>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       <style>{`
// // //         .shimmer {
// // //           background-image: linear-gradient(
// // //             90deg,
// // //             rgba(255, 255, 255, 0) 0%,
// // //             rgba(255, 255, 255, 0.5) 50%,
// // //             rgba(255, 255, 255, 0) 100%
// // //           );
// // //           background-size: 200% 100%;
// // //           animation: shimmer 2s infinite;
// // //         }
// // //         @keyframes shimmer {
// // //           0% { background-position: -200% 0; }
// // //           100% { background-position: 200% 0; }
// // //         }
// // //         @keyframes pulse {
// // //           0%, 100% { transform: scale(1); }
// // //           50% { transform: scale(1.06); }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }


// // import { useState, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Confetti from "react-confetti";
// // import {
// //   CircularProgressbar,
// //   buildStyles,
// // } from "react-circular-progressbar";
// // import "react-circular-progressbar/dist/styles.css";

// // export default function AvgProgressClients() {
// //   const baseData = {
// //     All: { workout: 84, diet: 78, engagement: 82 },
// //     Premium: { workout: 92, diet: 88, engagement: 90 },
// //     Basic: { workout: 72, diet: 66, engagement: 70 },
// //   };

// //   const [clientsData, setClientsData] = useState(baseData);
// //   const [clientType, setClientType] = useState("All");
// //   const [view, setView] = useState("circle");
// //   const [isAdmin, setIsAdmin] = useState(false);
// //   const [editValues, setEditValues] = useState(baseData);
// //   const [displayData, setDisplayData] = useState(baseData);
// //   const [showConfetti, setShowConfetti] = useState(false);
// //   const [darkMode, setDarkMode] = useState(false);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setClientsData((prev) => {
// //         const newData = {};
// //         for (let type in prev) {
// //           newData[type] = {};
// //           for (let key in prev[type]) {
// //             let change = (Math.random() - 0.5) * 6;
// //             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
// //             newData[type][key] = Math.round(updated);
// //           }
// //         }
// //         return newData;
// //       });
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     const anim = setInterval(() => {
// //       setDisplayData((prev) => {
// //         const next = {};
// //         for (let type in prev) {
// //           next[type] = {};
// //           for (let key in prev[type]) {
// //             const current = prev[type][key];
// //             const target = clientsData[type][key];
// //             const diff = target - current;
// //             next[type][key] =
// //               Math.abs(diff) < 1
// //                 ? target
// //                 : Math.round(current + diff * 0.2);
// //           }
// //         }
// //         return next;
// //       });
// //     }, 50);
// //     return () => clearInterval(anim);
// //   }, [clientsData]);

// //   const requestPassword = () => {
// //     const entered = prompt("Enter admin password:");
// //     if (entered === "2821") {
// //       setIsAdmin(true);
// //       setEditValues(clientsData);
// //       toast.success("Admin mode enabled");
// //     } else {
// //       toast.error("Incorrect password");
// //     }
// //   };

// //   const handleChange = (type, key, value) => {
// //     const num = Number(value);
// //     if (num < 0 || num > 100) return; // validation
// //     setEditValues((prev) => ({
// //       ...prev,
// //       [type]: { ...prev[type], [key]: num },
// //     }));
// //   };

// //   const saveChanges = () => {
// //     setClientsData(editValues);
// //     setIsAdmin(false);
// //     toast.success("Progress data updated!");
// //     setShowConfetti(true);
// //     setTimeout(() => setShowConfetti(false), 4000);
// //   };

// //   const currentData = isAdmin
// //     ? editValues[clientType]
// //     : displayData[clientType];

// //   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

// //   return (
// //     <div
// //       className={`p-6 rounded-xl shadow-md max-w-4xl mx-auto transition-colors duration-700 ${
// //         darkMode ? "bg-gray-900 text-green-400" : "bg-gradient-to-tr from-green-100 via-green-200 to-green-300 text-green-900"
// //       }`}
// //       style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
// //     >
// //       {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

// //       {/* Dark Mode Toggle */}
// //       <div className="flex justify-end mb-4">
// //         <button
// //           onClick={() => setDarkMode((d) => !d)}
// //           className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md shadow focus:outline-none"
// //           title="Toggle dark mode"
// //         >
// //           {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
// //         </button>
// //       </div>

// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
// //           Average Progress
// //           {!isAdmin && (
// //             <motion.button
// //               onClick={requestPassword}
// //               className="px-3 py-1 bg-red-600 text-white rounded-md text-sm shadow-lg hover:bg-red-700 transition focus:outline-none"
// //               title="Unlock admin mode"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //               animate={{ opacity: [0.8, 1, 0.8] }}
// //               transition={{ repeat: Infinity, duration: 2 }}
// //             >
// //               🔒 Unlock
// //             </motion.button>
// //           )}
// //         </h2>

// //         <div className="flex items-center gap-4">
// //           <select
// //             value={clientType}
// //             onChange={(e) => setClientType(e.target.value)}
// //             className={`p-2 border rounded-md text-sm shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 ${
// //               darkMode ? "border-green-500 focus:ring-green-400 bg-gray-800 text-green-300" : "border-green-600 focus:ring-green-600 bg-white text-green-900"
// //             }`}
// //           >
// //             {Object.keys(clientsData).map((type) => (
// //               <option key={type} value={type}>
// //                 {type}
// //               </option>
// //             ))}
// //           </select>
// //           <button
// //             onClick={() =>
// //               setView((prev) => (prev === "circle" ? "bar" : "circle"))
// //             }
// //             className={`p-2 border rounded-md text-sm shadow transition focus:outline-none ${
// //               darkMode
// //                 ? "border-green-500 hover:bg-green-700 bg-green-900 text-green-300"
// //                 : "border-green-600 hover:bg-green-200 bg-green-100 text-green-900"
// //             }`}
// //             title="Toggle view"
// //           >
// //             {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
// //           </button>
// //           {isAdmin && (
// //             <motion.button
// //               onClick={saveChanges}
// //               className="px-3 py-1 bg-green-700 text-white rounded-md text-sm shadow hover:bg-green-800 transition focus:outline-none"
// //               title="Save changes"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               💾 Save
// //             </motion.button>
// //           )}
// //         </div>
// //       </div>

// //       {/* Progress Display */}
// //       <div
// //         className={`rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-10 ${
// //           darkMode ? "bg-gray-800" : "bg-white"
// //         }`}
// //       >
// //         {[
// //           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
// //           { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
// //           { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
// //         ].map((item) => (
// //           <motion.div
// //             key={item.key}
// //             className="flex flex-col items-center group relative"
// //             title={item.label}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.15 }}
// //             whileHover={{ scale: 1.07 }}
// //           >
// //             {isAdmin ? (
// //               <>
// //                 <input
// //                   type="range"
// //                   min={0}
// //                   max={100}
// //                   value={editValues[clientType][item.key]}
// //                   onChange={(e) =>
// //                     handleChange(clientType, item.key, e.target.value)
// //                   }
// //                   className={`w-36 accent-[${item.color}]`}
// //                   title={`Adjust ${item.label}`}
// //                 />
// //                 <p
// //                   className={`mt-3 font-mono text-xl ${
// //                     darkMode ? "text-green-400" : "text-green-700"
// //                   }`}
// //                 >
// //                   {editValues[clientType][item.key]}%
// //                 </p>
// //               </>
// //             ) : view === "circle" ? (
// //               <motion.div
// //                 className="w-36 h-36 mb-4 cursor-pointer"
// //                 style={{
// //                   animation: `pulse ${getPulseSpeed(
// //                     currentData[item.key]
// //                   )} ease-in-out infinite`,
// //                 }}
// //                 whileHover={{ scale: 1.1 }}
// //                 title={`${item.label}: ${currentData[item.key]}%`}
// //               >
// //                 <CircularProgressbar
// //                   value={currentData[item.key]}
// //                   text={`${currentData[item.key]}%`}
// //                   styles={buildStyles({
// //                     pathColor: item.color,
// //                     textColor: darkMode ? "#a7f3d0" : "#14532d",
// //                     trailColor: darkMode ? "#065f46" : "#d1fae5",
// //                     textSize: "22px",
// //                     pathTransitionDuration: 0.7,
// //                   })}
// //                 />
// //               </motion.div>
// //             ) : (
// //               <div className="w-full">
// //                 <div
// //                   className={`mb-2 text-sm font-semibold ${
// //                     darkMode ? "text-green-400" : "text-green-900"
// //                   }`}
// //                 >
// //                   {item.label}
// //                 </div>
// //                 <div
// //                   className={`w-full rounded-full h-8 overflow-hidden relative shadow-inner ${
// //                     darkMode ? "bg-green-900" : "bg-green-200"
// //                   }`}
// //                 >
// //                   <motion.div
// //                     className="h-8 rounded-full shimmer"
// //                     style={{
// //                       width: `${currentData[item.key]}%`,
// //                       backgroundColor: item.color,
// //                       boxShadow: `0 0 15px ${item.color}`,
// //                     }}
// //                     animate={{ width: `${currentData[item.key]}%` }}
// //                     transition={{ duration: 0.8, ease: "easeInOut" }}
// //                     title={`${item.label}: ${currentData[item.key]}%`}
// //                   />
// //                 </div>
// //                 <p
// //                   className={`mt-1 text-center text-sm font-semibold select-none ${
// //                     darkMode ? "text-green-400" : "text-green-900"
// //                   }`}
// //                 >
// //                   {currentData[item.key]}%
// //                 </p>
// //               </div>
// //             )}
// //             {view === "circle" && !isAdmin && (
// //               <p
// //                 className={`text-sm font-semibold mt-2 select-none ${
// //                   darkMode ? "text-green-400" : "text-green-800"
// //                 }`}
// //               >
// //                 {item.label}
// //               </p>
// //             )}
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* Comparison Notes */}
// //       <div
// //         className={`mt-10 p-6 rounded-lg shadow-lg max-w-3xl mx-auto ${
// //           darkMode ? "bg-gray-800 text-green-400" : "bg-white text-green-900"
// //         }`}
// //       >
// //         <h3 className="font-semibold text-2xl mb-5 flex items-center gap-3">
// //           📈 Performance Insights
// //         </h3>
// //         <ul className="space-y-4 text-base">
// //           <li className="flex items-center gap-4">
// //             <span className="text-green-700 text-3xl">💪</span>
// //             <span>
// //               <strong>Premium</strong> clients achieve{" "}
// //               <span className="font-bold">
// //                 {clientsData.Premium.workout - clientsData.Basic.workout}%
// //               </span>{" "}
// //               higher workout completion than Basic clients.
// //             </span>
// //           </li>
// //           <li className="flex items-center gap-4">
// //             <span className="text-green-700 text-3xl">🥗</span>
// //             <span>
// //               Diet adherence is{" "}
// //               <span className="font-bold">
// //                 {clientsData.Premium.diet - clientsData.Basic.diet}%
// //               </span>{" "}
// //               higher for Premium clients.
// //             </span>
// //           </li>
// //           <li className="flex items-center gap-4">
// //             <span className="text-green-700 text-3xl">📊</span>
// //             <span>
// //               Engagement score is{" "}
// //               <span className="font-bold">
// //                 {clientsData.Premium.engagement - clientsData.Basic.engagement}%
// //               </span>{" "}
// //               higher in Premium compared to Basic.
// //             </span>
// //           </li>
// //         </ul>
// //       </div>

// //       <style>{`
// //         .shimmer {
// //           background-image: linear-gradient(
// //             90deg,
// //             rgba(255, 255, 255, 0) 0%,
// //             rgba(255, 255, 255, 0.5) 50%,
// //             rgba(255, 255, 255, 0) 100%
// //           );
// //           background-size: 200% 100%;
// //           animation: shimmer 2s infinite;
// //         }
// //         @keyframes shimmer {
// //           0% { background-position: -200% 0; }
// //           100% { background-position: 200% 0; }
// //         }
// //         @keyframes pulse {
// //           0%, 100% { transform: scale(1); }
// //           50% { transform: scale(1.06); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }





// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import Confetti from "react-confetti";
// import {
//   CircularProgressbar,
//   buildStyles,
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// export default function AvgProgressClients() {
//   const baseData = {
//     All: { workout: 84, diet: 78, engagement: 82 },
//     Premium: { workout: 92, diet: 88, engagement: 90 },
//     Basic: { workout: 72, diet: 66, engagement: 70 },
//   };

//   const [clientsData, setClientsData] = useState(baseData);
//   const [clientType, setClientType] = useState("All");
//   const [view, setView] = useState("circle");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [editValues, setEditValues] = useState(baseData);
//   const [displayData, setDisplayData] = useState(baseData);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setClientsData((prev) => {
//         const newData = {};
//         for (let type in prev) {
//           newData[type] = {};
//           for (let key in prev[type]) {
//             let change = (Math.random() - 0.5) * 6;
//             let updated = Math.min(100, Math.max(0, prev[type][key] + change));
//             newData[type][key] = Math.round(updated);
//           }
//         }
//         return newData;
//       });
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const anim = setInterval(() => {
//       setDisplayData((prev) => {
//         const next = {};
//         for (let type in prev) {
//           next[type] = {};
//           for (let key in prev[type]) {
//             const current = prev[type][key];
//             const target = clientsData[type][key];
//             const diff = target - current;
//             next[type][key] =
//               Math.abs(diff) < 1
//                 ? target
//                 : Math.round(current + diff * 0.2);
//           }
//         }
//         return next;
//       });
//     }, 50);
//     return () => clearInterval(anim);
//   }, [clientsData]);

//   const requestPassword = () => {
//     const entered = prompt("Enter admin password:");
//     if (entered === "2821") {
//       setIsAdmin(true);
//       setEditValues(clientsData);
//       toast.success("Admin mode enabled");
//     } else {
//       toast.error("Incorrect password");
//     }
//   };

//   const handleChange = (type, key, value) => {
//     const num = Number(value);
//     if (num < 0 || num > 100) return;
//     setEditValues((prev) => ({
//       ...prev,
//       [type]: { ...prev[type], [key]: num },
//     }));
//   };

//   const saveChanges = () => {
//     setClientsData(editValues);
//     setIsAdmin(false);
//     toast.success("Progress data updated!");
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 4000);
//   };

//   const currentData = isAdmin
//     ? editValues[clientType]
//     : displayData[clientType];

//   const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

//   return (
//     <div
//       className={`p-4 md:p-6 rounded-xl shadow-md max-w-4xl mx-auto transition-colors duration-700 ${
//         darkMode
//           ? "bg-gray-900 text-green-400"
//           : "bg-[radial-gradient(circle_at_top,_#16a34a,_#4ade80,_#a7f3d0)] text-green-900"
//       } min-h-screen`}
//       style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
//     >
//       {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

//       {/* Dark Mode Toggle */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => setDarkMode((d) => !d)}
//           className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md shadow focus:outline-none text-xs md:text-sm"
//           title="Toggle dark mode"
//         >
//           {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>

//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3 md:gap-0">
//         <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
//           Average Progress
//           {!isAdmin && (
//             <motion.button
//               onClick={requestPassword}
//               className="px-3 py-1 bg-red-600 text-white rounded-md text-xs md:text-sm shadow-lg hover:bg-red-700 transition focus:outline-none"
//               title="Unlock admin mode"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               animate={{ opacity: [0.8, 1, 0.8] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               🔒 Unlock
//             </motion.button>
//           )}
//         </h2>

//         <div className="flex flex-wrap gap-2 md:gap-4 items-center">
//           <select
//             value={clientType}
//             onChange={(e) => setClientType(e.target.value)}
//             className={`p-2 border rounded-md text-xs md:text-sm shadow-md hover:shadow-lg transition focus:outline-none ${
//               darkMode
//                 ? "border-green-500 focus:ring-green-400 bg-gray-800 text-green-300"
//                 : "border-green-600 focus:ring-green-600 bg-white text-green-900"
//             }`}
//           >
//             {Object.keys(clientsData).map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//           <button
//             onClick={() =>
//               setView((prev) => (prev === "circle" ? "bar" : "circle"))
//             }
//             className={`p-2 border rounded-md text-xs md:text-sm shadow transition focus:outline-none ${
//               darkMode
//                 ? "border-green-500 hover:bg-green-700 bg-green-900 text-green-300"
//                 : "border-green-600 hover:bg-green-200 bg-green-100 text-green-900"
//             }`}
//             title="Toggle view"
//           >
//             {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
//           </button>
//           {isAdmin && (
//             <motion.button
//               onClick={saveChanges}
//               className="px-3 py-1 bg-green-700 text-white rounded-md text-xs md:text-sm shadow hover:bg-green-800 transition focus:outline-none"
//               title="Save changes"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               💾 Save
//             </motion.button>
//           )}
//         </div>
//       </div>

//       {/* Progress Display */}
//       <div
//         className={`rounded-xl p-4 md:p-6 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 ${
//           darkMode ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         {[
//           { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
//           { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
//           { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
//         ].map((item) => (
//           <motion.div
//             key={item.key}
//             className="flex flex-col items-center group relative"
//             title={item.label}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.15 }}
//             whileHover={{ scale: 1.07 }}
//           >
//             {isAdmin ? (
//               <>
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={editValues[clientType][item.key]}
//                   onChange={(e) =>
//                     handleChange(clientType, item.key, e.target.value)
//                   }
//                   className={`w-full md:w-36 accent-[${item.color}]`}
//                   title={`Adjust ${item.label}`}
//                 />
//                 <p
//                   className={`mt-3 font-mono text-lg md:text-xl ${
//                     darkMode ? "text-green-400" : "text-green-700"
//                   }`}
//                 >
//                   {editValues[clientType][item.key]}%
//                 </p>
//               </>
//             ) : view === "circle" ? (
//               <motion.div
//                 className="w-36 h-36 mb-4 cursor-pointer"
//                 style={{
//                   animation: `pulse ${getPulseSpeed(
//                     currentData[item.key]
//                   )} ease-in-out infinite`,
//                 }}
//                 whileHover={{ scale: 1.1 }}
//                 title={`${item.label}: ${currentData[item.key]}%`}
//               >
//                 <CircularProgressbar
//                   value={currentData[item.key]}
//                   text={`${currentData[item.key]}%`}
//                   styles={buildStyles({
//                     pathColor: item.color,
//                     textColor: darkMode ? "#a7f3d0" : "#14532d",
//                     trailColor: darkMode ? "#065f46" : "#d1fae5",
//                     textSize: "20px",
//                     pathTransitionDuration: 0.7,
//                   })}
//                 />
//               </motion.div>
//             ) : (
//               <div className="w-full">
//                 <div
//                   className={`mb-2 text-sm font-semibold ${
//                     darkMode ? "text-green-400" : "text-green-900"
//                   }`}
//                 >
//                   {item.label}
//                 </div>
//                 <div
//                   className={`w-full rounded-full h-6 md:h-8 overflow-hidden relative shadow-inner ${
//                     darkMode ? "bg-green-900" : "bg-green-200"
//                   }`}
//                 >
//                   <motion.div
//                     className="h-6 md:h-8 rounded-full shimmer"
//                     style={{
//                       width: `${currentData[item.key]}%`,
//                       backgroundColor: item.color,
//                       boxShadow: `0 0 12px ${item.color}`,
//                     }}
//                     animate={{ width: `${currentData[item.key]}%` }}
//                     transition={{ duration: 0.8, ease: "easeInOut" }}
//                     title={`${item.label}: ${currentData[item.key]}%`}
//                   />
//                 </div>
//                 <p
//                   className={`mt-1 text-center text-sm md:text-base font-semibold select-none ${
//                     darkMode ? "text-green-400" : "text-green-900"
//                   }`}
//                 >
//                   {currentData[item.key]}%
//                 </p>
//               </div>
//             )}
//             {view === "circle" && !isAdmin && (
//               <p
//                 className={`text-sm md:text-base font-semibold mt-2 select-none ${
//                   darkMode ? "text-green-400" : "text-green-800"
//                 }`}
//               >
//                 {item.label}
//               </p>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Performance Insights */}
//       <div
//         className={`mt-8 md:mt-10 p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto ${
//           darkMode ? "bg-gray-800 text-green-400" : "bg-white text-green-900"
//         }`}
//       >
//         <h3 className="font-semibold text-xl md:text-2xl mb-4 md:mb-5 flex items-center gap-3">
//           📈 Performance Insights
//         </h3>
//         <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
//           <li className="flex items-center gap-3 md:gap-4">
//             <span className="text-green-700 text-2xl md:text-3xl">💪</span>
//             <span>
//               <strong>Premium</strong> clients achieve{" "}
//               <span className="font-bold">
//                 {clientsData.Premium.workout - clientsData.Basic.workout}%
//               </span>{" "}
//               higher workout completion than Basic clients.
//             </span>
//           </li>
//           <li className="flex items-center gap-3 md:gap-4">
//             <span className="text-green-700 text-2xl md:text-3xl">🥗</span>
//             <span>
//               Diet adherence is{" "}
//               <span className="font-bold">
//                 {clientsData.Premium.diet - clientsData.Basic.diet}%
//               </span>{" "}
//               higher for Premium clients.
//             </span>
//           </li>
//           <li className="flex items-center gap-3 md:gap-4">
//             <span className="text-green-700 text-2xl md:text-3xl">📊</span>
//             <span>
//               Engagement score is{" "}
//               <span className="font-bold">
//                 {clientsData.Premium.engagement - clientsData.Basic.engagement}%
//               </span>{" "}
//               higher in Premium compared to Basic.
//             </span>
//           </li>
//         </ul>
//       </div>

//       <style>{`
//         .shimmer {
//           background-image: linear-gradient(
//             90deg,
//             rgba(255, 255, 255, 0) 0%,
//             rgba(255, 255, 255, 0.5) 50%,
//             rgba(255, 255, 255, 0) 100%
//           );
//           background-size: 200% 100%;
//           animation: shimmer 2s infinite;
//         }
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.06); }
//         }
//       `}</style>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function AvgProgressClients() {
  const baseData = {
    All: { workout: 84, diet: 78, engagement: 82 },
    Premium: { workout: 92, diet: 88, engagement: 90 },
    Basic: { workout: 72, diet: 66, engagement: 70 },
  };

  const [clientsData, setClientsData] = useState(baseData);
  const [clientType, setClientType] = useState("All");
  const [view, setView] = useState("circle");
  const [isAdmin, setIsAdmin] = useState(false);
  const [editValues, setEditValues] = useState(baseData);
  const [displayData, setDisplayData] = useState(baseData);
  const [showConfetti, setShowConfetti] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientsData((prev) => {
        const newData = {};
        for (let type in prev) {
          newData[type] = {};
          for (let key in prev[type]) {
            let change = (Math.random() - 0.5) * 6;
            let updated = Math.min(100, Math.max(0, prev[type][key] + change));
            newData[type][key] = Math.round(updated);
          }
        }
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const anim = setInterval(() => {
      setDisplayData((prev) => {
        const next = {};
        for (let type in prev) {
          next[type] = {};
          for (let key in prev[type]) {
            const current = prev[type][key];
            const target = clientsData[type][key];
            const diff = target - current;
            next[type][key] =
              Math.abs(diff) < 1
                ? target
                : Math.round(current + diff * 0.2);
          }
        }
        return next;
      });
    }, 50);
    return () => clearInterval(anim);
  }, [clientsData]);

  const requestPassword = () => {
    const entered = prompt("Enter admin password:");
    if (entered === "2821") {
      setIsAdmin(true);
      setEditValues(clientsData);
      toast.success("Admin mode enabled");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleChange = (type, key, value) => {
    const num = Number(value);
    if (num < 0 || num > 100) return;
    setEditValues((prev) => ({
      ...prev,
      [type]: { ...prev[type], [key]: num },
    }));
  };

  const saveChanges = () => {
    setClientsData(editValues);
    setIsAdmin(false);
    toast.success("Progress data updated!");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const currentData = isAdmin
    ? editValues[clientType]
    : displayData[clientType];

  const getPulseSpeed = (value) => `${Math.max(0.5, 3 - value / 50)}s`;

  return (
    <div className="min-h-screen md:mt-0 p-4 md:p-6" style={{
      background: darkMode
        ? "radial-gradient(circle at top, #064e3b, #065f46, #047857)"
        : "radial-gradient(circle at top, #a7f3d0, #d1fae5, #e0f7ea)"
    }}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md shadow focus:outline-none"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-extrabold tracking-wide flex items-center gap-3 drop-shadow-md">
          Average Progress
          {!isAdmin && (
            <motion.button
              onClick={requestPassword}
              className="px-3 py-1 bg-red-600 text-white rounded-md text-sm shadow-lg hover:bg-red-700 transition focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🔒 Unlock
            </motion.button>
          )}
        </h2>

        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={clientType}
            onChange={(e) => setClientType(e.target.value)}
            className={`p-2 border rounded-md text-sm shadow-md hover:shadow-lg transition focus:outline-none ${
              darkMode ? "border-green-500 focus:ring-green-400 bg-gray-800 text-green-300" : "border-green-600 focus:ring-green-600 bg-white text-green-900"
            }`}
          >
            {Object.keys(clientsData).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button
            onClick={() =>
              setView((prev) => (prev === "circle" ? "bar" : "circle"))
            }
            className={`p-2 border rounded-md text-sm shadow transition focus:outline-none ${
              darkMode
                ? "border-green-500 hover:bg-green-700 bg-green-900 text-green-300"
                : "border-green-600 hover:bg-green-200 bg-green-100 text-green-900"
            }`}
          >
            {view === "circle" ? "Switch to Bar" : "Switch to Circle"}
          </button>
          {isAdmin && (
            <motion.button
              onClick={saveChanges}
              className="px-3 py-1 bg-green-700 text-white rounded-md text-sm shadow hover:bg-green-800 transition focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Save
            </motion.button>
          )}
        </div>
      </div>

      {/* Progress Display */}
      <div className={`rounded-xl p-6 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-10`}
           style={{
             background: darkMode ? "#065f46" : "#d1fae5"
           }}
      >
        {[
          { label: "🏋️‍♂️ Workout Completion", key: "workout", color: "#16a34a" },
          { label: "🥗 Diet Adherence", key: "diet", color: "#ea580c" },
          { label: "📊 Engagement Score", key: "engagement", color: "#2563eb" },
        ].map((item) => (
          <motion.div
            key={item.key}
            className="flex flex-col items-center group relative p-4 rounded-xl shadow-md hover:shadow-xl transition"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, #047857, #065f46)"
                : "linear-gradient(135deg, #a7f3d0, #d1fae5)"
            }}
            title={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            {isAdmin ? (
              <>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={editValues[clientType][item.key]}
                  onChange={(e) =>
                    handleChange(clientType, item.key, e.target.value)
                  }
                  className={`w-36 accent-[${item.color}]`}
                />
                <p className={`mt-3 font-mono text-xl ${darkMode ? "text-green-400" : "text-green-700"}`}>
                  {editValues[clientType][item.key]}%
                </p>
              </>
            ) : view === "circle" ? (
              <CircularProgressbar
                value={currentData[item.key]}
                text={`${currentData[item.key]}%`}
                styles={buildStyles({
                  pathColor: item.color,
                  textColor: darkMode ? "#a7f3d0" : "#14532d",
                  trailColor: darkMode ? "#065f46" : "#d1fae5",
                  textSize: "22px",
                  pathTransitionDuration: 0.7,
                })}
              />
            ) : (
              <div className="w-full">
                <div className={`mb-2 text-sm font-semibold ${darkMode ? "text-green-400" : "text-green-900"}`}>
                  {item.label}
                </div>
                <div className={`w-full rounded-full h-8 overflow-hidden relative shadow-inner ${darkMode ? "bg-green-900" : "bg-green-200"}`}>
                  <motion.div
                    className="h-8 rounded-full shimmer"
                    style={{
                      width: `${currentData[item.key]}%`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 15px ${item.color}`,
                    }}
                    animate={{ width: `${currentData[item.key]}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
                <p className={`mt-1 text-center text-sm font-semibold select-none ${darkMode ? "text-green-400" : "text-green-900"}`}>
                  {currentData[item.key]}%
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Performance Insights */}
      <div className={`mt-4 p-6 rounded-lg shadow-lg max-w-3xl mx-auto ${darkMode ? "bg-gray-800 text-green-400" : "bg-white text-green-900"}`}>
        <h3 className="font-semibold text-2xl mb-5 flex items-center gap-3">📈 Performance Insights</h3>
        <ul className="space-y-4 text-base">
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">💪</span>
            <span><strong>Premium</strong> clients achieve <span className="font-bold">{clientsData.Premium.workout - clientsData.Basic.workout}%</span> higher workout completion than Basic clients.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">🥗</span>
            <span>Diet adherence is <span className="font-bold">{clientsData.Premium.diet - clientsData.Basic.diet}%</span> higher for Premium clients.</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="text-green-700 text-3xl">📊</span>
            <span>Engagement score is <span className="font-bold">{clientsData.Premium.engagement - clientsData.Basic.engagement}%</span> higher in Premium compared to Basic.</span>
          </li>
        </ul>
      </div>

      <style>{`
        .shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
