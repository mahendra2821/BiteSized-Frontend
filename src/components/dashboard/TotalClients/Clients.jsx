// // import { useEffect, useState } from "react";
// // import { Dialog } from "@headlessui/react";
// // import { X } from "lucide-react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const initialClients = [
// //   { id: 1, name: "Ravi Kumar", email: "ravi@example.com", status: "active" },
// //   { id: 2, name: "Anjali Sharma", email: "anjali@example.com", status: "paused" },
// //   { id: 3, name: "Siddharth Mehta", email: "siddharth@example.com", status: "pending" },
// //   { id: 4, name: "Kiran Rao", email: "kiran@example.com", status: "active" },
// //   { id: 5, name: "Manish Verma", email: "manish@example.com", status: "paused" },
// // ];

// // export default function Clients() {
// //   const [clients, setClients] = useState(initialClients);
// //   const [sortBy, setSortBy] = useState("name");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentClient, setCurrentClient] = useState(null);
// //   const [formData, setFormData] = useState({ name: "", email: "", status: "active" });

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const clientsPerPage = 4;
// //   const totalPages = Math.ceil(clients.length / clientsPerPage);

// //   const sortedClients = [...clients].sort((a, b) => {
// //     if (sortBy === "name") return a.name.localeCompare(b.name);
// //     if (sortBy === "status") return a.status.localeCompare(b.status);
// //     return 0;
// //   });

// //   const paginatedClients = sortedClients.slice(
// //     (currentPage - 1) * clientsPerPage,
// //     currentPage * clientsPerPage
// //   );

