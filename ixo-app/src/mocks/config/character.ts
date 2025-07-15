import type { CharacterConfig } from '@/types/config/character';

export const mock: CharacterConfig[] = [
  {
    id: 'character-default',
    name: { en: 'Default Character' },
    ownerId: 'system',
    gameSystemId: 'game-system-ixo',
    startStatPoint: 3,
    startOriginChoice: [
      'origin-primordia',
      'origin-symphonia-varis',
      'origin-gaea-libris',
      'origin-artificium',
      'origin-doloria',
      'origin-aethelgard',
      'origin-bellarax',
      'origin-wanderer'
    ],
    startTraitChoice: [
      'trait-dragonoid',
      'trait-kijin',
      'trait-mechina',
      'trait-werebeast',
      'trait-fairy',
      'trait-demonia',
      'trait-siren',
      'trait-aethel',
      'trait-oni-horn',
      'trait-lupine-ears',
      'trait-antennae',
      'trait-analytical-lenses',
      'trait-ember-glow',
      'trait-predatory-gaze',
      'trait-feral-claws',
      'trait-shielding-plates',
      'trait-digitigrade-stance',
      'trait-rooted-stance',
      'trait-gecko-grip',
      'trait-draconic-scales',
      'trait-photosensitive-sheen',
      'trait-ashen-epidermis',
      'trait-vestigial-wings',
      'trait-barbed-spines',
      'trait-hypnotic-resonance',
      'trait-vocal-mimicry'
    ],
    startNumberOfTraitChoice: 2,
    startClassChoice: [
      'enforcer',
      'scout',
      'seer',
      'operator',
      'invoker',
      'herald'
    ],
    startProficiencyPoint: 4,
    startGold: 100,
    equipmentRules: {
      numberOfWeaponSet: 2,
      numberOfApparel: 1,
      numberOfAccessory: 'infinite',
      numberOfBackpack: 1,
      numberOfUtility: 0
    },
    tags: [ 'starter' ]
  }
];
  