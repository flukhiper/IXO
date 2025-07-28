import { ACTION_TYPE } from '@/constants/config/action';
import { BaseRepository } from '../BaseRepository';
import { ActionConfigModel, ItemActionModel, CommandActionModel } from '@/models/mongoose/config/ActionConfig';
import type { ActionConfig, CommandActionConfig, ItemActionConfig } from '@/types/config/action';
import type { Model } from 'mongoose';

export class ActionConfigRepository extends BaseRepository<ActionConfig> {
  protected itemActionModel: Model<ItemActionConfig>;

  protected commandActionModel: Model<CommandActionConfig>;

  constructor () {
    super(ActionConfigModel as Model<ActionConfig>);
    this.itemActionModel = ItemActionModel; 
    this.commandActionModel = CommandActionModel; 
  }

  async saveOne (item: ActionConfig) {
    switch (item.type) {
      case ACTION_TYPE.ITEM:
        await this.itemActionModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ACTION_TYPE.COMMAND:
        await this.commandActionModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      default:
        await super.saveOne(item);
        break;
    }
  }

  async updateOne (id: string, update: Partial<ActionConfig>) {
    switch (update.type) {
      case ACTION_TYPE.ITEM:
        await this.itemActionModel.updateOne({ id }, { $set: update });
        break;
      case ACTION_TYPE.COMMAND:
        await this.commandActionModel.updateOne({ id }, { $set: update });
        break;
      default:
        await super.updateOne(id, update);
        break;
    }
  }

  async saveMany (items: ActionConfig[]) {
    if (items.length === 0) return;
    // Group items by type
    const groups: Record<string, ActionConfig[]> = {};
    for (const item of items) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    // Handle each group
    for (const [ type, group ] of Object.entries(groups)) {
      switch (type) {
        case ACTION_TYPE.ITEM:
          await this.itemActionModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ACTION_TYPE.COMMAND:
          await this.commandActionModel.bulkWrite(
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