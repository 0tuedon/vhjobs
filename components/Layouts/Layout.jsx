import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8FDFF] min-h-fit w-full relative  ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
