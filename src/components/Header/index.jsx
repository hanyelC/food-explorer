import { FiSearch } from 'react-icons/fi'

import signOut from '../../assets/signOut.svg'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { Container, Wrapper } from './styles'

export function Header() {
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

        <button onClick={() => console.log('Sign Out')}>
          <img src={signOut} alt="" />

        </button>
      </Wrapper>

    </Container>
  )
}
