import { useForm } from 'react-hook-form'
import { isMobile } from 'react-device-detect'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { Container, InputWrapper } from './styles'

export function SignIn() {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Container isMobile={isMobile}>
      <div>
        <Logo size={50} />
        <h1>food explorer</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça login</h2>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            type='text'
            {...register('email')}
            placeholder={'Exemplo: exemplo@exemplo.com.br'}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <input
            id='password'
            type='text'
            {...register('password')}
            placeholder={'No mínimo 6 caracteres'}
          />
        </InputWrapper>

        <Button type='submit'>
          Entrar
        </Button>

        <span>Criar uma conta</span>
      </form>

    </Container>
  )
}