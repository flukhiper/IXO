import { NextResponse } from 'next/server';

export async function POST () {
  // For JWT sessions, just return success.
  return NextResponse.json({ success: true });
} 