import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate
import axios from "axios";

const SignUp = () => {
  const [info, setInfo] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    reEnterPassword: "",
  });

  const navigate = useNavigate(); // Tạo hook điều hướng

  const handleSignUp = async () => {
    if (info.password !== info.reEnterPassword) {
      return alert("Passwords do not match!");
    }

    try {
      await axios.post("http://localhost:4000/api/user/create", {
        name: info.name,
        email: info.email,
        password: info.password,
        phoneNumber: info.phoneNumber,
      });

      
      setTimeout(() => {
        alert("Registration successful!");
        navigate("/signin"); // Điều hướng tới trang đăng nhập
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <div>
          <label>Email</label>
          <input
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            value={info.phoneNumber}
            onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={info.password}
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />
        </div>
        <div>
          <label>Re-enter password</label>
          <input
            type="password"
            value={info.reEnterPassword}
            onChange={(e) =>
              setInfo({ ...info, reEnterPassword: e.target.value })
            }
          />
        </div>
      </div>
      <button onClick={handleSignUp}>Register</button>
    </div>
  );
};

export default SignUp;
