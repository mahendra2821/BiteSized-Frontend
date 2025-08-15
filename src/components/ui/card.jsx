// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-2xl shadow-md bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`mt-2 text-gray-800 ${className}`}>
      {children}
    </div>
  );
}
