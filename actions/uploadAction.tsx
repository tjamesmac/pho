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

  // @todo - I think I'm only getting one file from the form instead of all of them
  // loop through them and build them up
  const photos = form.getAll("photo") ?? [];
  console.info(photos, 'photos from form')
  console.info(form, 'photos from form')
  // @todo - string cast temporary
  const name = form.get("name") ?? "Uh oh no name!" as string
  // got my photo and now I can send it off!
  console.log('adding photos for: ', name)
  const { id } = addPhotos(name as string, photos);


  // @todo - add the cache thing here!
  // revalidatePath(`/api`)
  revalidatePath(`/list/[id]`)
  redirect(`/list/${id}`);
}
