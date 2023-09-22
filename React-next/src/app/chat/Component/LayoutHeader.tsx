import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
export default function Header() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <>
      <Space
        size={30}
        align="center"
        style={{
          display: "flex",
          justifyContent: "end",
          marginRight: "20px",
        }}
      >
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          size="small"
          style={{ marginTop: "10px" }}
          //   loading
        />

        <Badge count={1} size="small">
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </Badge>
      </Space>
    </>
  );
}
