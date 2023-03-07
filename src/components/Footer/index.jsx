import { Logo } from '../Logo'

import { Container, Wrapper } from './styles'

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Logo size={30} />
          <p>food explorer</p>
        </div>
        <span>© 2022 - Todos os direitos reservados.</span>
      </Wrapper>
    </Container>
  )
}
