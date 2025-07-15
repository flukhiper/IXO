import { NextRequest, NextResponse } from 'next/server';
import { ClassConfigService } from '@/services/config/ClassConfigService';

const service = new ClassConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const gameSystemId = searchParams.get('gameSystemId');
  const ids = searchParams.get('ids'); // comma-separated list of allowed IDs
  if (id) {
    const doc = await service.getById(id);
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(doc);
  }
  if (gameSystemId) {
    if (ids) {
      const allowedIds = ids.split(',').map(s => s.trim()).filter(Boolean);
      const docs = await service.getByIds(allowedIds, gameSystemId);
      return NextResponse.json(docs);
    } else {
      const docs = await service.getByGameSystemId(gameSystemId);
      return NextResponse.json(docs);
    }
  }
  if (ids) {
    const allowedIds = ids.split(',').map(s => s.trim()).filter(Boolean);
    const docs = await service.getByIds(allowedIds);
    return NextResponse.json(docs);
  }
  const docs = await service.getAll();
  return NextResponse.json(docs);
} 