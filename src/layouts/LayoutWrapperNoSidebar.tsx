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
      {/* Header and Introduction with the same background */}
      <div
        className="relative w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center text-white font-sans"
        style={{
          backgroundImage: `url(${introduceImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with darker effect */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10"
          style={{ pointerEvents: "none" }}
        ></div>

        {/* Make sure Header is above the overlay */}
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
