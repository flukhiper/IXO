import { BaseRepository } from './BaseRepository';
import { ArchetypeConfigModel } from '@/models/mongoose/ArchetypeConfig';
import type { ArchetypeConfig } from '@/types/config/origin';

export class ArchetypeConfigRepository extends BaseRepository<ArchetypeConfig> {
  constructor () {
    super(ArchetypeConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
