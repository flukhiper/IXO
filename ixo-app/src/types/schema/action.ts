import { ACTION_HIT_TYPE } from '@/constants/action';

import type{ ActionTargetType } from '@/types/config/action';

import type { ReferenceValueSchema } from './value';
import type { BaseMapSchema } from './base';

export interface ActionCostSchema {
  attribute: ReferenceValueSchema;
  value: number | string; // FixValue = number, DiceValue = string
}

export interface ActionTargetSchema {
  type: ActionTargetType;
  range?: number | ReferenceValueSchema;
  areaType?: string;
  radius?: number;
}

export interface ActionHitAlwaysSchema {
  type: typeof ACTION_HIT_TYPE.ALWAYS;
}

export interface ActionHitRollSchema {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL;
  value: number | string | ReferenceValueSchema;
  modifier?: string;
}

export interface ActionHitDifficultySchema {
  type: typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  saving: ReferenceValueSchema;
  difficultyClass: number;
  modifier?: string;
}

export type ActionHitSchema =
  | ActionHitAlwaysSchema
  | ActionHitRollSchema
  | ActionHitDifficultySchema;

export interface ActionDamageSchema {
  damageType: ReferenceValueSchema;
  value: number | string | ReferenceValueSchema;
  modifier?: string;
}

export interface ActionApplyConditionSchema {
  applyTo: string; // e.g., 'target', 'self'
  condition: ReferenceValueSchema;
  concentrateCondition?: ReferenceValueSchema;
}

export interface ActionLevelSchema {
  costs: ActionCostSchema[];
  target: ActionTargetSchema;
  hit: ActionHitSchema;
  damage?: ActionDamageSchema;
  condition?: ActionApplyConditionSchema[];
  entity?: ReferenceValueSchema;
}

export interface ActionRequirementSchema {
  type: string;
  ref?: string;
  value?: string | number;
}

export interface ActionConfigSchema extends BaseMapSchema {
  tags: string[];
  type: string;
  level: Record<number, ActionLevelSchema>;
  references?: ReferenceValueSchema[];
  requirements?: Array<ActionRequirementSchema>;
}