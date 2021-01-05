import React from 'react'
import { useRecoilState } from 'recoil'

import { FormStatusBase } from '@/presentation/components'
import { signUpState } from '@/presentation/pages/signup/components'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(signUpState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
