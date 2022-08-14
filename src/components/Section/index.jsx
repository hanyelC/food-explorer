import { Container } from './styles'
import { ProductCard } from '../ProductCard'
import im from '../../assets/Mask group.png'

export function Section() {
  return (
    <Container>
      <ProductCard
        img={im}
        title={'Salada Ravanello'}
        description={'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'}
        price={49.97}
      />
    </Container>
  )
}