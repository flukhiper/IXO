import React from 'react';
import { useTraits } from '../hooks/useTraits';

interface StepChooseTraitProps {
  gameSystemId: string;
  value: string[]; // selected traitIds array
  onChange: (traitIds: string[]) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepChooseTrait ({ gameSystemId, value, onChange, onNext, errors }: StepChooseTraitProps) {
  const { traits, loading, error } = useTraits(gameSystemId);

  // Get selected traits
  const selectedTraits = traits.filter(trait => value.includes(trait.id));
  
  // Check if we have a full trait selected
  const hasFullTrait = selectedTraits.some(trait => trait.isFullTrait);
  
  // Check if we can select more traits
  const canSelectMore = !hasFullTrait && selectedTraits.length < 2;

  // Filter available traits based on current selection
  const availableTraits = traits.filter(trait => {
    // If we have a full trait, no more selections allowed
    if (hasFullTrait) return false;
    
    // If we already have 2 part traits, no more selections
    if (selectedTraits.length >= 2) return false;
    
    // Don't show already selected traits
    if (value.includes(trait.id)) return false;
    
    // If we have 1 part trait selected, only allow part traits
    if (selectedTraits.length === 1 && trait.isFullTrait) return false;
    
    return true;
  });

  const handleAddTrait = (traitId: string) => {
    if (canSelectMore && !value.includes(traitId)) {
      onChange([ ...value, traitId ]);
    }
  };

  const handleRemoveTrait = (traitId: string) => {
    onChange(value.filter(id => id !== traitId));
  };

  const getSelectionStatus = () => {
    if (hasFullTrait) {
      return 'Full trait selected - no more traits can be chosen';
    }
    if (selectedTraits.length === 0) {
      return 'Choose up to 2 part traits OR 1 full trait';
    }
    if (selectedTraits.length === 1 && selectedTraits[0].isFullTrait) {
      return 'Full trait selected - no more traits can be chosen';
    }
    if (selectedTraits.length === 1 && !selectedTraits[0].isFullTrait) {
      return '1 part trait selected - can choose 1 more part trait';
    }
    if (selectedTraits.length === 2) {
      return '2 part traits selected - maximum reached';
    }
    return '';
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
          {getSelectionStatus()}
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
                  <h3 className="font-medium mb-3 text-blue-800">Selected Traits ({selectedTraits.length})</h3>
                  <div className="space-y-3">
                    {selectedTraits.map(trait => 
                      <div key={trait.id} className="bg-white border border-blue-300 rounded p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium">{trait.name.en}</span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                trait.isFullTrait 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {trait.isFullTrait ? 'Full Trait' : 'Part Trait'}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{trait.description?.en}</p>
                            {trait.effects && trait.effects.length > 0 && 
                              <div className="text-sm">
                                <strong className="text-gray-700">Effects:</strong>
                                <ul className="list-disc list-inside ml-2 mt-1">
                                  {trait.effects.map((effect, index) => 
                                    <li key={index} className="text-gray-600">{effect.description?.en}</li>
                                  )}
                                </ul>
                              </div>
                            }
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
              {canSelectMore && 
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
                    disabled={!canSelectMore}
                  >
                    <option value="">Select a trait to add</option>
                    {availableTraits.map(trait => 
                      <option key={trait.id} value={trait.id}>
                        {trait.name.en} ({trait.isFullTrait ? 'Full' : 'Part'})
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
          disabled={value.length === 0}
        >
          Next
        </button>
      </div>
    </form>
  );
} 