import type { AttributeConfigDiceValue, AttributeConfigExpendableValue, AttributeConfigFixValue, AttributeTypeDiceValue, AttributeTypeExpendableValue, AttributeTypeFixValue, AttributeTypeOther } from '@/types/config/attribute';
import type { RestoreType } from '@/types/config/value';
import { generateId, createFixValue, createDiceValue, createExpendableValue } from '@/utils/config/helper';

interface CreateAttributeConfigFixValueParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  attrType: AttributeTypeOther | AttributeTypeFixValue;
  value: number;
}
export function createAttributeConfigFixValue (params: CreateAttributeConfigFixValueParams): AttributeConfigFixValue {
  const { name, nameTh = '', description = '', descriptionTh = '', attrType, value } = params;
  return {
    id: generateId(name),
    name: { en: name, th: nameTh },
    description: { en: description, th: descriptionTh },
    attrType,
    value: createFixValue(value)
  };
}

interface CreateAttributeConfigDiceValueParams {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  attrType: AttributeTypeOther | AttributeTypeDiceValue;
  value: string;
}
export function createAttributeConfigDiceValue (params: CreateAttributeConfigDiceValueParams): AttributeConfigDiceValue {
  const { name, nameTh = '', description = '', descriptionTh = '', attrType, value } = params;
  return {
    id: generateId(name),
    name: { en: name, th: nameTh },
    description: { en: description, th: descriptionTh },
    attrType,
    value: createDiceValue(value)
  };
}

interface CreateAttributeConfigExpendableValue {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  attrType: AttributeTypeOther | AttributeTypeExpendableValue;
  max: number;
  restores: Array<{
    when: RestoreType;
    value?: number | string;
  }>;
}
export function createAttributeConfigExpendableValue (params: CreateAttributeConfigExpendableValue): AttributeConfigExpendableValue {
  const { name, nameTh = '', description = '', descriptionTh = '', attrType, max, restores = [] } = params;
  const value = createExpendableValue({
    max,
    restores
  });
  return {
    id: generateId(name),
    name: { en: name, th: nameTh },
    description: { en: description, th: descriptionTh },
    attrType,
    value: value
  };
}