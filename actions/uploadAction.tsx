"use server";

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

export async function uploadAction(form: FormData) {
  console.log("uploading!");
  console.log(form, "what is this data");
  console.log(form.get("photo"), "what is this data");

  // got my photo and now I can send it off!

  // @todo add the cache thing here maybe?
}
