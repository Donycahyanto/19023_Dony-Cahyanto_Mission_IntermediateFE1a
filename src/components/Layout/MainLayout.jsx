import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-[#FDF7F7]">
      <Navbar variant={isAuthPage ? "auth" : "default"} />

      <main className={isAuthPage ? "pt-[74px] md:pt-[80px]" : "pt-[74px] md:pt-[80px]"}>
        <Outlet />
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
};

export default MainLayout;