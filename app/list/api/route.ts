import { getStore } from "@/store";
import { NextResponse } from 'next/server'

const getId = (url: string) => new URLSearchParams(new URL(url).search).get('id');

export async function GET(req: Request) {
  console.info('preparing GET Request for name and paths')
  const id = getId(req.url);

  if (!id) {
    throw new Error(`photo collection ${id} - not found`)
  }

  const photos = await getStore(id)

  if (!photos) return NextResponse.json({ error: 'no photo found' })

  console.info('got names and paths')

  return NextResponse.json(photos)
}
