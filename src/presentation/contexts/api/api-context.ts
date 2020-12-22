import { AccountModel } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  getCurrentAccount?: () => AccountModel
  setCurrentAccount?: (account: AccountModel) => void
}

export default createContext<Props>(null)
