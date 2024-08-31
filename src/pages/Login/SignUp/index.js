import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const SignUp = () => {
  const [eye, setEye] = useState(false);
  const [reEye, setReEye] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [info, setInfo] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    rePassword: "",
  });

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/create",
        {
          name: info.name,
          email: info.email,
          phoneNumber: info.phoneNumber,
          password: info.password,
        }
      );
      console.log(response);
      navigate("/login/signin");
    } catch (err) {
      if (err.response && err.response.status === 400 && err.response.data.message.includes("Email already exists")) {
        setErrorMessage("Email đã tồn tại");
      } else {
        console.error(err);
        setErrorMessage("lỗi");
      }
    }
  };

  const handleEye = () => {
    setEye(!eye);
  };

  const handleReEye = () => {
    setReEye(!reEye);
  };

  return (
    <div>
      <div className="sign-up">
        <h1>Sign Up</h1>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label>Email</label>
          <input
            className="input"
            type="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            className="input"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input
            className="input"
            value={info.phoneNumber}
            onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="input-pass"
            type={eye ? "text" : "password"}
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
          {eye ? (
            <EyeOutlined className="icon-eye" onClick={handleEye} />
          ) : (
            <EyeInvisibleOutlined className="icon-eye" onClick={handleEye} />
          )}
        </div>
        <div className="form-group">
          <label>Re-enter password</label>
          <input
            className="input-pass"
            type={reEye ? "text" : "password"}
            value={info.rePassword}
            onChange={(e) => setInfo({ ...info, rePassword: e.target.value })}
          />
          {reEye ? (
            <EyeOutlined className="icon-eye" onClick={handleReEye} />
          ) : (
            <EyeInvisibleOutlined className="icon-eye" onClick={handleReEye} />
          )}
        </div>
      </div>

      
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="button">
        <button onClick={handleSignUp} className="button-signup">
          Register
        </button>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
