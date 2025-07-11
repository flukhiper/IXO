'use client';

import { useState } from 'react';
import StepBasicInfo from './components/StepBasicInfo';
import StepChooseOrigin from './components/StepChooseOrigin';
import StepChooseTrait from './components/StepChooseTrait';
import StepChooseClass from './components/StepChooseClass';
import StepAssignProficiency from './components/StepAssignProficiency';
import StepAssignStats from './components/StepAssignStats';

const steps = [
  'Basic Info',
  'Choose Origin',
  'Choose Trait',
  'Choose Class',
  'Assign Proficiency',
  'Assign Stats',
  'Purchase Equipment'
];

const gameSystems = [
  { id: 'game-system-ixo', name: 'IXO' }
  // Add more systems as needed
];

export default function CharacterCreatePage () {
  const [ step, setStep ] = useState(0);
  const [ basicInfo, setBasicInfo ] = useState({
    name: '',
    portrait: '',
    gameSystemId: gameSystems[0].id,
    isPublic: false,
    level: 1
  });
  const [ originId, setOriginId ] = useState('');
  const [ traitId, setTraitId ] = useState('');
  const [ classLevels, setClassLevels ] = useState<{ classId: string; level: number }[]>([]);
  const [ statIncreases, setStatIncreases ] = useState<{ classId: string; level: number; statId: string }[]>([]);
  const [ skills, setSkills ] = useState<{ skillId: string; type: 'class' | 'general' | 'role'; classId?: string; learnedAt: number }[]>([]);
  const [ proficiencies, setProficiencies ] = useState<string[]>([]);
  const [ baseStats, setBaseStats ] = useState<{ statId: string; value: number }[]>([]);
  const [ errors, setErrors ] = useState<string[]>([]);

  const validate = () => {
    if (step === 0) {
      const errs: string[] = [];
      if (!basicInfo.name.trim()) errs.push('Name is required');
      if (!basicInfo.gameSystemId) errs.push('Game system is required');
      if (!basicInfo.level || basicInfo.level < 1 || basicInfo.level > 12) errs.push('Level must be between 1 and 12');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 1) {
      const errs: string[] = [];
      if (!originId) errs.push('Origin is required');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 2) {
      const errs: string[] = [];
      if (!traitId) errs.push('Trait is required');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 3) {
      const totalLevels = classLevels.reduce((sum, c) => sum + c.level, 0);
      const errs: string[] = [];
      if (classLevels.length === 0) errs.push('At least one class is required');
      if (totalLevels > basicInfo.level) errs.push('Total class levels cannot exceed character level');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 4) {
      const errs: string[] = [];
      if (proficiencies.length === 0) errs.push('At least one proficiency is required');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 5) {
      const errs: string[] = [];
      if (baseStats.length === 0) errs.push('At least one stat is required');
      setErrors(errs);
      return errs.length === 0;
    }
    setErrors([]);
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  function renderStep () {
    if (step === 0) {
      return (
        <StepBasicInfo
          value={basicInfo}
          onChange={setBasicInfo}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    if (step === 1) {
      return (
        <StepChooseOrigin
          gameSystemId={basicInfo.gameSystemId}
          value={originId}
          onChange={setOriginId}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    if (step === 2) {
      return (
        <StepChooseTrait
          gameSystemId={basicInfo.gameSystemId}
          value={traitId}
          onChange={setTraitId}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    if (step === 3) {
      return (
        <StepChooseClass
          gameSystemId={basicInfo.gameSystemId}
          characterLevel={basicInfo.level}
          value={classLevels}
          onChange={setClassLevels}
          statIncreases={statIncreases}
          setStatIncreases={setStatIncreases}
          skills={skills}
          setSkills={setSkills}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    if (step === 4) {
      return (
        <StepAssignProficiency
          gameSystemId={basicInfo.gameSystemId}
          proficiencies={proficiencies}
          setProficiencies={setProficiencies}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    if (step === 5) {
      return (
        <StepAssignStats
          gameSystemId={basicInfo.gameSystemId}
          baseStats={baseStats}
          setBaseStats={setBaseStats}
          onNext={handleNext}
          errors={errors}
        />
      );
    }
    // Placeholder for next steps
    return <div>Step {step + 1}: {steps[step]} (to be implemented)</div>;
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
          onClick={handleBack}
          disabled={step === 0}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Back
        </button>
        {/* Hide Next button on steps 0-3, since it's in the form */}
        {step > 3 && 
          <button
            onClick={handleNext}
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
