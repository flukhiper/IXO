// Core Character interface - minimal data with references to other collections
export interface Character {
  id: string; // crypto.randomUUID() generated
  playerID: string;
  name: string;
  gameSystemId: string;
  portrait?: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
} 