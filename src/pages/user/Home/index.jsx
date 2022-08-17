import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { Section } from '../../../components/Section'
import { ProductCard } from '../../../components/ProductCard'
import { Banner } from '../../../components/Banner'

import im from '../../../assets/Mask group.png'

import { Container } from './styles'

export function Home() {

  const products = [
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Outra coisa Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 49.97
    },
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 100.97
    },
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 49.97
    },
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 49.97
    },
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 49.97
    },
    {
      id: Math.ceil(Math.random() * 1E9).toString(16),
      img: im,
      title: 'Salada Ravanello',
      description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      price: 597
    }
  ]
  return (
    <Container>
      <Header />

      <Banner />

      <Section
        category={'Pratos principais'}
        products={products}
      />

      <Section
        category={'Sobremesa'}
        products={products}
      />

      <Footer />
    </Container>
  )
}