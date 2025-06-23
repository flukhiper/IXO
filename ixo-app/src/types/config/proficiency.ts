import { SKILL_REF_ID } from '@/constants/skill';
import { ACTION_REF_ID } from '@/constants/action';

import type { ReferenceValue } from './value';
import type { BaseMapConfig } from './base';

export type ProficiencyGainType = typeof SKILL_REF_ID | typeof ACTION_REF_ID;

export interface ProficiencyLevelConfig {
  gains: ReferenceValue[];
}

export interface ProficiencyConfig extends BaseMapConfig {
  tags?: string[];
  level: Record<number, ProficiencyLevelConfig>;
}
