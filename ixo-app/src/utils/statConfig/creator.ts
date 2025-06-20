import { VALUE_TYPE } from '@/constants/value';

import type { StatConfig } from '@/types/stat';
import { generateId } from '../helper';

type Modifier = {
  attribute: string;
  formula: string;
};
interface CreateStatConfigFixValueParams {
  name: string;
  description?: string;
  value: number;
  modifiers: Array<Modifier>;
}
export function createStatConfigFixValue (params: CreateStatConfigFixValueParams): StatConfig {
  const { name, description, value, modifiers = [] } = params;
  const formattedModifiers = modifiers.map(({ attribute, formula })=>({
    type: VALUE_TYPE.MODIFIER,
    attribute,
    formula
  }));
  return {
    id: generateId(name),
    name,
    description,
    value,
    modifiers: formattedModifiers
  };
}
