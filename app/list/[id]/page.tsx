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

  return (
    <>
      <h1>Hello list york! - {params.id}</h1>
      <br />
      <ul>
        {photos.photos.map((photo: string) => (
          <li key={`${params.id}-${photo}`}>{photo}</li>
        ))}
      </ul>
    </>
  );
}
