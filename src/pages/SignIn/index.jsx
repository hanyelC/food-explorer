import { useForm } from 'react-hook-form'
import { isMobile } from 'react-device-detect'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { ButtonText } from '../../components/ButtonText'

import { Container, InputWrapper } from './styles'

export function SignIn() {
  const { register, handleSubmit } = useForm()

  const { signIn } = useAuth()

  const handleSignIn = async (data) => {
    await signIn(data)
  }

  return (
    <Container isMobile={isMobile}>
      <div>
        <Logo size={50} />
        <h1>food explorer</h1>
      </div>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <h2>Faça login</h2>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...register('email')}
            placeholder={'Exemplo: exemplo@exemplo.com.br'}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            placeholder={'No mínimo 6 caracteres'}
          />
        </InputWrapper>

        <Button type="submit">Entrar</Button>

        <ButtonText to="/register">Criar uma conta</ButtonText>
      </form>
    </Container>
  )
}
