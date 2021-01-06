import React from 'react'
import { useRecoilValue } from 'recoil'

import { FormStatusBase } from '@/presentation/components'
import { loginState } from '@/presentation/pages/login/components'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(loginState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
