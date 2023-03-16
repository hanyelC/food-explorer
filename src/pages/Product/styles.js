import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 1.6rem;

  & > h2 {
    font-family: ${({ theme }) => theme.FF.secondary};
    color: ${({ theme }) => theme.colors.text.fifth};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 1.4;

    margin-bottom: 3.2rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 768px;
    padding: 0 5.6rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  & > button {
    width: fit-content;

    padding: 1.2rem 2.4rem;

    border-radius: 5px;

    color: #fff;
    font-family: ${({ theme }) => theme.FF.secondary};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    background-color: ${({ theme }) => theme.colors.BG.btn.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.BG.btn.primary};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.BG.btn.disabled};
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const Ingredient = styled.div`
  padding: 0.4rem 0.8rem;

  border-radius: 5px;

  background-color: #192227;

  font-family: ${({ theme }) => theme.FF.secondary};
  color: #fff;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7;
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  flex: 1;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    & > h1 {
      font-family: ${({ theme }) => theme.FF.secondary};
      color: ${({ theme }) => theme.colors.text.fifth};
      font-weight: 500;
      font-size: 4rem;
      line-height: 1.4;
    }

    & > p {
      font-family: ${({ theme }) => theme.FF.secondary};
      color: ${({ theme }) => theme.colors.text.fifth};
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 1.4;
    }

    @media only screen and (max-width: 768px) {
      & > h1,
      & > p {
        align-self: center;
        text-justify: center;
      }
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5rem;

  & > img {
    height: 39rem;
    width: 39rem;
    object-fit: contain;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    & > img {
      height: 26.4rem;
      width: 26.4rem;
      object-fit: contain;
    }
  }
`
