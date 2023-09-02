
type StoreId = string
type StoreValue = { name: string, paths: string[] }

const _store = new Map<StoreId, StoreValue>();
const photo_store = new Map<StoreId, Blob>();

const store = () => _store;

export const getFiles = () => Array.from(store().entries());

export const setFiles = (id: string, { photos, name }: StoreValue) => {
  console.log('am i setting stuff now!')
  const paths: string[] = [];

  const photoArr = Array.isArray(photos) ? photos : [photos];

  photoArr.forEach((photo) => {
    const id = crypto.randomUUID();
    console.log(id, 'setting store for this!')
    paths.push(id)
    photo_store.set(id, photo);
  })

  store().set(id, { name, paths })
}


// @todo - get like a single store
export const getStore = (key: string) => {
  console.log(_store, 'this is the store!')
  return store().get(key)
}

export const getPhotoStore = (key: string) => {
  console.log(photo_store, 'this is the store!')
  return photo_store.get(key)
}
