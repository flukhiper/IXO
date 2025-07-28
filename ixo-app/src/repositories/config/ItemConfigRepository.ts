import { BaseRepository } from '../BaseRepository';
import { ItemConfigModel, WeaponItemModel, ArmorItemModel, ShieldItemModel, AccessoryItemModel, BackpackItemModel, UtilityItemModel } from '@/models/mongoose/config/ItemConfig';
import type { ItemConfig, WeaponItemConfig, ArmorItemConfig, ShieldItemConfig, AccessoryItemConfig, BackpackItemConfig, UtilityItemConfig } from '@/types/config/item';
import type { Model } from 'mongoose';
import { ITEM_TYPE } from '@/constants/config/item';

export class ItemConfigRepository extends BaseRepository<ItemConfig> {
  protected weaponItemModel: Model<WeaponItemConfig>;

  protected armorItemModel: Model<ArmorItemConfig>;

  protected shieldItemModel: Model<ShieldItemConfig>;

  protected accessoryItemModel: Model<AccessoryItemConfig>;

  protected backpackItemModel: Model<BackpackItemConfig>;

  protected utilityItemModel: Model<UtilityItemConfig>;

  constructor () {
    super(ItemConfigModel);
    this.weaponItemModel = WeaponItemModel;
    this.armorItemModel = ArmorItemModel;
    this.shieldItemModel = ShieldItemModel;
    this.accessoryItemModel = AccessoryItemModel;
    this.backpackItemModel = BackpackItemModel;
    this.utilityItemModel = UtilityItemModel;
  }

  async saveOne (item: ItemConfig) {
    switch (item.type) {
      case ITEM_TYPE.WEAPON:
        await this.weaponItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ITEM_TYPE.ARMOR:
        await this.armorItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ITEM_TYPE.SHIELD:
        await this.shieldItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ITEM_TYPE.ACCESSORY:
        await this.accessoryItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ITEM_TYPE.BACKPACK:
        await this.backpackItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ITEM_TYPE.UTILITY:
        await this.utilityItemModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      default:
        await super.saveOne(item);
        break;
    }
  }

  async updateOne (id: string, update: Partial<ItemConfig>) {
    switch (update.type) {
      case ITEM_TYPE.WEAPON:
        await this.weaponItemModel.updateOne({ id }, { $set: update });
        break;
      case ITEM_TYPE.ARMOR:
        await this.armorItemModel.updateOne({ id }, { $set: update });
        break;
      case ITEM_TYPE.SHIELD:
        await this.shieldItemModel.updateOne({ id }, { $set: update });
        break;
      case ITEM_TYPE.ACCESSORY:
        await this.accessoryItemModel.updateOne({ id }, { $set: update });
        break;
      case ITEM_TYPE.BACKPACK:
        await this.backpackItemModel.updateOne({ id }, { $set: update });
        break;
      case ITEM_TYPE.UTILITY:
        await this.utilityItemModel.updateOne({ id }, { $set: update });
        break;
      default:
        await super.updateOne(id, update);
        break;
    }
  }

  async saveMany (items: ItemConfig[]) {
    if (items.length === 0) return;
    // Group items by type
    const groups: Record<string, ItemConfig[]> = {};
    for (const item of items) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    // Handle each group
    for (const [ type, group ] of Object.entries(groups)) {
      switch (type) {
        case ITEM_TYPE.WEAPON:
          await this.weaponItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ITEM_TYPE.ARMOR:
          await this.armorItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ITEM_TYPE.SHIELD:
          await this.shieldItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ITEM_TYPE.ACCESSORY:
          await this.accessoryItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ITEM_TYPE.BACKPACK:
          await this.backpackItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ITEM_TYPE.UTILITY:
          await this.utilityItemModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        default:
          await super.saveMany(group);
          break;
      }
    }
  }
}
