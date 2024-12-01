import { Card, Row, Col } from "antd";
import vanmieu from "../../assets/vanmieu1.png";



const ImageList = () => {
  const images = [
    { id: 1, img: vanmieu, title: "Văn Miếu ", author: "Tác giả A" },
    { id: 2, img: vanmieu, title: "Chùa Một Cột", author: "Tác giả B" },
    { id: 3, img: vanmieu, title: "Lăng Bác", author: "Tác giả C" },
    { id: 4, img: vanmieu, title: "Hồ Hoàn Kiếm", author: "Tác giả D" },
    { id: 5, img: vanmieu, title: "Cầu Long Biên", author: "Tác giả E" },
    { id: 6, img: vanmieu, title: "Đền Ngọc Sơn", author: "Tác giả F" },
  ];

  return (
    <div className="container bg-[#fdf4e3] py-10 px-20">
      {/* Row để chứa các thẻ Card */}
      <Row gutter={[16, 24]} justify="center">
        {/* Render 6 card */}
        {images.map((image) => (
          <Col span={8} key={image.id} className="flex justify-center">
            <Card
              hoverable
              cover={<img alt={image.title} src={image.img} />}
              className=" w-11/12 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
