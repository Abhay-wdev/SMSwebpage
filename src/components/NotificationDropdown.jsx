import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, CheckCircle, Package, BarChart } from "lucide-react";

export default function NotificationDropdown({ onClose }) {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      icon: <Package size={16} />,
      message: "Order #123 has been shipped",
      time: "2 mins ago",
    },
    {
      id: 2,
      icon: <BarChart size={16} />,
      message: "Analytics report is ready",
      time: "10 mins ago",
    },
    {
      id: 3,
      icon: <CheckCircle size={16} />,
      message: "System updated successfully",
      time: "1 hour ago",
    },
  ];

  const handleViewAllClick = () => {
    onClose();
    navigate("/notifications");
  };

  return (
    <div
      className="absolute mt-3 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 animate-fadeIn
                 left-[-80px] -translate-x-1/2
                 sm:left-auto sm:right-2 sm:translate-x-5"
    >
      <div className="px-4 py-3 border-b rounded-t-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm flex items-center gap-2">
        <Bell size={18} className="text-white" />
        Notifications
      </div>

      <ul className="max-h-64 overflow-y-auto custom-scroll divide-y">
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <li
              key={note.id}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition duration-200"
            >
              <div className="mt-1 text-blue-500">{note.icon}</div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-800">{note.message}</p>
                <p className="text-xs text-gray-500 mt-1">{note.time}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500 text-sm text-center">
            No new notifications
          </li>
        )}
      </ul>

      <div
        className="text-center bg-gray-50 text-blue-600 hover:bg-blue-50 transition p-3 rounded-b-xl text-sm font-medium cursor-pointer"
        onClick={handleViewAllClick}
      >
        View All
      </div>
    </div>
  );
}
