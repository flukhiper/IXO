import { NextRequest, NextResponse } from 'next/server';
import { CharacterService } from '@/services/CharacterService';

const service = new CharacterService();

// GET /api/characters/[id] - Get a character by ID
export async function GET (
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const character = await service.getById(params.id);
  if (!character) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(character);
}

// PATCH /api/characters/[id] - Update a character
export async function PATCH (
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const update = await req.json();
  const updated = await service.update(params.id, update);
  return NextResponse.json(updated);
}

// DELETE /api/characters/[id] - Delete a character
export async function DELETE (
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await service.delete(params.id);
  return NextResponse.json({ success: true });
} 