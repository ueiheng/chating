"use client";
import React, { useState } from "react";
import ChatHeader from "./Component/ChatHeader";
import LayoutHeader from "./Component/LayoutHeader";
import { Layout, Menu, MenuProps } from "antd";
import ChatContent from "./Component/ChatContent";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons";
import FriendList from "./Component/FriendList";

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
                // style={{position:'sticky', left: 0,}}
                theme="light"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items2}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        height: "42px",
                        lineHeight: "42px",
                        padding: 0,
                        background: "rgb(93, 120, 255)",
                        position: "sticky",
                        top: 0,
                        zIndex: "10000",
                    }}
                >
                    <LayoutHeader />
                </Header>
                <Content
                    style={{
                        margin: "12px 16px",
                        display: "flex",
                    }}
                >
                    {/* chat */}
                    {/* chat-side */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FriendList />
                    </div>
                    <main
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: 24,
                            minHeight: "90vh",
                            minWidth: "70vw",
                            background: "#fff",
                            borderRadius: "0 20px   20px 0",
                        }}
                    >
                        {/* chat-header */}
                        <div>
                            <ChatHeader />
                        </div>

                        {/* chat-content */}
                        <div>
                            <ChatContent />
                        </div>
                    </main>
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
