import { io, Socket } from "socket.io-client";

//const URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000";
//export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
