import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="from-mutedBlue-300 to-mutedBlue-200 min-h-screen bg-linear-to-br">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
