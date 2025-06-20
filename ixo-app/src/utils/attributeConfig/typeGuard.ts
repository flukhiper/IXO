import { ATTRIBUTE_TYPE_DICE_VALUE, ATTRIBUTE_TYPE_EXPENDABLE_VALUE, ATTRIBUTE_TYPE_FIX_VALUE } from '@/constants/attribute';
import { AttributeTypeUnique } from '@/types/attribute';

const attributeTypeUniqueList = [
  ...Object.values(ATTRIBUTE_TYPE_FIX_VALUE),
  ...Object.values(ATTRIBUTE_TYPE_DICE_VALUE),
  ...Object.values(ATTRIBUTE_TYPE_EXPENDABLE_VALUE)
];

export function isAttributeTypeUnique (type: string): type is AttributeTypeUnique {
  return attributeTypeUniqueList.includes(type as AttributeTypeUnique);
}