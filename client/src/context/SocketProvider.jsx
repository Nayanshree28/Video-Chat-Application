import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);


export const useSocket = () =>{
    const socket = useContext(SocketContext);
    return socket;
}


const SocketProvider = (props) => {
  const socketUrl =
    process.env.NODE_ENV === 'production'
      ? "https://video-chat-application-server.vercel.app/"// Production URL from environment variable
      : "http://localhost:8000"; 

   const socket = useMemo(() => io(socketUrl), [socketUrl]);

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
