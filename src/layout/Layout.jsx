import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children, userId }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        <SideBar userId={userId} />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
