import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1120px;

  margin-top: 15rem;
  height: 26rem;

  position: relative;

  > div > h1 {
    font-size: 4rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.FF.secondary};
  }

  > div > p {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FF.secondary};
  }
  > div:last-child {
    padding-right: 3rem;
  }

  > div:last-child::before {
    content: '';
    height: 26rem;
    width: 100%;
    position: absolute;
    right: 0;
    z-index: -5;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    top: 0;
    border-radius: 8px;
  }
`

export const ImageWrapper = styled.div`
  > img {
    width: 90vw;
    height: 413px;
    max-width: 657px;
    position: absolute;
    bottom: -13px;
    left: -50px;
    z-index: -1;
  }
`
