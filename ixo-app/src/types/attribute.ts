import { ATTRIBUTE_TYPE_DICE_VALUE, ATTRIBUTE_TYPE_EXPENDABLE_VALUE, ATTRIBUTE_TYPE_FIX_VALUE, ATTRIBUTE_TYPE_OTHER } from '@/constants/attribute';
import type { DiceValue, ExpendableValue, FixValue } from './value';

export type AttributeTypeOther = typeof ATTRIBUTE_TYPE_OTHER[keyof typeof ATTRIBUTE_TYPE_OTHER];
export type AttributeTypeFixValue = typeof ATTRIBUTE_TYPE_FIX_VALUE[keyof typeof ATTRIBUTE_TYPE_FIX_VALUE];
export type AttributeTypeDiceValue = typeof ATTRIBUTE_TYPE_DICE_VALUE[keyof typeof ATTRIBUTE_TYPE_DICE_VALUE];
export type AttributeTypeExpendableValue = typeof ATTRIBUTE_TYPE_EXPENDABLE_VALUE[keyof typeof ATTRIBUTE_TYPE_EXPENDABLE_VALUE];
export type AttributeTypeUnique = AttributeTypeFixValue | AttributeTypeDiceValue | AttributeTypeExpendableValue;
export type AttributeType = AttributeTypeOther | AttributeTypeUnique;

export type AttributeValue =
  | FixValue
  | DiceValue
  | ExpendableValue;

type AttributeConfigBase<T extends AttributeType> = {
  id: string;
  name: string;
  description?: string;
  attrType: T;
};


export type AttributeConfigFixValue = AttributeConfigBase<AttributeTypeOther | AttributeTypeFixValue> & {
  value: FixValue;
};

export type AttributeConfigDiceValue = AttributeConfigBase<AttributeTypeOther | AttributeTypeDiceValue> & {
  value: DiceValue;
};

export type AttributeConfigExpendableValue = AttributeConfigBase<AttributeTypeOther | AttributeTypeExpendableValue> & {
  value: ExpendableValue;
};

export type AttributeConfig = AttributeConfigFixValue | AttributeConfigDiceValue | AttributeConfigExpendableValue;