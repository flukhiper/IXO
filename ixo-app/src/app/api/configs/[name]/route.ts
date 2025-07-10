import { NextRequest, NextResponse } from 'next/server';

import { MONGODB_URI } from '@/configs/mongodb';
import { initMongo } from '@/libs/mongodb';
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

const serviceMap = {
  character: new CharacterConfigService(),
  trait: new TraitConfigService(),
  skill: new SkillConfigService(),
  item: new ItemConfigService(),
  class: new ClassConfigService(),
  stat: new StatConfigService(),
  proficiency: new ProficiencyConfigService(),
  gamesystem: new GameConfigSystemService(),
  downtime: new DowntimeConfigService(),
  damagetype: new DamageTypeConfigService(),
  damagescale: new DamageScaleConfigService(),
  action: new ActionConfigService(),
  attribute: new AttributeConfigService(),
  condition: new ConditionConfigService(),
  creature: new CreatureConfigService(),
  origin: new OriginConfigService()
} as const;

type ServiceName = keyof typeof serviceMap;
type ServiceType<N extends ServiceName> = (typeof serviceMap)[N];

function getServiceByName<N extends ServiceName> (name: N): ServiceType<N> {
  const service = serviceMap[name];
  if (!service) throw new Error('Service not found');
  return service;
}

export async function GET (req: NextRequest, { params }: { params: { name: ServiceName } }) {
  await initMongo(MONGODB_URI!);
  const { name } = params;
  const service = getServiceByName(name);
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  try {
    if (id) {
      const doc = await service.getById(id);
      if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(doc);
    } else {
      const docs = await service.getAll();
      return NextResponse.json(docs);
    }
  } catch (e: unknown) {
    const error = e instanceof Error ? e : new Error(String(e));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST (req: NextRequest, { params }: { params: { name: ServiceName } }) {
  await initMongo(MONGODB_URI!);
  const { name } = params;
  const service = getServiceByName(name);
  try {
    const data = await req.json();
    await service.create(data);
    return NextResponse.json(data, { status: 201 });
  } catch (e: unknown) {
    const error = e instanceof Error ? e : new Error(String(e));
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
} 