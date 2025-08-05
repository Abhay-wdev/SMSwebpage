import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          collapsed ? "md:ml-[70px]" : "md:ml-[260px]"
        }`}
      >
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-0  hide-scrollbar overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
