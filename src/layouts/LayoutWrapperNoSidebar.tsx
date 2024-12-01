// src/layouts/LayoutWrapper.tsx
import { Layout } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";  // Import Footer
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const LayoutWrapper = () => {
  return (
    <Layout>
      {/* Header */}
      <HeaderComponent />
      
      <Layout>
        <Content>
          <Outlet /> {/* Hiển thị các component con */}
        </Content>
        
        {/* Footer */}
        <FooterComponent /> {/* Chèn Footer vào đây */}
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
