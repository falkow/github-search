import styled from 'styled-components';

const Nav = styled.nav`
  margin: 15px 0;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  text-decoration: none;
  list-style: none;
  margin: 0 10px;
`;
const Link = styled.a`
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  color: #ffffffde;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
`;

export { Nav, List, Item, Link };
