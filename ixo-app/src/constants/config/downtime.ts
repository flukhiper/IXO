// Downtime effect types
export const DOWNTIME_EFFECT_TYPE = {
  REPLACE_ACTION: 'replace-action',
  RESTORE_ATTRIBUTE: 'restore-attribute',
  TRIGGER_PROJECT: 'trigger-project'
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