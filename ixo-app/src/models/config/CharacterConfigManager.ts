import type { CharacterConfig } from '@/types/config/character';

export class CharacterConfigManager {
  private character?: CharacterConfig;

  get (): CharacterConfig | undefined {
    return this.character;
  }

  set (character: CharacterConfig) {
    this.character = character;
  }

  clear () {
    this.character = undefined;
  }
} 