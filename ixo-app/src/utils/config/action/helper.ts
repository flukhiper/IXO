import { createDiceValue, createFixValue, createModifierValue, createReferenceValue } from '@/utils/config/helper';
import { ENTITY_REF_ID } from '@/constants/entity';
import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { EQUIPMENT_REF_ID, WEAPON_SLOT_ID } from '@/constants/equipment';
import { ACTION_HIT_TYPE, ACTION_TARGET_TYPE } from '@/constants/action';

import type {
  ActionLevelConfig,
  ActionCostConfig,
  ActionTargetConfig,
  ActionHitConfig,
  ActionDamageConfig,
  ActionApplyConditionConfig,
  ActionTargetType,
  ActionAreaType,
  ActionHitAlways,
  ActionHitRoll,
  ActionHitDifficulty,
  ActionApplyConditionApplyToType
} from '@/types/config/action';
import type { WeaponSlotId } from '@/types/config/equipment';
import { DAMAGE_TYPE_REF_ID } from '@/constants/damage';
import { CONDITION_REF_ID } from '@/constants/condition';

export interface CreateActionLevelConfigParams {
  costs: ActionCostConfig[];
  target: ActionTargetConfig;
  hit: ActionHitConfig;
  damage?: ActionDamageConfig;
  condition?: ActionApplyConditionConfig[];
  entityId?: string;
}
export function createActionLevelConfig (params: CreateActionLevelConfigParams): ActionLevelConfig {
  const { costs, target, hit, damage, condition, entityId } = params;
  return {
    costs,
    target,
    hit,
    ...damage && { damage },
    ...condition && { condition },
    ...entityId && { entity: createReferenceValue(ENTITY_REF_ID, entityId) }
  };
}

// ActionCost helper
export function createActionCost (attributeId: string, value: number | string): ActionCostConfig {
  const rawValue =
        typeof value === 'string'
          ? createDiceValue(value)
          : createFixValue(value);
  return { 
    attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId), 
    value: rawValue
  };
}

// ActionTargetConfig helpers
export function createActionTargetBase (type: ActionTargetType): ActionTargetConfig {
  return { type };
}

type RangeParam = number | WeaponSlotId;
function parseRange (range: RangeParam) {
  const rawRange = typeof range === 'string'
    ? createReferenceValue(EQUIPMENT_REF_ID, range)
    : createFixValue(range);

  return rawRange;
}

export function createActionTargetWithRange (type: ActionTargetType, range: RangeParam): ActionTargetConfig {
  
  return { type, range: parseRange(range) };
}

export function createActionAreaTarget (areaType: ActionAreaType, radius: number, range: RangeParam): ActionTargetConfig {
  return {
    type: ACTION_TARGET_TYPE.AREA,
    areaType,
    radius: createFixValue(radius),
    range: parseRange(range)
  };
}

// ActionHitConfig helpers
export function createActionHitAlways (): ActionHitAlways {
  return { type: ACTION_HIT_TYPE.ALWAYS };
}

interface CreateActionHitRollParams {
  value: string | number | WeaponSlotId;
  reference?: typeof ATTRIBUTE_REF_ID | typeof EQUIPMENT_REF_ID;
  modifier?: string;
}
export function createActionHitRoll (params: CreateActionHitRollParams): ActionHitRoll {
  const { value, reference, modifier } = params;

  const rawModifier = modifier && { modifier: createModifierValue(modifier) };
  if (reference === ATTRIBUTE_REF_ID || reference === EQUIPMENT_REF_ID) {
    if (typeof value !== 'string') {
      throw new Error(`When reference is provided, value must be a string ${reference}Id`);
    }

    return { 
      type: ACTION_HIT_TYPE.ATTACK_ROLL, 
      value: createReferenceValue(reference, value), 
      ...rawModifier
    };
  } 
  const rawValue =
        typeof value === 'string'
          ? createDiceValue(value)
          : createFixValue(value);
  return { 
    type: ACTION_HIT_TYPE.ATTACK_ROLL, 
    value: rawValue, 
    ...rawModifier
  };
}

interface CreateActionHitDifficultyParams {
  attributeId: string;
  value: number;
  modifier?: string;
}
export function createActionHitDifficulty (params: CreateActionHitDifficultyParams): ActionHitDifficulty {
  const { value, attributeId, modifier } = params;

  const rawModifier = modifier && { modifier: createModifierValue(modifier) };
 
  return { 
    type: ACTION_HIT_TYPE.DIFFICULTY_CLASS, 
    saving: createReferenceValue(ATTRIBUTE_REF_ID, attributeId),
    difficultyClass: createFixValue(value), 
    ...rawModifier
  };
}

// ActionDamageConfig helper

interface CreateActionDamageConfigParams {
  damageType: string | WeaponSlotId;
  value: string | number | WeaponSlotId;
  reference?: typeof ATTRIBUTE_REF_ID | typeof EQUIPMENT_REF_ID;
  modifier?: string;
}
export function createActionDamageConfig (params: CreateActionDamageConfigParams): ActionDamageConfig {
  const { damageType, value, reference, modifier } = params;
  const rawDamageType = Object.values(WEAPON_SLOT_ID).includes(damageType as WeaponSlotId)
    ? createReferenceValue(EQUIPMENT_REF_ID, damageType)
    : createReferenceValue(DAMAGE_TYPE_REF_ID, damageType);

  const rawModifier = modifier && { modifier: createModifierValue(modifier) };
  if (reference === ATTRIBUTE_REF_ID || reference === EQUIPMENT_REF_ID) {
    if (typeof value !== 'string') {
      throw new Error(`When reference is provided, value must be a string ${reference}Id`);
    }

    return { 
      damageType: rawDamageType, 
      value: createReferenceValue(reference, value), 
      ...rawModifier
    };
  } 
  const rawValue =
        typeof value === 'string'
          ? createDiceValue(value)
          : createFixValue(value);
  return { 
    damageType: rawDamageType, 
    value: rawValue, 
    ...rawModifier
  };
}

// ActionApplyConditionConfig helper
export function createActionApplyConditionConfig (
  applyTo: ActionApplyConditionApplyToType,
  conditionId: string,
  concentrateId?: string
): ActionApplyConditionConfig {
  const rawConcentrateCondition = concentrateId && { concentrateCondition: createReferenceValue(CONDITION_REF_ID, concentrateId) };
  return { 
    applyTo, 
    condition: createReferenceValue(CONDITION_REF_ID, conditionId), 
    ...rawConcentrateCondition 
  };
}