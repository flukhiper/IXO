import { NONE_VALUE } from '@/constants/config/common';

export interface CharacterGain {
  attributeModifier: {
    attributeId: string;
    value: number;
  } | typeof NONE_VALUE.OBJECT;
  statModifier: {
    statId: string;
    value: number;
  } | typeof NONE_VALUE.OBJECT;
  proficiencyPoints: number | typeof NONE_VALUE.NUMBER;
  skillPoints: number | typeof NONE_VALUE.NUMBER;
  talentPoints: number | typeof NONE_VALUE.NUMBER;
}

export interface CharacterConfig {
  gain: Partial<Record<number, CharacterGain | typeof NONE_VALUE.OBJECT>>;
}
export interface GameSystemConfig {
  characterConfig: CharacterConfig;
}