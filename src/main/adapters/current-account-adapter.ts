import { makeLocalStorageAdapter } from './../factories/cache'
import { AccountModel } from '@/domain/models'

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  makeLocalStorageAdapter().set('account', account)
}
