import styled from 'styled-components'

export const Container = styled.header`
  padding: 2.8rem 3rem;
  background-color: ${({ theme }) => theme.colors.BG.secondary};

  & > div > div:first-child {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;

    & > h2 {
      position: relative;
      font-size: 2.9rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.FF.primary};
      inline-size: max-content;
    }
  }

  & > div > button:nth-child(2) {
    background-color: transparent;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    font-family: ${({ theme }) => theme.FF.primary};
    border-radius: 10px;
    white-space: nowrap;
  }

  & > div > button:nth-last-child(2) {
    white-space: nowrap;
    width: max-content;
  }

  & > div > button:nth-last-child(1) {
    background-color: transparent;
  }
`

export const Wrapper = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  margin: 0 auto;

  font-family: ${({ theme }) => theme.FF.primary};

  @media (max-width: 1000px) {
    flex-wrap: wrap;

    & > div:nth-child(3) {
      order: 5;
    }
  }
`

export const Admin = styled.span`
  position: absolute;
  right: 0;
  bottom: -1.2rem;

  font-size: 1.2rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FF.primary};
  color: ${({ theme }) => theme.colors.text.quaternary};
`
