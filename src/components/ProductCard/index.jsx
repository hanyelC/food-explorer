import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

import { Counter } from '../Counter'
import { Button } from '../Button'

import { Container, Wrapper } from './styles'

export function ProductCard({ img, title, description, price }) {
  const [quantity, setQuantity] = useState(1)
  const [favorite, setFavorite] = useState(false)

  const handleFavorite = () => {
    setFavorite(prevState => !prevState)
  }

  const handleDecrease = () => {
    setQuantity(prevState => prevState - 1)
  }

  const handleIncrease = () => {
    setQuantity(prevState => prevState + 1)
  }

  return (
    <Container>
      <FiHeart
        onClick={handleFavorite}
        className={favorite ? 'favorite' : ''}
      />

      <Wrapper>
        <img src={img} />
        <h3>{title} {'>'} </h3>
        <p>{description}</p>
        <span>R$ {price.toString().replace('.', ',')}</span>
        <div>
          <Counter
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={quantity}
          />
          <Button>incluir</Button>
        </div>
      </Wrapper>

    </Container>
  )
}
