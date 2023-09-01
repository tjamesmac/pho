import { getFiles, getStore } from "@/store";

export async function generateStaticParams() {
  const ids = getFiles();

  console.log("generating static params", ids);

  return ids.map(([id]) => ({
    id,
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const photos = getStore(params.id);
  if (!photos) throw new Error("make this a redirect");

  console.log('photos >>>>', photos)

  return (
    <>
      <h1>Hello list york! - {photos.name}</h1>
      <br />
      <ul>
        {photos.photos.map((photo: string) => (
          <li key={`${params.id}-${photo.name}`}>{photo.name || photo}</li>
        ))}
      </ul>
    </>
  );
}
