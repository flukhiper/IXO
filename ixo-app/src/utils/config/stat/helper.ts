import { ATTRIBUTE_REF_ID } from '@/constants/attribute';
import { createModifierValue, createReferenceValue } from '@/utils/config/helper';

import type { StatModifierConfig } from '@/types/config/stat';


export function createStatModifierConfig (attributeId: string, formula: string): StatModifierConfig {
  return {
    attribute: createReferenceValue(ATTRIBUTE_REF_ID, attributeId),
    modifier: createModifierValue(formula)
  };
}