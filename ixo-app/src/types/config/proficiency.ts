import { MAX_PROFICIENCY_GAIN_LEVEL } from '@/constants/config/proficiency';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export type ProficiencyGain = {
  attributeModifier: {
    attributeId: string;
    value: number;
  } | typeof NONE_VALUE.OBJECT;
  artPoints: number | typeof NONE_VALUE.NUMBER;
};

export type ProficiencyGainLevel = typeof MAX_PROFICIENCY_GAIN_LEVEL[number];

export interface ProficiencyConfig extends BaseConfig {
  gain: Partial<Record<ProficiencyGainLevel, ProficiencyGain | typeof NONE_VALUE.OBJECT>>;
}