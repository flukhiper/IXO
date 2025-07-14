import { NextRequest, NextResponse } from 'next/server';
import { CharacterConfigService } from '@/services/config/CharacterConfigService';

const service = new CharacterConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gameSystemId = searchParams.get('gameSystemId');
  if (!gameSystemId) {
    return NextResponse.json({ error: 'Missing gameSystemId' }, { status: 400 });
  }
  const config = await service.getByGameSystemId(gameSystemId);
  if (!config) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(config);
} 