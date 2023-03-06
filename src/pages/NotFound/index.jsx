import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <Container>
      <main>
        <h1>404...</h1>
        <p>A página que você requisitou não foi encontrada.</p>
        <button onClick={() => navigate('/')}>RETORNAR À HOME</button>
      </main>
    </Container>
  )
}
