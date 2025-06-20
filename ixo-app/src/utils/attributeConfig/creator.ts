import { RESTORE_VALUE_TYPE, VALUE_TYPE } from '@/constants/value';
import type { AttributeConfigDiceValue, AttributeConfigExpendableValue, AttributeConfigFixValue, AttributeTypeDiceValue, AttributeTypeExpendableValue, AttributeTypeFixValue, AttributeTypeOther } from '@/types/attribute';
import type { DiceValue, FixValue, FullValue, RestoreType } from '@/types/value';
import { generateId } from '../helper';

interface CreateAttributeConfigFixValueParams {
  name: string;
  description?: string;
  attrType: AttributeTypeOther | AttributeTypeFixValue;
  value: number;
}
export function createAttributeConfigFixValue (params: CreateAttributeConfigFixValueParams): AttributeConfigFixValue {
  const { name, description, attrType, value } = params;
  return {
    id: generateId(name),
    name,
    description,
    attrType,
    value: {
      type: VALUE_TYPE.FIX,
      value
    }
  };
}

interface CreateAttributeConfigDiceValueParams {
  name: string;
  description?: string;
  attrType: AttributeTypeOther | AttributeTypeDiceValue;
  value: string;
}
export function createAttributeConfigDiceValue (params: CreateAttributeConfigDiceValueParams): AttributeConfigDiceValue {
  const { name, description, attrType, value } = params;
  return {
    id: generateId(name),
    name,
    description,
    attrType,
    value: {
      type: VALUE_TYPE.DICE,
      formula: value
    } as DiceValue
  };
}

type Restore = {
  when: RestoreType;
  value?: number | string;
};
interface CreateAttributeConfigExpendableValue {
  name: string;
  description?: string;
  attrType: AttributeTypeOther | AttributeTypeExpendableValue;
  max: number;
  restores: Array<Restore>;
}
export function createAttributeConfigExpendableValue (params: CreateAttributeConfigExpendableValue): AttributeConfigExpendableValue {
  const { name, description, attrType, max, restores = [] } = params;
  const formattedRestores = restores.map(restore => {
    const { when, value } = restore;
    switch (when) {
      case RESTORE_VALUE_TYPE.LONG_REST:
      case RESTORE_VALUE_TYPE.SHORT_REST:
      case RESTORE_VALUE_TYPE.TURN:
        if (typeof value === 'string') {
          if (value === VALUE_TYPE.FULL) {
            return {
              when,
              value: {
                type: VALUE_TYPE.FULL
              } as FullValue
            };
          } else {
            return {
              when,
              value: {
                type: VALUE_TYPE.DICE,
                formula: value
              } as DiceValue
            };
          }
        } else {
          return {
            when,
            value: {
              type: VALUE_TYPE.FIX,
              value
            } as FixValue
          };
        }
      case RESTORE_VALUE_TYPE.NONE:
        return {
          when
        };
    }
  });
  return {
    id: generateId(name),
    name,
    description,
    attrType,
    value: {
      type: VALUE_TYPE.EXPENDABLE,
      max,
      restores: formattedRestores
    }
  };
}

