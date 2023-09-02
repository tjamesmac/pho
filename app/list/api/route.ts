import { getStore } from "@/store";
import { NextResponse } from 'next/server'

const getId = (url: string) => new URLSearchParams(new URL(url).search).get('id');


export async function GET(req: Request, context) {
  const id = getId(req.url);

  console.log(id, 'what is this id!')

  const photos = getStore(id)
  if (!photos) return NextResponse.json({ error: 'no photo found' })
  return NextResponse.json(photos)
}
