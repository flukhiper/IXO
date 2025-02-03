// @ts-types="@types/express"
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.json("server running at http://localhost:3001");
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

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
