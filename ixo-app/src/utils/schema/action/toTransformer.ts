import { serializeCondition, serializeReference, serializeValue } from '@/utils/schema/helper';
import { VALUE_TYPE } from '@/constants/value';

import type { ActionConfig, ActionLevelConfig, ActionCostConfig, ActionHitConfig, ActionDamageConfig, ActionApplyConditionConfig, ActionRequirementConfig, ActionRequirementStatConfig, ActionRequirementAdvantageConfig, ActionTargetConfig, ActionAreaTargetConfig, ActionTargetWithRangeConfig } from '@/types/config/action';
import type { ActionConfigSchema, ActionLevelSchema, ActionCostSchema, ActionHitSchema, ActionDamageSchema, ActionApplyConditionSchema, ActionRequirementSchema, ActionTargetSchema } from '@/types/schema/action';

export function toActionSchema (config: ActionConfig, {
  isPublic = true
}: { isPublic: boolean }): ActionConfigSchema {
  return {
    id: config.id,
    name: config.name,
    description: config.description,
    tags: config.tags ?? [],
    type: config.type,
    level: Object.fromEntries(
      Object.entries(config.level).map(([ lvl, levelConfig ]) => [ lvl, toLevelSchema(levelConfig) ])
    ),
    references: config.references?.map(serializeReference) ?? [],
    requirements: config.requirements?.map(toRequirementSchema) ?? [],
    isPublic: isPublic
  };
}

// Level schema transformer
function toLevelSchema (level: ActionLevelConfig): ActionLevelSchema {
  return {
    costs: level.costs.map(toCostSchema),
    target: toTargetSchema(level.target),
    hit: toHitSchema(level.hit),
    damage: level.damage ? toDamageSchema(level.damage) : undefined,
    condition: level.condition?.map(toConditionSchema),
    entity: level.entity ? serializeReference(level.entity) : undefined
  };
}

// Cost schema transformer
function toCostSchema (cost: ActionCostConfig): ActionCostSchema {
  return {
    attribute: serializeReference(cost.attribute),
    value: cost.value.type === VALUE_TYPE.DICE ? cost.value.formula : cost.value.value
  };
}

// Target schema transformer
function toTargetSchema (target: ActionTargetConfig): ActionTargetSchema {
  switch (target.type) {
    case 'area':
      return toAreaTargetSchema(target as ActionAreaTargetConfig);
    case 'multiple':
    case 'single':
      return toRanageTargetSchema(target as ActionTargetWithRangeConfig);
    default:
      return { type: target.type };
  }
}
function toAreaTargetSchema ({
  type,
  areaType,
  range,
  radius
}: ActionAreaTargetConfig): ActionTargetSchema {
  return {
    type,
    areaType,
    range: range.type === VALUE_TYPE.REFERENCE ? serializeReference(range) : range.value,
    radius: radius.value
  };
}
function toRanageTargetSchema ({
  type,
  range
}: ActionTargetWithRangeConfig): ActionTargetSchema {
  return {
    type,
    range: range.type === VALUE_TYPE.REFERENCE ? serializeReference(range) : range.value
  };
}

// Hit schema transformer
function toHitSchema (hit: ActionHitConfig): ActionHitSchema {
  switch (hit.type) {
    case 'always':
      return { type: hit.type };
    case 'attack-roll':
      return {
        type: hit.type,
        value: serializeValue(hit.value),
        modifier: hit.modifier?.formula
      };
    case 'difficulty-class':
      return {
        type: hit.type,
        saving: serializeReference(hit.saving),
        difficultyClass: hit.difficultyClass.value,
        modifier: hit.modifier?.formula
      };
  }
}

// Damage schema transformer
function toDamageSchema (dmg: ActionDamageConfig): ActionDamageSchema {
  return {
    damageType: serializeReference(dmg.damageType),
    value: serializeValue(dmg.value),
    modifier: dmg.modifier?.formula
  };
}

// Condition schema transformer
function toConditionSchema (cond: ActionApplyConditionConfig): ActionApplyConditionSchema {
  return {
    applyTo: cond.applyTo,
    condition: serializeReference(cond.condition),
    concentrateCondition: cond.concentrateCondition 
      ? serializeReference(cond.concentrateCondition)
      : undefined
  };
}

// Requirement schema transformer
function toRequirementSchema (requirement: ActionRequirementConfig): ActionRequirementSchema {
  switch (requirement.type) {
    case 'advantage':
      return toRequirementAdvantageSchema(requirement);
    case 'stat':
      return toRequirementStatSchema(requirement);
  }
}
function toRequirementAdvantageSchema ({
  type
}: ActionRequirementAdvantageConfig): ActionRequirementSchema {
  return { type };
}
function toRequirementStatSchema ({
  type,
  stat,
  value
}: ActionRequirementStatConfig): ActionRequirementSchema {
  return { type, ref: stat.id, value: serializeCondition(value) };
}