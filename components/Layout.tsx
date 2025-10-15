"use client";
import React from "react";
import NavBar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideFooter = pathname === "/contact";

  return (
    <div>
      <NavBar />
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
