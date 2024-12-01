import { Popover } from "antd";
import vanmieu from "../../assets/vanmieu1.png";
import chuaMotCot from "../../assets/chua-mot-cot.png";
import langBac from "../../assets/lang-bac.png";
import hoHoanKiem from "../../assets/ho-hoan-kiem.png";
import cauLongBien from "../../assets/cau-long-bien.png";
import denNgocSon from "../../assets/den-ngoc-son.png";
import hotay from "../../assets/hotay.jpg";
import dinhdoclap from "../../assets/dinhdoclap.jpg";
import nhathoducbasaigon from "../../assets/nhathoducbasaigon.jpg";
import buudientrungtamsaigon from "../../assets/buudientrungtamsaigon.jpg";
import baotangchungtichvietnam from "../../assets/baotangchungtichvietnam.jpg";
import diadaocuchi from "../../assets/diadaocuchi.jpg";
import nhahatlonsaigon from "../../assets/nhahatlonsaigon.jpg";
import baotanglichsuvietnam from "../../assets/baotanglichsuvietnam.jpg";
import tongquanditichlichsuvietnam from "../../assets/tongquanditichlichsuvietnam.jpg";
import quangcanhthanhphoditichlichsu from "../../assets/quangcanhthanhphoditichlichsu.jpg";

const images = [
  {
    id: 1,
    img: vanmieu,
    title: "Văn Miếu",
    author: "Tác giả A",
    description: "Mô tả di tích Văn Miếu",
  },
  {
    id: 2,
    img: chuaMotCot,
    title: "Chùa Một Cột",
    author: "Tác giả B",
    description: "Mô tả di tích Chùa Một Cột",
  },
  {
    id: 3,
    img: langBac,
    title: "Lăng Bác",
    author: "Tác giả C",
    description: "Mô tả di tích Lăng Bác",
  },
  {
    id: 7,
    img: hotay,
    title: "Hồ Tây",
    author: "Tác giả G",
    description: "Mô tả di tích Hồ Tây",
  },
  {
    id: 4,
    img: hoHoanKiem,
    title: "Hồ Hoàn Kiếm",
    author: "Tác giả D",
    description: "Mô tả di tích Hồ Hoàn Kiếm",
  },
  {
    id: 5,
    img: cauLongBien,
    title: "Cầu Long Biên",
    author: "Tác giả E",
    description: "Mô tả di tích Cầu Long Biên",
  },
  {
    id: 6,
    img: denNgocSon,
    title: "Đền Ngọc Sơn",
    author: "Tác giả F",
    description: "Mô tả di tích Đền Ngọc Sơn",
  },
  {
    id: 8,
    img: dinhdoclap,
    title: "Dinh Độc Lập",
    author: "Tác giả H",
    description: "Mô tả di tích Dinh Độc Lập",
  },
  {
    id: 9,
    img: nhathoducbasaigon,
    title: "Nhà Thờ Đức Bà Sài Gòn",
    author: "Tác giả I",
    description: "Mô tả di tích Nhà Thờ Đức Bà Sài Gòn",
  },
  {
    id: 10,
    img: buudientrungtamsaigon,
    title: "Bưu Điện Trung Tâm Sài Gòn",
    author: "Tác giả J",
    description: "Mô tả di tích Bưu Điện Trung Tâm Sài Gòn",
  },
  {
    id: 11,
    img: baotangchungtichvietnam,
    title: "Bảo Tàng Chung Tích Việt Nam",
    author: "Tác giả K",
    description: "Mô tả di tích Bảo Tàng Chung Tích Việt Nam",
  },
  {
    id: 12,
    img: diadaocuchi,
    title: "Địa Đạo Củ Chi",
    author: "Tác giả L",
    description: "Mô tả di tích Địa Đạo Củ Chi",
  },
  {
    id: 13,
    img: nhahatlonsaigon,
    title: "Nhà Hát Lớn Sài Gòn",
    author: "Tác giả M",
    description: "Mô tả di tích Nhà Hát Lớn Sài Gòn",
  },
  {
    id: 14,
    img: baotanglichsuvietnam,
    title: "Bảo Tàng Lịch Sử Việt Nam",
    author: "Tác giả N",
    description: "Mô tả di tích Bảo Tàng Lịch Sử Việt Nam",
  },
  {
    id: 15,
    img: tongquanditichlichsuvietnam,
    title: "Tổng Quản Di Tích Lịch Sử Việt Nam",
    author: "Tác giả O",
    description: "Mô tả di tích Tổng Quản Di Tích Lịch Sử Việt Nam",
  },
  {
    id: 16,
    img: quangcanhthanhphoditichlichsu,
    title: "Quang Cảnh Thành Phố Di Tích Lịch Sử",
    author: "Tác giả P",
    description: "Mô tả di tích Quang Cảnh Thành Phố Di Tích Lịch Sử",
  },
];

const ImageList = () => (
  <div className="bg-[#fdf4e3] py-4 px-4">
    <h2 className="text-4xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#181818] to-[#353539b0] drop-shadow-lg">
      Danh Sách Ảnh Các Di Tích Lịch Sử
    </h2>

    {/* Dùng CSS Grid với gap nhỏ để ảnh không quá xa nhau */}
    <div className="list">
      {images.map((image) => (
        <div key={image.id} className="">
          <Popover
            content={
                <div className="p-2">
                <img
                  src={image.img}
                  alt={image.title}
                  className="max-w-xs max-h-56 object-contain transform scale-90"
                />
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.description}</p>
                <p className="text-sm text-gray-400">Tác giả: {image.author}</p>
                </div>
            }
            title="Thông tin di tích"
            trigger="hover"
            placement="right"
          >
            <img alt={image.title} src={image.img} className="w-full h-auto" />
          </Popover>
        </div>
      ))}
    </div>
  </div>
);

export default ImageList;
