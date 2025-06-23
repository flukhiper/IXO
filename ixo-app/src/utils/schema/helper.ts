import { createDiceValue, createFixValue, createReferenceValue } from '../config/helper';

import type { ConditionValue, DiceValue, FixValue, ReferenceValue } from '@/types/config/value';
import type { ReferenceValueSchema } from '@/types/schema/value';

export function serializeValue (val: FixValue | DiceValue | ReferenceValue): number | string | ReferenceValueSchema {
  switch (val.type) {
    case 'fix':
      return val.value;
    case 'dice':
      return val.formula;
    case 'reference':
      return { ref: val.ref, id: val.id };
  }
}

export function deserializeValue (value: string | number | ReferenceValueSchema): FixValue | DiceValue | ReferenceValue {
  if (typeof value === 'number') return createFixValue(value);
  if (typeof value === 'string') return createDiceValue(value);
  return createReferenceValue(value.ref, value.id);
}

export function serializeReference ({
  ref,
  id
}: ReferenceValue): ReferenceValueSchema {
  return { ref, id };
}

export function deserializeReference ({
  ref,
  id
}: ReferenceValueSchema): ReferenceValue {
  return createReferenceValue(ref, id);
}

export function serializeCondition (value: ConditionValue): string {
  return `${value.comparator} (${value.formula})`;
}

export function parseComparator (value: string): string {
  const match = value.match(/(>=|<=|>|<|==|!=)/);
  return match?.[1] ?? '==';
}

export function extractFormula (value: string): string {
  const idx = value.indexOf('(');
  return value.substring(idx + 1, value.length - 1);
}
