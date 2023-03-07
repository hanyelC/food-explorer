import { useNavigate } from 'react-router-dom'

import { CaretLeft } from '../Icons/CaretLeft'

import { Container } from './styles'

export function BackButton() {
  const navigate = useNavigate()

  const handleNavigateBack = () => navigate(-1)

  return (
    <Container onClick={handleNavigateBack}>
      <CaretLeft /> voltar
    </Container>
  )
}
