import * as S from './styles';
import { ErrorMessageType } from '../../types';

export const ErrorMessage = ({ message }: ErrorMessageType) => (
  <S.ErrorContainer>{message}</S.ErrorContainer>
);
