import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  const location = useLocation();
  
  // Tentukan varian navbar berdasarkan path
  let navVariant = "default";
  if (location.pathname === "/login" || location.pathname === "/register") {
    navVariant = "auth"; // Hanya logo saja
  }

  return (
    <div className="min-h-screen bg-[#FDF2F2]">
      <Navbar variant={navVariant} />
      <main className={navVariant === "auth" ? "pt-0" : "pt-20"}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;