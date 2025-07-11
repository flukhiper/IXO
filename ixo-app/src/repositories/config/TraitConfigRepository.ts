import { BaseRepository } from '../BaseRepository';
import { TraitConfigModel } from '@/models/mongoose/config/TraitConfig';
import type { TraitConfig } from '@/types/config/trait';

export class TraitConfigRepository extends BaseRepository<TraitConfig> {
  constructor () {
    super(TraitConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
