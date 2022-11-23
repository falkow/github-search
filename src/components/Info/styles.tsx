import styled from 'styled-components';

const InformationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: ${({ theme }) => theme.border};
  padding: 10px;
  margin: 10px 0;
`;

export { InformationCard };
