const _store = new Map([
  ["one", { photos: ["one", "two"] }],
  ["two", { photos: ["three", "four"] }],
]);

const store = () => _store;

export const getFiles = () => Array.from(store().entries());

// @todo - get like a single store
export const getStore = (key: string) => store().get(key);
