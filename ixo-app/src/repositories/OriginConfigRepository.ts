import { BaseRepository } from './BaseRepository';
import { OriginConfigModel } from '@/models/mongoose/OriginConfig';
import type { OriginConfig } from '@/types/config/origin';

export class OriginConfigRepository extends BaseRepository<OriginConfig> {
  constructor () {
    super(OriginConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
