import { NextRequest, NextResponse } from 'next/server';
import { initMongo } from '@/libs/mongodb';
import { MONGODB_URI } from '@/configs/mongodb';

import * as originController from './controllers/origin';
import * as gamesystemController from './controllers/gamesystem';
// import * as traitController from './controllers/trait';
// ...add more as needed

const controllerMap = {
  origin: originController,
  gamesystem: gamesystemController
  // trait: traitController,
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