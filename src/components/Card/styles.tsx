import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #825d50;
  border-radius: 10px;
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
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.3em 0.6em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
      &:hover {
        border-color: #646cff;
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
  font-weight: 500;
  color: #ffffffde;
  text-decoration: none;
  &:hover {
    color: #242424;
  }
`;
const Button = styled.div`
  padding: 5px;
`;

export { CardContainer, InfoContainer, Description, Link, Button };
