import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
