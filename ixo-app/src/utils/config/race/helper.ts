import { createModifierValue, createReferenceValue } from '@/utils/config/helper';
import { RACE_GAIN_TYPE } from '@/constants/race';
import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { SKILL_REF_ID } from '@/constants/skill';
import { ACTION_REF_ID } from '@/constants/action';

import type { RaceGainModifierConfig, RaceGainAcquireConfig } from '@/types/config/race';

export function createRaceGainModifierConfig (attributeId: string, modifier: string): RaceGainModifierConfig {
  return {
    type: RACE_GAIN_TYPE.MODIFIER,
    attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId),
    modifier: createModifierValue(modifier)
  };
}

export function createRaceSkillGainAcquireConfig (skillId: string): RaceGainAcquireConfig {
  return {
    type: RACE_GAIN_TYPE.ACQUIRE,
    reference: createReferenceValue(SKILL_REF_ID, skillId)
  };
}

export function createRaceActionGainAcquireConfig (actionId: string): RaceGainAcquireConfig {
  return {
    type: RACE_GAIN_TYPE.ACQUIRE,
    reference: createReferenceValue(ACTION_REF_ID, actionId)
  };
}
