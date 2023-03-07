import { Container } from './styles'

export function Logo({ size }) {
  return (
    <Container>
      <svg width={size} height={size} fill="none" viewBox="0 0 44 48">
        <path
          fill="#065E7C"
          d="M22.032.217l21.403 11.875v23.75L22.032 47.719.629 35.843V12.092L22.032.217z"
        />
      </svg>
    </Container>
  )
}
