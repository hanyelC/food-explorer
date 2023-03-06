import { FiSearch } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import signOutSVG from '../../assets/signOut.svg'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { Container, Wrapper, Admin } from './styles'

export function Header() {
  const { signOut, user } = useAuth()

  const handleSignOut = () => {
    signOut()
  }

  const isAdmin = user?.admin

  console.log(isAdmin)

  return (
    <Container>
      <Wrapper>
        <div>
          <Logo size={30} />
          <h2>
            food explorer
            {isAdmin && <Admin>admin</Admin>}
          </h2>
        </div>

        {!isAdmin && <button>Meus favoritos</button>}

        <Input icon={FiSearch} placeholder="Busque pelas opções de pratos" />

        {isAdmin ? (
          <Button>Novo Prato</Button>
        ) : (
          <Button>Meu pedido (0)</Button>
        )}

        <button onClick={handleSignOut}>
          <img src={signOutSVG} alt="sign out" />
        </button>
      </Wrapper>
    </Container>
  )
}
