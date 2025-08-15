// src/components/ui/progress.jsx
import React from "react";

export function Progress({ value = 0, className = "" }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 overflow-hidden ${className}`}>
      <div
        className="bg-green-600 h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
