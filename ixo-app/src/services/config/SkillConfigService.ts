import { SkillConfigRepository } from '@/repositories/config/SkillConfigRepository';
import type { SkillConfig } from '@/types/config/skill';
import { BaseService } from '../BaseService';

export class SkillConfigService extends BaseService<SkillConfig, SkillConfigRepository> {
  constructor () {
    super(new SkillConfigRepository());
  }

  async getAllByFilter (filter: Record<string, unknown>) {
    return this.repository.getAllByFilter(filter);
  }
} 