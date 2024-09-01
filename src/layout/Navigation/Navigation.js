import "./style.css";
import { NavLink, Link } from "react-router-dom";
import {
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider, Dropdown } from "antd";

const Navigation = () => {
  const items = [
    {
      key: "1",
      label: <Link to="/user">Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      label: <Link>Đổi mật khẩu</Link>,
    },
    {
      key: "3-divider",
      label: (
        <div>
          <Divider
            style={{
              borderTop: "1px solid #999",
              margin: "5px 0",
              width: "50%",
            }}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: <Link>Đăng xuất</Link>,
    },
  ];

  return (
      <div className="navigation">
        <h1>
          <Link className="logo" to="/">
            STORE
          </Link>
        </h1>
        <div className="link-navigation">
          <NavLink to="/" className="size">
            Home
          </NavLink>
          <NavLink to="/product" className="size">
            Product
          </NavLink>
          <NavLink to="/history" className="size">
            History
          </NavLink>
          <NavLink to="/contact" className="size">
            Contact
          </NavLink>
        </div>
        <div className="icon-navigation">
          <BellOutlined className="size-icon" />
          <ShoppingCartOutlined className="size-icon" />
          <Dropdown
            menu={{
              items,
            }}
          >
            <UserOutlined className="size-icon" />
          </Dropdown>
        </div>
      </div>
  );
};

export default Navigation;
