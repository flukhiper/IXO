import { ACTION_ARCHETYPE, ACTION_COST_TYPE, ACTION_HIT_TARGET_TYPE, ACTION_HIT_TYPE, ACTION_OPTION, ACTION_RANGE_TYPE, ACTION_REQUIRED_ITEM_TYPE, ACTION_STACK_TYPE, ACTION_TYPE, ACTION_USAGE_TYPE, MAX_ACTION_LEVEL } from '@/constants/config/action';
import type { BaseConfig, ConstantValue, DiceValue } from './base';
import type { Effect } from './effect';

export interface ActionSelectionRule {
  actionIds?: string[];
  filterOptions?: {
    types?: ActionType[];
    archetypes?: ActionArchetype[];
    commandLevels?: ActionLevel[];
    proficiencyIds?: string[];
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
  type: typeof ACTION_OPTION.ACTION_ARMOR_CLASS | typeof ACTION_OPTION.ITEM_ARMOR_CLASS | typeof ACTION_OPTION.ITEM_ARMOR_CLASS_VALUE_ONLY;
  value?: number;
  modifierFormula?: string;
}

export interface ActionDamage {
  type: typeof ACTION_OPTION.ACTION_DAMAGE | typeof ACTION_OPTION.ITEM_DAMAGE | typeof ACTION_OPTION.ITEM_DAMAGE_VALUE_ONLY; 
  damageTypeId?: string;
  value?: ConstantValue | DiceValue; 
  modifierFormula?: string;
}

export interface ActionRestore {
  attributeId: string;
  value: ConstantValue | DiceValue;
  modifierFormula?: string;
}

export type ActionUsageType = typeof ACTION_USAGE_TYPE[keyof typeof ACTION_USAGE_TYPE];
export type ActionRangeType = typeof ACTION_RANGE_TYPE[keyof typeof ACTION_RANGE_TYPE];
export interface BaseActionDetail {
  focusPointsCost?: number | typeof ACTION_OPTION.ALL_COST;
  movementSpeedCost?: number | typeof ACTION_OPTION.ALL_COST;
  durabilityPointsCost?: number | typeof ACTION_OPTION.ALL_COST;
  range: {
    type: ActionRangeType | typeof ACTION_OPTION.ITEM_RANGE;
    value?: number;
  };
  hit: ActionAttackRollHit | ActionDifficultyClassHit | ActionSelfHit | ActionAlwaysHit;
  armorClass?: ActionArmorClass;
  damage?: ActionDamage[];
  restore?: ActionRestore[];
  effects?: Effect[];
}
export interface CommandActionDetail extends BaseActionDetail {
  focusPointsCost: number;
}

///////////////////
// Action Config //
///////////////////

export type ActionLevel = typeof MAX_ACTION_LEVEL[number];
export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
export type ActionArchetype = typeof ACTION_ARCHETYPE[keyof typeof ACTION_ARCHETYPE];
export type ActionStackType = typeof ACTION_STACK_TYPE[keyof typeof ACTION_STACK_TYPE];
export type ActionCostType = typeof ACTION_COST_TYPE[keyof typeof ACTION_COST_TYPE];

export type ActionRequiredItemType = typeof ACTION_REQUIRED_ITEM_TYPE[keyof typeof ACTION_REQUIRED_ITEM_TYPE];
export interface BaseActionConfig extends BaseConfig {
  type: ActionType;
  archetype: ActionArchetype;
  stack: {
    type: ActionStackType;
    id: string;
    priority?: number;
  };

  usedSlots?: number;

  requiredItem?: {
    type: ActionRequiredItemType;
    id?: string;
    proficiency: boolean;
  };

  usage?: {
    type: ActionUsageType;
    maxNumberOfUse: number;
  };
  
  proficiencyId?: string | typeof ACTION_OPTION.ITEM_PROFICIENCY;

  actionCost?: ActionCostType;
  requiredConcentration: boolean;

  level: Partial<Record<ActionLevel, BaseActionDetail>>;
}

export interface CombatArtActionConfig extends BaseActionConfig {
  type: typeof ACTION_TYPE.COMBAT_ART;
  usedSlots: number;

  level: Partial<Record<ActionLevel, BaseActionDetail>>;
}

export interface CommandActionConfig extends BaseActionConfig {
  type: typeof ACTION_TYPE.COMMAND;
  usedSlots: number;
  commandLevel: number;

  level: Partial<Record<ActionLevel, CommandActionDetail>>;
}

export type ActionConfig = 
 | BaseActionConfig 
 | CombatArtActionConfig 
 | CommandActionConfig;