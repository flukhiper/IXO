import { createReferenceValue } from '@/utils/config/helper';
import { SKILL_REF_ID } from '@/constants/skill';
import { ACTION_REF_ID } from '@/constants/action';

import type {  ProgressGainConfig, ProgressGainType } from '@/types/config/progress';

export function createProgressSkillGainConfig (type: ProgressGainType, skillId: string): ProgressGainConfig {
  return { type, reference: createReferenceValue(SKILL_REF_ID, skillId) };
}


export function createProgressActionGainConfig (type: ProgressGainType, actionId: string): ProgressGainConfig {
  return { type, reference: createReferenceValue(ACTION_REF_ID, actionId) };
}
