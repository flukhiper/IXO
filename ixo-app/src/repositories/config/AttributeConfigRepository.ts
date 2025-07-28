import { BaseRepository } from '../BaseRepository';
import { AttributeConfigModel, ResourceAttributeModel, ConstantAttributeModel, DiceAttributeModel, SkillCheckAttributeModel, SavingThrowAttributeModel } from '@/models/mongoose/config/AttributeConfig';
import type { AnyAttributeConfig, ResourceAttributeConfig, ConstantAttributeConfig, DiceAttributeConfig, SkillCheckAttributeConfig, SavingThrowAttributeConfig } from '@/types/config/attribute';
import type { Model } from 'mongoose';
import { ATTRIBUTE_TYPE } from '@/constants/config/attribute';

export class AttributeConfigRepository extends BaseRepository<AnyAttributeConfig> {
  protected resourceAttributeModel: Model<ResourceAttributeConfig>;

  protected constantAttributeModel: Model<ConstantAttributeConfig>;

  protected diceAttributeModel: Model<DiceAttributeConfig>;

  protected skillCheckAttributeModel: Model<SkillCheckAttributeConfig>;

  protected savingThrowAttributeModel: Model<SavingThrowAttributeConfig>;

  constructor () {
    super(AttributeConfigModel);
    this.resourceAttributeModel = ResourceAttributeModel;
    this.constantAttributeModel = ConstantAttributeModel;
    this.diceAttributeModel = DiceAttributeModel;
    this.skillCheckAttributeModel = SkillCheckAttributeModel;
    this.savingThrowAttributeModel = SavingThrowAttributeModel;
  }

  async saveOne (item: AnyAttributeConfig) {
    switch (item.type) {
      case ATTRIBUTE_TYPE.RESOURCE:
        await this.resourceAttributeModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ATTRIBUTE_TYPE.CONSTANT:
        await this.constantAttributeModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ATTRIBUTE_TYPE.DICE:
        await this.diceAttributeModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ATTRIBUTE_TYPE.SKILL_CHECK:
        await this.skillCheckAttributeModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case ATTRIBUTE_TYPE.SAVING_CHECK:
        await this.savingThrowAttributeModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      default:
        await super.saveOne(item);
        break;
    }
  }

  async updateOne (id: string, update: Partial<AnyAttributeConfig>) {
    switch (update.type) {
      case ATTRIBUTE_TYPE.RESOURCE:
        await this.resourceAttributeModel.updateOne({ id }, { $set: update });
        break;
      case ATTRIBUTE_TYPE.CONSTANT:
        await this.constantAttributeModel.updateOne({ id }, { $set: update });
        break;
      case ATTRIBUTE_TYPE.DICE:
        await this.diceAttributeModel.updateOne({ id }, { $set: update });
        break;
      case ATTRIBUTE_TYPE.SKILL_CHECK:
        await this.skillCheckAttributeModel.updateOne({ id }, { $set: update });
        break;
      case ATTRIBUTE_TYPE.SAVING_CHECK:
        await this.savingThrowAttributeModel.updateOne({ id }, { $set: update });
        break;
      default:
        await super.updateOne(id, update);
        break;
    }
  }

  async saveMany (items: AnyAttributeConfig[]) {
    if (items.length === 0) return;
    // Group items by type
    const groups: Record<string, AnyAttributeConfig[]> = {};
    for (const item of items) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    // Handle each group
    for (const [ type, group ] of Object.entries(groups)) {
      switch (type) {
        case ATTRIBUTE_TYPE.RESOURCE:
          await this.resourceAttributeModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ATTRIBUTE_TYPE.CONSTANT:
          await this.constantAttributeModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ATTRIBUTE_TYPE.DICE:
          await this.diceAttributeModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ATTRIBUTE_TYPE.SKILL_CHECK:
          await this.skillCheckAttributeModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case ATTRIBUTE_TYPE.SAVING_CHECK:
          await this.savingThrowAttributeModel.bulkWrite(
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