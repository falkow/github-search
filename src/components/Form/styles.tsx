import styled from 'styled-components';

const Container = styled.div`
  width: 720px;
  margin-top: 50px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.formColor};
  padding: 10px;
  border-radius: ${({ theme }) => theme.border};
`;

const Button = styled.button`
  border-radius: ${({ theme }) => theme.border};
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.font.weigth.semiBold};
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: border-color 0.25s;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderColor};
  }
`;

const Input = styled.input`
  width: 55%;
  border-radius: ${({ theme }) => theme.border};
  text-align: center;
  border: 1px solid transparent;
  transition: border-color 0.25s;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.small};
  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
  }

  /* &[value='*'] {
    background-color: ${({ theme }) => theme.colors.inputColor};
  }
  &:-internal-autofill-selected {
    background-color: ${({ theme }) => theme.colors.inputColor} !important;
  } */
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
  color: ${({ theme }) => theme.colors.white};
`;

const Select = styled.select`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: ${({ theme }) => theme.border};
  width: 55%;
  border: none;
  transition: border-color 0.25s;
  font-size: ${({ theme }) => theme.font.size.small};

  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
  }
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
