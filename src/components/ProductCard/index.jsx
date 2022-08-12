// [] finish the component

import { Container, Wrapper } from './styles'

export function ProductCard({ img, title, description, price }) {
  return (
    <Container>
      <span>Heart</span>
      <Wrapper>
        <img src={img} />
        <h3>{title} {'>'} </h3>
        <p>{description}</p>
        <span>R$ {price.toString().replace('.', ',')}</span>
        <div>- 01 + button</div>
      </Wrapper>

    </Container>
  )
}
