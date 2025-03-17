import { useCallback, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");
const playerID = "1";

const Chat: React.FC = () => {
  const [sessions, setSessions] = useState([]);
  const [newSesionName, setnewSesionName] = useState();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/session")
      .then((res) => res.json())
      .then((data) => setSessions(data));

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

  const onCreateSessionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setnewSesionName(e.target.value);
    },
    [],
  );

  const onCreateSessionSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newSesionName }),
    });

    const data = await res.json();
    setSessions((prevSessions: GameSession[]) => [...prevSessions, data]);
  }, [newSesionName]);

  const onJoinSession = useCallback((id: string) => {
    socket.emit("join_session", {
      playerID,
      sessionID: id,
    });
  }, []);

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <h2>Sessions</h2>
        <ul>
          {sessions.map((session: GameSession) => (
            <div>
              <h3>{session.name}</h3>
              <button onClick={() => onJoinSession(session.id)}>Join</button>
            </div>
          ))}
        </ul>
        <form onSubmit={onCreateSessionSubmit}>
          <input
            type="text"
            value={newSesionName}
            onChange={onCreateSessionChange}
            placeholder="Enter a session name..."
          />
          <button type="submit">Create Session</button>
        </form>
      </div>
      <div>
        {chat.map((msg: string, index: number) => <p key={index}>{msg}</p>)}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
