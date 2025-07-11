import React from 'react';
import { useTraits } from '../hooks/useTraits';

interface StepChooseTraitProps {
  gameSystemId: string;
  value: string; // selected traitId
  onChange: (traitId: string) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepChooseTrait ({ gameSystemId, value, onChange, onNext, errors }: StepChooseTraitProps) {
  const { traits, loading, error } = useTraits(gameSystemId);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Choose Trait *</label>
        {loading ? 
          <div>Loading traits...</div>
          : error ? 
            <div className="text-red-600">{error}</div>
            : 
            <select
              value={value}
              onChange={e => onChange(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a trait</option>
              {traits.map(trait => 
                <option key={trait.id} value={trait.id}>
                  {trait.name.en}
                </option>
              )}
            </select>
        }
      </div>
      
      {/* Display selected trait details */}
      {value && traits.length > 0 && 
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-medium mb-2">Selected Trait Details</h3>
          {traits.find(t => t.id === value) && 
            <div className="text-sm space-y-2">
              <p><strong>Name:</strong> {traits.find(t => t.id === value)?.name.en}</p>
              <p><strong>Description:</strong> {traits.find(t => t.id === value)?.description?.en}</p>
              {traits.find(t => t.id === value)?.effects && 
                <div>
                  <strong>Effects:</strong>
                  <ul className="list-disc list-inside ml-2">
                    {traits.find(t => t.id === value)?.effects?.map((effect, index) => 
                      <li key={index}>{effect.description?.en}</li>
                    )}
                  </ul>
                </div>
              }
            </div>
          }
        </div>
      }

      {errors.length > 0 &&
        <div className="bg-red-100 border border-red-300 text-red-700 rounded p-2">
          {errors.map((err, i) => <div key={i}>{err}</div>)}
        </div>
      }
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!value}
        >
          Next
        </button>
      </div>
    </form>
  );
} 