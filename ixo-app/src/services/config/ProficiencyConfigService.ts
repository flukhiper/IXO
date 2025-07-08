import { ProficiencyConfigRepository } from '@/repositories/ProficiencyConfigRepository';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import { BaseConfigService } from './BaseConfigService';

export class ProficiencyConfigService extends BaseConfigService<ProficiencyConfig, ProficiencyConfigRepository> {
  constructor () {
    super(new ProficiencyConfigRepository());
  }
} 