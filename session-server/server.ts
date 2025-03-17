// @ts-types="@types/express"
import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";

import SessionManager from "@/services/SessionManager.ts";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const sessionManager = new SessionManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("server running at http://localhost:3001");
});

app.post("/session", (req, res) => {
  const { name } = req.body;
  const session = sessionManager.createSession(name);
  res.json(session);
});

app.get("/session", (req, res) => {
  const sessions = sessionManager.getSessionList();
  res.json(sessions);
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("join_session", (data) => {
    const { playerID, sessionID } = data;
    const player = {
      id: playerID,
      name: "Player " + playerID,
      isTyping: false,
    };
    sessionManager.joinSession(sessionID, player, socket);
  });

  // Handle incoming messages
  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    // Broadcast the message to all clients
    io.emit("message", msg);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
