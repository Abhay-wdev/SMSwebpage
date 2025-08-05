import React from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

export default function UserDropdown({ onClose }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    onClose();
    navigate("/profile");
  };

  const handleLogout = () => {
    onClose();
    console.log("Logging out...");
    // Add logout logic here (e.g. clear tokens, redirect, etc.)
  };

  return (
    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
      
      <ul className="text-sm text-gray-700 divide-y">
        <li
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
          onClick={handleProfileClick}
        >
          <User size={18} className="text-blue-600" />
          <span>My Profile</span>
        </li>
        <li
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
          onClick={handleLogout}
        >
          <LogOut size={18} className="text-red-500" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}
