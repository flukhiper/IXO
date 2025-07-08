import { SKILL_STACK_TYPE, SKILL_TYPE } from '@/constants/config/skill';
import type { BaseConfig, ConditionFormula, EffectConfig } from './base';
import type { ArchetypeRoleType, ClassType } from './class';

export type SkillStackType = typeof SKILL_STACK_TYPE[keyof typeof SKILL_STACK_TYPE];
export type SkillType = typeof SKILL_TYPE[keyof typeof SKILL_TYPE];
export interface SkillConfig extends BaseConfig {
  type: SkillType;
  icon?: string;
  tags?: string[];

  stack: {
    id: string;
    type: SkillStackType;
    priority?: number; // only used with 'overwrite'
  };
  tier: number; // 1-3

  requiredCharacterLevel: number; // Needed level to see this skill in pool
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[];  // Used for pool filtering
  requiredClassRole: ArchetypeRoleType[];
  requiredClassType: ClassType[];
  requiredClassIds: string[]; // e.g., 'warrior', 'mage'
  requiredSkillIds: string[];  // Used for pool filtering
  requiredTraitIds: string[];  // Used for pool filtering

  effects?: EffectConfig[];
}
