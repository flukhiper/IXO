import { ACTION_COST_OPTION, ACTION_COST_TYPE, ACTION_HIT_TARGET_TYPE, ACTION_HIT_TYPE, ACTION_ITEM_OPTION, ACTION_REQUIRED_ITEM_TYPE, ACTION_STACK_TYPE, ACTION_TYPE, ACTION_USAGE_TYPE, MAX_ACTION_LEVEL } from '@/constants/config/action';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';

export interface ActionSelectionRule {
  actionIds?: string[];
  filterOptions?: {
    proficiencyIds?: string[];
    commandLevels?: number[];
    includeTags?: string[];
    excludeTags?: string[];
  };
  numberOfSelections: number;
}

///////////////////////
// Action Hit Target //
///////////////////////

export type ActionHitTargetType = typeof ACTION_HIT_TARGET_TYPE[keyof typeof ACTION_HIT_TARGET_TYPE];
export interface ActionAimHitTarget {
  type: typeof ACTION_HIT_TARGET_TYPE.AIM;
  numberOfTargets: number;
}
export interface ActionAreaHitTarget {
  type: Exclude<ActionHitTargetType, typeof ACTION_HIT_TARGET_TYPE.AIM>;
  numberOfTargets: number;
  radius: number;
}

////////////////
// Action Hit //
////////////////

export type ActionHitType = typeof ACTION_HIT_TYPE[keyof typeof ACTION_HIT_TYPE];
export interface ActionAttackRollHit {
  type: typeof ACTION_HIT_TYPE.ATTACK_ROLL;
  target: ActionAimHitTarget;
}

export interface ActionDifficultyClassHit {
  type: typeof ACTION_HIT_TYPE.DIFFICULTY_CLASS;
  savingTargetId: string;
  target: ActionAimHitTarget | ActionAreaHitTarget;
}

export interface ActionSelfHit {
  type: typeof ACTION_HIT_TYPE.SELF;
}

export interface ActionAlwaysHit {
  type: typeof ACTION_HIT_TYPE.ALWAYS_HIT;
  target: ActionAimHitTarget | ActionAreaHitTarget;
}

///////////////////
// Action Detail //
///////////////////

export interface ActionArmorClass {
  value: ConstantValue;
  modifierFormula?: string;
}

export interface ActionDamage {
  type: string; 
  value: ConstantValue | DiceValue; 
  modifierFormula?: string;
}

export interface ActionRestore {
  attributeId: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export interface ActionApplyCondition {
  conditionId: string;
  overrideDuration?: number;
  requiredConcentration?: boolean;
}

export type ActionUsageType = typeof ACTION_USAGE_TYPE[keyof typeof ACTION_USAGE_TYPE];
export interface BaseActionDetail {
  usage?: {
    type: ActionUsageType;
    maxNumberOfUse: number;
  };
  focusPointsCost?: number | typeof ACTION_COST_OPTION.ALL;
  movementSpeedCost?: number;
  range?: number;
  hit: ActionAttackRollHit | ActionDifficultyClassHit | ActionSelfHit | ActionAlwaysHit;
  armorClass?: ActionArmorClass;
  damage?: ActionDamage[];
  restore?: ActionRestore[];
  applyCondition?: ActionApplyCondition[];
  effects?: Effect[];
}
export interface ItemActionDetail extends Omit<BaseActionDetail, 'armorClass' | 'damage' | 'restore' | 'range'> {
  durabilityPointsCost?: number;
  range?: number | typeof ACTION_ITEM_OPTION.RANGE;
  armorClass?: ActionArmorClass | typeof ACTION_ITEM_OPTION.ARMOR_CLASS | typeof ACTION_ITEM_OPTION.ARMOR_CLASS_VALUE_ONLY;
  armorClassModifier?: ActionArmorClass;
  damage?: ActionDamage[] | typeof ACTION_ITEM_OPTION.DAMAGE | typeof ACTION_ITEM_OPTION.DAMAGE_VALUE_ONLY;
  damageModifier?: ActionDamage[];
  restore?: ActionRestore[] | typeof ACTION_ITEM_OPTION.RESTORE | typeof ACTION_ITEM_OPTION.RESTORE_VALUE_ONLY;
  restoreModifier?: ActionRestore[];
}
export interface CommandActionDetail extends BaseActionDetail {
  focusPointsCost: number;
}

///////////////////
// Action Config //
///////////////////

export type ActionLevel = typeof MAX_ACTION_LEVEL[number];
export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
export type ActionStackType = typeof ACTION_STACK_TYPE[keyof typeof ACTION_STACK_TYPE];
export type ActionCostType = typeof ACTION_COST_TYPE[keyof typeof ACTION_COST_TYPE];
export type RequiredItemType = typeof ACTION_REQUIRED_ITEM_TYPE[keyof typeof ACTION_REQUIRED_ITEM_TYPE];
export interface BaseActionConfig extends BaseConfig {
  type: ActionType;
  usedSlots?: number;
  stackId: string;
  stackType: ActionStackType;
  stackPriority?: number;

  proficiencyId?: string;

  actionCost?: ActionCostType;

  overrideActionId?: string;
  isBasic?: boolean;
  isSystem: boolean;

  limitLevel?: number;
  level?: Partial<Record<ActionLevel, BaseActionDetail>>;
}

export interface ItemActionConfig extends Omit<BaseActionConfig, 'level'> {
  type: typeof ACTION_TYPE.ITEM;
  requiredItem: RequiredItemType;
  requiredItemId?: string;
  requiredItemProficiency?: boolean;

  proficiencyId?: string | typeof ACTION_ITEM_OPTION.PROFICIENCY;

  level?: Record<Extract<ActionLevel, 1>, ItemActionDetail>;
}

export interface CommandActionConfig extends BaseActionConfig {
  type: typeof ACTION_TYPE.COMMAND;
  commandLevel?: number;

  level?: Partial<Record<ActionLevel, CommandActionDetail>>;
}

export type ActionConfig = 
 | BaseActionConfig 
 | ItemActionConfig 
 | CommandActionConfig;