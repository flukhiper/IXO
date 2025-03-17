import generateUUID from "@/utils/generateUUID.ts";
import { Socket } from "socket.io";

class SessionManager {
  private sessions: Map<string, GameSession> = new Map();
  private playerSessions: Map<string, Socket> = new Map();

  createSession(name: string): GameSession {
    const session: GameSession = {
      id: generateUUID(),
      name,
      players: new Map(),
      messages: [],
    };
    this.sessions.set(session.id, session);
    return session;
  }

  getSessionList(): GameSession[] {
    return Array.from(this.sessions.values());
  }

  joinSession(sessionId: string, player: Player, socket: Socket): boolean {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return false;
    }

    session.players.set(player.id, player);
    this.playerSessions.set(player.id, socket);
    this.broadcastSessionUpdate(sessionId);
    return true;
  }

  private broadcastSessionUpdate(sessionId: string) {
    const session = this.sessions.get(sessionId);
    if (!session) return;

    const update = {
      type: "SESSION_UPDATE",
      payload: {
        players: Array.from(session.players.values()),
        messages: session.messages,
      },
    };

    session.players.forEach((player) => {
      const socket = this.playerSessions.get(player.id);
      if (socket) {
        socket.send(JSON.stringify(update));
      }
    });
  }
}

export default SessionManager;
