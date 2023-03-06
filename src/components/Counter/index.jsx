import { FiPlus, FiMinus } from 'react-icons/fi'

import { Container } from './styles'

export function Counter({ handleDecrease, handleIncrease, quantity }) {
  return (
    <Container>
      <button type="button" onClick={handleDecrease} disabled={quantity === 1}>
        <FiMinus weight="bold" />
      </button>

      <span>{quantity.toString().padStart(2, '0')}</span>

      <button type="button" onClick={handleIncrease}>
        <FiPlus weight="bold" />
      </button>
    </Container>
  )
}
