import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.BG.btn.primary};
  font-size: 1.4rem;
  width: 100%;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FF.secondary};
  color: ${({ theme }) => theme.colors.text.primary};

  border-radius: 5px;
  padding: 1.2rem 3.2rem;
`
