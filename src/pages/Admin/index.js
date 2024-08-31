import { Outlet } from "react-router-dom";
import "./style.css"
const Admin = () => {
  return (
    <div className="admin">
      <div className="button">
        <button className="button-item">Product</button>
        <button className="button-item">User</button>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};
export default Admin;
