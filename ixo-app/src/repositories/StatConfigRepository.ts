import { BaseRepository } from './BaseRepository';
import { StatConfigModel } from '@/models/mongoose/StatConfig';
import type { StatConfig } from '@/types/config/stat';

export class StatConfigRepository extends BaseRepository<StatConfig> {
  constructor () {
    super(StatConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
