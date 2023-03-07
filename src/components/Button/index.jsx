import { Container } from './styles'

export function Button({ children, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  )
}
