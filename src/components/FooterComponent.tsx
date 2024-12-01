// src/components/FooterComponent.tsx
import { Layout, Row, Col, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="bg-[#2d2d2d] py-8"> {/* Thay đổi nền footer thành màu tối */}
      <div className="container mx-auto text-white">
        <Row justify="space-between" align="middle" gutter={[16, 24]}>
          {/* Logo and Info */}
          <Col xs={24} sm={12} md={8}>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">Công ty ABC</h3>
              <p className="text-gray-400">Địa chỉ: 123 Phố ABC, Quận XYZ, Hà Nội</p>
              <p className="text-gray-400">Email: contact@abc.com</p>
              <p className="text-gray-400">Hotline: 1900 1234</p>
            </div>
          </Col>

          {/* Social Media Icons */}
          <Col xs={24} sm={12} md={8}>
            <div className="flex justify-center sm:justify-start">
              <Space size="large">
                <a href="#" target="_blank" className="text-gray-400 hover:text-blue-500">
                  <FacebookOutlined className="text-2xl" />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-blue-400">
                  <TwitterOutlined className="text-2xl" />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-pink-500">
                  <InstagramOutlined className="text-2xl" />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-blue-700">
                  <LinkedinOutlined className="text-2xl" />
                </a>
              </Space>
            </div>
          </Col>

          {/* Footer Links */}
          <Col xs={24} sm={12} md={8}>
            <div className="text-center sm:text-right">
              <h4 className="text-lg font-semibold">Liên kết nhanh</h4>
              <ul className="text-gray-400">
                <li><a href="#" className="hover:text-blue-500">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-blue-500">Dịch vụ</a></li>
                <li><a href="#" className="hover:text-blue-500">Liên hệ</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">© 2024 Công ty ABC. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
