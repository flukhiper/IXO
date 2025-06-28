import { VALUE_TYPE } from '@/constants/config/value';
import type { DiceValue, FixedValue, FractionValue, ParsedValue, RefValue } from '@/types/config/base';

export function generateId (name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')     // remove non-alphanumeric (optional)
    .replace(/\s+/g, '-');           // collapse space to dash
}

export function parseValue (input: string): ParsedValue {
  const trimmed = input.trim();

  if (/^\d+d\d+$/.test(trimmed)) {
    return {
      type: VALUE_TYPE.DICE,
      formula: trimmed
    };
  }

  if (/^\d+\/\d+$/.test(trimmed)) {
    const [ numerator, denominator ] = trimmed.split('/').map(Number);
    return {
      type: VALUE_TYPE.FRACTION,
      numerator,
      denominator
    };
  }

  const value = Number(trimmed);
  if (Number.isFinite(value)) {
    return {
      type: VALUE_TYPE.FIXED,
      value
    };
  }

  throw new Error(`Invalid value format: "${input}"`);
}

export function parseRefValue (input: string): RefValue {
  return {
    type: VALUE_TYPE.REF,
    ref: input
  };
}

export function isFixedValue (value: ParsedValue): value is FixedValue {
  return value.type === VALUE_TYPE.FIXED;
}

export function isDiceValue (value: ParsedValue): value is DiceValue {
  return value.type === VALUE_TYPE.DICE;
}

export function isFractionValue (value: ParsedValue): value is FractionValue {
  return value.type === VALUE_TYPE.FRACTION;
}