import { VALUE_TYPE } from '@/constants/config/base';

import type { DiceValue, FixedValue } from '@/types/config/base';

export function generateId (name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')     // remove non-alphanumeric (optional)
    .replace(/\s+/g, '-');           // collapse space to dash
}

// --- Normalization helpers ---
// AttributeValue: FixedValue | DiceValue
export function normalizeValue (value: FixedValue | DiceValue): string | number {
  if (value.type === VALUE_TYPE.FIXED) {
    return value.value;
  }
  if (value.type === VALUE_TYPE.DICE) {
    return value.formula;
  }
  throw new Error('Unsupported value type for normalization');
}

export function denormalizeValue (val: string | number): FixedValue | DiceValue {
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
  throw new Error('Cannot denormalize value: ' + val);
}