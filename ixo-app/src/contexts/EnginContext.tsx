'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { GameDefinition, AttributeDefinition } from '@/types/engine';

interface EnginContextType {
  game: GameDefinition;
  setGame: React.Dispatch<React.SetStateAction<GameDefinition>>;
  setAttrDefs: (newAttrDefs: AttributeDefinition[]) => void;
}

const defaultGame: GameDefinition = {
  id: 'default-game',
  statDefs: [],
  attrDefs: []
};

const EnginContext = createContext<EnginContextType | undefined>(undefined);

export function EnginProvider ({ children }: { children: ReactNode }) {
  const [ game, setGame ] = useState<GameDefinition>(defaultGame);

  const setAttrDefs = (newAttrDefs: AttributeDefinition[]) => {
    setGame((prev) => ({ ...prev, attrDefs: newAttrDefs }));
  };

  console.log('game:', game);

  return (
    <EnginContext.Provider value={{ game, setGame, setAttrDefs }}>
      {children}
    </EnginContext.Provider>
  );
}

export function useEnginContext () {
  const context = useContext(EnginContext);
  if (!context) {
    throw new Error('useEnginContext must be used within an EnginProvider');
  }
  return context;
}
