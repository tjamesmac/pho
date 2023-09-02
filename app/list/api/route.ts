import { getStore } from "@/store";
import { NextResponse } from 'next/server'

export async function GET(req: Request, context) {
  const url = new URL(req.url)
  const id = new URLSearchParams(url.search).get('id');
  console.log(id, 'what is this id!')
  const photos = getStore(id)
  if (!photos) return NextResponse.json({ error: 'no photo found' })
  return NextResponse.json(photos)
}
