// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import NotificationsPage from "./pages/NotificationsPage";

export default function App() {
  return (
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="orders" element={<Orders />} />
        <Route path="notifications" element={<NotificationsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
