import {
  DashboardOutlined,
  TeamOutlined,
  CarOutlined,
  DollarCircleOutlined,
  UsergroupAddOutlined,
  HistoryOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import Signin from "../Login";
import ChartComponent from "./Chart";
import Count from "./Count";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeKey, setActiveKey] = useState("1");

  const sidebarItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Home",
      content: <ChartComponent />,
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "Users",
      content: <Count />,
    },
    { key: "3", icon: <CarOutlined />, label: "Cars", content: "Cars content" },
    {
      key: "4",
      icon: <DollarCircleOutlined />,
      label: "Payments",
      content: "Payments content",
    },
    {
      key: "5",
      icon: <UsergroupAddOutlined />,
      label: "Customers",
      content: "Customers content",
    },
    {
      key: "6",
      icon: <HistoryOutlined />,
      label: "Rental History",
      content: "Rental history content",
    },
  ];

  const handleMenuItemClick = (item) => {
    setActiveKey(item.key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <div className="sidebar-container" style={{ paddingTop: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              color: "white",
            }}
          >
            <CarOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
            <span style={{ fontSize: "16px" }}> System Dashboard</span>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[activeKey]}
            onClick={handleMenuItemClick}
            items={sidebarItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "16px", color: "black" }}>
            Hajur ko Car Rental System
          </div>
          <div
            style={{
              marginRight: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <UserOutlined style={{ marginRight: "8px", color: "black" }} />
            <span style={{ color: "black", marginRight: "16px" }}>
              John Doe
            </span>
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginRight: "16px",
              }}
            >
              Admin
            </span>
            <SettingOutlined style={{ fontSize: "20px", color: "black" }} />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              overflow: "auto",
              height: "calc(100vh - 168px)",
              background: "#ccc",
            }}
          >
            {sidebarItems.map((item) => {
              return item.key === activeKey && item.content;
            })}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Hajur ko Car Rental System ©2023 Created by Your Company
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
