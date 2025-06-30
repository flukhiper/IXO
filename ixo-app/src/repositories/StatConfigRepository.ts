import { BaseRepository } from './BaseRepository';
import { StatConfigModel } from '@/models/mongoose/StatConfig';
import type { StatConfig } from '@/types/config/stat';

export class StatConfigRepository extends BaseRepository<StatConfig> {
  constructor () {
    super(StatConfigModel);
  }
  // Add any StatConfig-specific methods here if needed
} 