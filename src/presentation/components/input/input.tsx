import React, { useRef } from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  state: any
  setState: any
}

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  return (
    <div
      data-testid={`${props.name}-wrap`}
      data-status={error ? 'invalid' : 'valid'}
      className={Styles.inputWrap}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder="&nbsp;"
        data-testid={props.name}
        readOnly
        onFocus={event => (event.target.readOnly = false)}
        onChange={event => setState({ ...state, [event.target.name]: event.target.value })}
      />
      <label
        data-testid={`${props.name}-label`}
        onClick={() => inputRef.current.focus()}
        title={error}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
