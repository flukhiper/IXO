import { NextRequest, NextResponse } from 'next/server';
import { GameConfigSystemService } from '@/services/config/GameConfigSystemService';

const service = new GameConfigSystemService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (id) {
    const doc = await service.getById(id);
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(doc);
  }
  const docs = await service.getAll();
  return NextResponse.json(docs);
} 