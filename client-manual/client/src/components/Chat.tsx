import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");

const Chat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    socket.on("message", (msg: string) => {
      setChat((prevChat: string) => [...prevChat, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="p-5">
      <h1>Chat App</h1>
      <div className="p-2 h-24 overflow-scroll border border-gray-300">
        {chat.map((msg: string, index: number) => <div key={index}>{msg}</div>)}
      </div>
      <div className="mt-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="p-2 w-4/5"
        />
        <button
          onClick={sendMessage}
          className="p-2 ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
