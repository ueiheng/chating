// "use client";
// import useSocket from "../hooks/useSocket";
import Layout from "./Layout";
export default function Home() {
  //   const socket = io("ws://127.0.0.1:3001", {
  //     reconnectionDelayMax: 10000,
  //   });
  //   const socket = useSocket("http://127.0.0.1:3001");
  //   socket?.emit(
  //     "events",
  //     {
  //       name: "iamtest",
  //       Connection: "Upgrade",
  //       Upgrade: "websocket",
  //       "Sec-Websocket-Key": "123",
  //     },
  //     (data: any) => console.log(data)
  //   );
  //   useEffect(() => {
  //     if (socket) {
  //       // 定义 Socket.io 事件监听和处理逻辑
  //       const messageHandler = (data: any) => {
  //         console.log("Received message:", data);
  //       };

  //       socket.on("message", messageHandler);

  //       // 清理函数，在组件卸载或者socket更改时执行
  //       return () => {
  //         socket.off("message", messageHandler);
  //       };
  //     }
  //   }, [socket]);

  return (
    <>
      <Layout></Layout>
    </>
  );
}
