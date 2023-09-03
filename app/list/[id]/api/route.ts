import { getPhotoStore, StoreValue } from "@/app/store";
import { NextResponse } from "next/server";

// const getPath = (url: string) => new URLSearchParams(new URL(url).search).get('path');


export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  if (!id) throw new Error('no path detected')

  console.log(id, 'what is this id!')

  const photo = await getPhotoStore(id)

  if (!photo) return NextResponse.json({ error: 'no photo found' })
  // @todo - fix this i want to deploy
  return new Response(photo as BodyInit)
}
