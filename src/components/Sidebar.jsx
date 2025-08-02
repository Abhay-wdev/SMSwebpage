import React from "react";
import { NavLink } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa6";
import { TbTemplate } from "react-icons/tb";
import
  {
    FaHome,
    FaChartBar,
    FaShoppingCart,
    FaChevronLeft,
    FaTimes,
  } from "react-icons/fa";

export default function Sidebar({
  open,
  collapsed,
  setCollapsed,
  setSidebarOpen,
})
{
  const navItems = [
    { label: "Dashboard", path: "/", icon: <FaHome /> },
    { label: "Category", path: "/category", icon: <FaShoppingCart /> },
    { label: "Services", path: "/services", icon:  <FaNetworkWired /> },
     { label: "Template", path: "/template", icon:   <TbTemplate /> },
    
  ];

  return (
    <div
     
      className={`fixed bg-gradient-to-r from-blue-700 to-cyan-600 top-0 left-0 h-full z-50 transition-all duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        ${collapsed ? "w-[72px]" : "w-[260px]"}
        text-white shadow-2xl overflow-y-auto`}
    >
      {/* Mobile close button */}
      <div className="flex  justify-end p-3 md:hidden">
        <FaTimes
          className="cursor-pointer text-xl hover:text-red-400 transition"
          onClick={() => setSidebarOpen(false)}
        />
      </div>
{/* Logo */}
{(open || window.innerWidth >= 768) && (
  <div className="flex flex-col items-center gap-2 py-4 px-4">
    {!collapsed && (
      <>
        <div className="shine-auto relative overflow-hidden border h-15 w-28 p-2 bg-white rounded">
          <img
            src="/logo.webp"
            alt="Logo"
            className="h-full w-full object-contain z-10 relative"
          />
        </div>
        <p className="text-lg  font-semibold text-white-800 text-center">
          SEOcial Media Solutions
        </p>
      </>
    )}
  </div>
)}


      {/* Collapse button */}
      <div className="hidden md:flex justify-end px-3 pb-3">
        <FaChevronLeft
          onClick={() => setCollapsed(!collapsed)}
          className={`cursor-pointer text-white  size-5 transition-transform duration-300 ${collapsed ? "rotate-180" : ""
            } hover:text-white`}
        />
      </div>

      {/* Navigation */}
      <ul className="space-y-3 px-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              end
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-4 py-2 rounded-xl transition-all duration-300
                ${isActive
                  ? "bg-white/30 text-white  font-semibold"
                  : "hover:bg-white/10 text-white/80"
                }`
              }
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center min-w-10 h-10 rounded-xl text-xl transition-transform duration-300 group-hover:scale-110 ${collapsed ? "mx-auto" : ""
                  } ${collapsed
                    ? "bg-blue-500 text-white"
                    : "bg-white/30 text-white"
                  }`}
              >
                {item.icon}
              </div>

              {/* Label */}
              {!collapsed && (
                <span className="text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom Info */}
      {!collapsed && (
        <div className="absolute bottom-3 left-4 right-4 text-xs text-white/60 border-t border-white/30 pt-4 text-center">
          © 2025 AdminPanel
        </div>
      )}
    </div>
  );
}
