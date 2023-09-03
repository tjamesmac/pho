import { getStore, getFiles } from "@/app/store";
import Link from "next/link";
type PageProps = {
  params: {
    id: string;
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  console.log('generating static params')
  const res = getFiles()
  console.log(res, 'what is this?')

  return res.map((name) => ({
    id: name,
  }))
}

async function getPhotos(id: string) {
  const photos = await getStore(id)

  console.log(photos)

  // if (!photos) throw new Error('failed to get photos')

  return photos
}


export default async function Page({ params }: PageProps) {
  const photos = await getPhotos(params.id);

  console.log(photos, 'what are these names and paths')

  if (!photos) return <div>Loading...</div>

  const { name, paths } = photos as { name: string, paths: string[] }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl">{name}</h1>
        <Link href="/">go home</Link>
        <br />
        <ul>
          {paths.map((path: string) => {
            console.log(path, 'what am i!')
            return (
              <li key={`${params.id}-${path}`}>
                <h2 className="text-2xl">{name}</h2>
                {/* next/image needs to be enabled in the config and needs width and height  */}
                <img src={`http://localhost:3000/list/${path}/api`} alt="test" />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
