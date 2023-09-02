
type StoreId = string
type StoreValue = { photos: string[] | FormDataEntryValue[], name: string }

const _store = new Map<StoreId, StoreValue>();
// _store.set('two', { photos: ["one", "two"], name: 'yay!' })
// _store.set('one', { photos: ["three", "four"], name: 'woo!' })

const store = () => _store;

export const getFiles = () => Array.from(store().entries());
export const setFiles = (id: string, { photos, name }: StoreValue) => {
  console.log('am i setting stuff now!')
  store().set(id, { photos: Array.isArray(photos) ? photos : [photos], name })
}


// @todo - get like a single store
export const getStore = (key: string) => {
  console.log(_store, 'this is the store!')
  return store().get(key)
}
