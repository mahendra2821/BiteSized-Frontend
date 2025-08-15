// src/components/ui/tabs.jsx
import React, { useState } from "react";

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const triggers = [];
  const content = [];

  React.Children.forEach(children, (child) => {
    if (child.type === TabsTrigger) {
      triggers.push(React.cloneElement(child, { activeTab, setActiveTab }));
    } else {
      content.push(child);
    }
  });

  return (
    <div>
      <div className="flex space-x-2 mb-4">{triggers}</div>
      {content.map((child, index) =>
        child.props.value === activeTab ? (
          <div key={index}>{child}</div>
        ) : null
      )}
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="flex gap-2">{children}</div>;
}

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        isActive ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}
