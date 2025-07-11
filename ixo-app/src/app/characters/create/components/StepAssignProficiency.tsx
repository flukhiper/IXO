import React from 'react';
import { useProficiencies } from '../hooks/useProficiencies';

interface StepAssignProficiencyProps {
  gameSystemId: string;
  proficiencies: string[];
  setProficiencies: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
  errors: string[];
}

export default function StepAssignProficiency ( { gameSystemId, proficiencies, setProficiencies, onNext, errors }: StepAssignProficiencyProps ) {
  const maxPoints = 4;
  const { proficiencies: allProficiencies, loading, error: fetchError } = useProficiencies(gameSystemId);

  const handleToggle = (id: string) => {
    if (proficiencies.includes(id)) {
      setProficiencies(proficiencies.filter(pid => pid !== id));
    } else if (proficiencies.length < maxPoints) {
      setProficiencies([ ...proficiencies, id ]);
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Assign Proficiencies *</label>
        <p className="text-sm text-gray-600 mb-4">You have {maxPoints} points. Select up to 4 different proficiencies.</p>
        <div className="mb-2 text-sm text-blue-700">Points spent: {proficiencies.length} / {maxPoints}</div>
        {loading ? 
          <div>Loading proficiencies...</div>
          : fetchError ? 
            <div className="text-red-600">{fetchError}</div>
            : 
            <div className="space-y-2">
              {allProficiencies.map(prof => {
                const checked = proficiencies.includes(prof.id);
                const disabled = !checked && proficiencies.length >= maxPoints;
                return (
                  <div key={prof.id} className="flex items-start space-x-3 p-2 border rounded hover:bg-gray-50">
                    <input
                      type="checkbox"
                      id={prof.id}
                      checked={checked}
                      disabled={disabled}
                      onChange={() => handleToggle(prof.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor={prof.id} className="font-medium cursor-pointer">
                        {prof.name.en}
                      </label>
                      {prof.description?.en && 
                      <p className="text-sm text-gray-600 mt-1">{prof.description.en}</p>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
        }
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
          disabled={proficiencies.length === 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 