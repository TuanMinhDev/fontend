import "./style.css";
import { createFromIconfontCN } from "@ant-design/icons";
import { Space} from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Footer = () => {
  return (
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
        <p>Đăng ký nhận tin tức khuyến mại mới từ Store</p>
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
  );
};
export default Footer;
