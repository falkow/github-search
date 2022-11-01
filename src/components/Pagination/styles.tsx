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
  border-radius: ${({ theme }) => theme.border};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.font.weigth.semiBold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export { Nav, List, Item, Link };
