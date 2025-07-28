import { BaseRepository } from '../BaseRepository';
import { SkillConfigModel, GeneralSkillModel, ClassSkillModel, RoleSkillModel } from '@/models/mongoose/config/SkillConfig';
import type { SkillConfig, GeneralSkillConfig, ClassSkillConfig, RoleSkillConfig } from '@/types/config/skill';
import type { Model } from 'mongoose';
import { SKILL_TYPE } from '@/constants/config/skill';

export class SkillConfigRepository extends BaseRepository<SkillConfig> {
  protected generalSkillModel: Model<GeneralSkillConfig>;

  protected classSkillModel: Model<ClassSkillConfig>;

  protected roleSkillModel: Model<RoleSkillConfig>;

  constructor () {
    super(SkillConfigModel);
    this.generalSkillModel = GeneralSkillModel;
    this.classSkillModel = ClassSkillModel;
    this.roleSkillModel = RoleSkillModel;
  }

  async saveOne (item: SkillConfig) {
    switch (item.type) {
      case SKILL_TYPE.GENERAL:
        await this.generalSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case SKILL_TYPE.CLASS:
        await this.classSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case SKILL_TYPE.ROLE:
        await this.roleSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      default:
        await super.saveOne(item);
        break;
    }
  }

  async updateOne (id: string, update: Partial<SkillConfig>) {
    switch (update.type) {
      case SKILL_TYPE.GENERAL:
        await this.generalSkillModel.updateOne({ id }, { $set: update });
        break;
      case SKILL_TYPE.CLASS:
        await this.classSkillModel.updateOne({ id }, { $set: update });
        break;
      case SKILL_TYPE.ROLE:
        await this.roleSkillModel.updateOne({ id }, { $set: update });
        break;
      default:
        await super.updateOne(id, update);
        break;
    }
  }

  async saveMany (items: SkillConfig[]) {
    if (items.length === 0) return;
    // Group items by type
    const groups: Record<string, SkillConfig[]> = {};
    for (const item of items) {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    }
    // Handle each group
    for (const [ type, group ] of Object.entries(groups)) {
      switch (type) {
        case SKILL_TYPE.GENERAL:
          await this.generalSkillModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case SKILL_TYPE.CLASS:
          await this.classSkillModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case SKILL_TYPE.ROLE:
          await this.roleSkillModel.bulkWrite(
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
