import type { AttributeTypeDiceValue, AttributeTypeExpendableValue, AttributeTypeFixValue, AttributeTypeOther } from '@/types/config/attribute';
import type { BaseMapSchema } from './base';

// For attributes with a fixed numeric value
export interface AttributeConfigFixValueSchema extends BaseMapSchema {
  attrType: AttributeTypeFixValue;
  value: number;
}

// For attributes with a dice value (e.g., "1d8")
export interface AttributeConfigDiceValueSchema extends BaseMapSchema {
  attrType: AttributeTypeDiceValue;
  value: string; // or number | string if needed
}

// For expendable attributes (e.g., HP, MP)
export interface AttributeConfigExpendableValueSchema extends BaseMapSchema {
  attrType: AttributeTypeExpendableValue;
  value: AttributeExpendableValueSchema;
}

// For other attribute types (flexible)
export interface AttributeConfigOtherSchema extends BaseMapSchema {
  attrType: AttributeTypeOther;
  value: number | string | AttributeExpendableValueSchema;
}

// Structure for expendable values
export interface AttributeExpendableValueSchema {
  max: number;
  restores: Array<{
    when: string;
    value: number | string;
  }>;
}

// Union of all attribute config schemas
export type AttributeConfigSchema =
  | AttributeConfigFixValueSchema
  | AttributeConfigDiceValueSchema
  | AttributeConfigExpendableValueSchema
  | AttributeConfigOtherSchema;