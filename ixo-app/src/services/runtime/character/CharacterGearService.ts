import { CharacterGearSlotRepository } from '@/repositories/runtime/character/CharacterGearRepository';
import { CharacterWeaponSetRepository } from '@/repositories/runtime/character/CharacterGearRepository';
import type { CharacterGearSlot, CharacterWeaponSet } from '@/types/runtime/character/CharacterGear';
import { BaseService } from '@/services/BaseService';

export class CharacterGearSlotService extends BaseService<CharacterGearSlot, CharacterGearSlotRepository> {
  constructor () {
    super(new CharacterGearSlotRepository());
  }
}

export class CharacterWeaponSetService extends BaseService<CharacterWeaponSet, CharacterWeaponSetRepository> {
  constructor () {
    super(new CharacterWeaponSetRepository());
  }
} 