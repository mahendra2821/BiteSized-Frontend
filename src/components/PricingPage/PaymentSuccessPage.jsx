

import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen md:mt-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-6 py-16 text-center">
      {/* Success Icon */}
      <CheckCircle className="w-24 h-24 text-green-700 mb-6 animate-bounce" />

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-lg">
        Payment Successful!
      </h2>

      {/* Description */}
      <p className="text-lg sm:text-xl text-green-900/90 max-w-md mx-auto mb-8 leading-relaxed">
        Thank you for registering. We’ve sent a confirmation email to your inbox.
      </p>

      {/* Action Button */}
      <button
        onClick={() => navigate("/registrations")}
        className="flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105 focus:ring-4 focus:ring-green-300"
      >
        Check Your Name in Registration List
      </button>

      {/* Optional decorative floating circles */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-green-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
    </section>
  );
}
