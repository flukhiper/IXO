import React, { useRef } from 'react';

interface StepBasicInfoProps {
  value: {
    name: string;
    portrait?: string;
    isPublic: boolean;
  };
  onChange: (value: StepBasicInfoProps['value']) => void;
  onNext: () => void;
  errors: string[];
}

export default function StepBasicInfo ({ value, onChange, onNext, errors }: StepBasicInfoProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onNext();
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-medium mb-1" htmlFor="characterName">Character Name *</label>
        <input
          id="characterName"
          type="text"
          value={value.name}
          onChange={e => onChange({ ...value, name: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
          placeholder="Enter character name"
          maxLength={40}
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Portrait</label>
        {value.portrait &&
          <img src={value.portrait} alt="Portrait preview" className="mt-2 mb-2 w-24 h-24 object-cover rounded border" />
        }
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
        <span className="ml-2 text-xs text-gray-500">(You can change this later)</span>
      </div>
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