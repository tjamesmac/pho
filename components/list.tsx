import { getFiles } from "@/store";
import Link from "next/link";

export function List() {
  // @todo - action or something here to get files
  const files = getFiles();

  return (
    <div>
      <h1>All my photos!</h1>
      {files.map(([file]) => (
        <li key={file}>
          <Link href={`list/${file}`}>{`Here's file ${file}`}</Link>
        </li>
      ))}
    </div>
  );
}
