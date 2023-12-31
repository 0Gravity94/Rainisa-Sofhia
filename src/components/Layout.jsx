import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full h-full bg-primary">
      <Navbar />
      <div className="w-full h-max">{children}</div>
    </div>
  );
}

export default Layout;
