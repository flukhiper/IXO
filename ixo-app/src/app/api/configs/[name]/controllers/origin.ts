import { NextRequest, NextResponse } from 'next/server';
import { OriginConfigService } from '@/services/config/OriginConfigService';

const service = new OriginConfigService();

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
    // If ids param is present, filter by both gameSystemId and id in ids
    if (ids) {
      const allowedIds = ids.split(',').map(s => s.trim()).filter(Boolean);
      const docs = await service.getByIds(allowedIds, gameSystemId);
      return NextResponse.json(docs);
    } else {
      const docs = await service.getByGameSystemId(gameSystemId);
      return NextResponse.json(docs);
    }
  }
  // If ids param is present without gameSystemId, just filter by ids
  if (ids) {
    const allowedIds = ids.split(',').map(s => s.trim()).filter(Boolean);
    const docs = await service.getByIds(allowedIds);
    return NextResponse.json(docs);
  }
  const docs = await service.getAll();
  return NextResponse.json(docs);
} 