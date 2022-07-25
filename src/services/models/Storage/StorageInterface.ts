export interface StorageInterface {
  set: <T = string>(key: string, value: T) => void;
  get: <T = string>(key: string) => T;
  remove: (key: string) => void;
  getStorage: () => Storage;
}
