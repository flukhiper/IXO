import { BaseRepository } from '@/repositories/BaseRepository';
import { CharacterGearSlotModel, CharacterWeaponSetModel } from '@/models/mongoose/runtime/character/CharacterGear';
import type { CharacterGearSlot, CharacterWeaponSet } from '@/types/runtime/character/CharacterGear';

export class CharacterGearSlotRepository extends BaseRepository<CharacterGearSlot> {
  constructor () {
    super(CharacterGearSlotModel);
  }
}

export class CharacterWeaponSetRepository extends BaseRepository<CharacterWeaponSet> {
  constructor () {
    super(CharacterWeaponSetModel);
  }
} 