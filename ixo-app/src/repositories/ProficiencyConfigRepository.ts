import { BaseRepository } from './BaseRepository';
import { ProficiencyConfigModel } from '@/models/mongoose/ProficiencyConfig';
import type { ProficiencyConfig } from '@/types/config/proficiency';

export class ProficiencyConfigRepository extends BaseRepository<ProficiencyConfig> {
  constructor () {
    super(ProficiencyConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
