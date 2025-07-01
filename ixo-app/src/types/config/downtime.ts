import { DOWNTIME_EFFECT_INTENSITY, DOWNTIME_EFFECT_TARGET, DOWNTIME_EFFECT_TYPE } from '@/constants/config/downtime';
import type { BaseConfig, DiceValue, FixedValue, LocalizeText } from './base';

export type DowntimeEffectType = typeof DOWNTIME_EFFECT_TYPE[keyof typeof DOWNTIME_EFFECT_TYPE];
export type DowntimeEffectTarget = typeof DOWNTIME_EFFECT_TARGET[keyof typeof DOWNTIME_EFFECT_TARGET];
export type DowntimeEffectConfig =
| DowntimeEffectPrepareActionConfig
| DowntimeEffectPrepareSkillConfig
| DowntimeEffectRestoreAttributeConfig
| DowntimeEffectRestoreItemUsageConfig
| DowntimeEffectShowFlavorTextConfig;
export interface DowntimeEffectPrepareActionConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.PREPARE_ACTION;
  numberOfSelectableActions: number;
  selectableActionIds: string[];
  removeActionIds: string[];
}
export interface DowntimeEffectPrepareSkillConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.PREPARE_SKILL;
  numberOfSelectableSkills: number;
  selectableSkillIds: string[];
  removeSkillIds: string[];
}

export type DowntimeEffectRestoreAttributeConfig =
| DowntimeEffectRestoreSelfAttributeConfig
| DowntimeEffectRestoreTargetAttributeConfig
| DowntimeEffectRestoreAnyAttributeConfig;
export interface DowntimeEffectRestoreSelfAttributeConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.RESTORE_ATTRIBUTE;
  target: typeof DOWNTIME_EFFECT_TARGET.SELF;
  attributeId: string;        // e.g., 'hit-point'
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface DowntimeEffectRestoreTargetAttributeConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.RESTORE_ATTRIBUTE;
  target: typeof DOWNTIME_EFFECT_TARGET.ALLY;
  numberOfTargets: number;
  attributeId: string;        // e.g., 'hit-point'
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface DowntimeEffectRestoreItemUsageConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.RESTORE_ITEM_USAGE;
  numberOfItems: number;
}
export interface DowntimeEffectRestoreAnyAttributeConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.RESTORE_ATTRIBUTE;
  target: typeof DOWNTIME_EFFECT_TARGET.ANY;
  numberOfTargets: number;
  attributeId: string;        // e.g., 'hit-point'
  baseValue: FixedValue | DiceValue;
  formula?: string;
}
export interface DowntimeEffectShowFlavorTextConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.SHOW_FLAVOR_TEXT;
  name: LocalizeText;
  description?: LocalizeText;
}


export type DowntimeEffectIntensity  = typeof DOWNTIME_EFFECT_INTENSITY[keyof typeof DOWNTIME_EFFECT_INTENSITY];
export interface DowntimeConfig extends BaseConfig {
  icon?: string;
  tags?: string[];

  effects: {
    half?: DowntimeEffectConfig;
    full?: DowntimeEffectConfig;
  };
}
