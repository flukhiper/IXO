import { MAX_TRAIT_VALUE } from '@/constants/config/trait';
import { BaseConfig, LocalizeText } from './common';
import { NONE_VALUE } from '@/constants/config/common';

export interface TraitAbility {
  name: LocalizeText;
  description: LocalizeText;
}
export interface TraitConfig extends BaseConfig {
  value: typeof MAX_TRAIT_VALUE[number];
  abilities: TraitAbility[] | typeof NONE_VALUE.ARRAY;
}