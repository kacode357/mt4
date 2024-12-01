// src/components/ManagerAccount.tsx
import  { useState } from "react";
import { Table, Button, Popconfirm, Modal, Form, Input, Switch, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface Account {
  key: string;
  name: string;
  email: string;
  status: boolean; // Trạng thái dưới dạng boolean
}

const ManagerAccount = () => {
  const [data, setData] = useState<Account[]>([
    { key: "1", name: "Nguyễn Văn A", email: "a@example.com", status: true },
    { key: "2", name: "Trần Thị B", email: "b@example.com", status: false },
    { key: "3", name: "Lê Minh C", email: "c@example.com", status: true },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);

  // Cột bảng
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: boolean, record: Account) => (
        <Switch
          checked={status}
          onChange={(checked) => handleStatusChange(checked, record.key)}
        />
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (record: Account) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm title="Bạn có chắc chắn muốn xoá?" onConfirm={() => handleDelete(record.key)}>
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Hàm thay đổi trạng thái
  const handleStatusChange = (checked: boolean, key: string) => {
    const updatedData = data.map((item) =>
      item.key === key ? { ...item, status: checked } : item
    );
    setData(updatedData);
  };

  // Hiển thị Modal để chỉnh sửa tài khoản
  const handleEdit = (record: Account) => {
    setEditingAccount(record);
    setIsModalVisible(true);
  };

  // Xử lý việc lưu lại thay đổi khi sửa tài khoản
  const handleSave = (values: Partial<Account>) => {
    const updatedData = data.map((item) =>
      item.key === editingAccount?.key ? { ...item, ...values } : item
    );
    setData(updatedData);
    setIsModalVisible(false);
    setEditingAccount(null);
  };

  // Xoá tài khoản
  const handleDelete = (key: string) => {
    const updatedData = data.filter((item) => item.key !== key);
    setData(updatedData);
  };

  return (
    <div className="container p-8">
      <Table columns={columns} dataSource={data} />

      {/* Modal chỉnh sửa tài khoản */}
      <Modal
        title="Chỉnh sửa tài khoản"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={editingAccount || {}}
          onFinish={handleSave}
          layout="vertical"
        >
          <Form.Item label="Tên" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          {/* Chỉ còn các trường khác, không còn Switch nữa */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManagerAccount;
