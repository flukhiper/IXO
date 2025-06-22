import { createAllAttributeValue, createAllSavingValue, createConditionValue, createDiceValue, createFixValue, createModifierValue, createReferenceValue } from '@/utils/config/helper';
import { CONDITION_EFFECT_TYPE, CONDITION_REF_ID, CONDITION_TICK_TYPE } from '@/constants/condition';
import { DAMAGE_SCALE_REF_ID, DAMAGE_TYPE_REF_ID } from '@/constants/damage';
import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { ConditionComparator } from '@/types/config/value';
import { STAT_REF_ID } from '@/constants/stat';

import type { ConditionEffectConfig, ConditionStackConfig, ConditionStackType, ConditionTickDurationTriggerType, ConditionTickSource, ConditionTickTriggerConfig } from '@/types/config/condition';
import { VALUE_TYPE } from '@/constants/value';
import { ACTION_REF_ID } from '@/constants/action';

// Helper for ConditionStackConfig
export function createConditionStackConfig (
  id: string,
  type: ConditionStackType,
  priority?: number
): ConditionStackConfig {
  return priority !== undefined ? { id, type, priority } : { id, type };
}

// Helpers for ConditionTickTriggerConfig
export function createConditionTickTagTriggerConfig (
  source: ConditionTickSource,
  tags: string[]
): ConditionTickTriggerConfig {
  return { type: 'tag', source, tags };
}

export function createConditionTickDamageTriggerConfig (
  damageTypes: string[],
  saving?: string,
  difficultyClass?: number
): ConditionTickTriggerConfig {
  const rawDamageTypes = damageTypes.map((type)=>createReferenceValue(DAMAGE_TYPE_REF_ID, type));
  const rawSaving = saving && { saving: createReferenceValue(ATTRIBUTE_REF_ID, saving) };
  const rawDifficultyClass = difficultyClass && { difficultyClass: createFixValue( difficultyClass) };
  return {
    type: CONDITION_TICK_TYPE.DAMAGE,
    damageTypes: rawDamageTypes,
    ...rawSaving,
    ...rawDifficultyClass
  };
}

export function createConditionTickDurationTriggerConfig (
  type: ConditionTickDurationTriggerType,
  duration: number,
  saving?: string,
  difficultyClass?: number
): ConditionTickTriggerConfig {

  const rawSaving = saving && { saving: createReferenceValue(ATTRIBUTE_REF_ID, saving) };
  const rawDifficultyClass = difficultyClass && { difficultyClass: createFixValue( difficultyClass) };
  return {
    type,
    duration: createFixValue(duration),
    ...rawSaving,
    ...rawDifficultyClass
  };
}

export function createConditionTickConditionTriggerConfig (
  comparator: ConditionComparator,
  condition: string
): ConditionTickTriggerConfig {
  return { type: CONDITION_TICK_TYPE.CONDITION, condition: createConditionValue(comparator, condition) };
}

export function createConditionTickImmediateTriggerConfig (): ConditionTickTriggerConfig {
  return { type: CONDITION_TICK_TYPE.IMMEDIATE };
}

// Helpers for ConditionEffectConfig
export function createConditionDamageEffectConfig (
  damageType: string,
  value: string | number
): ConditionEffectConfig {
  const rawValue =
          typeof value === 'string'
            ? createDiceValue(value)
            : createFixValue(value);
  return { 
    type: CONDITION_EFFECT_TYPE.DAMAGE, 
    damage: { 
      damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType), 
      value: rawValue
    }
  };
}

export function createConditionResistanceEffectConfig (
  damageTypes: string[],
  damageScale: string
): ConditionEffectConfig {
  const rawDamageTypes = damageTypes.map((type)=>createReferenceValue(DAMAGE_TYPE_REF_ID, type));

  return { 
    type: CONDITION_EFFECT_TYPE.RESISTENCE, 
    damage: { 
      damageTypes: rawDamageTypes, 
      damageScale: createReferenceValue(DAMAGE_SCALE_REF_ID, damageScale)
    } 
  };
}

