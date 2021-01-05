import React from 'react'
import { useRecoilState } from 'recoil'

import { InputBase } from '@/presentation/components'
import { loginState } from '@/presentation/pages/login/components'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Login: React.FC<Props> = ({ type, name, placeholder }: Props) => {
  const [state, setState] = useRecoilState(loginState)

  return (
    <InputBase type={type} name={name} placeholder={placeholder} state={state} setState={setState} />
  )
}

export default Login
