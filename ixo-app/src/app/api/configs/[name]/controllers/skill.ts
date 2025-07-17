import { NextRequest, NextResponse } from 'next/server';
import { SkillConfigService } from '@/services/config/SkillConfigService';

const service = new SkillConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const gameSystemId = searchParams.get('gameSystemId');
  if (!gameSystemId) {
    return NextResponse.json({ error: 'gameSystemId is required' }, { status: 400 });
  }

  // Build filter from SkillGainChoice fields
  const filter: Record<string, null | string | number | Record<string, unknown>> = { gameSystemId };

  if (searchParams.get('skillId')) filter.id = searchParams.get('skillId');
  if (searchParams.get('skillType')) filter.type = searchParams.get('skillType');
  if (searchParams.get('classId')) filter.classId = searchParams.get('classId');
  if (searchParams.get('roleId')) filter.roleId = searchParams.get('roleId');
  if (searchParams.get('tier')) filter.tier = Number(searchParams.get('tier'));
  if (searchParams.get('includeTags') || searchParams.get('excludedTags')) {
    filter.tags = {};
    if (searchParams.get('includeTags')) {
      filter.tags.$all = searchParams.get('includeTags')!.split(',');
    }
    if (searchParams.get('excludedTags')) {
      filter.tags.$not = { $in: searchParams.get('excludedTags')!.split(',') };
    }
  }

  // Fetch from service
  const docs = await service.getAllByFilter(filter);
  return NextResponse.json(docs);
} 