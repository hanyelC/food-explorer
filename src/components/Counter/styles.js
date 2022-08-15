import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;

  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.FF.primary};

  > button {
    background-color: transparent;
  }
`
