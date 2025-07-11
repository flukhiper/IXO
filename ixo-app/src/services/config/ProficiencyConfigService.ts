import { ProficiencyConfigRepository } from '@/repositories/config/ProficiencyConfigRepository';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { BaseService } from '../BaseService';

export class ProficiencyConfigService extends BaseService<ProficiencyConfig, ProficiencyConfigRepository> {
  constructor () {
    super(new ProficiencyConfigRepository());
  }
} 