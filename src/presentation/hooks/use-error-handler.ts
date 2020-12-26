import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts'
import { AccessDeniedError } from '@/domain/errors'

type CallbackType = (error: Error) => void
type ResultType = CallbackType

export const useErrorHandler = (callback: CallbackType): ResultType => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()

  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      setCurrentAccount(undefined)
      history.replace('/login')
    } else {
      callback(error)
    }
  }
}
