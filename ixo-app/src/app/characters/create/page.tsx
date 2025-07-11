'use client';

import { useState } from 'react';
import StepBasicInfo from './components/StepBasicInfo';
import StepChooseOrigin from './components/StepChooseOrigin';

const steps = [
  'Basic Info',
  'Choose Origin',
  'Choose Trait',
  'Choose Class',
  'Choose Role Skill',
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
    isPublic: false
  });
  const [ originId, setOriginId ] = useState('');
  const [ errors, setErrors ] = useState<string[]>([]);

  const validate = () => {
    if (step === 0) {
      const errs: string[] = [];
      if (!basicInfo.name.trim()) errs.push('Name is required');
      if (!basicInfo.gameSystemId) errs.push('Game system is required');
      setErrors(errs);
      return errs.length === 0;
    }
    if (step === 1) {
      const errs: string[] = [];
      if (!originId) errs.push('Origin is required');
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
        {/* Hide Next button on step 0 and 1, since it's in the form */}
        {step > 1 && 
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
