import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <main className="w-full md:w-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
