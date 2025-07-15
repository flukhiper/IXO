import type { BaseValue, FixedValue, DiceValue, RefValue, SelectValue, FullValue, HalfValue } from '@/types/config/base';

export function isFixedValue (val: BaseValue): val is FixedValue {
  return val.type === 'fixed';
}

export function isDiceValue (val: BaseValue): val is DiceValue {
  return val.type === 'dice';
}

export function isRefValue (val: BaseValue): val is RefValue {
  return val.type === 'ref';
}

export function isSelectValue (val: BaseValue): val is SelectValue {
  return val.type === 'select';
}

export function isFullValue (val: BaseValue): val is FullValue {
  return val.type === 'full';
}

export function isHalfValue (val: BaseValue): val is HalfValue {
  return val.type === 'half';
}

// Utility to get the value to use for baseValue/currentValue from a config value
export function getValueFromConfigValue (val: BaseValue): number | string {
  if (isFixedValue(val)) {
    return val.value;
  } else if (isDiceValue(val)) {
    return val.formula;
  }
  // Add more cases as needed for other value types
  return 0;
} 