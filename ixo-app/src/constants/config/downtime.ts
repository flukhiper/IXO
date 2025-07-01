// Downtime effect types
export const DOWNTIME_EFFECT_TYPE = {
  PREPARE_ACTION: 'prepare-action',
  PREPARE_SKILL: 'prepare-skill',
  RESTORE_ATTRIBUTE: 'restore-attribute',
  RESTORE_ITEM_USAGE: 'restore-item-usage',
  SHOW_FLAVOR_TEXT: 'show-flavor-text'
} as const;

export const DOWNTIME_EFFECT_TARGET = {
  SELF: 'self',
  ALLY: 'ally',
  ANY: 'any'
} as const;

// Downtime intensity
export const DOWNTIME_EFFECT_INTENSITY = {
  FULL: 'full',
  HALF: 'half'
} as const;