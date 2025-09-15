import { MAX_TRAIT_VALUE } from '@/constants/config/trait';
import type { BaseConfig } from './base';
import { SkillSelectionRule } from './skill';

export interface TraitConfig extends BaseConfig {
  value: typeof MAX_TRAIT_VALUE[number];
  proficiencyPoints?: number;
  skillSelectionRule?: SkillSelectionRule[];
}
