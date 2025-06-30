import { VALUE_TYPE } from '@/constants/config/base';

import type { DiceValue, FixedValue, RefValue } from '@/types/config/base';

export function generateId (name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')     // remove non-alphanumeric (optional)
    .replace(/\s+/g, '-');           // collapse space to dash
}

export function isRefValue (val: FixedValue | DiceValue | RefValue): val is RefValue {
  return val.type === VALUE_TYPE.REF;
}
export function isFixedValue (val: FixedValue | DiceValue | RefValue): val is FixedValue {
  return val.type === VALUE_TYPE.FIXED;
}
export function isDiceValue (val: FixedValue | DiceValue | RefValue): val is DiceValue {
  return val.type === VALUE_TYPE.DICE;
}

// --- Normalization helpers ---
export type NormalizedVale = string | number | { ref: string; id: string };
export function normalizeValue (value: FixedValue | DiceValue | RefValue): 
NormalizedVale {
  if (value.type === VALUE_TYPE.FIXED) {
    return value.value;
  }
  if (value.type === VALUE_TYPE.DICE) {
    return value.formula;
  }
  if (value.type === VALUE_TYPE.REF) {
    return {
      ref: value.ref,
      id: value.id
    };
  }
  throw new Error('Unsupported value type for normalization');
}

export function denormalizeValue (val: NormalizedVale): 
FixedValue | DiceValue | RefValue {
  if (typeof val === 'number') {
    return { type: VALUE_TYPE.FIXED, value: val };
  }
  if (typeof val === 'string') {
    if (/^\d+d\d+$/.test(val.trim())) {
      return { type: VALUE_TYPE.DICE, formula: val.trim() };
    }
    const num = Number(val);
    if (Number.isFinite(num)) {
      return { type: VALUE_TYPE.FIXED, value: num };
    }
  }
  if (typeof val === 'object' && 'ref' in val && 'id' in val) {
    return { type: VALUE_TYPE.REF, ref: val.ref, id: val.id };
  }
  throw new Error('Cannot denormalize value: ' + val);
}