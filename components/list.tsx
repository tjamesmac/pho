import { getFiles } from "@/app/store";
import Link from "next/link";

export function List() {
  // @todo - action or something here to get files
  const files = getFiles();

  return (
    <div>
      <h1 className="text-5xl">All my photos!</h1>
      {files.map(([id, { name }]) => (
        <li key={id}>
          <Link href={`list/${id}`}><span>{"Here's photos >>>"}</span><span className="text-sky-600">{` ${name}`}</span></Link>
        </li>
      ))}
    </div>
  );
}
