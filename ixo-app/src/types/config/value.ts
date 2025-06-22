import { CONDITION_VALUE_COMPARATOR, RESTORE_VALUE_TYPE, VALUE_TYPE } from '@/constants/value';

export interface Value<T> {
  type: T;
}

export interface FixValue extends Value<typeof VALUE_TYPE.FIX> {
  value: number;
}

export interface DiceValue extends Value<typeof VALUE_TYPE.DICE> {
  formula: string;
}

export interface FullValue extends Value<typeof VALUE_TYPE.FULL> {}

export interface InfiniteValue extends Value<typeof VALUE_TYPE.INFINITE> {}

export interface AllSavingValue extends Value<typeof VALUE_TYPE.ALL_SAVING> {}

export interface AllAttributeValue extends Value<typeof VALUE_TYPE.ALL_ATTRIBUTE> {}

export interface ModifierValue extends Value<typeof VALUE_TYPE.MODIFIER> {
  formula: string;
}

export interface ReferenceValue extends Value<typeof VALUE_TYPE.REFERENCE> {
  ref: string;
  id: string;
}

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

export type ConditionComparator = typeof CONDITION_VALUE_COMPARATOR[keyof typeof CONDITION_VALUE_COMPARATOR];

export interface ConditionValue extends Value<typeof VALUE_TYPE.CONDITION> {
  comparator: ConditionComparator;
  formula: string; // e.g. "(attr(carrying-capacity) * 7)/100"
}
