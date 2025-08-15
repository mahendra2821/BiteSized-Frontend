


import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

const SERVICE_ID = "service_4fag1fc";
const TEMPLATE_ID = "template_kcmknfc";
const PUBLIC_KEY = "rosi3VkNC9rRXTHQj";
const ADMIN_PASSWORD = "2821";

export default function RegistrationList({ currentUser }) {
  const [registrations, setRegistrations] = useState([]);
  const [loadingUid, setLoadingUid] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfettiUid, setShowConfettiUid] = useState(null);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    fetchFromAPI();
  }, []);

  const fetchFromAPI = async () => {
    try {
      const res = await fetch("https://bitesized-backend.onrender.com/api/registrations");
      if (!res.ok) throw new Error("Failed to fetch registrations");
      const apiData = await res.json();
      const saved = JSON.parse(localStorage.getItem("registrations") || "{}");

      const merged = apiData.map((user, idx) => {
        const uid = user._id || user.id || `local-${idx}`;
        return {
          uid,
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          planName: saved[uid]?.planName || user.planName || "Basic Plan",
          paymentStatus: saved[uid]?.paymentStatus || user.paymentStatus || "Pending",
        };
      });

      const userEmail = currentUser?.email;

      // Mask other users only for normal users
      const maskString = (str, visible = 3) => {
        if (!str) return "";
        const first = str.slice(0, visible);
        const masked = "*".repeat(Math.max(str.length - visible, 0));
        return first + masked;
      };

      const filtered = merged.map((reg) => {
        if (isAdmin || reg.email === userEmail) return reg; // full view for admin or self
        return {
          ...reg,
          name: maskString(reg.name, 3),
          email: maskString(reg.email, 4),
          phone: maskString(reg.phone, 3),
          planName: (reg.planName),
        };
      });

      setRegistrations(filtered);
    } catch (err) {
      console.error(err);
      setRegistrations([]);
    }
  };

  useEffect(() => {
    // Reapply masking when admin toggles
    fetchFromAPI();
  }, [isAdmin]);

  const saveToLocalStorage = (list) => {
    const storageData = {};
    list.forEach((item) => {
      storageData[item.uid] = {
        planName: item.planName,
        paymentStatus: item.paymentStatus,
      };
    });
    localStorage.setItem("registrations", JSON.stringify(storageData));
  };

  const changeStatus = async (uid, status) => {
    if (!isAdmin) return alert("Admin required to change status");

    try {
      setLoadingUid(uid);
      const updated = registrations.map((r) =>
        r.uid === uid ? { ...r, paymentStatus: status } : r
      );
      setRegistrations(updated);
      saveToLocalStorage(updated);

      const target = updated.find((r) => r.uid === uid);
      if (!target?.email || target.email.includes("*")) return;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: target.name,
          user_email: target.email,
          plan_name: target.planName,
          status: status,
        },
        PUBLIC_KEY
      );

      if (status === "Done") {
        setShowConfettiUid(uid);
        setTimeout(() => setShowConfettiUid(null), 3000);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update status or send email.");
    } finally {
      setLoadingUid(null);
    }
  };

  const handleAdminLogin = () => {
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASSWORD) {
      setIsAdmin(true);
      alert("Admin unlocked");
    } else {
      alert("Incorrect password");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
        return "bg-gradient-to-r from-green-500 to-green-700";
      case "Processing":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "Not Completed":
        return "bg-gradient-to-r from-red-400 to-red-600";
      default:
        return "bg-gray-400";
    }
  };

  const totalPages = Math.ceil(registrations.length / ITEMS_PER_PAGE);
  const currentData = registrations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="min-h-screen md:mt-0 p-6 bg-gradient-to-b from-green-100 via-green-300 to-green-400">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-green-900 mb-3 sm:mb-0 drop-shadow-lg">
          Registered Users
        </h2>
        {!isAdmin ? (
          <button
            onClick={handleAdminLogin}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Admin Login
          </button>
        ) : (
          <span className="text-sm px-3 py-2 rounded-lg bg-green-100 text-green-900 shadow-sm">
            Admin mode
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((reg) => (
          <div
            key={reg.uid}
            className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-3xl"
          >
            {showConfettiUid === reg.uid && <Confetti numberOfPieces={100} recycle={false} />}
            <div>
              <h3 className="text-xl font-bold text-green-900">{reg.name}</h3>
              <p className="text-sm text-green-700 break-all">{reg.email}</p>
              <p className="text-sm text-green-700">{reg.phone}</p>
              <p className="mt-2 font-semibold text-green-800">{reg.planName}</p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
              <span
                className={`px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md animate-pulse ${getStatusColor(
                  reg.paymentStatus
                )}`}
              >
                {reg.paymentStatus}
              </span>

              {isAdmin && (
                <div className="flex gap-2 flex-wrap">
                  {["Done", "Processing", "Not Completed"].map((status) => (
                    <button
                      key={status}
                      disabled={loadingUid !== null}
                      onClick={() => changeStatus(reg.uid, status)}
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md transition transform hover:scale-110 ${
                        status === "Done"
                          ? "bg-green-500 hover:bg-green-600"
                          : status === "Processing"
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-red-500 hover:bg-red-600"
                      }`}
                    >
                      {loadingUid === reg.uid ? "..." : status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full font-semibold ${
                currentPage === i + 1
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-green-200 text-green-900 hover:bg-green-300"
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

