import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

export default function Header({ setSidebarOpen }) {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const bellRef = useRef();
  const userRef = useRef();

  const getTitle = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/services":
        return "Services";
      case "/category":
        return "Category";
      case "/template":
        return "Template";
      case "/profile":
        return "My Profile";
      default:
        return "Admin Panel";
    }
  };

  const title = getTitle(location.pathname);

  const handleClickOutside = (e) => {
    if (
      bellRef.current &&
      !bellRef.current.contains(e.target) &&
      userRef.current &&
      !userRef.current.contains(e.target)
    ) {
      setShowNotifications(false);
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
    setShowNotifications(false);
  };

  return (
    <header className="w-full bg-white shadow-md p-4 flex items-center justify-between relative z-40">
      {/* Left Side: Menu Icon + Title */}
      <div className="flex items-center gap-4">
        <FaBars
          className="text-xl cursor-pointer block md:hidden"
          onClick={() => setSidebarOpen(true)}
        />
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>

      {/* Right Side: Notification + User */}
      <div className="flex items-center gap-4 relative">
        {/* Notification Bell */}
        <div className="relative" ref={bellRef}>
          <FaBell
            className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer transition"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <NotificationDropdown onClose={() => setShowNotifications(false)} />
          )}
        </div>

        {/* User Image */}
        <div className="relative" ref={userRef}>
          <div
            className="cursor-pointer p-1 rounded-full hover:bg-gray-100 transition"
            onClick={toggleUserMenu}
          >
            <img
              src="https://i0.wp.com/nik.art/wp-content/uploads/2024/06/4-things-happy-people-dont-do-cover.png?fit=1400%2C933&ssl=1" // 🔁 Replace with your actual image path
              alt="User"
              className="h-9 w-9 rounded-full object-cover border border-gray-300 hover:scale-105 transition duration-200"
            />
          </div>
          {showUserMenu && (
            <UserDropdown onClose={() => setShowUserMenu(false)} />
          )}
        </div>
      </div>
    </header>
  );
}
