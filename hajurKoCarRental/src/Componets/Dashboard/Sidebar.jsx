// import {
//   DashboardOutlined,
//   TeamOutlined,
//   CarOutlined,
//   DollarCircleOutlined,
//   UsergroupAddOutlined,
//   HistoryOutlined,
//   SettingOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// import { Layout, Menu, theme } from "antd";
// import React from "react";

// const { Header, Content, Footer, Sider } = Layout;

// const Sidebar = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const sidebarItems = [
//     { key: "1", icon: <DashboardOutlined />, label: "Home" },
//     { key: "2", icon: <TeamOutlined />, label: "Users" },
//     { key: "3", icon: <CarOutlined />, label: "Cars" },
//     { key: "4", icon: <DollarCircleOutlined />, label: "Payments" },
//     { key: "5", icon: <UsergroupAddOutlined />, label: "Customers" },
//     { key: "6", icon: <HistoryOutlined />, label: "Rental History" },
//   ];

//   return (
//     <Layout style={{ height: "100vh" }}>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="logo" />
//         <div className="sidebar-container" style={{ paddingTop: "32px" }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginBottom: "20px",
//               color: "white",
//             }}
//           >
//             <CarOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
//             <span style={{ fontSize: "16px" }}> System Dashboard</span>
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             defaultSelectedKeys={["4"]}
//             items={sidebarItems.map((item) => ({
//               key: item.key,
//               icon: item.icon,
//               label: item.label,
//             }))}
//           />
//         </div>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <div style={{ marginLeft: "16px", color: "black" }}>
//             Hajur ko Car Rental System
//           </div>
//           <div
//             style={{
//               marginRight: "24px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <UserOutlined style={{ marginRight: "8px", color: "black" }} />
//             <span style={{ color: "black", marginRight: "16px" }}>
//               John Doe
//             </span>
//             <span
//               style={{
//                 color: "black",
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 textTransform: "uppercase",
//                 letterSpacing: "1px",
//                 marginRight: "16px",
//               }}
//             >
//               Admin
//             </span>

//             <SettingOutlined style={{ fontSize: "24px", color: "black" }} />
//           </div>
//         </Header>

//         <Content
//           style={{
//             margin: "24px 16px 0",
//             height: "calc(100vh - 112px)",
//             overflow: "auto",
//           }}
//         >
//           <div
//             style={{
//               padding: 24,
//               minHeight: "calc(100vh - 160px)",
//               background: colorBgContainer,
//             }}
//           >
//             content
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//             height: "48px",
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default Sidebar;

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
      content: "Home content",
    },
    {
      key: "2",
      icon: <TeamOutlined />,
      label: "Users",
      content: "Users content",
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
              Dashboard
            </span>
            <SettingOutlined style={{ fontSize: "20px", color: "black" }} />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
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

// import {
//   DashboardOutlined,
//   TeamOutlined,
//   CarOutlined,
//   DollarCircleOutlined,
//   UsergroupAddOutlined,
//   HistoryOutlined,
//   SettingOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

// import { Layout, Menu, theme } from "antd";
// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const { Header, Content, Footer, Sider } = Layout;

// const Sidebar = ({ children }) => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const location = useLocation();
//   const navigate = useNavigate();

//   const [activeKey, setActiveKey] = useState(location.pathname);

//   const sidebarItems = [
//     { key: "1", icon: <DashboardOutlined />, label: "Home", link: "/" },
//     { key: "2", icon: <TeamOutlined />, label: "Users", link: "/users" },
//     { key: "3", icon: <CarOutlined />, label: "Cars", link: "/cars" },
//     {
//       key: "4",
//       icon: <DollarCircleOutlined />,
//       label: "Payments",
//       link: "/payments",
//     },
//     {
//       key: "5",
//       icon: <UsergroupAddOutlined />,
//       label: "Customers",
//       link: "/customers",
//     },
//     {
//       key: "6",
//       icon: <HistoryOutlined />,
//       label: "Rental History",
//       link: "/rental-history",
//     },
//   ];

//   const handleMenuItemClick = (item) => {
//     setActiveKey(item.link);
//     navigate(item.link);
//   };

//   return (
//     <Layout style={{ height: "100vh" }}>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="logo" />
//         <div className="sidebar-container" style={{ paddingTop: "32px" }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginBottom: "20px",
//               color: "white",
//             }}
//           >
//             <CarOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
//             <span style={{ fontSize: "16px" }}> System Dashboard</span>
//           </div>
//           <Menu
//             theme="dark"
//             mode="inline"
//             selectedKeys={[activeKey]}
//             onClick={handleMenuItemClick}
//             items={sidebarItems.map((item) => ({
//               key: item.key,
//               icon: item.icon,
//               label: item.label,
//               link: item.link,
//               // Render links instead of MenuItems
//               itemRender: ({ item, key, domEvent }) => (
//                 <Link
//                   to={item.link}
//                   key={key}
//                   onClick={domEvent.preventDefault()}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               ),
//             }))}
//           />
//         </div>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <UserOutlined
//               style={{ color: "white", fontSize: "24px", marginRight: "16px" }}
//             />
//             <span style={{ color: "white", fontSize: "16px" }}>
//               Hello, John
//             </span>
//           </div>
//           <div>
//             <Menu
//               mode="horizontal"
//               theme="dark"
//               selectedKeys={[]}
//               style={{ lineHeight: "64px" }}
//             >
//               <Menu.SubMenu
//                 icon={<SettingOutlined />}
//                 title="Settings"
//                 popupOffset={[0, 15]}
//               >
//                 <Menu.Item key="setting:1">Profile</Menu.Item>
//                 <Menu.Item key="setting:2">Account</Menu.Item>
//                 <Menu.Divider />
//                 <Menu.Item key="setting:3">Logout</Menu.Item>
//               </Menu.SubMenu>
//             </Menu>
//           </div>
//         </Header>
//         <Content style={{ margin: "24px 16px 0" }}>
//           <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
//             {children}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>
//           ©2023 Created by MyCompany
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default Sidebar;
