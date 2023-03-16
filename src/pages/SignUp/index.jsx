import { useForm } from 'react-hook-form'
import { isMobile } from 'react-device-detect'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { ButtonText } from '../../components/ButtonText'

import { Container, InputWrapper } from './styles'

export function SignUp() {
  const { register, handleSubmit } = useForm()

  const { signUp } = useAuth()

  const navigate = useNavigate()

  const handleSignUp = async (data) => {
    await signUp(data, () => navigate('/'))
  }

  return (
    <Container isMobile={isMobile}>
      <div>
        <Logo size={50} />
        <h1>food explorer</h1>
      </div>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <h2>Crie sua conta</h2>

        <InputWrapper>
          <label htmlFor="name">Seu nome</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder={'Exemplo: Maria da Silva'}
          />
        </InputWrapper>

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

        <InputWrapper>
          <label htmlFor="passwordConfirm">Insira a senha mais uma vez</label>
          <input
            id="passwordConfirm"
            type="password"
            {...register('passwordConfirm')}
            placeholder={'No mínimo 6 caracteres'}
          />
        </InputWrapper>

        <Button type="submit">Criar conta</Button>

        <ButtonText to="/">Já tenho uma conta</ButtonText>
      </form>
    </Container>
  )
}
