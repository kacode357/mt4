import { Card, Row, Col } from "antd";
import vanmieu from "../../assets/vanmieu1.png";
import chuaMotCot from "../../assets/chua-mot-cot.png";
import langBac from "../../assets/lang-bac.png";
import hoHoanKiem from "../../assets/ho-hoan-kiem.png";
import cauLongBien from "../../assets/cau-long-bien.png";
import denNgocSon from "../../assets/den-ngoc-son.png";

const ImageList = () => {
  const images = [
    { id: 1, img: vanmieu, title: "Văn Miếu", author: "Tác giả A" },
    { id: 2, img: chuaMotCot, title: "Chùa Một Cột", author: "Tác giả B" },
    { id: 3, img: langBac, title: "Lăng Bác", author: "Tác giả C" },
    { id: 4, img: hoHoanKiem, title: "Hồ Hoàn Kiếm", author: "Tác giả D" },
    { id: 5, img: cauLongBien, title: "Cầu Long Biên", author: "Tác giả E" },
    { id: 6, img: denNgocSon, title: "Đền Ngọc Sơn", author: "Tác giả F" },
  ];

  return (
    <div className="container bg-[#fdf4e3] ">
      {/* Tiêu đề cho component */}
      <h2 className="text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#181818] to-[#353539b0] drop-shadow-lg">
        Danh Sách Ảnh Các Di Tích Lịch Sử
      </h2>
      
      {/* Row để chứa các thẻ Card cho 3 ảnh trên */}
      <Row gutter={[8, 12]} justify="center">
        {images.slice(0, 3).map((image) => (
          <Col span={8} key={image.id} className="flex justify-center">
            <Card
              hoverable
              cover={
                <div className="overflow-hidden rounded-lg h-64">
                  <img
                    alt={image.title}
                    src={image.img}
                    className="object-cover w-full h-full transition-transform duration-300"
                  />
                </div>
              }
              className="w-11/12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{image.title}</div>
                <div className="text-gray-500 text-sm">{image.author}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Row để chứa các thẻ Card cho 3 ảnh dưới */}
      <Row gutter={[8, 12]} justify="center" style={{ marginTop: '12px' }}>
        {images.slice(3, 6).map((image) => (
          <Col span={8} key={image.id} className="flex justify-center">
            <Card
              hoverable
              cover={
                <div className="overflow-hidden rounded-lg h-64">
                  <img
                    alt={image.title}
                    src={image.img}
                    className="object-cover w-full h-full transition-transform duration-300"
                  />
                </div>
              }
              className="w-11/12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">{image.title}</div>
                <div className="text-gray-500 text-sm">{image.author}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageList;
