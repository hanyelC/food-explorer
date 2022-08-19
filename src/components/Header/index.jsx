import { FiSearch } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import signOutSVG from '../../assets/signOut.svg'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { Container, Wrapper } from './styles'

export function Header() {
  const { signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <Wrapper>
        <div>
          <Logo size={30} />
          <h2>food explorer</h2>
        </div>

        <button>Meus favoritos</button>

        <Input
          icon={FiSearch}
          placeholder='Busque pelas opções de pratos'
        />

        <Button>
          {`Meu pedido (0)`}
        </Button>

        <button onClick={handleSignOut}>
          <img src={signOutSVG} alt="sign out" />
        </button>
      </Wrapper>

    </Container>
  )
}
