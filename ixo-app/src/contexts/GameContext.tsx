'use client';
import { createContext, PropsWithChildren, useContext, useState, useEffect } from 'react';
// import io from 'socket.io-client';
import type { GameState, MapObject, ObjectID, PlayerID } from '@/types/game';

// const socket = io('http://localhost:3000');

type GameContextType = {
  gameState: GameState | null;
  playerId: PlayerID | null;
  onMapChange: (id: ObjectID, updated: MapObject) => void;
  // moveToken: (tokenId: string, position: { x: number; y: number }) => void;
  // moveObject: (objectId: string, position: { x: number; y: number }) => void;
};

const GameContext = createContext<GameContextType>({
  gameState: null,
  playerId: null,
  onMapChange: () => {}
  // moveToken: () => {},
  // moveObject: () => {} 
});

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ gameState, setGameState ] = useState<GameState | null>(null);
  const [ playerId, setPlayerId ] = useState<PlayerID | null>(null);

  useEffect(() => {
    const mockGameState: GameState = {
      board: {
        maps: {
          map1: {
            id: 'map1',
            type: 'image',
            assetUrl: 'https://res.cloudinary.com/dlw639tkr/image/upload/v1745337434/map/Tree-Fort_rbeisq.webp',
            position: { x: 0, y: 0 },
            size: null
          }
        },
        gridVisible: true,
        width: 800,
        height: 600
      },
      tokens: {
        token1: {
          id: 'token1',
          ownerId: 'player1',
          name: 'Token 1',
          imageUrl: 'https://example.com/token.png',
          position: { x: 200, y: 200 },
          size: { width: 30, height: 30 },
          isVisible: true
        }
      },
      players: {
        player1: {
          id: 'player1',
          name: 'Player 1',
          role: 'player',
          connected: true
        }
      }
    };
    const mockPlayerId = 'player1';
    setGameState(mockGameState);
    setPlayerId(mockPlayerId);

    // socket.on('init', ({ gameState, playerId }) => {
    //   setGameState(gameState);
    //   setPlayerId(playerId);
    // });

    // socket.on('update-token', ({ tokenId, position }) => {
    //   setGameState((prev) => ({
    //     ...prev,
    //     tokens: {
    //       ...prev.tokens,
    //       [tokenId]: {
    //         ...prev.tokens[tokenId],
    //         position
    //       }
    //     }
    //   }));
    // });

    // socket.on('update-object', ({ objectId, position }) => {
    //   setGameState((prev) => ({
    //     ...prev,
    //     board: {
    //       ...prev.board,
    //       objects: {
    //         ...prev.board.objects,
    //         [objectId]: {
    //           ...prev.board.objects[objectId],
    //           position
    //         }
    //       }
    //     }
    //   }));
    // });

    // return () => socket.disconnect();
  }, []);

  const onMapChange = (id: ObjectID, updated: MapObject) => {
    setGameState(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        board: {
          ...prev.board,
          maps: {
            ...prev.board.maps,
            [id]: updated
          }
        }
      };
    });
    // socket.emit('update-object', { id, updated });
  };

  //   const moveToken = (tokenId, position) =>
  //     socket.emit('move-token', { tokenId, position });

  //   const moveObject = (objectId, position) =>
  //     socket.emit('move-object', { objectId, position });

  return (
    <GameContext.Provider
      value={{ gameState, playerId, onMapChange }}
    >
      {
        gameState && playerId ? 
          children : 
          <div className='flex items-center justify-center h-screen'>
            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div>
            <p className='text-center text-2xl'>Loading...</p>
          </div>
      }
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
