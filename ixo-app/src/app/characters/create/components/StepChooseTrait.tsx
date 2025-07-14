import React from 'react';
import { useTraits } from '../hooks/useTraits';
import type { CharacterConfig } from '@/types/config/character';
import type { TraitConfig } from '@/types/config/trait';

interface StepChooseTraitProps {
  gameSystemId: string;
  characterConfig: CharacterConfig;
  value: string[]; // selected traitIds array
  onChange: (traitIds: string[]) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepChooseTrait ({ gameSystemId, characterConfig, value, onChange, onNext, errors }: StepChooseTraitProps) {
  const { traits, loading, error } = useTraits(gameSystemId);
  const allowedTraits = characterConfig?.startTraitChoice || [];
  const maxTraitPoints = characterConfig?.startNumberOfTraitChoice || 2;
  const filteredTraits: TraitConfig[] = traits.filter(trait => allowedTraits.includes(trait.id));

  // Get selected trait configs
  const selectedTraits = filteredTraits.filter(trait => value.includes(trait.id));
  // Calculate used points
  const usedTraitPoints = selectedTraits.reduce((sum, trait) => sum + (trait.isFullTrait ? 2 : 1), 0);
  // Only allow adding traits if it would not exceed the max
  const canAddTrait = (trait: TraitConfig) => {
    const traitValue = trait.isFullTrait ? 2 : 1;
    return !value.includes(trait.id) && usedTraitPoints + traitValue <= maxTraitPoints;
  };
  // Filter available traits based on current selection and point limit
  const availableTraits = filteredTraits.filter(canAddTrait);

  const handleAddTrait = (traitId: string) => {
    const trait = filteredTraits.find(t => t.id === traitId);
    if (trait && canAddTrait(trait)) {
      onChange([ ...value, traitId ]);
    }
  };

  const handleRemoveTrait = (traitId: string) => {
    onChange(value.filter(id => id !== traitId));
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
        <label className="block font-medium mb-1">Choose Traits *</label>
        <div className="text-sm text-gray-600 mb-3">
          {`You may select up to ${maxTraitPoints} trait point${maxTraitPoints > 1 ? 's' : ''}. (Full trait = 2, Part trait = 1)`}
        </div>
        <div className="text-sm text-blue-700 mb-2">
          {`Selected: ${usedTraitPoints} / ${maxTraitPoints} trait points`}
        </div>
        {loading ? 
          <div>Loading traits...</div>
          : error ? 
            <div className="text-red-600">{error}</div>
            : 
            <div className="space-y-4">
              {/* Selected Traits */}
              {selectedTraits.length > 0 && 
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <h3 className="font-medium mb-3 text-blue-800">Selected Traits ({usedTraitPoints} / {maxTraitPoints} points)</h3>
                  <div className="space-y-3">
                    {selectedTraits.map(trait => 
                      <div key={trait.id} className="bg-white border border-blue-300 rounded p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{trait.name.en}</span>
                              <span className="ml-2 text-xs text-gray-500">({trait.isFullTrait ? 'Full (2)' : 'Part (1)'})</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{trait.description?.en}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveTrait(trait.id)}
                            className="ml-2 text-red-600 hover:text-red-800 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }

              {/* Available Traits */}
              {availableTraits.length > 0 && usedTraitPoints < maxTraitPoints &&
                <div>
                  <h3 className="font-medium mb-2">Available Traits</h3>
                  <select
                    onChange={e => {
                      if (e.target.value) {
                        handleAddTrait(e.target.value);
                        e.target.value = '';
                      }
                    }}
                    className="w-full border rounded px-3 py-2"
                    disabled={availableTraits.length === 0 || usedTraitPoints >= maxTraitPoints}
                  >
                    <option value="">Select a trait to add</option>
                    {availableTraits.map(trait => 
                      <option key={trait.id} value={trait.id}>
                        {trait.name.en} ({trait.isFullTrait ? 'Full (2)' : 'Part (1)'})
                      </option>
                    )}
                  </select>
                </div>
              }
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
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={usedTraitPoints === 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 