import React from 'react'
import { useRecoilValue } from 'recoil'

import { FormStatusBase } from '@/presentation/components'
import { signUpState } from '@/presentation/pages/signup/components'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(signUpState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
