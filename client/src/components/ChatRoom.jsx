import { useEffect } from "react";
import socket from "../utils/socket";
import { data } from "react-router-dom";

const ChatRoom = () => {
    useEffect(() => {
        socket.connect();

        socket.on('message', (data) => {
            console.log('New message:', data);
        });

        return () => {
            socket.off('message');
            socket.disconnect();
        }
    }, []);

    return <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-0">Chat Room</h1>
    </div>
};

export default ChatRoom;
