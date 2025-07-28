import mongoose from 'mongoose';
import type { AccessoryItemConfig, ArmorItemConfig, BackpackItemConfig, ItemConfig, ShieldItemConfig, UtilityItemConfig, WeaponItemConfig } from '@/types/config/item';
import { ITEM_TYPE, ITEM_RARITY, ITEM_EQUIPPED_SLOT, ITEM_ARMOR_TYPE, MAX_ITEM_REFINED_LEVEL } from '@/constants/config/item';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

// Sub-schemas for nested objects
const ItemDamageSchema = new mongoose.Schema({
  type: { type: String, required: true },
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
  refined: { type: Number, enum: Array.from({ length: MAX_ITEM_REFINED_LEVEL }, (_, i) => i + 1) }
}, { _id: false });

const ArmorPropertySchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(ITEM_ARMOR_TYPE), required: true },
  refined: { type: Number, enum: Array.from({ length: MAX_ITEM_REFINED_LEVEL }, (_, i) => i + 1) }
}, { _id: false });

// Base fields for all items
const baseFields = {
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ], default: [] },
  ownerId: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  gameSystemId: { type: String, required: true },
  type: { type: String, enum: Object.values(ITEM_TYPE), required: true },
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
  effects: { type: [ EffectConfigSchema ], default: [] }
};

// Discriminator schemas for each item type
const WeaponItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.WEAPON ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.MAIN_HANDED, ITEM_EQUIPPED_SLOT.OFF_HANDED ], required: true },
  durabilityPoints: { type: Number, required: true },
  damage: { type: ItemDamageSchema, required: true },
  weaponProperties: { type: WeaponPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const ArmorItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.ARMOR ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.ARMOR ], required: true },
  durabilityPoints: { type: Number, required: true },
  armor: { type: ItemArmorSchema, required: true },
  armorProperties: { type: ArmorPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const ShieldItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.SHIELD ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.MAIN_HANDED, ITEM_EQUIPPED_SLOT.OFF_HANDED ], required: true },
  durabilityPoints: { type: Number, required: true },
  armor: { type: ItemArmorSchema, required: true },
  armorProperties: { type: ArmorPropertySchema, required: true },
  actionIds: { type: [ String ], required: true }
});

const AccessoryItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.ACCESSORY ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.ACCESSORY ], required: true },
  utilitySlots: { type: Number }
});

const BackpackItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.BACKPACK ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.BACKPACK ], required: true },
  space: { type: [ Number ], required: true }
});

const UtilityItemSchema = new mongoose.Schema({
  ...baseFields,
  type: { type: String, enum: [ ITEM_TYPE.UTILITY ], required: true },
  equippedSlot: { type: String, enum: [ ITEM_EQUIPPED_SLOT.UTILITY ], required: true }
});

// Main ItemConfig schema using discriminators
const ItemConfigSchema = new mongoose.Schema(baseFields, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

ItemConfigSchema.index({ id: 1 }, { unique: true });
ItemConfigSchema.index({ gameSystemId: 1 });
ItemConfigSchema.index({ ownerId: 1 });

export const ItemConfigModel = mongoose.models.ItemConfig || mongoose.model<ItemConfig>('ItemConfig', ItemConfigSchema);

// Attach and export discriminators
export const WeaponItemModel = ItemConfigModel.discriminator<WeaponItemConfig>('weapon', WeaponItemSchema);
export const ArmorItemModel = ItemConfigModel.discriminator<ArmorItemConfig>('armor', ArmorItemSchema);
export const ShieldItemModel = ItemConfigModel.discriminator<ShieldItemConfig>('shield', ShieldItemSchema);
export const AccessoryItemModel = ItemConfigModel.discriminator<AccessoryItemConfig>('accessory', AccessoryItemSchema);
export const BackpackItemModel = ItemConfigModel.discriminator<BackpackItemConfig>('backpack', BackpackItemSchema);
export const UtilityItemModel = ItemConfigModel.discriminator<UtilityItemConfig>('utility', UtilityItemSchema);