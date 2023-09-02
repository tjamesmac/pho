import { getPhotoStore, getStore } from "@/store";

const getPath = (url: string) => new URLSearchParams(new URL(url).search).get('path');


export async function GET(req: Request) {
  const path = getPath(req.url);

  if (!path) throw new Error('no path detected')

  console.log(path, 'what is this id!')

  const photo = getPhotoStore(path)
  // if (!photos) return NextResponse.json({ error: 'no photo found' })
  return new Response(photo)
}
