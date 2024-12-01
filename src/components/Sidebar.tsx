import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, PictureOutlined } from '@ant-design/icons';
import { useState } from 'react';


const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      width={200}
      className="custom-sider"  // Áp dụng lớp CSS vào Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapse}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        className="custom-sider"
      >
        <Menu.Item key="1" icon={<HomeOutlined />} className="custom-menu-item">
          <Link to="/admin/manager-account">Account</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PictureOutlined />} className="custom-menu-item">
          <Link to="/admin/manager-picture">Picture</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
