import { StorageInterface } from '../../services/models/Storage/StorageInterface';

export class Storage implements StorageInterface {
  private PREFIX = '@Pass';

  private constructorKey(key: string) {
    return `${this.PREFIX}:${key}`;
  }
  public set<T = string>(key: string, value: T) {
    sessionStorage.setItem(this.constructorKey(key), JSON.stringify(value));
  }
  public get<T = string>(key: string) {
    const value = sessionStorage.getItem(this.constructorKey(key));
    return (value ? JSON.parse(value) : value) as T;
  }
  public remove(key: string) {
    sessionStorage.removeItem(this.constructorKey(key));
  }
  public clear() {
    sessionStorage.clear();
  }
  public getStorage() {
    return sessionStorage;
  }
}
