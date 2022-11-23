import styled from 'styled-components';

const Nav = styled.nav`
  margin: 15px 0;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.font.weigth.semiBold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: border-color 0.25s;
`;
const RecordsInputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  border-radius: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.normal};
`;
const Label = styled.label`
  padding-right: 5px;
`;

export { Nav, List, Item, Link, RecordsInputContainer, Input, Label };
