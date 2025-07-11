import { NextRequest, NextResponse } from 'next/server';
import { CharacterService } from '@/services/CharacterService';

const service = new CharacterService();

// GET /api/characters - List all characters
export async function GET () {
  // Optionally: add filtering, pagination, etc.
  const characters = await service.getAll();
  return NextResponse.json(characters);
}

// POST /api/characters - Create a new character
export async function POST (req: NextRequest) {
  const data = await req.json();
  // TODO: Add validation here!
  const created = await service.create(data);
  return NextResponse.json(created, { status: 201 });
} 