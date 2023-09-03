import { getPhotoStore } from "@/app/store";
import { NextResponse } from "next/server";

// const getPath = (url: string) => new URLSearchParams(new URL(url).search).get('path');


export async function GET(req: Request, context) {
  const { id } = context.params;

  if (!id) throw new Error('no path detected')

  console.log(id, 'what is this id!')

  const photo = await getPhotoStore(id)

  if (!photo) return NextResponse.json({ error: 'no photo found' })
  return new Response(photo)
}
