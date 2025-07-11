import React from 'react';
import { useOrigins } from '../hooks/useOrigins';

interface StepChooseOriginProps {
  gameSystemId: string;
  value: string; // selected originId
  onChange: (originId: string) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepChooseOrigin ({ gameSystemId, value, onChange, onNext, errors }: StepChooseOriginProps) {
  const { origins, loading, error } = useOrigins(gameSystemId);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1">Choose Origin *</label>
        {loading ? 
          <div>Loading origins...</div>
          : error ? 
            <div className="text-red-600">{error}</div>
            : 
            <select
              value={value}
              onChange={e => onChange(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select an origin</option>
              {origins.map(origin => 
                <option key={origin.id} value={origin.id}>
                  {origin.name.en}
                </option>
              )}
            </select>
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
          disabled={!value}
        >
          Next
        </button>
      </div>
    </form>
  );
} 