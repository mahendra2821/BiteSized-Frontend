


import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    name: 'Basic Plan',
    price: "699/- month",
    description: 'Perfect for general wellness and healthy lifestyle maintenance',
    features: [
      '7-day meal plans',
      'Basic nutrition database',
      'Daily calorie tracking',
      'Email support',
      'Mobile app access',
      'Recipe collection (50+)',
    ],
    color: "green",
    popular: false,
  },
 {
    name: 'Premium Plan',
    price: "1299/- month",
    description: 'Comprehensive nutrition coaching for specific health goals',
    features: [
      'Monthly meal plans',
      'Complete nutrition database',
      'Advanced macro tracking',
      'Video consultations (2/month)',
      'Custom meal adjustments',
      'Recipe collection (200+)',
      'Progress analytics',
      'Supplement recommendations',
    ],
    color: "yellow",
    popular: true,
  },
 {
    name: 'Elite Plan',
    price: "999/- month",
    description: 'Personalized nutrition therapy for complex health conditions',
    features: [
      'Fully customized meal plans',
      '1-on-1 nutritionist sessions',
      '24/7 chat support',
      'Lab result analysis',
      'Meal delivery coordination',
      'Recipe collection (500+)',
      'Family meal planning',
      'Health monitoring integration',
      'Monthly health reports',
    ],
    color: "red",
    popular: true,
  },
];



export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen md:mt-0 p-8 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, #a1ffce, #faffd1, #f7d1ff)",
      }}
    >
      {/* Animated floating circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-green-900 mb-12 drop-shadow-lg"
      >
        🌟 Choose Your Plan
      </motion.h2>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.07, rotate: 0.5, boxShadow: "0 15px 40px rgba(0,0,0,0.2)" }}
            className={`relative p-6 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/80 border border-green-200 hover:border-green-400 transition-all duration-300 ${
              plan.popular ? "ring-4 ring-yellow-300" : ""
            }`}
          >
            {plan.popular && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-0 right-0 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-bl-lg shadow-md"
              >
                ⭐ Most Popular
              </motion.span>
            )}

            <h3 className="text-2xl font-bold text-green-900 mb-2">{plan.name}</h3>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <p className="text-4xl font-extrabold text-green-800 mb-4">
              ₹{plan.price}
              <span className="text-lg font-normal text-gray-500"> / month</span>
            </p>

            <ul className="mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white shadow-lg transition-all ${
                plan.color === "green"
                  ? "bg-green-600 hover:bg-green-700"
                  : plan.color === "yellow"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={() => navigate(`/plan/${encodeURIComponent(plan.name)}`, { state: plan })}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Notes Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-4xl mx-auto mt-12 p-6 rounded-xl bg-green-100 shadow-md border border-green-300 relative z-10"
      >
        <h4 className="text-xl font-bold text-green-900 mb-3">📌 Important Notes</h4>
        <ul className="list-disc list-inside text-green-800 space-y-1">
          <li>Prices are per month and include applicable taxes.</li>
          <li>Cancel or upgrade your plan anytime without extra fees.</li>
          <li>Meal plans are customized after your onboarding questionnaire.</li>
          <li>Elite Plan users get priority scheduling and 24/7 chat support.</li>
        </ul>
      </motion.div>
    </section>
  );
}
