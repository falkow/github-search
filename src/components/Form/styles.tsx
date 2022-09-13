import styled from 'styled-components';

const Container = styled.div`
  width: 480px;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #309975;

  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  margin-top: 15px;
  &:hover {
    border-color: #646cff;
  }
`;

const Input = styled.input`
  width: 55%;
  border-radius: 8px;
  text-align: center;
  border: none;
  background-color: #454d66;
`;
const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0;
`;
const InputLabel = styled.label`
  width: 20%;
  text-align: end;
`;
const Small = styled.small`
  display: block;
  text-align: center;
  width: 100%;
  color: #ffffffde;
`;
const Select = styled.select`
  text-align: center;
  border-radius: 8px;
  width: 55%;
`;
const Option = styled.option``;
const Title = styled.h1`
  padding: 10px 0;
`;
const Description = styled.p`
  padding: 10px 0;
`;

export {
  Form,
  Container,
  Button,
  Input,
  InputContainer,
  InputLabel,
  Small,
  Select,
  Option,
  Title,
  Description,
};
