import styled from 'styled-components'

export const Container = styled.div`
  max-width: 30rem;
  padding: 5.6rem 4rem 4rem 4rem;
  position: relative;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.6rem;
    background-color: transparent;
  }

  > button:focus {
    border-color: transparent;
  }

  > button:focus svg {
    stroke: #82F3FF;
  }

  .favorite {
    fill: #92000E;
    stroke: #92000E;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > img {
    width: 17.6rem;
    height: 17.6rem;
  }

  > h3 {
    font-size:  2.4rem;
    font-weight: 700;
    line-height: 3.4rem;
    font-family: ${({ theme }) => theme.FF.secondary};
    inline-size: max-content;
  }

  > p {
    font-size:  1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    font-family: ${({ theme }) => theme.FF.primary};
    text-align: justify;
  }

  > span {
    font-size:  3.2rem;
    font-weight: 400;
    line-height: 5.1rem;
    font-family: ${({ theme }) => theme.FF.primary};
    color: ${({ theme }) => theme.colors.text.quaternary};
  }

  & > div:last-child {
   display: flex;
   gap: 1.6rem;
  }
`
