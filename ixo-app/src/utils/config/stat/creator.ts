import { VALUE_TYPE } from '@/constants/value';
import type { StatConfig } from '@/types/config/stat';
import { generateId } from '../../helper';

type Modifier = {
  attribute: string;
  formula: string;
};

export interface CreateStatConfigFixValueParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  value: number;
  modifiers: Array<Modifier>;
}

export function createStatConfigFixValue (params: CreateStatConfigFixValueParams): StatConfig {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    value,
    modifiers = []
  } = params;
  const formattedModifiers = modifiers.map(({ attribute, formula }) => ({
    type: VALUE_TYPE.MODIFIER,
    attribute,
    formula
  }));
  return {
    id: generateId(name),
    name: {
      en: name,
      th: nameTh
    },
    description: {
      en: description,
      th: descriptionTh
    },
    value: { type: VALUE_TYPE.FIX, value },
    modifiers: formattedModifiers
  };
}