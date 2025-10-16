import { ATTRIBUTE_MODIFIER_OPTION, STAT_MODIFIER_OPTION } from '@/constants/config/gameSystem';
import { NONE_VALUE } from '@/constants/config/common';
import { BaseConfig } from './common';

export interface CharacterGain {
  attributeModifiers: {
    attributeId: string | typeof ATTRIBUTE_MODIFIER_OPTION.ANY_CHOICE;
    value: number;
    modifier: string | typeof NONE_VALUE.STRING;
  }[] | typeof NONE_VALUE.ARRAY;
  statModifiers: {
    statId: string | typeof STAT_MODIFIER_OPTION.ANY_CHOICE;
    value: number;
  }[] | typeof NONE_VALUE.ARRAY;
  proficiencyPoints: number | typeof NONE_VALUE.NUMBER;
  skillPoints: number | typeof NONE_VALUE.NUMBER;
  talentPoints: number | typeof NONE_VALUE.NUMBER;
}

export interface CharacterConfig {
  gain: Partial<Record<number, CharacterGain | typeof NONE_VALUE.OBJECT>>;
  inventorySpace: [number, number];
}
export interface GameSystemConfig extends Exclude<BaseConfig, 'gameSystemId'> {
  characterConfig: CharacterConfig;
}