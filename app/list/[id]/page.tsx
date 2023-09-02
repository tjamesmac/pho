import Image from "next/image";
// import { getFiles, getStore } from "@/store";

// export async function generateStaticParams() {
//   const ids = getFiles();

//   console.log("static params", ids);

//   return ids.map(([id]) => ({
//     id,
//   }));
// }

type PageProps = {
  params: {
    id: string;
  };
}

async function getPhotos(id: string) {
  const res = await fetch(`http://localhost:3000/list/api?id=${id}`)

  if (!res.ok) throw new Error('failed to get photos')

  return res.json()
}


export default async function Page({ params }: PageProps) {
  const photos = await getPhotos(params.id);
  console.log('photos >>>>', photos)

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl">{photos.name}</h1>
        <br />
        <ul>
          {photos.photos.map((photo) => {
            console.log(photo, 'what am i!')
            const url = URL.createObjectURL(photo);
            console.log(url, 'what does this look like')
            return (
              <li key={`${params.id}-${photo.name}`}>
                <h2 className="text-2xl">{photo.name}</h2>
                <Image src={url} alt="test" width={500} height={500} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
