"use client";
import useSocket from "../hooks/useSocket";
import { useEffect } from "react";

import Layout from "./Component/Layout";
export default function Home() {
  const socket = useSocket("http://127.0.0.1:3001");
  useEffect(() => {
    if (socket) {
      // 定义 Socket.io 事件监听和处理逻辑
      socket.on("message", (data) => {
        console.log("Received message:", data);
      });
    }
  }, [socket]);

  return (
    <>
      <Layout></Layout>
    </>
  );
}
