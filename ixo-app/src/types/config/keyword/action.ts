import { KEYWORD_TYPE, KEYWORD_VALUE_TYPE, PHASE_TYPE } from '@/constants/config/base';
import type { BaseKeyword } from '@/types/config/keyword/base';
import type { DiceValue, FixedValue, FullValue, HalfValue } from '@/types/config/base';

// Action Keywords
export interface FullKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.FULL;
}
export interface StandardKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.STANDARD;
}
export interface FreeKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.FREE;
}
export interface StanceKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.STANCE;
}
export interface CommandKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.COMMAND;
  value: number;
}
export interface ReactionKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.REACTION;
}
export interface UsageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.USAGE;
  numberOfUsages: number;
  phase: typeof PHASE_TYPE.SHORT_DOWNTIME;
}
  
// Action Target Keywords
export interface TargetKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.TARGET;
  range: number;
  numberOfTargets: number;
}
export interface ConeKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.CONE;
  radius: number;
  range: number;
  numberOfTargets: number;
}
export interface RadiusKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.RADIUS;
  radius: number;
  range: number;
  numberOfTargets: number;
}
export interface CubeKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.CUBE;
  radius: number;
  range: number;
  numberOfTargets: number;
}
  
// Action Hit Keywords
export interface AttackRollKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.ATTACK_ROLL;
}
export interface WeaponRollKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.WEAPON_ROLL;
  equipSlotId: string;
}
export interface CommandRollKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.COMMAND_ROLL;
  commandId: string;
}
export interface SavingThrowKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.SAVING_THROW;
  savingThrowType: string | typeof KEYWORD_VALUE_TYPE.ANY; // if any, then the saving throw type is not specified
}
  
// Action Damage Keywords
export interface DamageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.DAMAGE;
  damageTypeId: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
// Action Damage Type Keywords
export interface BoundDamageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.BOUND_DAMAGE;
  damageTypeIds: string[]; // choose from DAMAGE_TYPE to determine damage type
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
export interface InvokedDamageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.INVOKED_DAMAGE;
  damageTypeIds: string[]; // choose from DAMAGE_TYPE to determine damage type
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
export interface WeaponDamageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.WEAPON_DAMAGE;
  equipSlotId: string;
}
export interface UnarmedDamageKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.UNARMED_DAMAGE;
  damageTypeId: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
  
// Action Resource Keywords
export interface ExpandKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.EXPAND;
  attributeId: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
export interface LimitKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.LIMIT;
  attributeId: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}
export interface RestoreKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.RESTORE;
  attributeId: string;
  baseValue: DiceValue | FixedValue | FullValue | HalfValue;
  formula?: string;
}
export interface ReduceKeyword extends BaseKeyword {
  type: typeof KEYWORD_TYPE.REDUCE;
  attributeId: string;
  baseValue: DiceValue | FixedValue;
  formula?: string;
}