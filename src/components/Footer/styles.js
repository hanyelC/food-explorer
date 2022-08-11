import styled from 'styled-components'

export const Container = styled.footer`
  padding: 2.8rem 3rem;
  background-color: ${({ theme }) => theme.colors.BG.secondary};
`

export const Wrapper = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 3.2rem;
  font-family: ${({ theme }) => theme.FF.primary};

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > p {
      opacity: 0.3;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 2.9rem;
    }

    > div > svg > path {
      opacity: 0.3;
      fill: #fff;
    }
  }

  & > span {
    font-size: 1.4rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FF.tertiary};
  }
`
