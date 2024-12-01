import { Layout } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent"; // Import Footer
import { Outlet } from "react-router-dom";
import Introduction from "../components/homepage/Introduction";
import introduceImage from "../assets/introduce3.png";

const { Content } = Layout;

const LayoutWrapper = () => {
  return (
    <Layout>
      {/* Header và Introduction với cùng nền */}
      <div
        className="relative w-full h-[1200px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center flex flex-col items-center justify-center text-white font-sans"
        style={{
          backgroundImage: `url(${introduceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay với hiệu ứng tối hơn */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10"
          style={{ pointerEvents: "none" }}
        ></div>

        {/* Đảm bảo Header luôn nằm trên overlay */}
        <div className="relative z-20">
          <HeaderComponent />
        </div>

        <Introduction />
      </div>

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
