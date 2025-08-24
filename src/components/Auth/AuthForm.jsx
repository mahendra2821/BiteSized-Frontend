

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const API = "https://bitesized-backend.onrender.com/api/auth";

export default function AuthForm({ onAuth }) {
  const [mode, setMode] = useState("signin");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // strict email validation (must end with lowercase .com)
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

      if (!emailPattern.test(form.email)) {
        setMessage({
          type: "error",
          text: " Please enter a valid email ending with lowercase .com only.",
        });
        setLoading(false);
        return;
      }

      if (mode === "signin") {
        const { data } = await axios.post(`${API}/login`, {
          email: form.email, // no toLowerCase conversion
          password: form.password,
        });

        localStorage.setItem("user", JSON.stringify(data));
        onAuth(data);
      } else {
        if (!form.name.trim()) {
          setMessage({ type: "error", text: "Please enter your name." });
          setLoading(false);
          return;
        }

        await axios.post(`${API}/signup`, form);

        setMessage({
          type: "success",
          text: "🎉 Account created! Please sign in.",
        });
        setForm({ name: "", email: "", password: "" });
        setMode("signin");
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-sm mx-auto bg-gradient-to-br from-green-50 via-green-100 to-green-50 rounded-3xl shadow-2xl p-8 relative overflow-hidden"
    >
      {/* floating bg circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

      <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center drop-shadow-md">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AnimatePresence mode="wait">
          {mode === "signup" && (
            <motion.div
              key="name-field"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <input
                type="text"
                placeholder=" "
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="peer w-full p-3 border-2 border-green-200 rounded-xl bg-transparent focus:outline-none focus:border-green-400 transition"
              />
              <label className="absolute left-3 -top-2 text-green-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Name
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          <input
            type="email"
            placeholder=" "
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="peer w-full p-3 border-2 border-green-200 rounded-xl bg-transparent focus:outline-none focus:border-green-400 transition"
            required
          />
          <label className="absolute left-3 -top-2 text-green-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            placeholder=" "
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="peer w-full p-3 border-2 border-green-200 rounded-xl bg-transparent focus:outline-none focus:border-green-400 transition"
            required
          />
          <label className="absolute left-3 -top-2 text-green-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Password
          </label>
        </div>

        <motion.button
          type="submit"
          whileHover={!loading ? { scale: 1.03 } : {}}
          whileTap={!loading ? { scale: 0.97 } : {}}
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 transition ${
            loading
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
          }`}
        >
          {loading ? (
            <>
              <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </>
          ) : mode === "signin" ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </motion.button>
      </form>

      {/* message feedback */}
      <AnimatePresence>
        {message && (
          <motion.p
            key={message.text}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={`mt-4 text-center text-sm font-medium flex items-center justify-center gap-2 ${
              message.type === "error" ? "text-red-600" : "text-green-700"
            }`}
          >
            {message.type === "error" ? "❌" : "✅"} {message.text}
          </motion.p>
        )}
      </AnimatePresence>

      <p
        className="text-center mt-6 text-sm text-green-700 cursor-pointer hover:underline select-none"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
      >
        {mode === "signin"
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}
      </p>
    </motion.div>
  );
}
