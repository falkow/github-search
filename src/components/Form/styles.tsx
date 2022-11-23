import styled from 'styled-components';

const Container = styled.div`
  max-width: 620px;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 20px;
  }
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
  width: 100%;
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 5px 0;
  }
`;

const InputContainer = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr auto;
  padding-top: 15px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    padding: 5px 0;
  }
`;

const InputLabel = styled.label`
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: 5px;
  }
`;

const Small = styled.small`
  display: block;
  grid-area: 2 /2/-1/-1;
  width: 100%;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.warning};
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`;

const Select = styled.select`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.inputColor};
  border-radius: ${({ theme }) => theme.border};
  border: none;
  transition: border-color 0.25s;
  font-size: ${({ theme }) => theme.font.size.small};

  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 5px;
  }
`;

const Option = styled.option``;

const Title = styled.h1`
  padding: 10px 0;
  text-align: center;
  line-height: 1.2;
`;

const Description = styled.p`
  padding: 10px 90px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10px;
    text-align: center;
  }
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
