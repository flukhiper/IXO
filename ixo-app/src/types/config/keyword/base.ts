import { KEYWORD_TYPE } from '@/constants/config/base';
import type { AttributeGiftedKeyword, SkillCheckGiftedKeyword, SavingThrowGiftedKeyword, AttributeLearnedKeyword, AttributeMasteryKeyword, SavingThrowLearnedKeyword, SavingThrowMasteryKeyword, SkillCheckLearnedKeyword, SkillCheckMasteryKeyword } from './permanent';
import type { ConcentrationKeyword, ConditionKeyword } from './condition';
import type { ConeKeyword, DamageKeyword, InvokedDamageKeyword, UsageKeyword, BoundDamageKeyword, SavingThrowKeyword, AttackRollKeyword, WeaponDamageKeyword, RestoreKeyword, ExpandKeyword, CommandRollKeyword, WeaponRollKeyword, UnarmedDamageKeyword, ReduceKeyword, TargetKeyword, LimitKeyword, ReactionKeyword, FullKeyword, CommandKeyword, StanceKeyword, FreeKeyword, StandardKeyword, CubeKeyword, RadiusKeyword } from './action';
import type { ArmorPierceKeyword, BoostKeyword, CooldownKeyword, DoubleAttackKeyword, PreciseKeyword, SunderKeyword, TrueStrikeKeyword } from './combat';
import type { AimKeyword, BlockKeyword, ReflexKeyword, SwiftKeyword, ToughKeyword } from './mechanical';
import type { RepairKeyword } from './item';

export interface BaseKeyword {
  type: typeof KEYWORD_TYPE[keyof typeof KEYWORD_TYPE];
}
  
export type Keyword = 
  | AttributeGiftedKeyword
  | SkillCheckGiftedKeyword
  | SavingThrowGiftedKeyword
  | AttributeLearnedKeyword
  | SkillCheckLearnedKeyword
  | SavingThrowLearnedKeyword
  | AttributeMasteryKeyword
  | SkillCheckMasteryKeyword
  | SavingThrowMasteryKeyword

  | AimKeyword
  | BlockKeyword
  | SwiftKeyword
  | ToughKeyword
  | ReflexKeyword

  | ArmorPierceKeyword
  | SunderKeyword
  | BoostKeyword
  | CooldownKeyword
  | DoubleAttackKeyword
  | PreciseKeyword
  | TrueStrikeKeyword
  
  | UsageKeyword
  | FullKeyword
  | StandardKeyword
  | FreeKeyword
  | StanceKeyword
  | CommandKeyword
  | ReactionKeyword

  | TargetKeyword
  | ConeKeyword
  | RadiusKeyword
  | CubeKeyword
  
  | AttackRollKeyword
  | WeaponRollKeyword
  | CommandRollKeyword
  | SavingThrowKeyword 
  
  | DamageKeyword
  | BoundDamageKeyword
  | InvokedDamageKeyword
  | WeaponDamageKeyword
  | UnarmedDamageKeyword
  
  | ExpandKeyword
  | RestoreKeyword
  | ReduceKeyword
  | LimitKeyword

  | ConditionKeyword
  | ConcentrationKeyword
  
  | RepairKeyword;