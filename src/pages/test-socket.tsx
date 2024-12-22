import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:5000");

export default function TestSocket() {
  useEffect(() => {}, []);

  return <div>TestSocket</div>;
}
