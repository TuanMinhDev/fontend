import { Outlet } from "react-router-dom";
import "../Login/style.css";

const Login = () => {
  return (
    <div className="body">
      <div className="form">
        <div className="box">
          
            <Outlet />
          
        </div>
      </div>
    </div>
  );
};
export default Login;
