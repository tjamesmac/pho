"use server";
import { setFiles } from "@/store";
import { redirect } from "next/navigation";

/*
 * @todo - uploading a file I get this
 *
 * File {
 *   size: 1649362,
 *   type: 'image/jpeg',
 *   name: 'IMG_0838.jpg',
 *   lastModified: 1693247394628
 * } what is this data
 *
 * I would like utils to help breakdown what these mean
 */
// @todo - make this better
const addPhotos = async (name: string, photos: FormDataEntryValue[]): Promise<{ id: string }> => {
  const id = crypto.randomUUID()

  setFiles(id, { photos, name });
  return new Promise((res) => res({ id }));
}

// @todo - maybe change the name to like add post
export async function uploadAction(form: FormData) {
  console.log("uploading!");

  const photos = form.get("photo") ?? [];
  // @todo - string cast temporary
  const name = form.get("name") ?? "Uh oh no name!" as string
  console.log(photos, 'these are my photos');
  console.log(name, 'this is my name')
  // got my photo and now I can send it off!
  const { id } = await addPhotos(name, photos);


  // @todo - add the cache thing here!
  redirect(`/list/${id}`);
}
