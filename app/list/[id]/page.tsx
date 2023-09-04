import { getStore } from "@/app/store";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

// // Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   console.log('generating static params')
//   const res = getFiles()
//   console.log(res, 'what is this?')
//
//   return res.map((name) => ({
//     id: name,
//   }))
// }

async function getPhotos(id: string) {
  const photos = await getStore(id);

  console.log(photos);

  // if (!photos) throw new Error('failed to get photos')

  return photos;
}

export default async function Page({ params }: PageProps) {
  const photos = await getPhotos(params.id) as { name: string, paths: string[] }

  console.log(photos, "what are these names and paths");

  const name = photos?.name ?? "no name!";
  const paths = photos?.paths ?? [];

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl">{name}</h1>
        <Link href="/">go home</Link>
        <br />
        {paths.length > 0 && (
          <ul>
            {paths.map((path: string) => {
              console.log(path, "what am i!");
              return (
                <li key={`${params.id}-${path}`}>
                  <h2 className="text-2xl">test</h2>
                  {/* next/image needs to be enabled in the config and needs width and height  */}
                  {/* eslint-disable-next-line  */}
                  <img
                    src={`/list/${path}/api`}
                    alt="test"
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
