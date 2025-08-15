







import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AuthForm({ onAuth }) {
  const [mode, setMode] = useState("signin");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "signin") {
      try {
        const res = await fetch("https://bitesized-backend.onrender.com/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });

        if (!res.ok) {
          const errData = await res.json();
          alert(errData.message || "Invalid email or password");
          return;
        }

        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data));
        onAuth(data);
      } catch (err) {
        console.error("Login error:", err);
      }
    } else {
      if (!form.name) {
        alert("Please enter your name.");
        return;
      }
      try {
        const res = await fetch("https://bitesized-backend.onrender.com/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!res.ok) {
          const errData = await res.json();
          alert(errData.message || "Signup failed");
          return;
        }

        alert("Account created! Please sign in.");
        setMode("signin");
      } catch (err) {
        console.error("Signup error:", err);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-sm mx-auto bg-gradient-to-br from-green-50 via-green-100 to-green-50 rounded-3xl shadow-2xl p-8 relative overflow-hidden"
    >
      {/* Decorative floating circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full opacity-20 animate-pulse"></div>

      <h2 className="text-3xl font-extrabold text-green-800 mb-6 text-center drop-shadow-md">
        {mode === "signin" ? "Sign In" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {mode === "signup" && (
          <div className="relative">
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
          </div>
        )}

        <div className="relative">
          <input
            type="email"
            placeholder=" "
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="peer w-full p-3 border-2 border-green-200 rounded-xl bg-transparent focus:outline-none focus:border-green-400 transition"
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
          />
          <label className="absolute left-3 -top-2 text-green-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
            Password
          </label>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:from-green-500 hover:to-green-700 transition"
        >
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </motion.button>
      </form>

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
