import { Upload } from "./upload";
import { List } from "./list";

export function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List />
      <Upload />
    </main>
  );
}
