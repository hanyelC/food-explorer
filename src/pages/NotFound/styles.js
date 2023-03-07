import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;

  & > main {
    & > h1 {
      font-family: ${({ theme }) => theme.FF.tertiary};
      color: ${({ theme }) => theme.colors.text.quaternary};
      font-weight: 700;
      font-size: 12rem;
    }

    & > p {
      font-family: ${({ theme }) => theme.FF.primary};
      color: ${({ theme }) => theme.colors.text.secondary};
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.8rem;
      margin-bottom: 1.6rem;
    }

    & > button {
      background-color: ${({ theme }) => theme.colors.BG.btn.primary};
      font-family: ${({ theme }) => theme.FF.primary};
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1.6rem;
      border-radius: 6px;
    }
  }
`
