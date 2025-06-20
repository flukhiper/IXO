// utils/conditionConfig/create.ts
import type { DiceValue, FixValue } from '@/types/value';
import type { DamageEffect, ModifierEffect, TickDurationTrigger, TickSource, TickTagTrigger } from '@/types/condition';

import { VALUE_TYPE } from '@/constants/value';
import { CONDITION_EFFECT_TYPE, CONDITION_TICK_TYPE } from '@/constants/condition';

export function createDamageEffect (params: {
  type: string;
  value: number | string;
}): DamageEffect {
  const rawValue: FixValue | DiceValue =
    typeof params.value === 'string'
      ? { type: VALUE_TYPE.DICE, formula: params.value }
      : { type: VALUE_TYPE.FIX, value: params.value };

  return {
    type: CONDITION_EFFECT_TYPE.DAMAGE,
    damage: {
      type: params.type,
      value: rawValue
    }
  };
}

export function createModifierEffect (params: {
  attribute: string;
  formula: string;
}): ModifierEffect {
  return {
    type: CONDITION_EFFECT_TYPE.MODIFIER,
    modifier: {
      type: VALUE_TYPE.MODIFIER,
      attribute: params.attribute,
      formula: params.formula
    }
  };
}

export function createDurationTrigger (duration: number): TickDurationTrigger {
  return {
    type: CONDITION_TICK_TYPE.START_TURN,
    duration
  };
}

export function createTagTrigger (source: TickSource, tags: string[]): TickTagTrigger {
  return {
    type: CONDITION_TICK_TYPE.TAG,
    source,
    tags
  };
}
