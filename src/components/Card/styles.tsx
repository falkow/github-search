import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: ${({ theme }) => theme.border};
  padding: 10px;
  margin: 10px 0;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  padding-left: 5px;
  flex-basis: 50%;

  & .modal {
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
        border-color: ${({ theme }) => theme.colors.blue};
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
  padding-right: 5px;
`;
const Link = styled.a`
  font-weight: ${({ theme }) => theme.font.weigth.semiBold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.linkColor};
  }
`;
const Button = styled.div`
  padding: 5px;
`;

export { CardContainer, InfoContainer, Description, Link, Button };
