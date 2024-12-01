import React, { useState } from "react";
import { Table, Modal, Input, Button, notification, Image, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import vanmieu1 from "../assets/vanmieu1.png"; // Import ảnh từ thư mục assets

interface Picture {
  id: string;
  img: string;
  title: string;
  status: string;
}

const ManagerPicture: React.FC = () => {
  // Dữ liệu mẫu
  const pictures: Picture[] = [
    { id: "1", img: vanmieu1, title: "Bức ảnh 2", status: "Đang chờ duyệt" },
    { id: "2", img: vanmieu1, title: "Bức ảnh 1", status: "Đang hoạt động" },
    { id: "3", img: vanmieu1, title: "Bức ảnh 3", status: "Tạm ngừng" },
    { id: "4", img: vanmieu1, title: "Bức ảnh 4", status: "Đang hoạt động" },
    { id: "5", img: vanmieu1, title: "Bức ảnh 5", status: "Tạm ngừng" },
    { id: "6", img: vanmieu1, title: "Bức ảnh 6", status: "Đang chờ duyệt" },
    // Thêm nhiều ảnh hơn để kiểm tra phân trang
  ];

  // State để hiển thị modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [rejectedPicture, setRejectedPicture] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState(""); // Lý do từ chối
  const [currentImage, setCurrentImage] = useState<string | null>(null); // Ảnh đang xem
  const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại

  // Cấu hình cột cho Table
  const columns: ColumnType<Picture>[] = [
    {
      title: "Ảnh",
      dataIndex: "img",
      key: "img",
      render: (img: string) => (
        <img
          src={img}
          alt="thumbnail"
          className="w-36 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-all duration-300" // Bo viền ảnh và hiệu ứng hover
          onClick={() => openImageModal(img)} // Mở modal khi nhấn vào ảnh
        />
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={
            status === "Đang hoạt động"
              ? "green"
              : status === "Đang chờ duyệt"
              ? "yellow"
              : "red"
          }
          key={status}
          className="inline-flex items-center justify-center w-32 text-center" // Đảm bảo kích thước Tag bằng nhau
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      align: "center",
      render: (_: string, record: Picture) => (
        record.status === "Đang chờ duyệt" && (
          <div className="flex gap-2 justify-center">
            <Button
              type="primary"
              onClick={() => handleAction(record.id, "Chấp nhận")}
            >
              Chấp nhận
            </Button>
            <Button
              danger
              onClick={() => handleAction(record.id, "Từ chối")}
            >
              Từ chối
            </Button>
          </div>
        )
      ),
    },
  ];

  // Mở modal xem ảnh
  const openImageModal = (img: string) => {
    setCurrentImage(img);
    setIsImageModalVisible(true);
  };

  // Đóng modal xem ảnh
  const closeImageModal = () => {
    setIsImageModalVisible(false);
    setCurrentImage(null);
  };

  // Xử lý hành động chấp nhận và từ chối
  const handleAction = (id: string, action: string) => {
    if (action === "Từ chối") {
      setRejectedPicture(id);
      setIsModalVisible(true);
    } else {
      console.log(`${action} cho bức ảnh với ID: ${id}`);
      // Bạn có thể xử lý logic chấp nhận ở đây
    }
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalVisible(false);
    setRejectedPicture(null);
    setRejectionReason(""); // Reset lý do khi đóng modal
  };

  // Xử lý thay đổi lý do từ chối
  const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRejectionReason(e.target.value);
  };

  // Xử lý xác nhận từ chối
  const handleReject = () => {
    if (rejectionReason.trim() === "") {
      notification.error({ message: "Vui lòng nhập lý do từ chối" });
      return;
    }
    console.log(`Từ chối bức ảnh có ID: ${rejectedPicture} với lý do: ${rejectionReason}`);
    closeModal();
  };

  // Xử lý sự thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Cập nhật trang hiện tại khi phân trang
  };

  return (
    <div>
      <Table
        dataSource={pictures}
        columns={columns}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: 3, // Số bản ghi trên mỗi trang
          total: pictures.length, // Tổng số bản ghi
          onChange: handlePageChange, // Sự kiện khi chuyển trang
        }}
        className="my-4"
      />

      {/* Modal xác nhận từ chối */}
      <Modal
        title="Xác nhận từ chối"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
        centered // Cân đối modal
      >
        <p>Bạn có chắc chắn muốn từ chối bức ảnh này?</p>
        <Input
          value={rejectionReason}
          onChange={handleReasonChange}
          placeholder="Nhập lý do từ chối"
          className="mb-4"
        />
        <div className="flex justify-between">
          <Button onClick={closeModal}>Hủy</Button>
          <Button danger onClick={handleReject}>
            Từ chối
          </Button>
        </div>
      </Modal>

      {/* Modal hiển thị ảnh lớn */}
      <Modal
        visible={isImageModalVisible}
        onCancel={closeImageModal}
        footer={null}
        width="80%" // Điều chỉnh kích thước modal
        centered // Cân đối modal
      >
        {currentImage && (
          <Image
            src={currentImage}
            alt="Xem"
            preview={false}
            className="rounded-lg" // Bo viền ảnh
          />
        )}
      </Modal>
    </div>
  );
};

export default ManagerPicture;
