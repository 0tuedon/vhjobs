import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8FDFF] min-h-fit w-full relative max-w-[1500px] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
