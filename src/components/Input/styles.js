import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 1.4rem;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.BG.tertiary};

  border-radius: 10px;

  padding: 1.2rem 1.4rem;

  border: 1px solid transparent;

  & > input {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;

    background-color: transparent;
    border: none;
    width: 100%;

    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.FF.primary};
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  & > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus-within {
    border: 1px solid #fff;
  }
`
