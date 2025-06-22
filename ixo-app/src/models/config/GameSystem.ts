import { createAttributeConfigDiceValue, createAttributeConfigExpendableValue, createAttributeConfigFixValue } from '@/utils/config/attribute/creator';
import { createEquipmentConfig } from '@/utils/config/equipment/creator';
import { createEquipmentSlotConfig } from '@/utils/config/equipment/helper';
import { VALUE_TYPE } from '@/constants/value';

import { AttributeConfigManager } from './AttributeConfigManager';
import { StatConfigManager } from './StatConfigManager';
import { DamageConfigManager } from './DamageConfigManager';
import { ConditionConfigManager } from './ConditionConfigManager';
import { ActionConfigManager } from './ActionConfigManager';
import { PathConfigManager } from './PathConfigManager';
import { SkillConfigManager } from './SkillConfigManager';
import { ProficiencyConfigManager } from './ProficiencyConfigManager';
import { ItemConfigManager } from './ItemConfigManager';
import { RaceConfigManager } from './RaceConfigManager';
import { ProgressConfigManager } from './ProgressConfigManager';
import { EquipmentConfigManager } from './EquipmentConfigManager';

import type { AttributeConfig } from '@/types/config/attribute';
import type { StatConfig } from '@/types/config/stat';
import type { DamageScaleConfig, DamageTypeConfig } from '@/types/config/damage';
import type { ConditionConfig } from '@/types/config/condition';
import type { ActionConfig } from '@/types/config/action';
import type { PathConfig } from '@/types/config/path';
import type { SkillConfig } from '@/types/config/skill';
import type { ProficiencyConfig } from '@/types/config/proficiency';
import type { ItemConfig } from '@/types/config/item';
import type { RaceConfig } from '@/types/config/race';
import type { ProgressConfig } from '@/types/config/progress';
import type { EquipmentConfig } from '@/types/config/equipment';

const initialAttributes: AttributeConfig[] = [
  createAttributeConfigExpendableValue({
    name: 'Hit Points',
    description: '',
    attrType: 'hit-point',
    max: 10,
    restores: [ 
      {
        when: 'short-rest',
        value: 10
      }, {
        when: 'long-rest',
        value: 'full'
      }
    ]
  }),
  createAttributeConfigFixValue({
    name: 'Action Points',
    description: '',
    attrType: 'action-slot',
    value: 4
  }),
  createAttributeConfigDiceValue({
    name: 'Initiative',
    description: '',
    attrType: 'initiative',
    value: '1d20'
  }),
  createAttributeConfigFixValue({
    name: 'Armor Class',
    description: '',
    attrType: 'armor-class',
    value: 10
  }),
  createAttributeConfigDiceValue({
    name: 'Attack Roll',
    description: '',
    attrType: 'attack-roll',
    value: '1d20'
  }),
  createAttributeConfigFixValue({
    name: 'Difficulty Class',
    description: '',
    attrType: 'difficulty-class',
    value: 10
  }),
  createAttributeConfigExpendableValue({
    name: 'Movement',
    description: '',
    attrType: 'movement',
    max: 9,
    restores: [ {
      when: 'turn',
      value: 'full'
    } ]
  }),
  createAttributeConfigFixValue({
    name: 'Jump Distance',
    description: '',
    attrType: 'jump-distance',
    value: 4.5
  }),
  createAttributeConfigExpendableValue({
    name: 'Carrying Capacity',
    description: '',
    attrType: 'carrying-capacity',
    max: 140,
    restores: [ {
      when: 'none'
    } ]
  }),
  createAttributeConfigFixValue({
    name: 'Size',
    description: '',
    attrType: 'size',
    value: 0
  })
];

const initialEquipment: EquipmentConfig = createEquipmentConfig({
  weaponSet: 2,
  armorSlots: [
    createEquipmentSlotConfig({
      name: 'Body',
      tags: [ 'clothwear' ],
      layer: 1
    }),
    createEquipmentSlotConfig({
      name: 'Hand',
      tags: [ 'handwear' ],
      layer: 1
    }),
    createEquipmentSlotConfig({
      name: 'Foot',
      tags: [ 'footwear' ],
      layer: 1
    }),
    createEquipmentSlotConfig({
      name: 'Head',
      tags: [ 'headwear' ],
      layer: 1
    })
  ],
  accessorySlots: [
    createEquipmentSlotConfig({
      name: 'All Body',
      tags: [ 'belt', 'ring', 'necklace' ],
      layer: VALUE_TYPE.INFINITE
    })
  ]
});

type GameConfigManager =
  | AttributeConfigManager
  | StatConfigManager
  | DamageConfigManager
  | ConditionConfigManager
  | ActionConfigManager
  | PathConfigManager
  | SkillConfigManager
  | ProficiencyConfigManager
  | ItemConfigManager
  | RaceConfigManager
  | ProgressConfigManager
  | EquipmentConfigManager;

interface GameSystemOption {
  attributes?: AttributeConfig[]; 
  stats?: StatConfig[]; 
  damageTypes?: DamageTypeConfig[]; 
  damageScales?: DamageScaleConfig[]; 
  conditions?: ConditionConfig[]; 
  actions?: ActionConfig[]; 
  path?: PathConfig[]; 
  skills?: SkillConfig[]; 
  proficiencies?: ProficiencyConfig[];
  items?: ItemConfig[];
  races?: RaceConfig[];
  progress?: ProgressConfig;
  equipment?: EquipmentConfig;
}
export class GameSystem {
  readonly attributeManager: AttributeConfigManager;

  readonly statManager: StatConfigManager;

  readonly damageManager: DamageConfigManager;

  readonly conditionManager: ConditionConfigManager;

  readonly actionManager: ActionConfigManager;
  
  readonly pathManager: PathConfigManager;

  readonly skillManager: SkillConfigManager;

  readonly proficiencyManager: ProficiencyConfigManager;

  readonly itemManager: ItemConfigManager;

  readonly raceManager: RaceConfigManager;

  readonly progressManager: ProgressConfigManager;

  readonly equipmentManager: EquipmentConfigManager;

  constructor (options?: GameSystemOption) {
    this.attributeManager = new AttributeConfigManager(options?.attributes ?? initialAttributes);
    this.statManager = new StatConfigManager(options?.stats);
    this.damageManager = new DamageConfigManager({ types: options?.damageTypes, scales: options?.damageScales });
    this.conditionManager = new ConditionConfigManager(options?.conditions);
    this.actionManager = new ActionConfigManager(options?.actions);
    this.pathManager = new PathConfigManager(options?.path);
    this.skillManager = new SkillConfigManager(options?.skills);
    this.proficiencyManager = new ProficiencyConfigManager(options?.proficiencies);
    this.itemManager = new ItemConfigManager(options?.items);
    this.raceManager = new RaceConfigManager(options?.races);
    this.progressManager = new ProgressConfigManager(options?.progress);
    this.equipmentManager = new EquipmentConfigManager(options?.equipment ?? initialEquipment);
  }

  getManagerByRefId (refId: string): GameConfigManager | undefined {
    const managers = [
      this.attributeManager,
      this.statManager,
      this.damageManager,
      this.conditionManager,
      this.actionManager,
      this.pathManager,
      this.skillManager,
      this.proficiencyManager,
      this.raceManager,
      this.progressManager,
      this.equipmentManager,
      this.itemManager
    ];
    return managers.find(manager => manager.hasRefId(refId));
  }
}