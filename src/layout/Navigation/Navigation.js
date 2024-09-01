import "./style.css";
import { NavLink, Link, Outlet } from "react-router-dom";
import {
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { Space, Divider, Dropdown } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

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
    <div className="layout">
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
      <div>
        <Outlet />
      </div>
      <div className="footer">
        <div className="footer-section">
          <h3>Chính sách</h3>
          <p>Tìm kiếm</p>
          <p>Giới thiệu</p>
        </div>
        <div className="footer-section">
          <h3>Hỗ trợ mua hàng</h3>
          <p>Áo</p>
          <p>Quần</p>
          <p>Phụ kiện</p>
          <p>Giày</p>
        </div>
        <div className="footer-section">
          <h3>Thông tin</h3>
          <p>zalo: 0123456789</p>
          <p>Địa chỉ: Thanh xuân, Hà Nội</p>
        </div>
        <div className="footer-section">
          <h3>NEWSLETTER</h3>
          <p>
            Đăng ký nhận tin tức khuyến mại mới từ Store
          </p>
        </div>
        <div className="footer-section">
          <h3>Fanpage</h3>
          <Space>
            <IconFont type="icon-tuichu" />
            <IconFont type="icon-facebook" />
            <IconFont type="icon-twitter" />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
