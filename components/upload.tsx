import { uploadAction } from "@/actions/uploadAction";

// @todo - replace this with the shadcn one
const Button = () => (
  <button className="border-white border-2 p-2 rounded" type="submit">
    Upload!
  </button>
);

export function Upload() {
  return (
    <form action={uploadAction}>
      <input type="text" name="name" className="text-black" />
      <br />
      <input type="file" multiple name="photo" accept="*" />
      <Button />
    </form>
  );
}
