import { EFFECT_TYPE } from '@/constants/config/base';
import type { BaseConfig, EffectActivateBlockConditionConfig, EffectActivateConditionConfig, EffectActivateAdvantageConfig, EffectActivateReduceDamageConfig, EffectActivateDoDamageConfig, EffectActivateDoRestoreConfig, EffectActivateShowFlavorTextConfig, EffectModifyStatConfig, EffectModifyAttributeConfig, EffectRestrictActionConfig, EffectRestrictEquipmentConfig, EffectBlockConditionConfig, EffectGainConditionConfig, EffectGainAdvantageConfig, EffectGainResistenceConfig, EffectAddDowntimeConfig, EffectAddProficiencyPointsConfig, EffectAddProficiencyLevelConfig, EffectAddEquipmentSlotConfig, EffectShowFlavorTextConfig, LocalizeText } from './base';
export interface ArchetypeSpecialty {
  name: LocalizeText;
  description: LocalizeText;
}

export type ArchetypeEffectType = 
| typeof EFFECT_TYPE.ACTIVATE_BLOCK_CONDITION
| typeof EFFECT_TYPE.ACTIVATE_CONDITION
| typeof EFFECT_TYPE.ACTIVATE_ADVANTAGE
| typeof EFFECT_TYPE.ACTIVATE_REDUCE_DAMAGE
| typeof EFFECT_TYPE.ACTIVATE_DO_DAMAGE
| typeof EFFECT_TYPE.ACTIVATE_DO_RESTORE
| typeof EFFECT_TYPE.ACTIVATE_SHOW_FLAVOR_TEXT
| typeof EFFECT_TYPE.MODIFY_STAT
| typeof EFFECT_TYPE.MODIFY_ATTRIBUTE
| typeof EFFECT_TYPE.RESTRICT_ACTION
| typeof EFFECT_TYPE.RESTRICT_EQUIPMENT
| typeof EFFECT_TYPE.BLOCK_CONDITION
| typeof EFFECT_TYPE.GAIN_CONDITION
| typeof EFFECT_TYPE.GAIN_ACTION
| typeof EFFECT_TYPE.GAIN_ADVANTAGE
| typeof EFFECT_TYPE.GAIN_RESISTENCE
| typeof EFFECT_TYPE.ADD_DOWNTIME
| typeof EFFECT_TYPE.ADD_PROFICIENCY_POINTS
| typeof EFFECT_TYPE.ADD_PROFICIENCY_LEVEL
| typeof EFFECT_TYPE.ADD_EQUIPMENT_SLOT
| typeof EFFECT_TYPE.SHOW_FLAVOR_TEXT
| typeof EFFECT_TYPE.SELECT_EFFECT;

export type ArchetypeEffectConfig =
| EffectActivateBlockConditionConfig
| EffectActivateConditionConfig
| EffectActivateAdvantageConfig
| EffectActivateReduceDamageConfig
| EffectActivateDoDamageConfig
| EffectActivateDoRestoreConfig
| EffectActivateShowFlavorTextConfig
| EffectModifyStatConfig
| EffectModifyAttributeConfig
| EffectRestrictActionConfig
| EffectRestrictEquipmentConfig
| EffectBlockConditionConfig
| EffectGainConditionConfig
| EffectGainAdvantageConfig
| EffectGainResistenceConfig
| EffectAddDowntimeConfig
| EffectAddProficiencyPointsConfig
| EffectAddProficiencyLevelConfig
| EffectAddEquipmentSlotConfig
| EffectShowFlavorTextConfig
| ArchetypeEffectSelectEffectConfig;

export interface ArchetypeEffectSelectEffectConfig {
  type: typeof EFFECT_TYPE.SELECT_EFFECT;
  effects: Exclude<ArchetypeEffectConfig, ArchetypeEffectSelectEffectConfig>[];
}

export interface ArchetypeConfig extends BaseConfig {
  tags?: string[];                    // optional grouping
  icon?: string;                      // URL to icon image (optional but recommended)
  effects: ArchetypeEffectConfig[];
  specialty?: ArchetypeSpecialty;      // unique, descriptive trait
}