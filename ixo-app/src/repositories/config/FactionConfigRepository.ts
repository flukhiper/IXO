import { BaseRepository } from '../BaseRepository';
import { FactionConfigModel } from '@/models/mongoose/config/FactionConfig';
import type { FactionConfig } from '@/types/config/faction';

export class FactionConfigRepository extends BaseRepository<FactionConfig> {
  constructor () {
    super(FactionConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
