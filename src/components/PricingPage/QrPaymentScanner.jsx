





import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function QrPaymentScanner() {
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaymentDone = () => {
    setErrorMessage("");
    navigate("/success", { state: location.state });
  };

  const handlePaymentNotDone = () => {
    setErrorMessage("Payment not completed. Please try again.");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      {/* Header */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-4 text-center drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Scan to Pay
      </motion.h2>
      <motion.p
        className="text-green-900/80 mb-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Use Google Pay or any UPI app to scan the QR code and complete your payment securely.
      </motion.p>

      {/* QR Code Card */}
      <motion.div
        className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-green-200 relative w-full max-w-sm flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

        <img
          src="/gpay-qr.png"
          alt="Google Pay QR"
          className="w-64 sm:w-72 border rounded-xl shadow-lg mb-6"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all"
            onClick={handlePaymentDone}
          >
            Payment Done
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:bg-red-700 transition-all"
            onClick={handlePaymentNotDone}
          >
            Payment Not Done
          </motion.button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <motion.p
            className="md:mt-0 text-red-600 font-semibold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {errorMessage}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
