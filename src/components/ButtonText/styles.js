import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FF.secondary};
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`
