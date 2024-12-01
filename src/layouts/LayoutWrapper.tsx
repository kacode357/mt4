// src/routes/LayoutWrapper.tsx
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponent2";
import Introduction from "../components/homepage/Introduction";

const { Content } = Layout;

const LayoutWrapper = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Giữ Header ở trên */}
      <Header />
      <Introduction />
      <Layout>
        {/* Sidebar nằm bên trái */}
        <Sidebar />
        <Layout style={{ flex: 1 }}>
          <Content >
            <Outlet /> {/* Hiển thị các component con */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
