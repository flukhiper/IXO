import { createReferenceValue } from '@/utils/config/helper';
import { SKILL_REF_ID } from '@/constants/skill';
import { ACTION_REF_ID } from '@/constants/action';

import type { ReferenceValue } from '@/types/config/value';

export function createProficiencySkillGain (skillId: string): ReferenceValue {
  return createReferenceValue(SKILL_REF_ID, skillId);
}

export function createProficiencyActinoGain (actionId: string): ReferenceValue {
  return createReferenceValue(ACTION_REF_ID, actionId);
}
