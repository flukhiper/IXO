import { NextRequest, NextResponse } from 'next/server';
import { ActionConfigService } from '@/services/config/ActionConfigService';

const service = new ActionConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gameSystemId = searchParams.get('gameSystemId');
  if (!gameSystemId) {
    return NextResponse.json({ error: 'gameSystemId is required' }, { status: 400 });
  }

  // Build filter from ActionGainChoice fields
  const filter: Record<string, null | string | number | Record<string, unknown>> = { gameSystemId };

  if (searchParams.get('actionId')) filter.id = searchParams.get('actionId');
  if (searchParams.get('type')) filter.type = searchParams.get('type');
  if (searchParams.get('includeTags') || searchParams.get('excludeTags')) {
    filter.tags = {};
    if (searchParams.get('includeTags')) {
      filter.tags.$all = searchParams.get('includeTags')!.split(',');
    }
    if (searchParams.get('excludeTags')) {
      filter.tags.$not = { $in: searchParams.get('excludeTags')!.split(',') };
    }
  }

  // Fetch from service
  const docs = await service.getAllByFilter(filter);
  return NextResponse.json(docs);
} 