// //   const openModal = (client) => {
// //     setCurrentClient(client);
// //     setFormData(client || { name: "", email: "", status: "active" });
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setCurrentClient(null);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (currentClient) {
// //       setClients((prev) =>
// //         prev.map((c) => (c.id === currentClient.id ? { ...currentClient, ...formData } : c))
// //       );
// //       toast.success("Client updated successfully!");
// //     } else {
// //       const newClient = {
// //         id: Date.now(),
// //         ...formData,
// //       };
// //       setClients((prev) => [...prev, newClient]);
// //       toast.success("New client added!");
// //     }
// //     closeModal();
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-2xl font-bold">Client List</h2>
// //         <button
// //           onClick={() => openModal(null)}
// //           className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
// //         >
// //           Add New Client
// //         </button>
// //       </div>

// //       <div className="mb-4">
// //         <label className="mr-2 font-medium">Sort By:</label>
// //         <select
// //           className="border px-2 py-1 rounded"
// //           onChange={(e) => setSortBy(e.target.value)}
// //           value={sortBy}
// //         >
// //           <option value="name">Name</option>
// //           <option value="status">Status</option>
// //         </select>
// //       </div>

// //       <ul className="space-y-3">
// //         {paginatedClients.map((client) => (
// //           <li
// //             key={client.id}
// //             className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
// //           >
// //             <div className="flex justify-between items-center">
// //               <div>
// //                 <p className="font-medium text-gray-800">{client.name}</p>
// //                 <p className="text-sm text-gray-500">{client.email}</p>
// //                 <p className="text-sm text-green-700 capitalize">Status: {client.status}</p>
// //               </div>
// //               <button
// //                 className="text-blue-600 hover:underline"
// //                 onClick={() => openModal(client)}
// //               >
// //                 Edit
// //               </button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Pagination */}
// //       <div className="mt-4 flex justify-between items-center">
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //           disabled={currentPage === 1}
// //         >
// //           Previous
// //         </button>
// //         <span className="text-sm text-gray-700">
// //           Page {currentPage} of {totalPages}
// //         </span>
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //           disabled={currentPage === totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {/* Modal */}
// //       <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
// //         <div className="flex items-center justify-center min-h-screen">
// //           <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
// //             <div className="flex justify-between items-center mb-4">
// //               <Dialog.Title className="text-xl font-bold">
// //                 {currentClient ? "Edit Client" : "Add New Client"}
// //               </Dialog.Title>
// //               <button onClick={closeModal}><X /></button>
// //             </div>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 placeholder="Name"
// //                 value={formData.name}
// //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 value={formData.email}
// //                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <select
// //                 value={formData.status}
// //                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //               >
// //                 <option value="active">Active</option>
// //                 <option value="paused">Paused</option>
// //                 <option value="pending">Pending</option>
// //               </select>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
// //               >
// //                 {currentClient ? "Update" : "Add"}
// //               </button>
// //             </form>
// //           </Dialog.Panel>
// //         </div>
// //       </Dialog>

// //       {/* Toast Notifications */}
// //       <ToastContainer position="bottom-right" autoClose={3000} />
// //     </div>
// //   );
// // }




// // import { useEffect, useState } from "react";
// // import { Dialog } from "@headlessui/react";
// // import { X } from "lucide-react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { fetchClients, createClient, updateClient, deleteClient } from "../../../api";
// // export default function Clients() {
// //   const [clients, setClients] = useState([]);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [sortBy, setSortBy] = useState("name");
// //   const [search, setSearch] = useState("");

// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentClient, setCurrentClient] = useState(null);
// //   const [formData, setFormData] = useState({ name: "", email: "", status: "active" });

// //   const clientsPerPage = 4;

// //   const loadClients = async () => {
// //     try {
// //       const res = await fetchClients({
// //         page: currentPage,
// //         limit: clientsPerPage,
// //         sort: sortBy,
// //         search,
// //       });
// //       setClients(res.data.data);
// //       setTotalPages(Math.ceil(res.data.total / clientsPerPage));
// //     } catch (err) {
// //       toast.error("Failed to load clients");
// //     }
// //   };

// //   useEffect(() => {
// //     loadClients();
// //   }, [currentPage, sortBy, search]);

// //   const openModal = (client) => {
// //     setCurrentClient(client);
// //     setFormData(client || { name: "", email: "", status: "active" });
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setCurrentClient(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (currentClient) {
// //         await updateClient(currentClient._id, formData);
// //         toast.success("Client updated!");
// //       } else {
// //         await createClient(formData);
// //         toast.success("New client added!");
// //       }
// //       closeModal();
// //       loadClients();
// //     } catch (err) {
// //       toast.error("Error saving client");
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this client?")) return;
// //     try {
// //       await deleteClient(id);
// //       toast.success("Client deleted!");
// //       loadClients();
// //     } catch (err) {
// //       toast.error("Delete failed");
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-2xl font-bold">Client List</h2>
// //         <button
// //           onClick={() => openModal(null)}
// //           className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
// //         >
// //           Add New Client
// //         </button>
// //       </div>

// //       <div className="mb-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
// //         <div>
// //           <label className="mr-2 font-medium">Sort By:</label>
// //           <select
// //             className="border px-2 py-1 rounded"
// //             onChange={(e) => setSortBy(e.target.value)}
// //             value={sortBy}
// //           >
// //             <option value="name">Name</option>
// //             <option value="status">Status</option>
// //           </select>
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Search by name or email"
// //           value={search}
// //           onChange={(e) => {
// //             setSearch(e.target.value);
// //             setCurrentPage(1);
// //           }}
// //           className="border p-2 rounded w-full md:w-60"
// //         />
// //       </div>

// //       <ul className="space-y-3">
// //         {clients.map((client) => (
// //           <li
// //             key={client._id}
// //             className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
// //           >
// //             <div className="flex justify-between items-center">
// //               <div>
// //                 <p className="font-medium text-gray-800">{client.name}</p>
// //                 <p className="text-sm text-gray-500">{client.email}</p>
// //                 <p className="text-sm text-green-700 capitalize">
// //                   Status: {client.status}
// //                 </p>
// //               </div>
// //               <div className="flex gap-4">
// //                 <button
// //                   className="text-blue-600 hover:underline"
// //                   onClick={() => openModal(client)}
// //                 >
// //                   Edit
// //                 </button>
// //                 <button
// //                   className="text-red-600 hover:underline"
// //                   onClick={() => handleDelete(client._id)}
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Pagination */}
// //       <div className="mt-4 flex justify-between items-center">
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //           disabled={currentPage === 1}
// //         >
// //           Previous
// //         </button>
// //         <span className="text-sm text-gray-700">
// //           Page {currentPage} of {totalPages}
// //         </span>
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //           disabled={currentPage === totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {/* Modal */}
// //       <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
// //         <div className="flex items-center justify-center min-h-screen">
// //           <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
// //             <div className="flex justify-between items-center mb-4">
// //               <Dialog.Title className="text-xl font-bold">
// //                 {currentClient ? "Edit Client" : "Add New Client"}
// //               </Dialog.Title>
// //               <button onClick={closeModal}><X /></button>
// //             </div>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 placeholder="Name"
// //                 value={formData.name}
// //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 value={formData.email}
// //                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <select
// //                 value={formData.status}
// //                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //               >
// //                 <option value="active">Active</option>
// //                 <option value="paused">Paused</option>
// //                 <option value="pending">Pending</option>
// //               </select>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
// //               >
// //                 {currentClient ? "Update" : "Add"}
// //               </button>
// //             </form>
// //           </Dialog.Panel>
// //         </div>
// //       </Dialog>

// //       <ToastContainer position="bottom-right" autoClose={3000} />
// //     </div>
// //   );
// // }





// // import { useEffect, useState } from "react";
// // import { Dialog } from "@headlessui/react";
// // import { X } from "lucide-react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { fetchClients, createClient, updateClient, deleteClient } from "../../../api";

// // export default function Clients() {
// //   const [clients, setClients] = useState([]);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [sortBy, setSortBy] = useState("name");
// //   const [search, setSearch] = useState("");

// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentClient, setCurrentClient] = useState(null);
// //   const [formData, setFormData] = useState({ name: "", email: "", status: "active" });

// //   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // 🔒
// //   const [pendingAction, setPendingAction] = useState(null); // 🔒 store what to do after password
// //   const [passwordInput, setPasswordInput] = useState(""); // 🔒

// //   const clientsPerPage = 4;

// //   const loadClients = async () => {
// //     try {
// //       const res = await fetchClients({
// //         page: currentPage,
// //         limit: clientsPerPage,
// //         sort: sortBy,
// //         search,
// //       });
// //       setClients(res.data.data);
// //       setTotalPages(Math.ceil(res.data.total / clientsPerPage));
// //     } catch (err) {
// //       toast.error("Failed to load clients");
// //     }
// //   };

// //   useEffect(() => {
// //     loadClients();
// //   }, [currentPage, sortBy, search]);

// //   // 🔒 Ask for password before doing Add/Edit/Delete
// //   const requestPassword = (action) => {
// //     setPendingAction(() => action);
// //     setPasswordInput("");
// //     setIsPasswordModalOpen(true);
// //   };

// //   const verifyPassword = () => {
// //     if (passwordInput === "admin123") { // Change this to your own password
// //       setIsPasswordModalOpen(false);
// //       if (pendingAction) pendingAction();
// //     } else {
// //       toast.error("Wrong password!");
// //     }
// //   };

// //   const openModal = (client) => {
// //     setCurrentClient(client);
// //     setFormData(client || { name: "", email: "", status: "active" });
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //     setCurrentClient(null);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (currentClient) {
// //         await updateClient(currentClient._id, formData);
// //         toast.success("Client updated!");
// //       } else {
// //         await createClient(formData);
// //         toast.success("New client added!");
// //       }
// //       closeModal();
// //       loadClients();
// //     } catch (err) {
// //       toast.error("Error saving client");
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this client?")) return;
// //     try {
// //       await deleteClient(id);
// //       toast.success("Client deleted!");
// //       loadClients();
// //     } catch (err) {
// //       toast.error("Delete failed");
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-2xl font-bold">Client List</h2>
// //         <button
// //           onClick={() => requestPassword(() => openModal(null))} // 🔒
// //           className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
// //         >
// //           Add New Client
// //         </button>
// //       </div>

// //       <div className="mb-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
// //         <div>
// //           <label className="mr-2 font-medium">Sort By:</label>
// //           <select
// //             className="border px-2 py-1 rounded"
// //             onChange={(e) => setSortBy(e.target.value)}
// //             value={sortBy}
// //           >
// //             <option value="name">Name</option>
// //             <option value="status">Status</option>
// //           </select>
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Search by name or email"
// //           value={search}
// //           onChange={(e) => {
// //             setSearch(e.target.value);
// //             setCurrentPage(1);
// //           }}
// //           className="border p-2 rounded w-full md:w-60"
// //         />
// //       </div>

// //       <ul className="space-y-3">
// //         {clients.map((client) => (
// //           <li
// //             key={client._id}
// //             className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
// //           >
// //             <div className="flex justify-between items-center">
// //               <div>
// //                 <p className="font-medium text-gray-800">{client.name}</p>
// //                 <p className="text-sm text-gray-500">{client.email}</p>
// //                 <p className="text-sm text-green-700 capitalize">
// //                   Status: {client.status}
// //                 </p>
// //               </div>
// //               <div className="flex gap-4">
// //                 <button
// //                   className="text-blue-600 hover:underline"
// //                   onClick={() => requestPassword(() => openModal(client))} // 🔒
// //                 >
// //                   Edit
// //                 </button>
// //                 <button
// //                   className="text-red-600 hover:underline"
// //                   onClick={() => requestPassword(() => handleDelete(client._id))} // 🔒
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Pagination */}
// //       <div className="mt-4 flex justify-between items-center">
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //           disabled={currentPage === 1}
// //         >
// //           Previous
// //         </button>
// //         <span className="text-sm text-gray-700">
// //           Page {currentPage} of {totalPages}
// //         </span>
// //         <button
// //           className="px-4 py-2 border rounded disabled:opacity-50"
// //           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //           disabled={currentPage === totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {/* Client Add/Edit Modal */}
// //       <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
// //         <div className="flex items-center justify-center min-h-screen">
// //           <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
// //             <div className="flex justify-between items-center mb-4">
// //               <Dialog.Title className="text-xl font-bold">
// //                 {currentClient ? "Edit Client" : "Add New Client"}
// //               </Dialog.Title>
// //               <button onClick={closeModal}><X /></button>
// //             </div>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 placeholder="Name"
// //                 value={formData.name}
// //                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 value={formData.email}
// //                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //                 required
// //               />
// //               <select
// //                 value={formData.status}
// //                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
// //                 className="w-full border p-2 rounded"
// //               >
// //                 <option value="active">Active</option>
// //                 <option value="paused">Paused</option>
// //                 <option value="pending">Pending</option>
// //               </select>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
// //               >
// //                 {currentClient ? "Update" : "Add"}
// //               </button>
// //             </form>
// //           </Dialog.Panel>
// //         </div>
// //       </Dialog>

// //       {/* 🔒 Password Modal */}
// //       <Dialog open={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} className="fixed z-20 inset-0 flex items-center justify-center">
// //         <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
// //           <Dialog.Title className="text-lg font-bold mb-4">Enter Admin Password</Dialog.Title>
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={passwordInput}
// //             onChange={(e) => setPasswordInput(e.target.value)}
// //             className="w-full border p-2 rounded mb-4"
// //           />
// //           <div className="flex justify-end gap-2">
// //             <button
// //               onClick={() => setIsPasswordModalOpen(false)}
// //               className="px-4 py-2 border rounded"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               onClick={verifyPassword}
// //               className="px-4 py-2 bg-blue-600 text-white rounded"
// //             >
// //               Unlock
// //             </button>
// //           </div>
// //         </Dialog.Panel>
// //       </Dialog>

// //       <ToastContainer position="bottom-right" autoClose={3000} />
// //     </div>
// //   );
// // }




// import { useEffect, useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { X } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { fetchClients, createClient, updateClient, deleteClient } from "../../../api";

// export default function Clients() {
//   const [clients, setClients] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState("name");
//   const [search, setSearch] = useState("");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentClient, setCurrentClient] = useState(null);
//   const [formData, setFormData] = useState({ name: "", email: "", status: "active" });

//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
//   const [pendingAction, setPendingAction] = useState(null);
//   const [passwordInput, setPasswordInput] = useState("");

//   const clientsPerPage = 4;

//   const loadClients = async () => {
//     try {
//       const res = await fetchClients({
//         page: currentPage,
//         limit: clientsPerPage,
//         sort: sortBy,
//         search,
//       });
//       setClients(res.data.data);
//       setTotalPages(Math.ceil(res.data.total / clientsPerPage));
//     } catch (err) {
//       toast.error("Failed to load clients");
//     }
//   };

//   useEffect(() => {
//     loadClients();
//   }, [currentPage, sortBy, search]);

//   // Mask functions
//   const maskName = (name) => {
//     if (!name) return "";
//     return name[0].toUpperCase() + "***";
//   };

//   const maskEmail = (email) => {
//     if (!email) return "";
//     const [user, domain] = email.split("@");
//     if (!domain) return "***";
//     const visibleChars = user.length > 2 ? 2 : 1;
//     return user.slice(0, visibleChars) + "***@" + domain;
//   };

//   // Password handling
//   const requestPassword = (action) => {
//     setPendingAction(() => action);
//     setPasswordInput("");
//     setIsPasswordModalOpen(true);
//   };

//   const verifyPassword = () => {
//     if (passwordInput === "admin123") {
//       setIsPasswordModalOpen(false);
//       if (pendingAction) pendingAction();
//     } else {
//       toast.error("Wrong password!");
//     }
//   };

//   const openModal = (client) => {
//     setCurrentClient(client);
//     setFormData(client || { name: "", email: "", status: "active" });
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentClient(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (currentClient) {
//         await updateClient(currentClient._id, formData);
//         toast.success("Client updated!");
//       } else {
//         await createClient(formData);
//         toast.success("New client added!");
//       }
//       closeModal();
//       loadClients();
//     } catch (err) {
//       toast.error("Error saving client");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this client?")) return;
//     try {
//       await deleteClient(id);
//       toast.success("Client deleted!");
//       loadClients();
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Client List</h2>
//         <button
//           onClick={() => requestPassword(() => openModal(null))}
//           className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
//         >
//           Add New Client
//         </button>
//       </div>

//       <div className="mb-4 flex flex-col md:flex-row gap-4 md:items-center justify-between">
//         <div>
//           <label className="mr-2 font-medium">Sort By:</label>
//           <select
//             className="border px-2 py-1 rounded"
//             onChange={(e) => setSortBy(e.target.value)}
//             value={sortBy}
//           >
//             <option value="name">Name</option>
//             <option value="status">Status</option>
//           </select>
//         </div>
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded w-full md:w-60"
//         />
//       </div>

//       <ul className="space-y-3">
//         {clients.map((client) => (
//           <li
//             key={client._id}
//             className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="font-medium text-gray-800">{maskName(client.name)}</p>
//                 <p className="text-sm text-gray-500">{maskEmail(client.email)}</p>
//                 <p className="text-sm text-green-700 capitalize">
//                   Status: {client.status}
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   className="text-blue-600 hover:underline"
//                   onClick={() => requestPassword(() => openModal(client))}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-red-600 hover:underline"
//                   onClick={() => requestPassword(() => handleDelete(client._id))}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <div className="mt-4 flex justify-between items-center">
//         <button
//           className="px-4 py-2 border rounded disabled:opacity-50"
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="text-sm text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className="px-4 py-2 border rounded disabled:opacity-50"
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* Client Add/Edit Modal */}
//       <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen">
//           <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <Dialog.Title className="text-xl font-bold">
//                 {currentClient ? "Edit Client" : "Add New Client"}
//               </Dialog.Title>
//               <button onClick={closeModal}><X /></button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full border p-2 rounded"
//                 required
//               />
//               <select
//                 value={formData.status}
//                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="active">Active</option>
//                 <option value="paused">Paused</option>
//                 <option value="pending">Pending</option>
//               </select>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
//               >
//                 {currentClient ? "Update" : "Add"}
//               </button>
//             </form>
//           </Dialog.Panel>
//         </div>
//       </Dialog>

//       {/* Password Modal */}
//       <Dialog open={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)} className="fixed z-20 inset-0 flex items-center justify-center">
//         <Dialog.Panel className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
//           <Dialog.Title className="text-lg font-bold mb-4">Enter Admin Password</Dialog.Title>
//           <input
//             type="password"
//             placeholder="Password"
//             value={passwordInput}
//             onChange={(e) => setPasswordInput(e.target.value)}
//             className="w-full border p-2 rounded mb-4"
//           />
//           <div className="flex justify-end gap-2">
//             <button
//               onClick={() => setIsPasswordModalOpen(false)}
//               className="px-4 py-2 border rounded"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={verifyPassword}
//               className="px-4 py-2 bg-blue-600 text-white rounded"
//             >
//               Unlock
//             </button>
//           </div>
//         </Dialog.Panel>
//       </Dialog>

//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchClients, createClient, updateClient, deleteClient } from "../../../api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", status: "active" });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [passwordInput, setPasswordInput] = useState("");

  const clientsPerPage = 4;

  const loadClients = async () => {
    try {
      const res = await fetchClients({
        page: currentPage,
        limit: clientsPerPage,
        sort: sortBy,
        search,
      });
      setClients(res.data.data);
      setTotalPages(Math.ceil(res.data.total / clientsPerPage));
    } catch {
      toast.error("Failed to load clients");
    }
  };

  useEffect(() => {
    loadClients();
  }, [currentPage, sortBy, search]);

  const maskName = (name) => (name ? name[0].toUpperCase() + "***" : "");
  const maskEmail = (email) => {
    if (!email) return "";
    const [user, domain] = email.split("@");
    if (!domain) return "***";
    const visibleChars = user.length > 2 ? 2 : 1;
    return user.slice(0, visibleChars) + "***@" + domain;
  };

  const requestPassword = (action) => {
    setPendingAction(() => action);
    setPasswordInput("");
    setIsPasswordModalOpen(true);
  };

  const verifyPassword = () => {
    if (passwordInput === "admin123") {
      setIsPasswordModalOpen(false);
      if (pendingAction) pendingAction();
    } else {
      toast.error("Wrong password!");
    }
  };

  const openModal = (client) => {
    setCurrentClient(client);
    setFormData(client || { name: "", email: "", status: "active" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClient(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentClient) {
        await updateClient(currentClient._id, formData);
        toast.success("Client updated!");
      } else {
        await createClient(formData);
        toast.success("New client added!");
      }
      closeModal();
      loadClients();
    } catch {
      toast.error("Error saving client");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this client?")) return;
    try {
      await deleteClient(id);
      toast.success("Client deleted!");
      loadClients();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div
      className="min-h-screen p-8 md:mt-0"
      style={{
        background: "radial-gradient(circle at top right, #e6f4ea, #c8e6c9, #a5d6a7)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1b4332",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-sm">Clients List</h2>
        <button
          onClick={() => requestPassword(() => openModal(null))}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          aria-label="Add new client"
        >
          + Add Client
        </button>
      </div>

      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <label className="font-semibold text-green-800" htmlFor="sortBy">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="border border-green-400 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search clients by name or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-green-400 rounded px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="Search clients"
        />
      </div>

      <ul className="space-y-5">
        {clients.map((client) => (
          <li
            key={client._id}
            className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow cursor-default"
            role="listitem"
          >
            <div>
              <p className="text-lg font-semibold text-green-900">{maskName(client.name)}</p>
              <p className="text-sm text-green-700">{maskEmail(client.email)}</p>
              <p
                className={`text-sm font-medium capitalize ${
                  client.status === "active"
                    ? "text-green-600"
                    : client.status === "paused"
                    ? "text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                Status: {client.status}
              </p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => requestPassword(() => openModal(client))}
                className="text-green-700 hover:text-green-900 font-semibold underline transition"
                aria-label={`Edit client ${client.name}`}
              >
                Edit
              </button>
              <button
                onClick={() => requestPassword(() => handleDelete(client._id))}
                className="text-red-600 hover:text-red-800 font-semibold underline transition"
                aria-label={`Delete client ${client.name}`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded border transition ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed border-green-300"
              : "hover:bg-green-200 border-green-600"
          }`}
          aria-label="Previous page"
        >
          Prev
        </button>
        <span className="font-semibold text-green-900">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded border transition ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed border-green-300"
              : "hover:bg-green-200 border-green-600"
          }`}
          aria-label="Next page"
        >
          Next
        </button>
      </div>

      {/* Modal Add/Edit Client */}
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-30"
      >
        <Dialog.Panel className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          <Dialog.Title className="text-2xl font-bold mb-4 text-green-900">
            {currentClient ? "Edit Client" : "Add New Client"}
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-green-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-green-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full border border-green-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="pending">Pending</option>
            </select>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-transform transform hover:scale-105"
            >
              {currentClient ? "Update Client" : "Add Client"}
            </button>
          </form>
        </Dialog.Panel>
      </Dialog>

      {/* Password Modal */}
      <Dialog
        open={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30"
      >
        <Dialog.Panel className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 relative">
          <button
            onClick={() => setIsPasswordModalOpen(false)}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
          <Dialog.Title className="text-xl font-bold mb-4 text-green-900">Enter Admin Password</Dialog.Title>
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className="w-full border border-green-400 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsPasswordModalOpen(false)}
              className="px-4 py-2 rounded border border-green-500 hover:bg-green-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={verifyPassword}
              className="px-5 py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold transition-transform transform hover:scale-105"
            >
              Unlock
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
