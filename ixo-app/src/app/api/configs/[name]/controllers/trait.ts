import { NextRequest, NextResponse } from 'next/server';
import { TraitConfigService } from '@/services/config/TraitConfigService';

const service = new TraitConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const gameSystemId = searchParams.get('gameSystemId');
  
  if (id) {
    const doc = await service.getById(id);
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(doc);
  }
  
  if (gameSystemId) {
    const docs = await service.getByGameSystemId(gameSystemId);
    return NextResponse.json(docs);
  }
  
  const docs = await service.getAll();
  return NextResponse.json(docs);
} 