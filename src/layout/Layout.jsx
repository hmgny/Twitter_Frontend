import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        <SideBar />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
