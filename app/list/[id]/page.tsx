type PageProps = {
  params: {
    id: string;
  };
}

async function getPhotos(id: string) {
  const res = await fetch(`http://localhost:3000/list/api?id=${id}`)

  if (!res.ok) throw new Error('failed to get photos')

  const { name, paths } = await res.json()

  // console.log(name, paths);
  // const blobs = [];
  // for (const path of paths) {
  //   const response = await fetch()
  //   blobs.push(await response.blob())
  // }

  return { name, paths }
}


export default async function Page({ params }: PageProps) {
  const { name, paths } = await getPhotos(params.id);

  console.log(name, paths, 'what are these names and blobs')

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-5xl">{name}</h1>
        <br />
        <ul>
          {paths.map((path: string) => {
            console.log(path, 'what am i!')
            return (
              <li key={`${params.id}-${path}`}>
                <h2 className="text-2xl">{name}</h2>
                <img src={`http://localhost:3000/api?path=${path}`} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}
