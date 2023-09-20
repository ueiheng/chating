import { useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

const useSocket = (url: string, options?: any): Socket | null => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // 创建 Socket.io 连接
    socketRef.current = io(url, options);

    return () => {
      // 断开 Socket.io 连接
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [url, options]);

  return socketRef.current;
};

export default useSocket;
