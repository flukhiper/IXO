import type { ConditionConfig, ConditionEffectDamageOverTimeConfig, ConditionEffectReduceDamageConfig, ConditionEffectRestoreOverTimeConfig } from '@/types/config/condition';
import { generateId, normalizeValue, denormalizeValue } from './helper';
import { CONDITION_EFFECT_TYPE } from '@/constants/config/condition';
import type { ConditionEffectConfig } from '@/types/config/condition';

export function createConditionConfig (
  input: Omit<ConditionConfig, 'id' | 'createdAt'>
): ConditionConfig {
  if (!input.name?.['en']) {
    throw new Error('ConditionConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedConditionConfig = Omit<ConditionConfig, 'effects'> & {
  effects: NormalizedConditionEffectConfig[];
};

export type NormalizedConditionEffectConfig =
  | NormalizedConditionEffectWithValueConfig
  | NormalizedConditionEffectReduceDamageConfig
  | Omit<ConditionEffectConfig, 'value'>;

export type NormalizedConditionEffectWithValueConfig =
  | (Omit<ConditionEffectConfig, 'value'> & { value: string | number | { ref: string; id: string } });

export type NormalizedConditionEffectReduceDamageConfig =
  | (Omit<ConditionEffectReduceDamageConfig, 'value'> & { value: string | number  });


function normalizeConditionEffect (effect: ConditionEffectConfig): NormalizedConditionEffectConfig {
  if (effect.type === CONDITION_EFFECT_TYPE.DAMAGE_OVER_TIME 
    || effect.type === CONDITION_EFFECT_TYPE.RESTORE_OVER_TIME) {
    return {
      ...effect,
      value: normalizeValue(effect.value)
    };
  }
  if (effect.type === CONDITION_EFFECT_TYPE.REDUCE_DAMAGE) {
    return {
      ...effect,
      value: normalizeValue(effect.value)
    };
  }
  return effect;
}

function denormalizeConditionEffect (effect: NormalizedConditionEffectConfig): ConditionEffectConfig {
  if (effect.type === CONDITION_EFFECT_TYPE.DAMAGE_OVER_TIME
    || effect.type === CONDITION_EFFECT_TYPE.RESTORE_OVER_TIME
  ) {
    return {
      ...effect,
      value: denormalizeValue((effect as NormalizedConditionEffectWithValueConfig).value)
    } as ConditionEffectDamageOverTimeConfig | ConditionEffectRestoreOverTimeConfig;
  }
  if (effect.type === CONDITION_EFFECT_TYPE.REDUCE_DAMAGE) {
    return {
      ...effect,
      value: denormalizeValue((effect as NormalizedConditionEffectReduceDamageConfig).value)
    } as ConditionEffectReduceDamageConfig;
  }

  return effect as ConditionEffectConfig;
}

export function normalizeConditionConfig (condition: ConditionConfig): NormalizedConditionConfig {
  return {
    ...condition,
    effects: condition.effects.map(normalizeConditionEffect)
  };
}

export function denormalizeConditionConfig (raw: NormalizedConditionConfig): ConditionConfig {
  return {
    ...raw,
    effects: raw.effects.map(denormalizeConditionEffect)
  };
}
