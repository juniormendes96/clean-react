import { GetStorage, SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements GetStorage, SetStorage {
  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }

  set (key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
