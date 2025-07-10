/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from 'dotenv';
config({ path: '.env.local' });

import { initMongo, disconnectMongo } from '@/libs/mongodb';

import { CharacterConfigService } from '@/services/config/CharacterConfigService';
import { TraitConfigService } from '@/services/config/TraitConfigService';
import { SkillConfigService } from '@/services/config/SkillConfigService';
import { ItemConfigService } from '@/services/config/ItemConfigService';
import { ClassConfigService } from '@/services/config/ClassConfigService';
import { StatConfigService } from '@/services/config/StatConfigService';
import { ProficiencyConfigService } from '@/services/config/ProficiencyConfigService';
import { GameConfigSystemService } from '@/services/config/GameConfigSystemService';
import { DowntimeConfigService } from '@/services/config/DowntimeConfigService';
import { DamageTypeConfigService } from '@/services/config/DamageTypeConfigService';
import { DamageScaleConfigService } from '@/services/config/DamageScaleConfigService';
import { ActionConfigService } from '@/services/config/ActionConfigService';
import { AttributeConfigService } from '@/services/config/AttributeConfigService';
import { ConditionConfigService } from '@/services/config/ConditionConfigService';
import { CreatureConfigService } from '@/services/config/CreatureConfigService';
import { OriginConfigService } from '@/services/config/OriginConfigService';

import * as character from '@/mocks/config/character';
import * as trait from '@/mocks/config/trait';
import * as skill from '@/mocks/config/skill';
import * as item from '@/mocks/config/item';
import * as classConfig from '@/mocks/config/class';
import * as stat from '@/mocks/config/stat';
import * as proficiency from '@/mocks/config/proficiency';
import * as gamesystem from '@/mocks/config/gamesystem';
import * as downtime from '@/mocks/config/downtime';
import * as damagetype from '@/mocks/config/damageType';
import * as damagescale from '@/mocks/config/damageScale';
import * as action from '@/mocks/config/action';
import * as attribute from '@/mocks/config/attribute';
import * as condition from '@/mocks/config/condition';
import * as creature from '@/mocks/config/creature';
import * as origin from '@/mocks/config/origin';

function getData (mod: any) {
  return mod.default || mod?.mock;
}

const configMap = [
  { service: new CharacterConfigService(), data: getData(character) },
  { service: new TraitConfigService(), data: getData(trait) },
  { service: new SkillConfigService(), data: getData(skill) },
  { service: new ItemConfigService(), data: getData(item) },
  { service: new ClassConfigService(), data: getData(classConfig) },
  { service: new StatConfigService(), data: getData(stat) },
  { service: new ProficiencyConfigService(), data: getData(proficiency) },
  { service: new GameConfigSystemService(), data: getData(gamesystem) },
  { service: new DowntimeConfigService(), data: getData(downtime) },
  { service: new DamageTypeConfigService(), data: getData(damagetype) },
  { service: new DamageScaleConfigService(), data: getData(damagescale) },
  { service: new ActionConfigService(), data: getData(action) },
  { service: new AttributeConfigService(), data: getData(attribute) },
  { service: new ConditionConfigService(), data: getData(condition) },
  { service: new CreatureConfigService(), data: getData(creature) },
  { service: new OriginConfigService(), data: getData(origin) }
];

async function seed () {
  await initMongo(process.env.MONGODB_URI!);

  console.log('*->>>', configMap);

  for (const { service, data } of configMap) {
    if (Array.isArray(data)) {
      await service.deleteAll();
      await service.createMany(data);
      console.log(`Seeded ${service.constructor.name} (${data.length} records)`);
    }
  }

  await disconnectMongo();
  console.log('Seeding complete!');
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
}); 