 
'use client';

import { useEffect, useState } from 'react';
import type { Character } from '@/types/runtime/character/Character';
import type { CharacterClass } from '@/types/runtime/character/CharacterClass';
import type { CharacterOrigin } from '@/types/runtime/character/CharacterOrigin';
import type { CharacterTrait } from '@/types/runtime/character/CharacterTrait';
import type { CharacterProficiency } from '@/types/runtime/character/CharacterProficiency';
import type { CharacterStat } from '@/types/runtime/character/CharacterStat';
import type { CharacterSkill } from '@/types/runtime/character/CharacterSkill';
import type { CharacterAction } from '@/types/runtime/character/CharacterAction';
import type { CharacterWeaponSet } from '@/types/runtime/character/CharacterGear';
import type { CharacterInventory } from '@/types/runtime/character/CharacterInventory';
import type { CharacterAttribute } from '@/types/runtime/character/CharacterAttribute';
import type { CharacterGearSlot } from '@/types/runtime/character/CharacterGear';
import type { CharacterConfig } from '@/types/config/character';
import StepChooseGamesystem from './components/StepChooseGamesystem';
import { useAttributes } from './hooks/useAttributes';
import { getValueFromConfigValue } from '@/utils/config/valueGuards';

const steps = [
  'Choose Game System',
  'Basic Info',
  'Choose Origin',
  'Choose Trait',
  'Choose Class',
  'Assign Proficiency',
  'Assign Stats',
  'Purchase Equipment'
];

type CharacterInstance = {
  character: Character;
  classes: CharacterClass[];
  origin: CharacterOrigin | null;
  traits: CharacterTrait[];
  proficiencies: CharacterProficiency[];
  stats: CharacterStat[];
  skills: CharacterSkill[];
  actions: CharacterAction[];
  attributes: CharacterAttribute[];
  gear: CharacterGearSlot[];
  weaponSets: CharacterWeaponSet[];
  inventory: CharacterInventory | null;
};

function createDefaultCharacterInstance (): CharacterInstance {
  const characterId = window.crypto.randomUUID();
  const inventoryId = window.crypto.randomUUID();
  return {
    character: {
      id: characterId,
      playerID: '',
      name: '',
      gameSystemId: '',
      portrait: '',
      isPublic: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    classes: [],
    origin: null,
    traits: [],
    proficiencies: [],
    stats: [],
    skills: [],
    actions: [],
    attributes: [],
    gear: [],
    weaponSets: [],
    inventory: {
      id: inventoryId,
      characterId,
      base: {
        rows: 6,
        columns: 12,
        items: []
      },
      containers: {},
      currency: {
        gold: 0
      }
    }
  };
}

export default function CharacterCreatePage () {
  const [ step, setStep ] = useState(0);
  const [ gameSystemId, setGameSystemId ] = useState<string>('');
  const [ characterConfig, setCharacterConfig ] = useState<CharacterConfig | null>(null);
  const [ characterInstance, setCharacterInstance ] = useState<CharacterInstance>(createDefaultCharacterInstance());
  const { attributes: attributeConfigs } = useAttributes(gameSystemId);

  // Reset all step states when game system changes
  useEffect(() => {
    setCharacterInstance(createDefaultCharacterInstance());
    setStep(0); // Optionally reset to first step
  }, [ gameSystemId ]);

  // When characterConfig changes, fully reset characterInstance and initialize inventory with base grid size and gold from characterConfig. Also, generate new ids for character.id and inventory.id using crypto.randomUUID().
  useEffect(() => {
    if (characterConfig) {
      setCharacterInstance(prev => ({
        ...prev,
        character: {
          ...prev.character,
          gameSystemId: characterConfig.gameSystemId
        },
        inventory: {
          ...prev.inventory!,
          base: {
            ...prev.inventory!.base,
            rows: characterConfig.startInventorySpace.rows,
            columns: characterConfig.startInventorySpace.columns,
            items: []
          },
          containers: {},
          currency: {
            ...prev.inventory!.currency,
            gold: characterConfig.startGold
          }
        }
      }));
    }
  }, [ characterConfig ]);

  // When attribute configs are fetched, initialize characterInstance.attributes
  useEffect(() => {
    if (attributeConfigs && attributeConfigs.length > 0) {
      setCharacterInstance(prev => ({
        ...prev,
        attributes: attributeConfigs.map(cfg => {
          const baseValue = getValueFromConfigValue(cfg.baseValue);
          return {
            id: window.crypto.randomUUID(),
            characterId: prev.character.id,
            attributeId: cfg.id,
            baseValue,
            currentValue: baseValue,
            modifiers: [
              {
                id: window.crypto.randomUUID(),
                attributeId: cfg.id,
                source: 'gamesystem-attribute-config',
                isActive: true,
                value: typeof baseValue === 'number' ? baseValue : 0,
                formula: cfg.formula || undefined
              }
            ]
          };
        })
      }));
    }
  }, [ attributeConfigs ]);

  // Centralized step validation
  function validateStep (step: number): boolean {
    switch (step) {
      case 0:
        return !!gameSystemId && !!characterConfig;
      case 1:
        // Example: require character name (customize as needed)
        return !!characterInstance.character.name;
      case 2:
        // Example: require origin selection
        return !!characterInstance.origin;
      // Add more cases for each step as needed
      default:
        return true;
    }
  }

  function renderStep () {
    if (step === 0) {
      return (
        <StepChooseGamesystem
          gameSystemId={gameSystemId}
          setGameSystemId={setGameSystemId}
          setCharacterConfig={setCharacterConfig}
          onNext={() => {
            if (validateStep(0)) {
              setStep(1);
            } else {
              alert('Please select a game system and character config.');
            }
          }}
        />
      );
    }
    return <div className="p-8 text-gray-500">Step {step + 1} of {steps.length} (to be implemented)</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create Character</h1>
      <div className="mb-4">
        <div>Step {step + 1} of {steps.length}: <b>{steps[step]}</b></div>
      </div>
      <div className="mb-8">
        {renderStep()}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setStep(s => Math.max(s - 1, 0))}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Back
        </button>
        {step > 0 && 
          <button
            onClick={() => {
              if (validateStep(step)) {
                setStep(s => Math.min(s + 1, steps.length - 1));
              } else {
                alert('Please complete the required fields for this step.');
              }
            }}
            disabled={step === steps.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        }
      </div>
    </div>
  );
}
