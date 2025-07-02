import { SKILL_STACK_TYPE } from '@/constants/config/skill';
import { EFFECT_TYPE } from '@/constants/config/base';
import type { BaseConfig, ConditionFormula, EffectActivateBlockConditionConfig, EffectActivateDoDamageConfig, EffectActivateDoRestoreConfig, EffectActivateShowFlavorTextConfig, EffectModifyStatConfig, EffectModifyAttributeConfig, EffectRestrictActionConfig, EffectBlockConditionConfig, EffectRestrictEquipmentConfig, EffectActivateReduceDamageConfig, EffectActivateAdvantageConfig, EffectActivateConditionConfig, EffectGainResistenceConfig, EffectAddDowntimeConfig, EffectAddProficiencyPointsConfig, EffectAddProficiencyLevelConfig, EffectAddEquipmentSlotConfig, EffectShowFlavorTextConfig, EffectGainAdvantageConfig, EffectGainConditionConfig } from './base';


export type SkillEffectType = 
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

export type SkillEffectConfig =
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
| SkillEffectSelectEffectConfig;

export interface SkillEffectSelectEffectConfig {
  type: typeof EFFECT_TYPE.SELECT_EFFECT;
  effects: Exclude<SkillEffectConfig, SkillEffectSelectEffectConfig>[];
}

export type SkillStackType = 
| typeof SKILL_STACK_TYPE.IGNORE
| typeof SKILL_STACK_TYPE.OVERWRITE;

export interface SkillConfig extends BaseConfig {
  icon?: string;
  tags?: string[];

  stack: {
    id: string;
    type: SkillStackType;
    priority?: number; // only used with 'overwrite'
  };

  pathId: string; // e.g., 'warrior', 'mage'
  requiredCharacterLevel: number; // Needed level to see this skill in pool
  requiredStats: {
    statId: string;
    conditionFormulas: ConditionFormula;
  }[];  // Used for pool filtering
  requiredSkillIds: string[];  // Used for pool filtering
  requiredTraitIds: string[];  // Used for pool filtering

  effects?: SkillEffectConfig[];
}
