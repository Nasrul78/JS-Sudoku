import { useEffect, useState } from "react";
import socket from "../utils/socket";

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("Connecting to socket...");
        socket.connect();

        socket.on('chat', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('chat');
            socket.disconnect();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 ml-4">
            <h1 className="text-4xl font-bold mb-0">Chat Room</h1>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mt-4">
                <div className="overflow-y-auto bg-gray-200">
                    {messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                            <strong>{msg.sender}</strong>: {msg.message} <span className="text-gray-500 text-sm">{msg.time}</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Message..."
                    className="w-full p-2 border rounded mt-2"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            socket.emit('chat', e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ChatRoom;
