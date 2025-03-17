interface GameSession {
  id: string;
  name: string;
  players: Map<string, Player>;
  messages: ChatMessage[];
}

interface Player {
  id: string;
  name: string;
  isTyping: boolean;
}

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}
