import { BaseRepository } from '../BaseRepository';
import { SkillConfigModel, GeneralSkillModel, CombatSkillModel, SignatureSkillModel } from '@/models/mongoose/config/SkillConfig';
import type { SkillConfig, GeneralSkillConfig, CombatSkillConfig, SignatureSkillConfig } from '@/types/config/skill';
import type { Model } from 'mongoose';
import { SKILL_TYPE } from '@/constants/config/skill';

export class SkillConfigRepository extends BaseRepository<SkillConfig> {
  protected generalSkillModel: Model<GeneralSkillConfig>;

  protected signatureSkillModel: Model<SignatureSkillConfig>;

  protected combatSkillModel: Model<CombatSkillConfig>;

  constructor () {
    super(SkillConfigModel);
    this.generalSkillModel = GeneralSkillModel;
    this.signatureSkillModel = SignatureSkillModel;
    this.combatSkillModel = CombatSkillModel;
  }

  async saveOne (item: SkillConfig) {
    switch (item.type) {
      case SKILL_TYPE.GENERAL:
        await this.generalSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case SKILL_TYPE.SIGNATURE:
        await this.signatureSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
        break;
      case SKILL_TYPE.COMBAT:
        await this.combatSkillModel.updateOne({ id: item.id }, { $set: item }, { upsert: true });
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
      case SKILL_TYPE.SIGNATURE:
        await this.signatureSkillModel.updateOne({ id }, { $set: update });
        break;
      case SKILL_TYPE.COMBAT:
        await this.combatSkillModel.updateOne({ id }, { $set: update });
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
        case SKILL_TYPE.SIGNATURE:
          await this.signatureSkillModel.bulkWrite(
            group.map(item => ({
              updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
              }
            }))
          );
          break;
        case SKILL_TYPE.COMBAT:
          await this.combatSkillModel.bulkWrite(
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
