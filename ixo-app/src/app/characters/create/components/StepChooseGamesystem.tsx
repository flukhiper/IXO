import React, { useEffect } from 'react';
import { useGameSystems } from '../hooks/useGameSystems';
import { useCharacterConfig } from '../hooks/useCharacterConfig';
import type { CharacterConfig } from '@/types/config/character';

interface StepChooseGamesystemProps {
  gameSystemId: string;
  setGameSystemId: (id: string) => void;
  setCharacterConfig: (config: CharacterConfig | null) => void;
  onNext: () => void;
  errors?: string[]; // Validation errors from parent
}

export default function StepChooseGamesystem ({ gameSystemId, setGameSystemId, setCharacterConfig, onNext, errors = [] }: StepChooseGamesystemProps) {
  const { systems, loading: systemsLoading, error: systemsError } = useGameSystems();
  const { config: fetchedConfig, loading: configLoading, error: configError } = useCharacterConfig(gameSystemId);

  // When fetchedConfig changes, update characterConfig
  useEffect(() => {
    setCharacterConfig(fetchedConfig);
  }, [ fetchedConfig, setCharacterConfig ]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext(); // No validation here, will be handled in page.tsx
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Choose Game System *</label>
        {systemsLoading ? 
          <div>Loading game systems...</div>
          : systemsError ? 
            <div className="text-red-600">{systemsError}</div>
            : 
            <select
              value={gameSystemId}
              onChange={e => setGameSystemId(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a game system</option>
              {systems.map(gs => 
                <option key={gs.id} value={gs.id}>{gs.name?.en || gs.id}</option>
              )}
            </select>
        }
      </div>
      {gameSystemId && 
        <div>
          <label className="block font-medium mb-1">Character Config</label>
          {configLoading ? 
            <div>Loading character config...</div>
            : configError ? 
              <div className="text-red-600">{configError}</div>
              : fetchedConfig ?
                <div className="p-2 border rounded bg-gray-50">
                  <div><b>{fetchedConfig.name?.en || fetchedConfig.id}</b></div>
                  <div className="text-sm text-gray-600">{fetchedConfig.description?.en}</div>
                </div>
                : <div className="text-gray-400">No character config found for this system.</div>
          }
        </div>
      }
      {errors.length > 0 &&
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2 space-y-1">
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      }
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
} 