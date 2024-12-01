import { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import introduceImage from "../../assets/introduce2.png";

const Introduction = () => {
  const [inView, setInView] = useState(false);

  // Set timeout or check the page load to trigger animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInView(true); // Trigger animations after some delay (e.g., when the page loads)
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white font-sans overflow-hidden" // Thêm overflow-hidden vào div cha
      style={{ backgroundImage: `url(${introduceImage})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl px-8 space-y-6 lg:space-x-16 lg:space-y-0
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          transition-all duration-1000 ease-out`}
      >
        {/* Left Section (Introduction Text) */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-wider
            ${inView ? 'scale-100' : 'scale-110'} transition-all duration-1000 ease-out`}
          >
            Triển Lãm Kí Ức 4.0
          </h2>
          <p className={`text-lg leading-relaxed opacity-90
            ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            Chào mừng bạn đến với nền tảng nơi kỉ niệm trở thành tác phẩm nghệ
            thuật. Chúng tôi sẽ chọn ra những tác phẩm đẹp nhất để triển lãm và
            lan tỏa giá trị của từng câu chuyện.
          </p>
          {/* Call to Action */}
          <Button
            type="primary"
            size="large"
            className="mt-6 bg-[#ff8f00] hover:bg-[#ff6f00] transition-colors"
            onClick={() => alert('Explore Now!')}
          >
            Khám Phá Ngay
          </Button>
        </div>

        {/* Right Section (Features with Ant Design Cards) */}
        <div className="flex-1 w-full space-y-6 text-left overflow-hidden"> {/* Thêm overflow-hidden để không có cuộn */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-200">Tính năng nổi bật:</h3>

          <div className="space-y-4">
            {/* Each card */}
            <Card
              className={`transition-all transform bg-transparent border border-gray-300 rounded-lg shadow-lg ${inView ? 'opacity-100' : 'opacity-0'} hover:scale-105 hover:shadow-2xl`}
              bordered={false}
              hoverable
              title={<span className="text-xl font-semibold text-gray-200">Tải ảnh lên dễ dàng</span>}
              extra={<Button type="link" className="text-[#ff8f00] hover:text-[#ff6f00]">Tìm hiểu thêm</Button>}
            >
              <p className="text-sm mt-1 text-gray-200">Người dùng dễ dàng tải ảnh lên từ thiết bị cá nhân.</p>
            </Card>

            <Card
              className={`transition-all transform bg-transparent border border-gray-300 rounded-lg shadow-lg ${inView ? 'opacity-100' : 'opacity-0'} hover:scale-105 hover:shadow-2xl`}
              bordered={false}
              hoverable
              title={<span className="text-xl font-semibold text-gray-200">Đánh giá tự động</span>}
              extra={<Button type="link" className="text-[#ff8f00] hover:text-[#ff6f00]">Tìm hiểu thêm</Button>}
            >
              <p className="text-sm mt-1 text-gray-200">Hệ thống đánh giá tự động dựa trên AI.</p>
            </Card>

            <Card
              className={`transition-all transform bg-transparent border border-gray-300 rounded-lg shadow-lg ${inView ? 'opacity-100' : 'opacity-0'} hover:scale-105 hover:shadow-2xl`}
              bordered={false}
              hoverable
              title={<span className="text-xl font-semibold text-gray-200">Bảo mật cao</span>}
              extra={<Button type="link" className="text-[#ff8f00] hover:text-[#ff6f00]">Tìm hiểu thêm</Button>}
            >
              <p className="text-sm mt-1 text-gray-200">Ảnh được bảo mật và lưu trữ an toàn.</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
