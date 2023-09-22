import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

export default function Header() {
    return (
        <>
            <Space
                size={10}
                align="center"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <span>Asen</span>
                <Badge dot={true}>
                    <Avatar shape="square" icon={<UserOutlined />} size="small" />
                </Badge>
            </Space>
        </>
    );
}
