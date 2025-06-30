import type { SkillConfig, SkillEffectConfig, SkillEffectReduceDamageConfig, SkillEffectSelectableConfig } from '@/types/config/skill';
import { generateId } from './helper';
import { normalizeValue, denormalizeValue } from './helper';
import { SKILL_EFFECT_TYPE } from '@/constants/config/skill';
import type { LocalizeText, FixedValue, DiceValue } from '@/types/config/base';

export function createSkillConfig (
  input: Omit<SkillConfig, 'id' | 'createdAt'>
): SkillConfig {
  if (!input.name?.['en']) {
    throw new Error('SkillConfig must have English name (name.en) to generate ID.');
  }

  return {
    ...input,
    id: generateId(input.name['en']),
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedSkillEffectReduceDamageConfig = Omit<SkillEffectReduceDamageConfig, 'value'> & { value: string | number };
export type NormalizedSkillEffectSelectableConfig = Omit<SkillEffectSelectableConfig, 'effects'> & { effects: Array<NormalizedSkillEffectConfig & { name: LocalizeText; description?: LocalizeText }> };
export type NormalizedSkillEffectConfig =
  | Omit<SkillEffectConfig, 'value' | 'effects'>
  | NormalizedSkillEffectReduceDamageConfig
  | NormalizedSkillEffectSelectableConfig;

export type NormalizedSkillConfig = Omit<SkillConfig, 'effects'> & {
  effects?: NormalizedSkillEffectConfig[];
};

function isReduceDamageEffect (effect: SkillEffectConfig | NormalizedSkillEffectConfig): effect is SkillEffectReduceDamageConfig | NormalizedSkillEffectReduceDamageConfig {
  return effect.type === SKILL_EFFECT_TYPE.REDUCE_DAMAGE;
}

function isSelectableEffect (effect: SkillEffectConfig | NormalizedSkillEffectConfig): effect is SkillEffectSelectableConfig | NormalizedSkillEffectSelectableConfig {
  return effect.type === SKILL_EFFECT_TYPE.SELECTABLE;
}

function normalizeSkillEffect (effect: SkillEffectConfig): NormalizedSkillEffectConfig {
  if (isReduceDamageEffect(effect)) {
    return {
      ...effect,
      value: normalizeValue(effect.value as FixedValue | DiceValue) as string | number
    };
  }
  if (isSelectableEffect(effect) && Array.isArray(effect.effects)) {
    return {
      ...effect,
      effects: effect.effects.map(normalizeSkillEffect) as Array<NormalizedSkillEffectConfig & { name: LocalizeText; description?: LocalizeText }>
    };
  }
  return effect as NormalizedSkillEffectConfig;
}

function denormalizeSkillEffect (effect: NormalizedSkillEffectConfig): SkillEffectConfig {
  if (isReduceDamageEffect(effect)) {
    let denormalizedValue: FixedValue | DiceValue;
    if (typeof effect.value === 'string' || typeof effect.value === 'number') {
      denormalizedValue = denormalizeValue(effect.value) as FixedValue | DiceValue;
    } else {
      denormalizedValue = effect.value as FixedValue | DiceValue;
    }
    return {
      ...effect,
      value: denormalizedValue
    };
  }
  if (isSelectableEffect(effect) && Array.isArray(effect.effects)) {
    return {
      ...effect,
      effects: effect.effects.map(denormalizeSkillEffect) as Array<SkillEffectConfig & { name: LocalizeText; description?: LocalizeText }>
    };
  }
  return effect as SkillEffectConfig;
}

export function normalizeSkillConfig (skill: SkillConfig): NormalizedSkillConfig {
  return {
    ...skill,
    effects: skill.effects ? skill.effects.map(normalizeSkillEffect) : undefined
  };
}

export function denormalizeSkillConfig (raw: NormalizedSkillConfig): SkillConfig {
  return {
    ...raw,
    effects: raw.effects ? raw.effects.map(denormalizeSkillEffect) : undefined
  };
}
