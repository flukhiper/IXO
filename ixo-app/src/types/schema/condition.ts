import { CONDITION_EFFECT_TYPE, CONDITION_TICK_TYPE } from '@/constants/condition';
import { VALUE_TYPE } from '@/constants/value';
import type { ConditionTickDurationTriggerType, ConditionTickSource } from '@/types/config/condition';
import type { BaseMapSchema } from './base';
import type { ReferenceValueSchema } from './value';

export interface ConditionStackSchema {
  id: string;
  type: string;
  priority?: number;
}

export interface ConditionTickTagTriggerSchema {
  type: typeof CONDITION_TICK_TYPE.TAG;
  source: ConditionTickSource;
  tags: string[];
}
export interface ConditionTickDamageTriggerSchema {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  damageTypes: ReferenceValueSchema[]; 
  saving?: ReferenceValueSchema;
  difficultyClass?: number;
}
export interface ConditionTickDurationTriggerSchema {
  type: ConditionTickDurationTriggerType;
  duration: number;
  saving?: ReferenceValueSchema;
  difficultyClass?: number;
}
export interface ConditionTickConditionTriggerSchema {
  type: typeof CONDITION_TICK_TYPE.CONDITION;
  condition: string;
}
export interface ConditionTickImmediateTriggerSchema {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}
export type ConditionTickTriggerSchema =
  | ConditionTickTagTriggerSchema
  | ConditionTickDamageTriggerSchema
  | ConditionTickDurationTriggerSchema
  | ConditionTickConditionTriggerSchema
  | ConditionTickImmediateTriggerSchema;

export interface ConditionDamageEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.DAMAGE;
  damage: {
    damageType: ReferenceValueSchema;
    value: string | number;
  };
}
export interface ConditionResistanceEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.RESISTENCE;
  damage: {
    damageTypes: ReferenceValueSchema[];
    damageScale: ReferenceValueSchema;  
  };
}
export interface ConditionModifierEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.MODIFIER;
  reference: ReferenceValueSchema;
  modifier: string;
}
export interface ConditionDisableEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.DISABLE;
  tags: string[]; 
}
type ConditionEffectSchemaAttributeValue = ReferenceValueSchema | typeof VALUE_TYPE.ALL_SAVING | typeof VALUE_TYPE.ALL_ATTRIBUTE;
export interface ConditionDisadvantageEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.DISADVANTAGE;
  attributes: ConditionEffectSchemaAttributeValue[]; 
}
export interface ConditionAdvantageEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.ADVANTAGE;
  attributes: ConditionEffectSchemaAttributeValue[]; 
}
export interface ConditionFusionEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.FUSION;
  baseConditionTags: string[];   
  resultConditions: ReferenceValueSchema[]; 
}
export interface ConditionActionEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.ACTION;
  actions: ReferenceValueSchema[]; 
}
export interface ConditionBoostEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.BOOST;
  damage: {
    damageType: ReferenceValueSchema;
    value: string | number;
  };
}
export interface ConditionWeakEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.WEAK;
  damage: {
    damageType: ReferenceValueSchema;
    value: string | number;
  };
}
export interface ConditionForceEffectSchema {
  type: typeof CONDITION_EFFECT_TYPE.FORCE;
  actions: ReferenceValueSchema[];
}
export type ConditionEffectSchema =
| ConditionDamageEffectSchema
| ConditionResistanceEffectSchema
| ConditionModifierEffectSchema
| ConditionDisableEffectSchema
| ConditionDisadvantageEffectSchema
| ConditionAdvantageEffectSchema
| ConditionFusionEffectSchema
| ConditionActionEffectSchema
| ConditionBoostEffectSchema
| ConditionWeakEffectSchema
| ConditionForceEffectSchema;
 

export interface ConditionConfigSchema extends BaseMapSchema {
  tags?: string[];
  stack?: ConditionStackSchema;
  ticks: ConditionTickTriggerSchema[];
  effects: ConditionEffectSchema[];
}
