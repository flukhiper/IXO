import { DOWNTIME_EFFECT_INTENSITY, DOWNTIME_EFFECT_TARGET, DOWNTIME_EFFECT_TYPE } from '@/constants/config/downtime';
import type { BaseConfig } from './base';

export type DowntimeEffectType = typeof DOWNTIME_EFFECT_TYPE[keyof typeof DOWNTIME_EFFECT_TYPE];
export type DowntimeEffectTarget = typeof DOWNTIME_EFFECT_TARGET[keyof typeof DOWNTIME_EFFECT_TARGET];
export type DowntimeEffectConfig =
| DowntimeEffectReplaceActionConfig
| DowntimeEffectRestoreAttributeConfig
| DowntimeEffectTriggerProjectConfig;
export interface DowntimeEffectReplaceActionConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.REPLACE_ACTION;
  tags: string[];             // tags of action eligible for replacement
  numberOfAction: number;
  actionIds: string[];
}
export interface DowntimeEffectRestoreAttributeConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.RESTORE_ATTRIBUTE;
  attributeId: string;        // e.g., 'hit-point'
  formula: string;            // e.g., '1d4 + stat(tier)' or 'full'
  target: DowntimeEffectTarget;
}
export interface DowntimeEffectTriggerProjectConfig {
  type: typeof DOWNTIME_EFFECT_TYPE.TRIGGER_PROJECT;
  notes?: string;             // GM-facing description
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
