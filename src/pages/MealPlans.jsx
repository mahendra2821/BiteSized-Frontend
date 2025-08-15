import React, { useState } from 'react';
import WeeklyPlan from './WeeklyPlan';
import DailyPlan from './DailyPlan';
import { motion, AnimatePresence } from 'framer-motion';

const MealPlans = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <div className="min-h-screen md:mt-0 p-6 flex flex-col items-center"
      style={{
        background: 'linear-gradient(135deg, #e3fce1, #f0fff4)',
      }}
    >
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center mb-6 p-1 rounded-2xl shadow-lg backdrop-blur-md bg-white/70 border border-green-200"
      >
        {['daily', 'weekly'].map((tab) => (
          <button
            key={tab}
            className={`relative w-32 py-2 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === tab
                ? 'text-green-900'
                : 'text-gray-500 hover:text-green-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-green-200 rounded-xl z-[-1]"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            {tab === 'daily' ? 'Daily Plan' : 'Weekly Plan'}
          </button>
        ))}
      </motion.div>

      {/* Tab Content with Animation */}
      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {activeTab === 'daily' ? (
            <motion.div
              key="daily"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <DailyPlan />
            </motion.div>
          ) : (
            <motion.div
              key="weekly"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <WeeklyPlan />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MealPlans;
