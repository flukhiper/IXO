import { StatConfigManager } from './StatConfigManager';
import { AttributeConfigManager } from './AttributeConfigManager';
import { SkillConfigManager } from './SkillConfigManager';
import { ConditionConfigManager } from './ConditionConfigManager';
import { ActionConfigManager } from './ActionConfigManager';
import { ItemConfigManager } from './ItemConfigManager';
import { CreatureConfigManager } from './CreatureConfigManager';
import { DowntimeConfigManager } from './DowntimeConfigManager';
import { RealmConfigManager } from './RealmConfigManager';
import { PathConfigManager } from './PathConfigManager';
import { ArchetypeConfigManager } from './ArchetypeConfigManager';
import { TraitConfigManager } from './TraitConfigManager';
import { ProficiencyConfigManager } from './ProficiencyConfigManager';
import { DamageTypeConfigManager } from './DamageTypeConfigManager';
import { DamageScaleConfigManager } from './DamageScaleConfigManager';
import { CharacterConfigManager } from './CharacterConfigManager';
import type { LocalizeText } from '@/types/config/base';
import { generateId } from '@/utils/config/helper';

// You can import mock data as needed for default values
// import mockActions from '@/mocks/config/action';
// ...

export class GameConfigSystem {
  public readonly id: string;

  public readonly name: LocalizeText;

  public readonly description: LocalizeText;

  public readonly statManager = new StatConfigManager();

  public readonly attributeManager = new AttributeConfigManager();

  public readonly skillManager = new SkillConfigManager();

  public readonly conditionManager = new ConditionConfigManager();

  public readonly actionManager = new ActionConfigManager();

  public readonly itemManager = new ItemConfigManager();

  public readonly creatureManager = new CreatureConfigManager();

  public readonly downtimeManager = new DowntimeConfigManager();

  public readonly realmManager = new RealmConfigManager();

  public readonly pathManager = new PathConfigManager();

  public readonly archetypeManager = new ArchetypeConfigManager();

  public readonly traitManager = new TraitConfigManager();

  public readonly proficiencyManager = new ProficiencyConfigManager();

  public readonly damageTypeManager = new DamageTypeConfigManager();

  public readonly damageScaleManager = new DamageScaleConfigManager();

  public readonly characterManager = new CharacterConfigManager();

  /**
   * @param name LocalizeText object (must have 'en' key)
   * @param description LocalizeText object
   */
  constructor (name: LocalizeText, description: LocalizeText) {
    if (!name?.en) throw new Error('GameConfigSystem requires a name with an English (en) value');
    this.name = name;
    this.description = description;
    this.id = generateId(name.en);
  }

  // Example: get methods
  getActions () {
    return this.actionManager.getAll(); 
  }

  getAttributes () {
    return this.attributeManager.getAll(); 
  }

  getConditions () {
    return this.conditionManager.getAll(); 
  }

  getCreatures () {
    return this.creatureManager.getAll(); 
  }

  getDamageScales () {
    return this.damageScaleManager.getAll(); 
  }

  getDamageTypes () {
    return this.damageTypeManager.getAll(); 
  }

  getDowntimes () {
    return this.downtimeManager.getAll(); 
  }

  getItems () {
    return this.itemManager.getAll(); 
  }

  getPaths () {
    return this.pathManager.getAll(); 
  }

  getProficiencies () {
    return this.proficiencyManager.getAll(); 
  }

  getRealms () {
    return this.realmManager.getAll(); 
  }

  getSkills () {
    return this.skillManager.getAll(); 
  }

  getStats () {
    return this.statManager.getAll(); 
  }

  getTraits () {
    return this.traitManager.getAll(); 
  }

  getArchetypes () {
    return this.archetypeManager.getAll(); 
  }
} 