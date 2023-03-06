import { Container } from './styles'

export function ButtonText({ children, to }) {
  return <Container to={to}>{children}</Container>
}
