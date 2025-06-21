import { createAttributeConfigDiceValue, createAttributeConfigExpendableValue, createAttributeConfigFixValue } from '@/utils/config/attribute/creator';

import type { AttributeConfig } from '@/types/config/attribute';
import type { StatConfig } from '@/types/config/stat';
import type { DamageScaleConfig, DamageTypeConfig } from '@/types/config/damage';
import type { ConditionConfig } from '@/types/config/condition';
import type { ActionConfig } from '@/types/config/action';
import type { PathConfig } from '@/types/config/path';
import type { SkillConfig } from '@/types/config/skill';

import { AttributeConfigManager } from './AttributeConfigManager';
import { StatConfigManager } from './StatConfigManager';
import { DamageConfigManager } from './DamageConfigManager';
import { ConditionConfigManager } from './ConditionConfigManager';
import { ActionConfigManager } from './ActionConfigManager';
import { PathConfigManager } from './PathConfigManager';
import { SkillConfigManager } from './SkillConfigManager';

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

interface GameSystemOption {
  attributes?: AttributeConfig[]; 
  stats?: StatConfig[]; 
  damageTypes?: DamageTypeConfig[]; 
  damageScales?: DamageScaleConfig[]; 
  conditions?: ConditionConfig[]; 
  actions?: ActionConfig[]; 
  path?: PathConfig[]; 
  skills?: SkillConfig[]; 
}
export class GameSystem {
  readonly attributeManager: AttributeConfigManager;

  readonly statManager: StatConfigManager;

  readonly damageManager: DamageConfigManager;

  readonly conditionManager: ConditionConfigManager;

  readonly actionManager: ActionConfigManager;
  
  readonly pathManager: PathConfigManager;

  readonly skillManager: SkillConfigManager;

  constructor (options?: GameSystemOption) {
    this.attributeManager = new AttributeConfigManager(options?.attributes ?? initialAttributes);
    this.statManager = new StatConfigManager(options?.stats);
    this.damageManager = new DamageConfigManager({ types: options?.damageTypes, scales: options?.damageScales });
    this.conditionManager = new ConditionConfigManager(options?.conditions);
    this.actionManager = new ActionConfigManager(options?.actions);
    this.pathManager = new PathConfigManager(options?.path);
    this.skillManager = new SkillConfigManager(options?.skills);
  }
}