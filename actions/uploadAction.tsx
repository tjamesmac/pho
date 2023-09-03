"use server";
import { setFiles } from "@/app/store";
import { revalidatePath, revalidateTag } from "next/cache";
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
const addPhotos = async (name: string, photos: FormDataEntryValue[]) => {
  const id = crypto.randomUUID()

  await setFiles(id, { photos, name });

  return { id }
}

// @todo - maybe change the name to like add post
export async function uploadAction(form: FormData) {
  console.log("uploading!");

  const photos = form.getAll("photo") ?? [];
  console.info(photos, 'photos from form')
  const name = form.get("name") ?? "Uh oh no name!" as string
  console.log('adding photos for: ', name)
  const { id } = await addPhotos(name as string, photos);

  console.log('what is this id!')


  console.info('redirecting to: ', id)
  revalidatePath(`/list/${id}`);
  redirect(`/list/${id}`);
}
