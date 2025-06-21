import { CONDITION_VALUE_COMPARATOR, EQUIPMENT_REF_VALUE_TYPE, RESTORE_VALUE_TYPE, VALUE_TYPE } from '@/constants/value';

export interface Value<T> {
  type: T;
}

export interface ModifierValue extends Value<typeof VALUE_TYPE.MODIFIER> {
  attribute?: string;
  stat?: string;
  formula: string;
}

export interface SavingValue extends Value<typeof VALUE_TYPE.SAVING> {
  attribute: string; // Attribute ID, must be type 'saving'
  difficultyClass: number;
}

export type ConditionComparator = typeof CONDITION_VALUE_COMPARATOR[keyof typeof CONDITION_VALUE_COMPARATOR];

export interface ConditionValue extends Value<typeof VALUE_TYPE.CONDITION> {
  comparator: ConditionComparator;
  formula: string; // e.g. "(attr(carrying-capacity) * 7)/100"
}

export interface FixValue extends Value<typeof VALUE_TYPE.FIX> {
  value: number;
}

export interface DiceValue extends Value<typeof VALUE_TYPE.DICE> {
  formula: string;
}

export type EquipmentRefValueType = typeof EQUIPMENT_REF_VALUE_TYPE[keyof typeof EQUIPMENT_REF_VALUE_TYPE];

export interface EquipmentRefValue extends Value<typeof VALUE_TYPE.EQUIPMENT_REF> {
  value: EquipmentRefValueType;
}

export interface AttributeRefValue extends Value<typeof VALUE_TYPE.ATTRIBUTE_REF> {
  attribute: string; // Attribute ID
}

export interface FullValue extends Value<typeof VALUE_TYPE.FULL> {}

export type RestoreType = typeof RESTORE_VALUE_TYPE[keyof typeof RESTORE_VALUE_TYPE];
export type RestoreValue = FixValue | DiceValue | FullValue;

export interface ExpendableValue extends Value<typeof VALUE_TYPE.EXPENDABLE> {
  max: number;
  restores: Array<{
    when: Exclude<RestoreType, typeof RESTORE_VALUE_TYPE.NONE>;
    value: RestoreValue;
  } | {
    when: typeof RESTORE_VALUE_TYPE.NONE;
  }>;
}