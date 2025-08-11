import mongoose from 'mongoose';
import type { AccessoryItemConfig, ArmorItemConfig, BackpackItemConfig, ItemConfig, ShieldItemConfig, UtilityItemConfig, WeaponItemConfig } from '@/types/config/item';
import { ITEM_TYPE, ITEM_RARITY, ITEM_EQUIPPED_SLOT, ITEM_ARMOR_TYPE, MAX_ITEM_REFINED_LEVEL } from '@/constants/config/item';
import { baseConfigFields, EffectSchema } from './common';

// Sub-schemas for nested objects
const ItemDamageSchema = new mongoose.Schema({
  damageTypeId: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const ItemArmorSchema = new mongoose.Schema({
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  modifierFormula: { type: String }
}, { _id: false });

const WeaponPropertySchema = new mongoose.Schema({
  range: { type: Number },
  light: { type: Boolean, required: true },
  fitness: { type: Boolean, required: true },
  extraReach: { type: Number },
  thrown: { type: Boolean, required: true },
  twoHanded: { type: Boolean, required: true },
  versatile: { type: ItemDamageSchema },
  refined: { type: Number, enum: MAX_ITEM_REFINED_LEVEL }
}, { _id: false });

const ArmorPropertySchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(ITEM_ARMOR_TYPE), required: true },
  refined: { type: Number, enum: MAX_ITEM_REFINED_LEVEL }
}, { _id: false });

// Base fields for all items
const baseItemFields = {
  ...baseConfigFields,
  rarity: { type: String, enum: Object.values(ITEM_RARITY), required: true },
  weight: { type: Number, required: true },
  price: { type: Number, required: true },
  space: { type: [ Number ], required: true },
  equippedSlot: { type: String, enum: Object.values(ITEM_EQUIPPED_SLOT), required: true },
  requiredProficiencyId: { type: String },
  durabilityPoints: { type: Number },
  damage: { type: ItemDamageSchema },
  armor: { type: ItemArmorSchema },
  actionIds: { type: [ String ] },
  downtimeActivityIds: { type: [ String ] },
  effects: { type: [ EffectSchema ] }
};

// Discriminator schemas for each item type
const WeaponItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.MAIN_HANDED, ITEM_EQUIPPED_SLOT.OFF_HANDED ], required: true },
  durabilityPoints: { type: Number, required: true },
  damage: { type: ItemDamageSchema, required: true },
  weaponProperties: { type: WeaponPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const ArmorItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.ARMOR ], required: true },
  durabilityPoints: { type: Number, required: true },
  armor: { type: ItemArmorSchema, required: true },
  armorProperties: { type: ArmorPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const ShieldItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.MAIN_HANDED, ITEM_EQUIPPED_SLOT.OFF_HANDED ], required: true },
  durabilityPoints: { type: Number, required: true },
  armor: { type: ItemArmorSchema, required: true },
  armorProperties: { type: ArmorPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const AccessoryItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.ACCESSORY ], required: true },
  utilitySlots: { type: Number }
});

const BackpackItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.BACKPACK ], required: true },
  space: { type: [ Number ], required: true }
});

const UtilityItemSchema = new mongoose.Schema({
  ...baseItemFields,
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.UTILITY ], required: true }
});

// Main ItemConfig schema using discriminators
const ItemConfigSchema = new mongoose.Schema<ItemConfig>(baseItemFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

ItemConfigSchema.index({ gameSystemId: 1 });
ItemConfigSchema.index({ ownerId: 1 });

export const ItemConfigModel = mongoose.models.ItemConfig || mongoose.model<ItemConfig>('ItemConfig', ItemConfigSchema);

// Attach and export discriminators
export const WeaponItemModel = ItemConfigModel.discriminator<WeaponItemConfig>(ITEM_TYPE.WEAPON, WeaponItemSchema);
export const ArmorItemModel = ItemConfigModel.discriminator<ArmorItemConfig>(ITEM_TYPE.ARMOR, ArmorItemSchema);
export const ShieldItemModel = ItemConfigModel.discriminator<ShieldItemConfig>(ITEM_TYPE.SHIELD, ShieldItemSchema);
export const AccessoryItemModel = ItemConfigModel.discriminator<AccessoryItemConfig>(ITEM_TYPE.ACCESSORY, AccessoryItemSchema);
export const BackpackItemModel = ItemConfigModel.discriminator<BackpackItemConfig>(ITEM_TYPE.BACKPACK, BackpackItemSchema);
export const UtilityItemModel = ItemConfigModel.discriminator<UtilityItemConfig>(ITEM_TYPE.UTILITY, UtilityItemSchema);