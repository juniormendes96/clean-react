import { makeLocalStorageAdapter } from './../factories/cache'
import { UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  if (!account?.accessToken) {
    throw new UnexpectedError()
  }
  makeLocalStorageAdapter().set('account', account)
}
