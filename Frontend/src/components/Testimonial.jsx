import "../CSS/Testimonial.css";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
import MainNav from "./mainnav";
import Footer from "./Footer/Footer";
import Sidebar1 from "./Home/sidebar1";
import Sidebar from "./Home/sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Testimonial() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);
  const { data: Reviews } = useSelector((state) => state.reviews);
  console.log(Reviews);
  return (
    <>
      {isSidebarOpen && <Sidebar1 onClose={handleCloseSidebar} />}
      <Sidebar onOpenSidebar={handleOpenSidebar} />
      <Navbar></Navbar>
      <Navbar2></Navbar2>
      <MainNav></MainNav>
      <Footer></Footer>
    </>
  );
}
