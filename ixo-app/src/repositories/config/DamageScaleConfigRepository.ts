import { BaseRepository } from '../BaseRepository';
import { DamageScaleConfigModel } from '@/models/mongoose/config/DamageScaleConfig';
import type { DamageScaleConfig } from '@/types/config/damageScale';

export class DamageScaleConfigRepository extends BaseRepository<DamageScaleConfig> {
  constructor () {
    super(DamageScaleConfigModel);
  }
  // All base methods from BaseRepository are inherited and used directly
}
