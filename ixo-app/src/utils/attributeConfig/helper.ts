import { VALUE_TYPE } from '@/constants/value';
import type { DiceValue, FixValue, FullValue } from '@/types/value';

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
