

import {
  CalendarDays,
  BarChart3,
  Apple,
  Users2,
  DollarSign,
  Menu,
  X,
  Phone,
  Info,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Dashboard", icon: <BarChart3 size={20} />, path: "/dashboard" },
  { label: "Meal Plans", icon: <CalendarDays size={20} />, path: "/meal-plans" },
  { label: "Nutrition Info", icon: <Apple size={20} />, path: "/nutrition-info" },
  { label: "Client Management", icon: <Users2 size={20} />, path: "/client-management" },
  { label: "Pricing Plans", icon: <DollarSign size={20} />, path: "/pricing-plans" },
  { label: "Contact Us", icon: <Phone size={20} />, path: "/contact-us" },
  { label: "About Us", icon: <Info size={20} />, path: "/about-us" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-4 flex justify-between items-center z-50 shadow-lg md:hidden">
        <h1 className="font-bold text-lg tracking-wide">Bitesized</h1>
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6 hover:text-yellow-300 transition-colors" />
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-green-400 to-green-600 text-white p-6 z-50 transform transition-transform duration-300 shadow-2xl rounded-r-xl
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:block md:h-screen
        `}
      >
        {/* Close Icon (Mobile) */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h1 className="text-2xl font-bold tracking-wider">Bitesized</h1>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 hover:text-red-300 transition-colors" />
          </button>
        </div>

        {/* Branding (Desktop) */}
        <div className="hidden md:flex flex-col items-start mb-8">
          <h1 className="text-3xl font-extrabold tracking-wider">Bitesized</h1>
          <p className="text-sm text-green-100 mt-1">Professional Meal Planning</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {menu.map((item, i) => (
            <NavLink
              to={item.path}
              key={i}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `group flex items-center space-x-4 w-full px-4 py-3 rounded-lg transition-all duration-300
                ${isActive ? "bg-white/20 backdrop-blur-sm font-semibold shadow-lg" : "hover:bg-white/10 hover:translate-x-1"}`
              }
            >
              <div className="text-white group-hover:text-yellow-300 transition-colors">
                {item.icon}
              </div>
              <span className="text-white group-hover:text-yellow-300 transition-colors font-medium">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Footer / Optional */}
        <div className="hidden md:flex flex-col mt-auto text-green-100 text-xs font-light space-y-1">
     
        </div>
      </aside>
    </>
  );
}


