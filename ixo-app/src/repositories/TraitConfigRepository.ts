import { BaseRepository } from './BaseRepository';
import { TraitConfigModel } from '@/models/mongoose/TraitConfig';
import type { TraitConfig } from '@/types/config/trait';

export class TraitConfigRepository extends BaseRepository<TraitConfig> {
  constructor () {
    super(TraitConfigModel);
  }
  // Add any TraitConfig-specific methods here if needed
} 