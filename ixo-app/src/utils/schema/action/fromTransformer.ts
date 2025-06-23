import { deserializeReference, deserializeValue, extractFormula, parseComparator } from '@/utils/schema/helper';
import { createConditionValue, createFixValue, createModifierValue } from '@/utils/config/helper';

import { ACTION_TARGET_TYPE } from '@/constants/action';
import { VALUE_TYPE } from '@/constants/value';

import type { ActionApplyConditionApplyToType, ActionApplyConditionConfig, ActionAreaTargetConfig, ActionAreaType, ActionConfig, ActionCostConfig, ActionDamageConfig, ActionHitConfig, ActionLevelConfig, ActionRequirementConfig, ActionTargetConfig, ActionTargetWithRangeConfig } from '@/types/config/action';
import type { ActionApplyConditionSchema, ActionConfigSchema, ActionCostSchema, ActionDamageSchema, ActionHitSchema, ActionLevelSchema, ActionRequirementSchema, ActionTargetSchema } from '@/types/schema/action';
import type { ConditionComparator, DiceValue, FixValue } from '@/types/config/value';

export function fromActionSchema (schema: ActionConfigSchema): ActionConfig {
  return {
    id: schema.id,
    name: schema.name,
    description: schema.description,
    tags: schema.tags,
    type: schema.type,
    level: Object.fromEntries(
      Object.entries(schema.level).map(([ lvl, lvlSchema ]) => [
        lvl,
        fromLevelSchema(lvlSchema)
      ])
    ),
    references: schema.references?.map(deserializeReference) ?? [],
    requirements: schema.requirements?.map(fromRequirementSchema) ?? []
  };
}

// Level schema transformer
function fromLevelSchema (schema: ActionLevelSchema): ActionLevelConfig {
  return {
    costs: schema.costs.map(fromCostSchema),
    target: fromTargetSchema(schema.target),
    hit: fromHitSchema(schema.hit),
    damage: schema.damage ? fromDamageSchema(schema.damage) : undefined,
    condition: schema.condition?.map(fromConditionSchema),
    entity: schema.entity ? deserializeReference(schema.entity) : undefined
  };
}

// Cost schema transformer
function fromCostSchema (schema: ActionCostSchema): ActionCostConfig {
  const value = typeof schema.value === 'string'
    ? deserializeValue(schema.value) as DiceValue
    : deserializeValue(schema.value) as FixValue;
  return {
    attribute: deserializeReference(schema.attribute),
    value
  };
}

// Target schema transformer
function fromTargetSchema (schema: ActionTargetSchema): ActionTargetConfig {

  switch (schema.type) {
    case 'area':
      return fromAreaTargetSchema(schema);
    case 'multiple':
    case 'single':
      return fromRanageTargetSchema(schema);
    default:
      return { type: schema.type };
  }
}
function fromAreaTargetSchema ({
  areaType,
  range,
  radius
}: ActionTargetSchema): ActionAreaTargetConfig {
  if (!areaType) {
    throw new Error('areaType is required for area target schema');
  }
  if (!range) {
    throw new Error('range is required for area target schema');
  }
  if (!radius) {
    throw new Error('radius is required for area target schema');
  }
  return {
    type: ACTION_TARGET_TYPE.AREA,
    areaType: areaType as ActionAreaType,
    range: typeof range === 'number' ? createFixValue(range) : deserializeReference(range),
    radius: createFixValue(radius)
  };
}
function fromRanageTargetSchema ({
  type,
  range
}: ActionTargetSchema): ActionTargetWithRangeConfig {
  if (!range) {
    throw new Error('range is required for area target schema');
  }
  return {
    type,
    range: typeof range === 'number' ? createFixValue(range) : deserializeReference(range)
  };
}

// Hit schema transformer
function fromHitSchema (schema: ActionHitSchema): ActionHitConfig {
  switch (schema.type) {
    case 'always':
      return { type: 'always' };
    case 'attack-roll':
      return {
        type: 'attack-roll',
        value: deserializeValue(schema.value),
        modifier: schema.modifier ? createModifierValue(schema.modifier) : undefined
      };
    case 'difficulty-class':
      return {
        type: 'difficulty-class',
        saving: deserializeReference(schema.saving),
        difficultyClass: { type: VALUE_TYPE.FIX, value: schema.difficultyClass },
        modifier: schema.modifier ? createModifierValue(schema.modifier) : undefined
      };
  }
}

// Damage schema transformer
function fromDamageSchema (schema: ActionDamageSchema): ActionDamageConfig {
  return {
    damageType: deserializeReference(schema.damageType),
    value: deserializeValue(schema.value),
    modifier: schema.modifier ? createModifierValue(schema.modifier) : undefined
  };
}

// Condition schema transformer
function fromConditionSchema (schema: ActionApplyConditionSchema): ActionApplyConditionConfig {
  return {
    applyTo: schema.applyTo as ActionApplyConditionApplyToType,
    condition: deserializeReference(schema.condition),
    concentrateCondition: schema.concentrateCondition ? deserializeReference(schema.concentrateCondition) : undefined
  };
}

// Condition schema transformer
function fromRequirementSchema (schema: ActionRequirementSchema): ActionRequirementConfig {
  if (schema.type === 'advantage') {
    return { type: 'advantage' };
  } else if (schema.type === 'stat') {
    return {
      type: 'stat',
      stat: { type: VALUE_TYPE.REFERENCE, ref: 'stat', id: schema.ref! },
      value: createConditionValue(parseComparator(schema.value as string) as ConditionComparator, extractFormula(schema.value as string))
    };
  }

  throw new Error(`Unknown requirement type: ${schema.type}`);
}
