// ixo-app/src/utils/config/item/creator.ts

import { generateId, normalizeReferenceList } from '@/utils/config/helper';
import { ITEM_TYPE } from '@/constants/item';
import { ACTION_REF_ID } from '@/constants/action';
import type {
  ItemConfigWeapon,
  ItemConfigShield,
  ItemConfigArmor,
  ItemConfigAccessory,
  ItemConfigConsumable,
  ItemConfigUtility,
  ItemType,
  ItemRequirementConfig,
  ItemModifierConfig
} from '@/types/config/item';
import { CONDITION_REF_ID } from '@/constants/condition';

interface CreateItemBaseParams<T extends ItemType> {
  name: string;
  nameTh?: string;
  description?: string;
  descriptionTh?: string;
  tags?: string[];
  space: { rows: number; columns: number };
  weight: number;
  price: number;
  type: T;
  requirements: ItemRequirementConfig[];
  actions?: string[];
  conditions?: string[];
  modifiers?: ItemModifierConfig[];
}

function createItemBase<T extends ItemType> (params: CreateItemBaseParams<T>) {
  const {
    name,
    nameTh = '',
    description = '',
    descriptionTh = '',
    tags = [],
    space,
    weight,
    price,
    type,
    requirements,
    actions,
    conditions,
    modifiers
  } = params;

  return {
    id: generateId(name),
    name: { en: name, th: nameTh },
    description: { en: description, th: descriptionTh },
    tags,
    space,
    weight,
    price,
    type,
    requirements,
    ...actions && { actions: normalizeReferenceList(actions, ACTION_REF_ID) },
    ...conditions && { conditions: normalizeReferenceList(conditions, CONDITION_REF_ID) },
    ...modifiers && { modifiers }
  };
}

export function createWeaponItemConfig (
  params: Pick<ItemConfigWeapon, typeof ITEM_TYPE.WEAPON> & CreateItemBaseParams<typeof ITEM_TYPE.WEAPON>
): ItemConfigWeapon {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.WEAPON }),
    weapon: params.weapon
  };
}

export function createShieldItemConfig (
  params: Pick<ItemConfigShield, typeof ITEM_TYPE.SHIELD> & CreateItemBaseParams<typeof ITEM_TYPE.SHIELD>
): ItemConfigShield {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.SHIELD }),
    shield: params.shield
  };
}

export function createArmorItemConfig (
  params: Pick<ItemConfigArmor, typeof ITEM_TYPE.ARMOR> & CreateItemBaseParams<typeof ITEM_TYPE.SHIELD>
): ItemConfigArmor {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.ARMOR }),
    armor: params.armor
  };
}

export function createAccessoryItemConfig (
  params: Pick<ItemConfigAccessory, typeof ITEM_TYPE.ACCESSORY> & CreateItemBaseParams<typeof ITEM_TYPE.SHIELD>
): ItemConfigAccessory {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.ACCESSORY }),
    accessory: params.accessory
  };
}

export function createConsumableItemConfig (
  params: Pick<ItemConfigConsumable, typeof ITEM_TYPE.CONSUMABLE> & CreateItemBaseParams<typeof ITEM_TYPE.SHIELD>
): ItemConfigConsumable {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.CONSUMABLE }),
    consumable: params.consumable
  };
}

export function createUtilityItemConfig (
  params: Pick<ItemConfigUtility, typeof ITEM_TYPE.UTILITY> & CreateItemBaseParams<typeof ITEM_TYPE.SHIELD>
): ItemConfigUtility {
  return {
    ...createItemBase({ ...params, type: ITEM_TYPE.UTILITY }),
    utility: params.utility
  };
}
