import { NextRequest, NextResponse } from 'next/server';
import { initMongo } from '@/libs/mongodb';
import { MONGODB_URI } from '@/configs/mongodb';

import * as originController from './controllers/origin';
import * as gamesystemController from './controllers/gamesystem';
import * as itemController from './controllers/item';
import * as traitController from './controllers/trait';
import * as proficiencyController from './controllers/proficiency';
import * as statController from './controllers/stat';
import * as classController from './controllers/class';
import * as skillController from './controllers/skill';
// ...add more as needed

const controllerMap = {
  origin: originController,
  gamesystem: gamesystemController,
  item: itemController,
  trait: traitController,
  proficiency: proficiencyController,
  stat: statController,
  class: classController,
  skill: skillController
  // ...add more as needed
};

export async function GET (req: NextRequest, { params }: { params: { name: string } }) {
  await initMongo(MONGODB_URI!);
  const { name } = await params;
  const controller = controllerMap[name as keyof typeof controllerMap];
  if (controller && controller.getHandler) {
    return controller.getHandler(req);
  }
  return NextResponse.json({ error: 'Not implemented' }, { status: 404 });
} 