import { SKILL_REF_ID } from '@/constants/skill';
import { ACTION_REF_ID } from '@/constants/action';
import { ReferenceValue } from './value';

import type { MultiLangText } from '@/types/common';

export type ProficiencyGainType = typeof SKILL_REF_ID | typeof ACTION_REF_ID;

export interface ProficiencyLevelConfig {
  gains: ReferenceValue[];
}

export interface ProficiencyConfig {
  id: string;
  name: MultiLangText;
  description?: MultiLangText;
  tags?: string[];
  level: Record<number, ProficiencyLevelConfig>;
}
