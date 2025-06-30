import type { ActionConfig, AreaTargetConfig, ConeTargetConfig, HitAlwaysConfig, HitAttackRollConfig, HitDifficultyClassConfig, LineTargetConfig, SelectTargetConfig } from '@/types/config/action';
import { generateId } from './helper';
import { normalizeValue, denormalizeValue, NormalizedVale } from './helper';
import type { ActionLevelConfig, ActionCost, HitCheckConfig, DamageConfig, ActionTargetConfig } from '@/types/config/action';
import type { FixedValue } from '@/types/config/base';
import { ACTION_HIT_TYPE, ACTION_TARGET_TYPE } from '@/constants/config/action';

export function createActionConfig (input: Omit<ActionConfig, 'id' | 'createdAt'>): ActionConfig {
  if (!input.name?.['en']) {
    throw new Error('createActionConfig must have English name (name.en) to generate ID.');
  }
  return {
    ...input,
    id: generateId(input.name['en']), // assumes English name always exists
    createdAt: new Date().toISOString()
  };
}

// --- Normalization/Denormalization helpers ---
export type NormalizedActionCost = Omit<ActionCost, 'usageValue'> & { usageValue: number };
export type NormalizedHitCheckConfig =
  | (Omit<HitCheckConfig, 'baseValue'> & { baseValue?: NormalizedVale })
  | HitCheckConfig;
export type NormalizedDamageConfig = Omit<DamageConfig, 'baseValue'> & { baseValue: NormalizedVale };
export type NormalizedActionTargetConfig =
  | (Omit<ActionTargetConfig, 'range'> & { range?: NormalizedVale })
  | ActionTargetConfig;
export type NormalizedActionLevelConfig = Omit<ActionLevelConfig, 'costs' | 'hit' | 'damages' | 'target'> & {
  costs?: NormalizedActionCost[];
  hit?: NormalizedHitCheckConfig;
  damages?: NormalizedDamageConfig[];
  target?: NormalizedActionTargetConfig;
};
export type NormalizedActionConfig = Omit<ActionConfig, 'levelConfigs'> & {
  levelConfigs: Record<number, NormalizedActionLevelConfig>;
};

function normalizeActionCost (cost: ActionCost): NormalizedActionCost {
  return {
    ...cost,
    usageValue: normalizeValue(cost.usageValue) as number
  };
}
function denormalizeActionCost (cost: NormalizedActionCost): ActionCost {
  return {
    ...cost,
    usageValue: denormalizeValue(cost.usageValue) as FixedValue
  };
}
function normalizeHitCheckConfig (hit?: HitCheckConfig): NormalizedHitCheckConfig | undefined {
  if (!hit) return undefined;
  if ('baseValue' in hit) {
    return {
      ...hit,
      baseValue: normalizeValue(hit.baseValue)
    };
  }
  return hit;
}
function denormalizeHitCheckConfig (hit?: NormalizedHitCheckConfig): HitCheckConfig | undefined {
  if (!hit) return undefined;
  if (hit.type === ACTION_HIT_TYPE.DIFFICULTY_CLASS) {
    return {
      ...hit,
      baseValue: denormalizeValue(hit.baseValue as number) as FixedValue
    } as HitDifficultyClassConfig;
  }
  if (hit.type === ACTION_HIT_TYPE.ATTACK_ROLL) {
    return {
      ...hit,
      baseValue: denormalizeValue(hit.baseValue as NormalizedVale)
    } as HitAttackRollConfig;
  } else {
    return hit as HitAlwaysConfig;
  }
}
function normalizeDamageConfig (dmg: DamageConfig): NormalizedDamageConfig {
  return {
    ...dmg,
    baseValue: normalizeValue(dmg.baseValue)
  };
}
function denormalizeDamageConfig (dmg: NormalizedDamageConfig): DamageConfig {
  return {
    ...dmg,
    baseValue: denormalizeValue(dmg.baseValue)
  };
}
function normalizeActionTargetConfig (target: ActionTargetConfig): NormalizedActionTargetConfig {
  if ('range' in target) {
    return {
      ...target,
      range: normalizeValue(target.range)
    };
  }
  return target;
}
function denormalizeActionTargetConfig (target: NormalizedActionTargetConfig): ActionTargetConfig {
  if (target.type === ACTION_TARGET_TYPE.SELECT) {
    return {
      ...target,
      range: denormalizeValue(target.range as NormalizedVale)
    } as SelectTargetConfig;
  }
  if (target.type === ACTION_TARGET_TYPE.AREA) {
    return {
      ...target,
      range: denormalizeValue(target.range as NormalizedVale)
    } as AreaTargetConfig;
  }
  if (target.type === ACTION_TARGET_TYPE.CONE) {
    return {
      ...target,
      range: denormalizeValue(target.range as NormalizedVale)
    } as ConeTargetConfig;
  }
  if (target.type === ACTION_TARGET_TYPE.LINE) {
    return {
      ...target,
      range: denormalizeValue(target.range as NormalizedVale)
    } as LineTargetConfig;
  } else {
    return target as ActionTargetConfig;
  }
}
function normalizeActionLevelConfig (level: ActionLevelConfig): NormalizedActionLevelConfig {
  return {
    ...level,
    costs: level.costs ? level.costs.map(normalizeActionCost) : undefined,
    hit: normalizeHitCheckConfig(level.hit),
    damages: level.damages ? level.damages.map(normalizeDamageConfig) : undefined,
    target: level.target ? normalizeActionTargetConfig(level.target) : undefined
  };
}
function denormalizeActionLevelConfig (level: NormalizedActionLevelConfig): ActionLevelConfig {
  return {
    ...level,
    costs: level.costs ? level.costs.map(denormalizeActionCost) : undefined,
    hit: denormalizeHitCheckConfig(level.hit),
    damages: level.damages ? level.damages.map(denormalizeDamageConfig) : undefined,
    target: level.target ? denormalizeActionTargetConfig(level.target) : undefined
  };
}
export function normalizeActionConfig (action: ActionConfig): NormalizedActionConfig {
  const normalizedLevels: Record<number, NormalizedActionLevelConfig> = {};
  for (const key in action.levelConfigs) {
    normalizedLevels[key] = normalizeActionLevelConfig(action.levelConfigs[key]);
  }
  return {
    ...action,
    levelConfigs: normalizedLevels
  };
}
export function denormalizeActionConfig (raw: NormalizedActionConfig): ActionConfig {
  const denormalizedLevels: Record<number, ActionLevelConfig> = {};
  for (const key in raw.levelConfigs) {
    denormalizedLevels[key] = denormalizeActionLevelConfig(raw.levelConfigs[key]);
  }
  return {
    ...raw,
    levelConfigs: denormalizedLevels
  };
}
