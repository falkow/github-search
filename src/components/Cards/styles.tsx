import styled from 'styled-components';

const ResultsContainer = styled.div`
  margin-top: 20px;
`;
const Title = styled.h2`
  text-align: center;
`;
const Input = styled.input`
  border-radius: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.small};

  /* &:active {
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
  } */
`;
const Label = styled.label`
  padding-right: 5px;
`;
const RecordsInputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export { ResultsContainer, Title, Input, Label, RecordsInputContainer };
