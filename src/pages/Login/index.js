import { Outlet } from "react-router-dom";
import "../Login/style.css";
import { UserOutlined } from "@ant-design/icons";
const Login = () => {
  return (
    <div className="body">
      <div className="form">
        <div className="box">
          <div className="content-box">
            <div className="box-icon-form">
              <div className="backgroud-icon">
                <UserOutlined className="icon-form" />
              </div>
              <h2>Welcome</h2>
            </div>
            <div className="box-form">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