export function createConditionModifierEffectConfig (
  reference: typeof ATTRIBUTE_REF_ID | typeof STAT_REF_ID,
  id: string,
  modifier: string
): ConditionEffectConfig {
  return { 
    type: CONDITION_EFFECT_TYPE.MODIFIER,
    reference: createReferenceValue(reference, id),
    modifier: createModifierValue(modifier) 
  };
}

export function createConditionDisableEffectConfig (
  tags: string[]
): ConditionEffectConfig {
  return { type: CONDITION_EFFECT_TYPE.DISABLE, tags };
}

type ConditionEffectAttributeParam = typeof VALUE_TYPE.ALL_SAVING | typeof VALUE_TYPE.ALL_ATTRIBUTE | string;
export function createConditionDisadvantageEffectConfig (
  attributes: ConditionEffectAttributeParam[]
): ConditionEffectConfig {
  const rawAttributes = attributes.map(attr=>{
    switch (attr) {
      case VALUE_TYPE.ALL_SAVING:
        return createAllSavingValue();
      case VALUE_TYPE.ALL_ATTRIBUTE:
        return createAllAttributeValue();
      default:
        return createReferenceValue(ATTRIBUTE_REF_ID, attr);
    }
  });
  return { type: CONDITION_EFFECT_TYPE.DISADVANTAGE, attributes: rawAttributes };
}

export function createConditionAdvantageEffectConfig (
  attributes: ConditionEffectAttributeParam[]
): ConditionEffectConfig {
  const rawAttributes = attributes.map(attr=>{
    switch (attr) {
      case VALUE_TYPE.ALL_SAVING:
        return createAllSavingValue();
      case VALUE_TYPE.ALL_ATTRIBUTE:
        return createAllAttributeValue();
      default:
        return createReferenceValue(ATTRIBUTE_REF_ID, attr);
    }
  });
  return { type: CONDITION_EFFECT_TYPE.ADVANTAGE, attributes: rawAttributes };
}

export function createConditionFusionEffectConfig (
  baseConditionTags: string[],
  resultConditions: string[]
): ConditionEffectConfig {
  const rawResultConditions = resultConditions.map(con=>createReferenceValue(CONDITION_REF_ID, con));
  return { 
    type: CONDITION_EFFECT_TYPE.FUSION, 
    baseConditionTags, 
    resultConditions: rawResultConditions
  };
}

export function createConditionActionEffectConfig (
  actions: string[]
): ConditionEffectConfig {
  const rawActions = actions.map(action=>createReferenceValue(ACTION_REF_ID, action));
  return { type: CONDITION_EFFECT_TYPE.ACTION, actions: rawActions };
}

export function createConditionBoostEffectConfig (
  damageType: string,
  value: string | number
): ConditionEffectConfig {
  const rawValue =
          typeof value === 'string'
            ? createDiceValue(value)
            : createFixValue(value);
  return { 
    type: CONDITION_EFFECT_TYPE.BOOST, 
    damage: { 
      damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType), 
      value: rawValue
    }
  };
}

export function createConditionWeakEffectConfig (
  damageType: string,
  value: string | number
): ConditionEffectConfig {
  const rawValue =
          typeof value === 'string'
            ? createDiceValue(value)
            : createFixValue(value);
  return { 
    type: CONDITION_EFFECT_TYPE.WEAK, 
    damage: { 
      damageType: createReferenceValue(DAMAGE_TYPE_REF_ID, damageType), 
      value: rawValue
    }
  };
}

export function createConditionForceEffectConfig (
  actions: string[]
): ConditionEffectConfig {
  const rawActions = actions.map(action=>createReferenceValue(ACTION_REF_ID, action));
  return { type: CONDITION_EFFECT_TYPE.FORCE, actions: rawActions };
}