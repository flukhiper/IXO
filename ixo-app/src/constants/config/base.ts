export const VALUE_TYPE = {
  FIXED: 'fixed',
  DICE: 'dice',
  REF: 'ref',
  FULL: 'full',
  HALF: 'half'
} as const;

export const RESTORE_PHASE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime'
} as const;

export const CONDITION_OPERATOR = {
  GREATER_THAN: '>',
  LESS_THAN: '<',
  GREATER_THAN_OR_EQUAL: '>=',
  LESS_THAN_OR_EQUAL: '<=',
  EQUAL: '==',
  NOT_EQUAL: '!='
} as const;

export const ON_EVENT_TYPE = {
  ON_ACTION_PERFORMED: 'on-action-performed',
  ON_CONDITION_APPLIED: 'on-condition-applied',
  ON_ADVANTAGE_GAINED: 'on-advantage-gained',
  ON_DISADVANTAGE_GAINED: 'on-disadvantage-gained',
  ON_RESISTENCE_GAINED: 'on-resistence-gained',
  ON_ATTRIBUTE_CHANGED: 'on-attribute-changed',
  ON_STAT_CHANGED: 'on-stat-changed',
  ON_PHASE_CHANGED: 'on-phase-changed',
  ON_GOT_DAMAGE: 'on-got-damage',
  ON_GOT_HIT: 'on-got-hit',
  ON_GOT_RESTORE: 'on-got-restore',
  ON_ITEM_EQUIPED: 'on-item-equipped'
} as const;

export const PHASE_TYPE = {
  START_TURN: 'start-turn',
  END_TURN: 'end-turn',
  START_ROUND: 'start-round',
  END_ROUND: 'end-round',
  SHORT_DOWNTIME: 'short-downtime',
  FULL_DOWNTIME: 'full-downtime'
} as const;

export const EFFECT_TYPE = {
  ACTIVATE_BLOCK_CONDITION: 'activate-block-condition',
  ACTIVATE_CONDITION: 'activate-condition',
  ACTIVATE_ADVANTAGE: 'activate-advantage',
  ACTIVATE_REDUCE_DAMAGE: 'activate-reduce-damage',
  ACTIVATE_DO_DAMAGE: 'activate-do-damage',
  ACTIVATE_DO_RESTORE: 'activate-do-restore',
  ACTIVATE_DO_DAMAGE_OVER_TIME: 'activate-do-damage-over-time',
  ACTIVATE_DO_RESTORE_OVER_TIME: 'activate-do-restore-over-time',
  ACTIVATE_SHOW_FLAVOR_TEXT: 'activate-show-flavor-text',
  
  MODIFY_STAT: 'modify-stat',
  MODIFY_ATTRIBUTE: 'modify-attribute',
  RESTRICT_ACTION: 'restrict-action',
  RESTRICT_EQUIPMENT: 'restrict-equipment',
  BLOCK_CONDITION: 'block-condition',
  GAIN_CONDITION: 'gain-condition',
  GAIN_ACTION: 'gain-action',
  GAIN_ADVANTAGE: 'gain-advantage',
  GAIN_RESISTENCE: 'gain-resistence',
  ADD_DOWNTIME: 'add-downtime',
  ADD_PROFICIENCY_POINTS: 'add-proficiency-points',
  ADD_PROFICIENCY_LEVEL: 'add-proficiency-level',
  ADD_EQUIPMENT_SLOT: 'add-equipment-slot',
  SHOW_FLAVOR_TEXT: 'activate-show-flavor-text',
  SELECT_EFFECT: 'select-effect'
} as const;
