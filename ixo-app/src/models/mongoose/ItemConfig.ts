import mongoose from 'mongoose';
import type { ItemConfig } from '@/types/config/item';
import { ITEM_TYPE } from '@/constants/config/item';
import { EffectConfigSchema, LocalizeTextSchema } from './common';

const InventorySpaceSchema = new mongoose.Schema({
  rows: { type: Number, required: true },
  columns: { type: Number, required: true }
}, { _id: false });

const RequiredProficiencySchema = new mongoose.Schema({
  proficiencyId: { type: String, required: true },
  level: { type: Number, required: true }
}, { _id: false });

const RequiredStatSchema = new mongoose.Schema({
  statId: { type: String, required: true },
  conditionFormulas: mongoose.Schema.Types.Mixed
}, { _id: false });

// WeaponPropertySchema
const WeaponPropertySchema = new mongoose.Schema({
  light: { type: Boolean },
  range: { type: mongoose.Schema.Types.Mixed },
  finesse: { type: Boolean },
  thrown: { type: mongoose.Schema.Types.Mixed },
  extraReach: { type: mongoose.Schema.Types.Mixed },
  twoHanded: { type: Boolean },
  versatile: { type: mongoose.Schema.Types.Mixed },
  enhancement: { type: Number, enum: [ 1, 2, 3 ] }
}, { _id: false });

const WeaponSchema = new mongoose.Schema({
  damageTypeId: { type: String, required: true },
  damage: { type: mongoose.Schema.Types.Mixed, required: true },
  range: { type: mongoose.Schema.Types.Mixed, required: true },
  property: { type: WeaponPropertySchema, required: true }
}, { _id: false });

// ShieldPropertySchema
const ShieldPropertySchema = new mongoose.Schema({
  light: { type: Boolean },
  medium: { type: Boolean },
  heavy: { type: Boolean },
  enhancement: { type: Number, enum: [ 1, 2, 3 ] }
}, { _id: false });

const ShieldSchema = new mongoose.Schema({
  armoreBonus: { type: mongoose.Schema.Types.Mixed, required: true },
  durabilityPoints: { type: Number, required: true },
  property: { type: ShieldPropertySchema, required: true }
}, { _id: false });

const ArmorSchema = new mongoose.Schema({
  armoreBonus: { type: mongoose.Schema.Types.Mixed, required: true },
  durabilityPoints: { type: Number, required: true },
  property: { type: ShieldPropertySchema, required: true } // Note: uses ShieldPropertyConfig
}, { _id: false });

const BackpackSchema = new mongoose.Schema({
  space: { type: InventorySpaceSchema, required: true }
}, { _id: false });

const UtilitySchema = new mongoose.Schema({
  actionIds: { type: [ String ], required: true },
  isExpendable: { type: Boolean, required: true },
  numberOfUsages: { type: Number }
}, { _id: false });

const ConsumableDamageSchema = new mongoose.Schema({
  damageTypeId: { type: String, required: true },
  baseValue: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const ConsumableRestoreSchema = new mongoose.Schema({
  attributeId: { type: String, required: true },
  baseValue: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const ConsumableSchema = new mongoose.Schema({
  damages: { type: [ ConsumableDamageSchema ] },
  restores: { type: [ ConsumableRestoreSchema ] },
  conditionIds: { type: [ String ] },
  removeConditionTags: { type: [ String ] },
  isExpendable: { type: Boolean, required: true },
  numberOfUsages: { type: Number }
}, { _id: false });

const ItemConfigSchema = new mongoose.Schema<ItemConfig>({
  id: { type: String, required: true, unique: true },
  name: { type: LocalizeTextSchema, required: true },
  description: { type: LocalizeTextSchema },
  type: { type: String, enum: Object.values(ITEM_TYPE), required: true },
  icon: { type: String },
  thumbnail: { type: String },
  tags: { type: [ String ] },
  weight: { type: Number, required: true },
  cost: { type: Number, required: true },
  augmentSlots: { type: Number, required: true },
  space: { type: InventorySpaceSchema, required: true },
  slotTypes: { type: [ String ], required: true },
  requiredCharacterLevel: { type: Number, required: true },
  requiredProficiencies: { type: [ RequiredProficiencySchema ], required: true },
  requiredStats: { type: [ RequiredStatSchema ], required: true },
  effects: { type: [ EffectConfigSchema ] },
  gameSystemId: { type: String, required: true },
  ownerId: { type: String, required: true },
  weapon: { type: WeaponSchema },
  shield: { type: ShieldSchema },
  armor: { type: ArmorSchema },
  backpack: { type: BackpackSchema },
  utility: { type: UtilitySchema },
  consumable: { type: ConsumableSchema }
}, { versionKey: false, timestamps: true, discriminatorKey: 'type' });

export const ItemConfigModel = mongoose.models.ItemConfig || mongoose.model<ItemConfig>('ItemConfig', ItemConfigSchema);