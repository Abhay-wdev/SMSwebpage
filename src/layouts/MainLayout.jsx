import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import SplashCursor from '../components/SplashCursor';
const MainLayout = () => {
  return (
    <>
    {/* <SplashCursor/> */}
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
};

export default MainLayout;