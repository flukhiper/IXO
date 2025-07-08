import { BaseRepository } from './BaseRepository';
import { CreatureConfigModel } from '@/models/mongoose/CreatureConfig';
import type { CreatureConfig } from '@/types/config/creature';

export class CreatureConfigRepository extends BaseRepository<CreatureConfig> {
  constructor () {
    super(CreatureConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
