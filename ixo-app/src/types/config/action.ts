import { ACTION_COST_TYPE, ACTION_HIT_TARGET_TYPE, ACTION_HIT_TYPE, ACTION_ITEM_OPTION, ACTION_REQUIRED_ITEM_TYPE, ACTION_STACK_TYPE, ACTION_TYPE, ACTION_USAGE_TYPE } from '@/constants/config/action';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { StringRange } from './common';
import type { Effect } from './effect';

export interface ActionSelectionRule {
  actionIds?: string[];
  proficiencyIds?: string[];
  commandLevels?: number[];
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
  target?: ActionAimHitTarget | ActionAreaHitTarget;
}

export interface ActionSelfHit {
  type: typeof ACTION_HIT_TYPE.SELF;
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

export type ActionUsageType = typeof ACTION_USAGE_TYPE[keyof typeof ACTION_USAGE_TYPE];
export interface BaseActionDetail {
  usage?: {
    type: ActionUsageType;
    maxNumberOfUse: number;
  };
  focusPointsCost?: number;
  movementSpeedCost?: number;
  range?: number;
  hit: ActionAttackRollHit | ActionDifficultyClassHit | ActionSelfHit;
  armorClass?: ActionArmorClass;
  damage?: ActionDamage[];
  restore?: ActionRestore[];
  effects?: Effect[];
}
export interface ItemActionDetail extends Omit<BaseActionDetail, 'armorClass' | 'damage' | 'restore' | 'range'> {
  durabilityPointsCost: number;
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

  isSystem: boolean;

  level: Record<StringRange<1, 2>, BaseActionDetail>;
}

export interface ItemActionConfig extends Omit<BaseActionConfig, 'level'> {
  type: typeof ACTION_TYPE.ITEM;
  requiredItem: RequiredItemType;
  requiredItemId?: string;
  requiredItemProficiency?: boolean;

  proficiencyId?: string | typeof ACTION_ITEM_OPTION.PROFICIENCY;

  level: Record<StringRange<1, 2>, ItemActionDetail>;
}

export interface CommandActionConfig extends BaseActionConfig {
  type: typeof ACTION_TYPE.COMMAND;
  commandLevel: number;

  level: Record<StringRange<1, 6>, CommandActionDetail>;
}

export type ActionConfig = 
 | BaseActionConfig 
 | ItemActionConfig 
 | CommandActionConfig;