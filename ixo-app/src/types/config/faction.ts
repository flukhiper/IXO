import type { BaseConfig } from './base';
import type { SkillSelectionRule } from './skill';

export interface FactionConfig extends BaseConfig {
  skillSelectionRule?: SkillSelectionRule[];
}