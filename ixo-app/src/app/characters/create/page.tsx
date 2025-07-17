 
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
import StepBasicInfo from './components/StepBasicInfo';
import StepChooseOrigin from './components/StepChooseOrigin';
import StepChooseTrait from './components/StepChooseTrait';
import StepChooseClass from './components/StepChooseClass';
import { useAttributes } from './hooks/useAttributes';
import { useStats } from './hooks/useStats';
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
  const [ stepErrors, setStepErrors ] = useState<{ [step: number]: string[] }>({});
  
  const { attributes: attributeConfigs } = useAttributes(gameSystemId);
  const { stats: statConfigs } = useStats(gameSystemId);

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
                value: 0, // Set to 0 for now; will be evaluated in character sheet
                formula: cfg.formula || undefined
              }
            ]
          };
        })
      }));
    }
  }, [ attributeConfigs ]);

  // When stat configs are fetched, initialize characterInstance.stats
  useEffect(() => {
    if (statConfigs && statConfigs.length > 0) {
      setCharacterInstance(prev => ({
        ...prev,
        stats: statConfigs.map(cfg => {
          return {
            id: window.crypto.randomUUID(),
            characterId: prev.character.id,
            statId: cfg.id,
            baseValue: 0, // Default base value for new character
            currentValue: 0,
            modifiers: []
          };
        })
      }));
    }
  }, [ statConfigs ]);

  // Centralized step validation
  function validateStep (step: number): boolean {
    switch (step) {
      case 0:
        const errors0: string[] = [];
        if (!gameSystemId) errors0.push('Please select a game system.');
        if (!characterConfig) errors0.push('Please select a character config.');
        setStepErrors(prev => ({ ...prev, [0]: errors0 }));
        return errors0.length === 0;
      case 1:
        // Example: require character name (customize as needed)
        const errors1: string[] = [];
        if (!characterInstance.character.name) errors1.push('Name is required.');
        setStepErrors(prev => ({ ...prev, [1]: errors1 }));
        return errors1.length === 0;
      case 2:
        // Example: require origin selection
        const errors2: string[] = [];
        if (!characterInstance.origin) errors2.push('Origin selection is required.');
        setStepErrors(prev => ({ ...prev, [2]: errors2 }));
        return errors2.length === 0;
      case 3:
        const errors3: string[] = [];
        if (characterInstance.traits.length === 0) errors3.push('Please select at least one trait.');
        setStepErrors(prev => ({ ...prev, [3]: errors3 }));
        return errors3.length === 0;
      case 4:
        const errors4: string[] = [];
        if (characterInstance.classes.length === 0) errors4.push('Please select at least one class.');
        setStepErrors(prev => ({ ...prev, [4]: errors4 }));
        return errors4.length === 0;
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
            }
          }}
          errors={stepErrors[0] || []}
        />
      );
    }
    if (step === 1) {
      return (
        <StepBasicInfo
          value={{
            name: characterInstance.character.name,
            portrait: characterInstance.character.portrait,
            isPublic: characterInstance.character.isPublic
          }}
          onChange={val => setCharacterInstance(prev => ({
            ...prev,
            character: {
              ...prev.character,
              ...val
            }
          }))}
          onNext={() => {
            if (validateStep(1)) {
              setStep(2);
            }
          }}
          errors={stepErrors[1] || []}
        />
      );
    }
    if (step === 2) {
      return (
        <StepChooseOrigin
          gameSystemId={gameSystemId}
          characterConfig={characterConfig!}
          value={characterInstance.origin?.originId || ''}
          onChange={originId => setCharacterInstance(prev => ({
            ...prev,
            origin: originId ? {
              id: window.crypto.randomUUID(),
              characterId: prev.character.id,
              originId
            } : null
          }))}
          onNext={() => {
            if (validateStep(2)) {
              setStep(3);
            }
          }}
          errors={stepErrors[2] || []}
        />
      );
    }
    if (step === 3) {
      return (
        <StepChooseTrait
          gameSystemId={gameSystemId}
          characterConfig={characterConfig!}
          value={characterInstance.traits.map(t => t.traitId)}
          onChange={traitIds => setCharacterInstance(prev => ({
            ...prev,
            traits: traitIds.map(traitId => ({
              id: window.crypto.randomUUID(),
              characterId: prev.character.id,
              traitId,
              isActive: true
            }))
          }))}
          onNext={() => {
            if (validateStep(3)) {
              setStep(4);
            }
          }}
          errors={stepErrors[3] || []}
        />
      );
    }
    if (step === 4) {
      return (
        <StepChooseClass
          value={characterInstance.classes}
          onClassChange={(index, change) => {
            setCharacterInstance(prev => {
              const classes = [ ...prev.classes || [] ];
              if (typeof change.newClassId !== 'undefined') {
                classes[index] = {
                  ...classes[index],
                  classId: change.newClassId
                };
              }
              if (typeof change.newLevel !== 'undefined') {
                classes[index] = {
                  ...classes[index],
                  level: change.newLevel
                };
              }
              return { ...prev, classes };
            });
          }}
          onClassAdded={() => {
            setCharacterInstance(prev => {
              const classes = [ ...prev.classes || [] ];
              classes.push({
                id: window.crypto.randomUUID(),
                characterId: prev.character.id,
                classId: '',
                level: 1,
                chosenStats: [],
                chosenAttributes: [],
                chosenSkills: [],
                chosenActions: []
              });
              return { ...prev, classes };
            });
          }}
          onClassRemoved={index => {
            setCharacterInstance(prev => {
              const classes = [ ...prev.classes || [] ];
              classes.splice(index, 1);
              return { ...prev, classes };
            });
          }}
          onClassProgressionSelected={(classIndex, type, level, ids) => {
            setCharacterInstance(prev => {
              const classes = [ ...prev.classes || [] ];
              const classRow = { ...classes[classIndex] };
              // Update the correct progression choice array
              if (type === 'chosenStats') {
                classRow.chosenStats = [
                  ...(classRow.chosenStats || []).filter(cs => cs.level !== level),
                  { level, statIds: ids }
                ];
              } else if (type === 'chosenAttributes') {
                classRow.chosenAttributes = [
                  ...(classRow.chosenAttributes || []).filter(ca => ca.level !== level),
                  { level, attributeIds: ids }
                ];
              } else if (type === 'chosenSkills') {
                classRow.chosenSkills = [
                  ...(classRow.chosenSkills || []).filter(cs => cs.level !== level),
                  { level, skillIds: ids }
                ];
              } else if (type === 'chosenActions') {
                classRow.chosenActions = [
                  ...(classRow.chosenActions || []).filter(ca => ca.level !== level),
                  { level, actionIds: ids }
                ];
              }
              classes[classIndex] = classRow;
              return { ...prev, classes };
            });
          }}
          onNext={() => {
            if (validateStep(4)) {
              setStep(5);
            }
          }}
          errors={stepErrors[4] || []}
          characterConfig={characterConfig!}
          gameSystemId={gameSystemId}
          statConfigs={statConfigs}
          attributeConfigs={attributeConfigs}
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
