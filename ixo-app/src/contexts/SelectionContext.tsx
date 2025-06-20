'use client';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import type { ObjectID } from '@/types/game';


type SelectionContextType = {
  selectedObjectId: ObjectID | null;
  setSelectedObjectId: (id: ObjectID | null) => void;
};

const SelectionContext = createContext<SelectionContextType>({
  selectedObjectId: null,
  setSelectedObjectId: () => {}
});

export const SelectionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ selectedObjectId, setSelectedObjectId ] = useState<ObjectID | null>(null);
  return (
    <SelectionContext.Provider
      value={{  selectedObjectId, setSelectedObjectId }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionContext);
