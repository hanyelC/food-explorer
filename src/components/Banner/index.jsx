import fruitsImg from '../../assets/fruits.png'

import { Container, Wrapper, ImageWrapper } from './styles'

export function Banner() {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={fruitsImg} alt="fruits" />
        </ImageWrapper>
        <div>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Wrapper>
    </Container>
  )
}
