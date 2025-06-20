import { RESTORE_VALUE_TYPE, VALUE_TYPE } from '@/constants/value';
import type { DiceValue, ExpendableValue, FixValue, FullValue, RestoreType, RestoreValue } from '@/types/value';

export function generateId (name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')     // remove non-alphanumeric (optional)
    .replace(/\s+/g, '-');           // collapse space to dash
}

export function createFixValue (value: number): FixValue {
  return {
    type: VALUE_TYPE.FIX,
    value
  };
}

export function createDiceValue (formula: string): DiceValue {
  return {
    type: VALUE_TYPE.DICE,
    formula
  };
}

export function createFullValue (): FullValue {
  return {
    type: VALUE_TYPE.FULL
  };
}

interface CreateExpendableValueParam {
  max: number;
  restores: Array<{
    when: RestoreType;
    value?: number | string;
  }>;
}
export function createExpendableValue (params: CreateExpendableValueParam): ExpendableValue {
  const { max, restores } = params;
  const formattedRestores = restores.map(restore => {
    const { when, value } = restore;
    if (when === RESTORE_VALUE_TYPE.NONE) {
      return { when };
    }
    let restoreValue: RestoreValue;
    if (typeof value === 'string') {
      if (value === VALUE_TYPE.FULL) {
        restoreValue = { type: VALUE_TYPE.FULL } as FullValue;
      } else {
        restoreValue = { type: VALUE_TYPE.DICE, formula: value } as DiceValue;
      }
    } else {
      restoreValue = { type: VALUE_TYPE.FIX, value: value as number } as FixValue;
    }
    return { when, value: restoreValue };
  });
  return {
    type: VALUE_TYPE.EXPENDABLE,
    max,
    restores: formattedRestores
  };
}