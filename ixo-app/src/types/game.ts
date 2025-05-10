export type PlayerID = string;
export type ObjectID = string;

export interface GameState {
  board: BoardState;
  tokens: Record<ObjectID, TokenData>;
  players: Record<PlayerID, PlayerData>;
}

export interface BoardState {
  maps: Record<ObjectID, MapObject>;
  gridVisible: boolean;
  width: number;
  height: number;
}

export interface MapObject {
  id: ObjectID;
  type: 'image';
  assetUrl: string;
  position: { x: number; y: number };
  size: { width: number; height: number } | null;
  rotation?: number;
  locked?: boolean;
}

export interface TokenData {
  id: ObjectID;
  ownerId: PlayerID;
  name: string;
  imageUrl: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isVisible: boolean;
  locked?: boolean;
}

export interface PlayerData {
  id: PlayerID;
  name: string;
  role: 'player' | 'dm';
  connected: boolean;
}
