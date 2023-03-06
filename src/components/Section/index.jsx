import { Container } from './styles'
import { Slider } from '../Slider'

export function Section({ category, products }) {
  return (
    <Container>
      <h2>{category}</h2>

      <Slider products={products} />
    </Container>
  )
}
