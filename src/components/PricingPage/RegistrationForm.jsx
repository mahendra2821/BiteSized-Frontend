



import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { planName } = useParams();

  const validate = () => {
    let temp = {};
    if (!formData.name.trim()) temp.name = "Name is required";
    if (!formData.email.match(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/))
      temp.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/))
      temp.phone = "Enter 10-digit phone number";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post("https://bitesized-backend.onrender.com/api/registrations", {
        ...formData,
        planName,
      });
      setSubmitted(true);

      setTimeout(() => {
        navigate(`/qr-scanner/${encodeURIComponent(planName)}`, {
          state: {
            name: formData.name,
            email: formData.email,
            planName,
          },
        });
      }, 1500);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-16 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <motion.div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-green-200 relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Circles */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-green-300 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-green-400 opacity-20 rounded-full animate-pulse"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-6 text-center drop-shadow-md">
          Complete Your Registration
        </h2>

        {submitted ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-green-500 text-6xl mb-4 animate-bounce">✔</div>
            <p className="text-lg font-semibold text-green-700">
              Registration Successful!
            </p>
            <p className="text-sm text-green-900/70 mt-2">
              Redirecting to QR Scanner...
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email", "phone"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  placeholder=" "
                  value={formData[field]}
                  onChange={handleChange}
                  className={`peer border rounded-xl px-4 pt-5 pb-2 w-full focus:ring-2 focus:ring-green-500 outline-none transition-all ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                <label
                  htmlFor={field}
                  className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-green-600"
                >
                  {field === "name"
                    ? "Full Name"
                    : field === "email"
                    ? "Email Address"
                    : "Phone Number"}
                </label>
                {errors[field] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
