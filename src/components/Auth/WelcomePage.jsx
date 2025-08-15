


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const items = [
  "🍎", "🍌", "🥦", "🍇", "🥕", "🍓", "🥬", "🍋", "🌿",
  "🎁", "🍉", "🍒", "🌽", "🥝", "🍍", "🎂", "🍪"
];

const randomRange = (min, max) => Math.random() * (max - min) + min;

export default function WelcomePage({ user }) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(true), 5000);
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setTimeout(() => navigate("/dashboard", { replace: true }), 800);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(confettiTimer);
    };
  }, [navigate]);

  const renderFallingItems = () =>
    items.map((item, index) => (
      <motion.div
        key={index}
        initial={{
          y: -100,
          x: randomRange(50, window.innerWidth - 50),
          rotate: 0,
          scale: randomRange(0.8, 1.5),
          opacity: 0
        }}
        animate={{
          y: window.innerHeight + 50,
          rotate: randomRange(0, 360),
          opacity: 1
        }}
        transition={{
          duration: randomRange(4, 7),
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
        className="absolute text-5xl drop-shadow-2xl"
      >
        {item}
      </motion.div>
    ));

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Radial green background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-400 via-green-600 to-green-900"></div>

      {/* Confetti */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}

      {/* Falling emojis */}
      <AnimatePresence>
        {showAnimation && renderFallingItems()}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="flex flex-wrap justify-center text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-600">
              {"Welcome to BiteSized".split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className="mx-1"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-2xl sm:text-3xl text-red-600 md:text-4xl font-bold drop-shadow-lg"
            >
              Hello, {user.name || user.email}! 🎉
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 2.5 }}
              className="mt-8 inline-block px-6 py-4 bg-white text-green-900 rounded-3xl shadow-2xl text-xl sm:text-2xl font-extrabold"
            >
              Let's go to your dashboard!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
