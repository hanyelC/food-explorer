import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46.2rem;
  max-width: 30rem;
  padding: 2.4rem;
  position: relative;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  background-color: ${({ theme }) => theme.colors.BG.quaternary};

  border: 1px solid ${({ theme }) => theme.colors.border.primary};

  border-radius: 10px;

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
    stroke: #82f3ff;
  }

  .favorite {
    fill: #92000e;
    stroke: #92000e;
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
    object-fit: contain;

    &:hover {
      cursor: pointer;
    }
  }

  > h3 {
    white-space: nowrap;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.4rem;
    font-family: ${({ theme }) => theme.FF.secondary};

    &:focus {
      opacity: 0.8;
      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      opacity: 0.8;
    }
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    font-family: ${({ theme }) => theme.FF.primary};
    text-align: justify;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > span {
    font-size: 3.2rem;
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
