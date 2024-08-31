import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const SignIn = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State để lưu thông báo lỗi

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", {
        email: info.email,
        password: info.password,
      });

      if (response.data.success) {
        // Nếu đăng nhập thành công, chuyển đến trang chủ
        navigate("/");
      } else {
        // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
        setError(response.data.message || "Invalid email or password");
      }
    } catch (error) {
      // Xử lý lỗi phía server
      setError("Error logging in. Please try again.");
    }
  };

  const handleEye = () => {
    setEye(!eye);
  };

  return (
    <div>
      <div className="sign-in">
        <h1>Sign In</h1>
      </div>
      <div>
        <div>
          <MailOutlined className="icon" />
          <input
            name="email"
            className="box-input"
            placeholder="Email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>
        <div>
          <LockOutlined className="icon" />
          <input
            className="box-input"
            type={eye === true ? "text" : "password"}
            placeholder="Password"
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
          {eye === true ? (
            <EyeOutlined className="icon-eye" onClick={handleEye} />
          ) : (
            <EyeInvisibleOutlined className="icon-eye" onClick={handleEye} />
          )}
        </div>
        {error && <p className="error-message">{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}
      </div>
      <div className="button">
        <button onClick={handleSignIn} className="button-signin">
          Login
        </button>
        <Link to="/login/signup">Sign up</Link>
      </div>
    </div>
  );
};
export default SignIn;
