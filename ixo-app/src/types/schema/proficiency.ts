import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';

export interface ProficiencyLevelSchema {
  gains: ReferenceValueSchema[];
}

export interface ProficiencyConfigSchema extends BaseMapSchema {
  tags?: string[];
  level: Record<number, ProficiencyLevelSchema>;
}
