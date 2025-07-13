import { NextRequest, NextResponse } from 'next/server';
import { SkillConfigService } from '@/services/config/SkillConfigService';

const service = new SkillConfigService();

export async function getHandler (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const gameSystemId = searchParams.get('gameSystemId');
  const type = searchParams.get('type');
  const tier = searchParams.get('tier') || '1';
  const classId = searchParams.get('classId') || undefined;
  const archetypeRoleId = searchParams.get('archetypeRoleId') || undefined;
  
  if (id) {
    const doc = await service.getById(id);
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(doc);
  }
  
  if (!gameSystemId) {
    return NextResponse.json({ error: 'gameSystemId is required' }, { status: 400 });
  }
  
  // Handle different skill types based on parameters
  if (type === 'class') {
    const tierNum = parseInt(tier);
    if (isNaN(tierNum)) {
      return NextResponse.json({ error: 'Invalid tier parameter' }, { status: 400 });
    }
    const docs = await service.getClassSkills(classId, tierNum, gameSystemId);
    return NextResponse.json(docs);
  }
  
  if (type === 'role') {
    const tierNum = parseInt(tier);
    if (isNaN(tierNum)) {
      return NextResponse.json({ error: 'Invalid tier parameter' }, { status: 400 });
    }
    const docs = await service.getRoleSkills(archetypeRoleId, tierNum, gameSystemId);
    return NextResponse.json(docs);
  }
  
  if (type === 'general') {
    const tierNum = parseInt(tier);
    if (isNaN(tierNum)) {
      return NextResponse.json({ error: 'Invalid tier parameter' }, { status: 400 });
    }
    const docs = await service.getGeneralSkills(tierNum, gameSystemId);
    return NextResponse.json(docs);
  }
  
  // Fallback: get all skills for the game system
  const docs = await service.getByGameSystemId(gameSystemId);
  return NextResponse.json(docs);
} 