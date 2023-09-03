
type StoreId = string
type StoreValue = { name: string, paths: string[] }

const _store = new Map<StoreId, StoreValue>();
const photo_store = new Map<StoreId, Blob>();

export const getFiles = () => Array.from(_store.entries());

export const setFiles = async (id: string, { photos, name }: StoreValue) => {
  console.log('starting setFiles')
  const paths: string[] = [];

  const photoArr = Array.isArray(photos) ? photos : [photos];


  photoArr.forEach((photo) => {
    const id = crypto.randomUUID();
    console.info('>>>>', id, 'setting id')
    paths.push(id)
    photo_store.set(id, photo);
  })

  return new Promise((res) => res(_store.set(id, { name, paths })))
}


// @todo - get like a single store
export const getStore = async (key: string) => {
  console.info(`getStore call - ${key}`)
  return new Promise((res) => res(_store.get(key)))
}

export const getPhotoStore = async (key: string) => {
  console.info(`getPhotoStore call - ${key}`)
  return new Promise((res) => res(photo_store.get(key)))
}
