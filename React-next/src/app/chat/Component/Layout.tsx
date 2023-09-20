"use client";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items2}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            position: 'sticky',
            top:0
          }}
        >
          <ChatHeader />
        </Header>
        <Content
          style={
            {
              margin: '12px 16px',
            }
          }
        >
          <div
            style={{
              padding: 24,
              minHeight: 460,
              background: "#fff",
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Asen Chating ©2023 Created by AsenWu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
