// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
 
 
import NotificationsPage from "./pages/NotificationsPage";
import { Toaster } from "react-hot-toast";
import Category from "./pages/Category";
import Services from "./pages/Services";
import Template from "./pages/Template";
export default function App() {
  return (<>
  <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 2000,
                iconTheme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
            />
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services/>} />
        <Route path="category" element={ <Category/>} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="template" element={<Template/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}
