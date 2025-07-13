import { SkillConfigRepository } from '@/repositories/config/SkillConfigRepository';
import type { SkillConfig } from '@/types/config/skill';
import { BaseService } from '../BaseService';

export class SkillConfigService extends BaseService<SkillConfig, SkillConfigRepository> {
  constructor () {
    super(new SkillConfigRepository());
  }

  async getByGameSystemId (gameSystemId: string) {
    return this.repository.getAllByFilter({ gameSystemId });
  }

  async getClassSkills (classId: string | undefined, tier: number, gameSystemId: string) {
    const filter = {
      gameSystemId,
      tier,
      type: 'class',
      classId
    };
    if (!classId) {
      delete filter.classId;
    }
    return this.repository.getAllByFilter(filter);
  }

  async getRoleSkills (archetypeRoleId: string | undefined, tier: number, gameSystemId: string) {
    const filter = {
      gameSystemId,
      tier,
      type: 'role',
      requiredClassRole: archetypeRoleId
    };
    if (!archetypeRoleId) {
      delete filter.requiredClassRole;
    }
    return this.repository.getAllByFilter(filter);
  }

  async getGeneralSkills (tier: number, gameSystemId: string) {
    const filter = {
      gameSystemId,
      tier,
      type: 'general'
    };
    return this.repository.getAllByFilter(filter);
  }
} 