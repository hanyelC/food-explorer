import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  padding: 2rem;
  color: #fff;
  overflow: auto;

  & div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 4.3rem;
    font-weight: 700;
  }

  form {
    width: 90%;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
    gap: 3.2rem;
    border-radius: 1.6rem;

    background-color: ${({ theme }) => theme.colors.BG.secondary};

    & > h2 {
      font-size: 3.2rem;
      font-weight: 500;
      font-family: ${({ theme }) => theme.FF.secondary};
    }
  }

  ${({ isMobile }) => {
    return isMobile
      ? `
      & h1 {
        inline-size: min-content;
      }
      `
      : `
      flex-direction: row;
      justify-content: space-around;
      & > form {
        padding: 6.4rem;
      }
      `
  }}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  & > label {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FF.primary} !important;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  & > input {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FF.primary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    border-radius: 5px;
    padding: 1.2rem 1.4rem;
    width: 100%;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`
