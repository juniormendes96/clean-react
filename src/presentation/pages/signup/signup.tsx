import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './signup-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { LoginHeader, Input, FormStatus, Footer } from '@/presentation/components'

const SignUp: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state: {} }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button className={Styles.submit} type="submit">Entrar</button>
          <Link to="/login" className={Styles.link}>Voltar para o login</Link>
          <FormStatus/>
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
