"use server";
import { setFiles } from "@/store";
import { revalidatePath } from "next/cache";
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
const addPhotos = (name: string, photos: FormDataEntryValue[]) => {
  const id = crypto.randomUUID()

  setFiles(id, { photos, name });
  return { id }
}

// @todo - maybe change the name to like add post
export async function uploadAction(form: FormData) {
  console.log("uploading!");

  const photos = form.get("photo") ?? [];
  // @todo - string cast temporary
  const name = form.get("name") ?? "Uh oh no name!" as string
  // got my photo and now I can send it off!
  console.log('adding photos for: ', name)
  const { id } = addPhotos(name as string, photos);


  // @todo - add the cache thing here!
  revalidatePath(`/list`)
  redirect(`/list/${id}`);
}
