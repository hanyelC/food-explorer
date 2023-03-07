import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  & > h2 {
    font-family: ${({ theme }) => theme.FF.secondary};
    color: ${({ theme }) => theme.colors.text.fifth};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 1.4;

    margin-bottom: 3.2rem;
  }
`

export const BackButton = styled.button`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & > div {
    display: flex;
    gap: 3.2rem;

    &:first-child {
      & > div:first-child {
        width: fit-content;
        white-space: nowrap;
      }
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  & > label {
    font-family: ${({ theme }) => theme.FF.primary};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
  }

  & > textarea {
    background-color: ${({ theme }) => theme.colors.BG.fifth};

    padding: 1.4rem;

    width: 100%;
    height: 17.2rem;

    border-radius: 8px;

    color: #fff;
    font-family: ${({ theme }) => theme.FF.primary};
    font-weight: 400;
    font-size: 1.6rem;

    border-color: transparent;
    appearance: none;
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.tertiary};
    }
  }
`

export const InputBackground = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  height: 4.8rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.BG.fifth};

  padding: 1.4rem 1.6rem;

  border-radius: 8px;

  &:focus-within {
    outline: #fff solid 1px;
  }

  & > input {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1;

    background-color: transparent;
    border: none;
    width: 100%;

    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.FF.primary};
  }
`

export const SubmitButton = styled.button`
  width: fit-content;

  padding: 1.2rem 2.4rem;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.BG.btn.secondary};

  color: #fff;
  font-family: ${({ theme }) => theme.FF.secondary};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.colors.BG.btn.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.BG.btn.disabled};
  }
`
