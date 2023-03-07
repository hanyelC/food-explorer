import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  margin-top: 4rem;
  margin-bottom: 2.4rem;

  background-color: transparent;

  font-family: ${({ theme }) => theme.FF.secondary};
  color: ${({ theme }) => theme.colors.text.fifth};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.4;
`
