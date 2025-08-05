// src/pages/NotificationsPage.jsx
import React from "react";
import { Bell, Clock } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
          <Bell className="text-blue-500" size={28} />
          All Notifications
        </h2>

        <ul className="space-y-4">
          {[...Array(10)].map((_, idx) => (
            <li
              key={idx}
              className="group relative p-5 border rounded-xl shadow-sm bg-white hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-10 h-10">
                  <Bell size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    🔔 Notification #{idx + 1}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Clock size={14} className="text-gray-400" />
                    Timestamp: Just now
                  </p>
                </div>
              </div>

              {/* Shine effect on hover */}
              <span className="absolute inset-0 pointer-events-none group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
