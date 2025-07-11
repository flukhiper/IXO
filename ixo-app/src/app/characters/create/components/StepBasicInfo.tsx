import React, { useRef } from 'react';
import { useGameSystems } from '../hooks/useGameSystems';

interface StepBasicInfoProps {
  value: {
    name: string;
    portrait: string;
    gameSystemId: string;
    isPublic: boolean;
    level: number;
  };
  onChange: (value: StepBasicInfoProps['value']) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepBasicInfo ({ value, onChange, onNext, errors }: StepBasicInfoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { systems, loading, error } = useGameSystems();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Character Name *</label>
        <input
          type="text"
          value={value.name}
          onChange={e => onChange({ ...value, name: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Level *</label>
        <select
          value={value.level}
          onChange={e => onChange({ ...value, level: Number(e.target.value) })}
          className="w-full border rounded px-3 py-2"
          required
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map(lvl => 
            <option key={lvl} value={lvl}>{lvl}</option>
          )}
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Portrait</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = ev => {
                onChange({ ...value, portrait: ev.target?.result as string });
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {value.portrait &&
          <img src={value.portrait} alt="Portrait preview" className="mt-2 w-24 h-24 object-cover rounded" />
        }
      </div>
      <div>
        <label className="block font-medium mb-1">Game System *</label>
        {loading ? 
          <div>Loading game systems...</div>
          : error ? 
            <div className="text-red-600">{error}</div>
            : 
            <select
              value={value.gameSystemId}
              onChange={e => onChange({ ...value, gameSystemId: e.target.value })}
              className="w-full border rounded px-3 py-2"
              required
            >
              {systems.map(gs =>
                <option key={gs.id} value={gs.id}>{gs.name.en || gs.id}</option>
              )}
            </select>
        }
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={value.isPublic}
          onChange={e => onChange({ ...value, isPublic: e.target.checked })}
          id="isPublic"
          className="mr-2"
        />
        <label htmlFor="isPublic">Allow other players to view this character</label>
      </div>
      {errors.length > 0 &&
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2">
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