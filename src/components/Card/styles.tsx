import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 15px;
  grid-template-columns: minmax(200px, 1fr) 3fr;
  grid-template-rows: repeat(2, auto);
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: ${({ theme }) => theme.border};
  padding: 10px;
  margin: 10px 0;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-basis: 50%;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: flex-start;
  }
  &.modal {
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      justify-content: center;
    }
  }

  & .background {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Description = styled.p`
  padding-right: 15px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 100px;
  }
`;
const Link = styled.a`
  font-weight: ${({ theme }) => theme.font.weigth.semiBold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  word-break: break-word;
  &:hover {
    color: ${({ theme }) => theme.colors.linkColor};
  }
`;
const Button = styled.div`
  padding: 5px;
  &.modal {
    &Btn {
      border-radius: ${({ theme }) => theme.border};
      border: 1px solid transparent;
      padding: 0.3em 0.6em;
      font-size: 1em;
      font-weight: ${({ theme }) => theme.font.weigth.semiBold};
      font-family: inherit;
      background-color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
      transition: border-color 0.25s;
      &:hover {
        border-color: ${({ theme }) => theme.colors.borderColor};
      }
    }
    &Container {
      position: absolute;
      width: 300px;
      height: 300px;
      z-index: 5;
      & img {
        width: 100%;
      }
    }
  }
`;

export { CardContainer, InfoContainer, Description, Link, Button };
