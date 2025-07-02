import { CONDITION_STACK_TYPE, CONDITION_TICK_TYPE } from '@/constants/config/condition';
import { EFFECT_TYPE } from '@/constants/config/base';
import type { BaseConfig, EffectActivateDoDamageOverTimeConfig, EffectActivateDoRestoreOverTimeConfig, EffectActivateReduceDamageConfig, EffectActivateShowFlavorTextConfig, EffectBlockConditionConfig, EffectGainActionConfig, EffectGainAdvantageConfig, EffectGainResistenceConfig, EffectModifyAttributeConfig, EffectModifyStatConfig, EffectRestrictActionConfig, EffectRestrictEquipmentConfig, EffectShowFlavorTextConfig, OnEventAttributeChangedConfig, OnEventGotDamageConfig, OnEventGotHitConfig, OnEventPhaseChangedConfig } from './base';

export type ConditionEffectType = 
| typeof EFFECT_TYPE.ACTIVATE_REDUCE_DAMAGE
| typeof EFFECT_TYPE.ACTIVATE_DO_DAMAGE_OVER_TIME
| typeof EFFECT_TYPE.ACTIVATE_DO_RESTORE_OVER_TIME
| typeof EFFECT_TYPE.ACTIVATE_SHOW_FLAVOR_TEXT
| typeof EFFECT_TYPE.MODIFY_STAT
| typeof EFFECT_TYPE.MODIFY_ATTRIBUTE
| typeof EFFECT_TYPE.RESTRICT_ACTION
| typeof EFFECT_TYPE.RESTRICT_EQUIPMENT
| typeof EFFECT_TYPE.BLOCK_CONDITION
| typeof EFFECT_TYPE.GAIN_ACTION
| typeof EFFECT_TYPE.GAIN_ADVANTAGE
| typeof EFFECT_TYPE.GAIN_RESISTENCE
| typeof EFFECT_TYPE.SHOW_FLAVOR_TEXT;

export type ConditionEffectConfig =
| EffectActivateReduceDamageConfig
| EffectActivateDoDamageOverTimeConfig
| EffectActivateDoRestoreOverTimeConfig
| EffectActivateShowFlavorTextConfig
| EffectModifyStatConfig
| EffectModifyAttributeConfig
| EffectRestrictActionConfig
| EffectRestrictEquipmentConfig
| EffectBlockConditionConfig
| EffectGainActionConfig
| EffectGainAdvantageConfig
| EffectGainResistenceConfig
| EffectShowFlavorTextConfig;

export type ConditionRemoveTickType = typeof CONDITION_TICK_TYPE[keyof typeof CONDITION_TICK_TYPE];
export type ConditionRemoveTickConfig = 
| ConditionRemoveTickPhaseConfig
| ConditionRemoveTickImmediateConfig
| ConditionRemoveTickHitConfig
| ConditionRemoveTickDamageConfig
| ConditionRemoveTickConditionConfig;
export interface ConditionRemoveTickPhaseConfig {
  type: typeof CONDITION_TICK_TYPE.PHASE;
  on: OnEventPhaseChangedConfig;
  duration: number;
  formula?: string;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickImmediateConfig {
  type: typeof CONDITION_TICK_TYPE.IMMEDIATE;
}
export interface ConditionRemoveTickHitConfig {
  type: typeof CONDITION_TICK_TYPE.HIT;
  on: OnEventGotHitConfig;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickDamageConfig {
  type: typeof CONDITION_TICK_TYPE.DAMAGE;
  on: OnEventGotDamageConfig;
  saving?: {
    attributeId: string;
    formula: string;
  };
}
export interface ConditionRemoveTickConditionConfig {
  type: typeof CONDITION_TICK_TYPE.ATTRIBUTE;
  ons: OnEventAttributeChangedConfig[];
}

export type ConditionStackType = typeof CONDITION_STACK_TYPE[keyof typeof CONDITION_STACK_TYPE];
export interface ConditionConfig extends BaseConfig {
  icon?: string;
  tags?: string[]; // e.g., ["debuff", "control", "status"]
  
  stack: {
    id: string;
    type: ConditionStackType;
    priority?: number; // only used with 'overwrite'
  };
  removeTicks?: ConditionRemoveTickConfig[]; 

  // Effects to apply during condition
  effects: ConditionEffectConfig[];
}
